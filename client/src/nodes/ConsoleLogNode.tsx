import { Handle, Position, type NodeProps } from 'reactflow';
import styled from 'styled-components';
import { usePipelineStore } from '../store/usePipelineStore';
import { NodeContainer, DeleteButton, NodeHeader } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

const Preview = styled.div`
  font-size: 10px;
  color: var(--text-secondary);
  font-family: 'Courier New', monospace;
  padding: 6px;
  background: var(--bg-input);
  border-radius: 4px;
  margin-top: 6px;
  border-left: 3px solid #00bcd4;
`;

export const ConsoleLogNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { deleteNode } = usePipelineStore();

  return (
    <NodeContainer $borderColor="#00bcd4" $minWidth="160px" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#00bcd4' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>📋</span>
          <span>Console Log</span>
        </div>
      </NodeHeader>

      <div style={{ fontSize: '10px', marginBottom: '4px' }}>Value to log:</div>
      <Handle type="target" position={Position.Left} id="value" style={{ background: '#00bcd4' }} />

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '10px', marginBottom: '6px' }}>{data.error}</div>}

      <Preview className="nodrag">
        console.log(value)
      </Preview>

      <Handle type="target" position={Position.Top} id="flow-in" style={{ background: '#00bcd4' }} />
      <Handle type="source" position={Position.Right} style={{ background: '#00bcd4' }} />
      <Handle type="source" position={Position.Bottom} id="flow-out" style={{ background: '#00bcd4' }} />
    </NodeContainer>
  );
};
