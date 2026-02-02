import { Handle, Position, type NodeProps } from 'reactflow';
import styled from 'styled-components';
import { usePipelineStore } from '../store/usePipelineStore';
import { NodeContainer, DeleteButton, NodeHeader } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

const OutputDisplay = styled.pre`
  background: var(--bg-dark);
  padding: 8px;
  border-radius: 4px;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 12px;
  max-height: 150px;
  overflow: auto;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
  color: #4caf50; /* Terminal Green - works in both themes */
  border: 1px solid var(--border);

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border);
  }
`;

export const OutputNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { deleteNode } = usePipelineStore();

  const formatResult = (res: any) => {
    if (res === undefined) return 'No Output Yet';
    if (res === null) return 'null';
    if (typeof res === 'object') return JSON.stringify(res, null, 2);
    return String(res);
  };

  return (
    <NodeContainer $borderColor="#4caf50" $minWidth="200px" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#4caf50' }}>
        <span>Visual Output</span>
        <span style={{ fontSize: '9px', opacity: 0.7 }}>Terminal 1.0</span>
      </NodeHeader>

      <OutputDisplay className="nodrag">
        {data.result === undefined ? <span style={{ color: '#666', fontStyle: 'italic' }}>Waiting for input...</span> : formatResult(data.result)}
      </OutputDisplay>

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '10px', marginTop: '4px' }}>{data.error}</div>}

      <div style={{ marginTop: '8px', fontSize: '9px', color: '#666', textAlign: 'right' }}>
        Value In
      </div>

      <Handle type="target" id="flow-in" position={Position.Top} style={{ background: '#4caf50', borderRadius: 0, width: '10px' }} />
      <Handle type="target" id="value" position={Position.Left} style={{ background: '#4caf50', width: '8px', height: '8px' }} />
      <Handle type="source" id="flow-out" position={Position.Bottom} style={{ background: '#4caf50', borderRadius: 0, width: '10px' }} />
      <Handle type="source" id="value-out" position={Position.Right} style={{ background: '#4caf50', width: '8px', height: '8px' }} />
    </NodeContainer>
  );
};
