import { Handle, Position, type NodeProps } from 'reactflow';
import { usePipelineStore } from '../store/usePipelineStore';
import React from 'react';
import { NodeContainer, DeleteButton, NodeHeader, StyledInput } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

export const ObjectNode = ({ id, data }: NodeProps<CommonNodeData>) => {
  const { setNodes, nodes, deleteNode } = usePipelineStore();
  const [keysStr, setKeysStr] = React.useState<string>(String(data.keys || 'name, age'));

  const handleKeysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setKeysStr(val);
    setNodes(
      nodes.map(n =>
        n.id === id ? { ...n, data: { ...n.data, keys: val, label: `Object {${val}}` } } : n
      )
    );
  };

  const keys = keysStr.split(',').map((k: string) => k.trim()).filter((k: string) => k);

  return (
    <NodeContainer $borderColor="#ff5722" $minWidth="160px" $isError={!!data.error}>
      <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

      <NodeHeader style={{ color: '#ff5722' }}>
        <span>OBJECT CREATE</span>
      </NodeHeader>
      <div style={{ fontSize: '9px', marginBottom: '2px' }}>Properties (comma separated):</div>
      <StyledInput id={`obj-keys-${id}`} name="object-keys" className="nodrag" value={keysStr} onChange={handleKeysChange} placeholder="key1, key2" />

      {data.error && <div style={{ color: 'var(--danger)', fontSize: '10px', marginTop: '4px' }}>{data.error}</div>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '5px' }}>
        {keys.map((key: string) => (
          <div key={key} style={{ position: 'relative', fontSize: '10px', height: '14px' }}>
            <Handle
              type="target"
              position={Position.Left}
              id={`val-${key}`}
              style={{ top: '50%', background: '#ff5722' }}
            />
            <span style={{ marginLeft: '10px' }}>{key}</span>
          </div>
        ))}
      </div>

      <Handle type="source" position={Position.Right} style={{ background: '#ff5722' }} />
    </NodeContainer>
  );
};
