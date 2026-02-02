import { Handle, Position, type NodeProps } from 'reactflow';
import styled from 'styled-components';
import { usePipelineStore } from '../store/usePipelineStore';
import { NodeContainer, DeleteButton, NodeHeader } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

const HandleLabel = styled.div<{ $side: 'left' | 'right' }>`
  font-size: 10px;
  color: var(--text-secondary);
  position: absolute;
  ${props => props.$side === 'left' ? 'left: 12px;' : 'right: 12px;'}
  white-space: nowrap;
`;

export const WhileLoopNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { deleteNode } = usePipelineStore();

  return (
    <NodeContainer $borderColor="#2196f3" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#2196f3', justifyContent: 'center' }}>
        <span>WHILE</span>
      </NodeHeader>

      <div style={{ height: '60px', position: 'relative', marginTop: '10px' }}>
        {/* Top: Entry Control Flow */}
        <Handle type="target" position={Position.Top} id="flow-in" style={{ background: '#2196f3' }} />

        {/* Left Side: Condition Input */}
        <div style={{ position: 'absolute', top: '20px', left: 0 }}>
          <Handle type="target" position={Position.Left} id="condition" style={{ background: '#aaa' }} />
          <HandleLabel $side="left">Condition</HandleLabel>
        </div>

        {data.error && <div style={{ position: 'absolute', top: '20px', left: '40px', color: 'var(--danger)', fontSize: '8px', zIndex: 10 }}>ERR: {data.error}</div>}

        {/* Right Side: Flow Control */}
        <div style={{ position: 'absolute', top: '10px', right: 0, textAlign: 'right' }}>
          <HandleLabel $side="right" style={{ color: '#2196f3', fontWeight: 'bold' }}>Loop Body</HandleLabel>
          <Handle type="source" position={Position.Right} id="body" style={{ top: '6px', background: '#2196f3' }} />
        </div>

        <div style={{ position: 'absolute', top: '40px', right: 0, textAlign: 'right' }}>
          <HandleLabel $side="right" style={{ color: '#aaa' }}>Exit</HandleLabel>
          <Handle type="source" position={Position.Right} id="exit" style={{ top: '6px', background: '#aaa' }} />
          <Handle type="source" position={Position.Bottom} id="flow-out" style={{ background: '#2196f3' }} />
        </div>
      </div>

    </NodeContainer>
  );
};
