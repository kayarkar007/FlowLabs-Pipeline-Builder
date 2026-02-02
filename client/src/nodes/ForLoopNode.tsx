import { Handle, Position, type NodeProps } from 'reactflow';
import styled from 'styled-components';
import { usePipelineStore } from '../store/usePipelineStore';
import { NodeContainer, DeleteButton, NodeHeader } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

const HandleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
  font-size: 10px;
  position: relative;
  min-height: 18px;
`;

export const ForLoopNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { deleteNode } = usePipelineStore();

  return (
    <NodeContainer $borderColor="#3f51b5" $minWidth="150px" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#3f51b5', justifyContent: 'center' }}>
        <span>FOR LOOP</span>
      </NodeHeader>

      {/* Top Entry */}
      <Handle type="target" position={Position.Top} id="flow-in" style={{ background: '#3f51b5' }} />

      <HandleRow>
        <span>Init Flow</span>
        <Handle type="source" position={Position.Right} id="init" style={{ background: '#4caf50' }} />
      </HandleRow>

      <HandleRow>
        <Handle type="target" position={Position.Left} id="condition" style={{ background: '#aaa' }} />
        <span style={{ marginLeft: '12px' }}>Condition</span>
      </HandleRow>

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '9px', textAlign: 'center' }}>{data.error}</div>}

      <HandleRow style={{ marginTop: '10px' }}>
        <span style={{ color: '#3f51b5', fontWeight: 'bold' }}>Body Flow</span>
        <Handle type="source" position={Position.Right} id="body" style={{ background: '#3f51b5' }} />
      </HandleRow>

      <HandleRow>
        <span style={{ color: '#673ab7' }}>Increment</span>
        <Handle type="source" position={Position.Right} id="increment" style={{ background: '#673ab7' }} />
      </HandleRow>

      <HandleRow style={{ marginTop: '10px' }}>
        <span style={{ color: '#aaa' }}>Exit</span>
        <Handle type="source" position={Position.Right} id="exit" style={{ background: '#aaa' }} />
      </HandleRow>

      <Handle type="source" position={Position.Bottom} id="flow-out" style={{ background: '#3f51b5' }} />
    </NodeContainer>
  );
};
