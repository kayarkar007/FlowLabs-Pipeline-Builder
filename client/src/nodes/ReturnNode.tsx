import { Handle, Position, type NodeProps } from 'reactflow';
import { usePipelineStore } from '../store/usePipelineStore';
import { NodeContainer, DeleteButton, NodeHeader } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

export const ReturnNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { deleteNode } = usePipelineStore();

  return (
    <NodeContainer $borderColor="#9c27b0" $minWidth="140px" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#9c27b0', justifyContent: 'center' }}>
        <span>⬅ RETURN</span>
      </NodeHeader>

      <div style={{ fontSize: '10px', marginBottom: '4px' }}>Return value:</div>
      <Handle type="target" position={Position.Left} id="value" style={{ background: '#9c27b0' }} />

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '10px', marginTop: '4px', textAlign: 'center' }}>{data.error}</div>}

      <div style={{ fontSize: '9px', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '8px' }}>
        Exit Function
      </div>

      <Handle type="target" position={Position.Top} id="flow-in" style={{ background: '#9c27b0' }} />
      <Handle type="source" position={Position.Right} style={{ background: '#9c27b0' }} />
      <Handle type="source" position={Position.Bottom} id="flow-out" style={{ background: '#9c27b0' }} />
    </NodeContainer>
  );
};
