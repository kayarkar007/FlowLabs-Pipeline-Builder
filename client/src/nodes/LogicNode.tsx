import { Handle, Position, type NodeProps } from 'reactflow';
import { usePipelineStore } from '../store/usePipelineStore';
import React from 'react';
import { NodeContainer, DeleteButton, NodeHeader, StyledSelect } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

export const LogicNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { setNodes, nodes, deleteNode } = usePipelineStore();
  const [op, setOp] = React.useState(data.op || 'and');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOp = e.target.value;
    setOp(newOp);
    setNodes(
      nodes.map(n =>
        n.id === id ? { ...n, data: { ...n.data, op: newOp, label: `Logic: ${newOp}` } } : n
      )
    );
  };

  return (
    <NodeContainer $borderColor="#e91e63" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#e91e63' }}>
        <span>Boolean Logic</span>
      </NodeHeader>

      <StyledSelect id={`logic-op-${id}`} name="logic-op" className="nodrag" value={op} onChange={handleChange}>
        <option value="and">AND (&&)</option>
        <option value="or">OR (||)</option>
        <option value="not">NOT (!)</option>
      </StyledSelect>

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '10px', marginTop: '4px' }}>{data.error}</div>}

      <Handle type="target" position={Position.Left} id="a" style={{ top: op === 'not' ? '50%' : '30%' }} />
      {op !== 'not' && (
        <>
          <div style={{ position: 'absolute', left: 4, top: '28%', fontSize: 9 }}>A</div>
          <Handle type="target" position={Position.Left} id="b" style={{ top: '70%' }} />
          <div style={{ position: 'absolute', left: 4, top: '68%', fontSize: 9 }}>B</div>
        </>
      )}

      <Handle type="source" position={Position.Right} />
    </NodeContainer>
  );
};
