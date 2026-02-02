import { Handle, Position, type NodeProps } from 'reactflow';
import { usePipelineStore } from '../store/usePipelineStore';
import React from 'react';
import { NodeContainer, DeleteButton, NodeHeader, StyledSelect } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

export const CompareNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { setNodes, nodes, deleteNode } = usePipelineStore();
  const [op, setOp] = React.useState(data.op || 'eq');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOp = e.target.value;
    setOp(newOp);
    setNodes(
      nodes.map(n =>
        n.id === id ? { ...n, data: { ...n.data, op: newOp, label: `Compare: ${newOp}` } } : n
      )
    );
  };

  return (
    <NodeContainer $borderColor="#9c27b0" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#9c27b0' }}>
        <span>Comparison</span>
      </NodeHeader>

      <StyledSelect id={`compare-op-${id}`} name="compare-op" className="nodrag" value={op} onChange={handleChange}>
        <option value="eq">Equals (==)</option>
        <option value="neq">Not Equals (!=)</option>
        <option value="gt">Greater Than (&gt;)</option>
        <option value="lt">Less Than (&lt;)</option>
        <option value="gte">Greater Or Eq (&gt;=)</option>
        <option value="lte">Less Or Eq (&lt;=)</option>
      </StyledSelect>

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '10px', marginTop: '4px' }}>{data.error}</div>}

      <Handle type="target" position={Position.Left} id="a" style={{ top: '30%' }} />
      <div style={{ position: 'absolute', left: 4, top: '28%', fontSize: 9 }}>A</div>

      <Handle type="target" position={Position.Left} id="b" style={{ top: '70%' }} />
      <div style={{ position: 'absolute', left: 4, top: '68%', fontSize: 9 }}>B</div>

      <Handle type="source" position={Position.Right} />
    </NodeContainer>
  );
};
