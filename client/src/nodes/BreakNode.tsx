import { Handle, Position, type NodeProps } from 'reactflow';
import { usePipelineStore } from '../store/usePipelineStore';
import { NodeContainer, DeleteButton, NodeHeader } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

export const BreakNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { deleteNode } = usePipelineStore();

  return (
    <NodeContainer $borderColor="#ff5722" $minWidth="120px" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#ff5722', justifyContent: 'center' }}>
        <span>⛔ BREAK</span>
      </NodeHeader>

      <div style={{ fontSize: '9px', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '4px' }}>
        Exit Loop
      </div>

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '10px', marginTop: '4px', textAlign: 'center' }}>{data.error}</div>}

      <Handle type="target" position={Position.Top} id="flow-in" style={{ background: '#ff5722' }} />
      <Handle type="source" position={Position.Right} style={{ background: '#ff5722' }} />
      <Handle type="source" position={Position.Bottom} id="flow-out" style={{ background: '#ff5722' }} />
    </NodeContainer>
  );
};
