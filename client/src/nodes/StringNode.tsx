import { Handle, Position, type NodeProps } from 'reactflow';
import { usePipelineStore } from '../store/usePipelineStore';
import React from 'react';
import { NodeContainer, DeleteButton, NodeHeader, StyledTextArea } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

export const StringNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { setNodes, nodes, deleteNode } = usePipelineStore();
  const [val, setVal] = React.useState(data.value || '');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newVal = e.target.value;
    setVal(newVal);
    setNodes(
      nodes.map(n =>
        n.id === id ? { ...n, data: { ...n.data, value: newVal, label: `String: "${newVal.substring(0, 10)}..."` } } : n
      )
    );
  };

  return (
    <NodeContainer $borderColor="#e91e63" $minWidth="150px" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#e91e63' }}>
        <span>STRING</span>
      </NodeHeader>
      <StyledTextArea
        id={`string-${id}`}
        name="string-value"
        className="nodrag"
        placeholder="Enter text..."
        value={String(val)}
        onChange={handleChange}
      />

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '10px', marginTop: '4px' }}>{data.error}</div>}

      <div style={{ marginTop: '10px', fontSize: '10px', color: 'var(--text-secondary)' }}>
        Concat In (A + B):
      </div>

      <Handle type="target" position={Position.Left} id="a" style={{ top: '70%', background: '#ff4081' }} />
      <Handle type="target" position={Position.Left} id="b" style={{ top: '85%', background: '#ff4081' }} />

      <Handle type="source" position={Position.Right} style={{ background: '#ff4081' }} />
    </NodeContainer>
  );
};
