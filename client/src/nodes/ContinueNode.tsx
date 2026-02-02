import { Handle, Position, type NodeProps } from 'reactflow';
import { usePipelineStore } from '../store/usePipelineStore';
import { NodeContainer, DeleteButton, NodeHeader } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

export const ContinueNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { deleteNode } = usePipelineStore();

  return (
    <NodeContainer $borderColor="#ffc107" $minWidth="120px" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#ffc107', justifyContent: 'center' }}>
        <span>↻ CONTINUE</span>
      </NodeHeader>

      <div style={{ fontSize: '9px', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '4px' }}>
        Next Iteration
      </div>

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '10px', marginTop: '4px', textAlign: 'center' }}>{data.error}</div>}

      <Handle type="target" position={Position.Top} id="flow-in" style={{ background: '#ffc107' }} />
      <Handle type="source" position={Position.Right} style={{ background: '#ffc107' }} />
      <Handle type="source" position={Position.Bottom} id="flow-out" style={{ background: '#ffc107' }} />
    </NodeContainer>
  );
};
