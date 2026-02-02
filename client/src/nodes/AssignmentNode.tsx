import { Handle, Position, type NodeProps } from 'reactflow';
import { usePipelineStore } from '../store/usePipelineStore';
import React from 'react';
import { NodeContainer, DeleteButton, NodeHeader, StyledInput } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

export const AssignmentNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { setNodes, nodes, deleteNode } = usePipelineStore();
  const [varName, setVarName] = React.useState(data.varName || 'x');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    setVarName(newVal);
    setNodes(
      nodes.map(n =>
        n.id === id ? { ...n, data: { ...n.data, varName: newVal, label: `Assign to ${newVal}` } } : n
      )
    );
  };

  return (
    <NodeContainer $borderColor="#4caf50" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#4caf50', display: 'block', textAlign: 'center' }}>
        ASSIGNMENT
      </NodeHeader>
      <div style={{ fontSize: '10px', marginBottom: '2px' }}>Variable Name:</div>
      <StyledInput id={`assign-var-${id}`} name="assign-var" className="nodrag" value={varName} onChange={handleChange} />

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '10px', marginTop: '4px' }}>{data.error}</div>}

      <Handle type="target" position={Position.Top} id="flow-in" />
      <div style={{ marginTop: '10px', fontSize: '10px' }}>Value In:</div>
      <Handle type="target" position={Position.Left} id="value" style={{ top: '80%' }} />

      <Handle type="source" position={Position.Right} />
      <Handle type="source" position={Position.Bottom} id="flow-out" />
    </NodeContainer>
  );
};
