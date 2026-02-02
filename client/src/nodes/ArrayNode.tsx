import { Handle, Position, type NodeProps } from 'reactflow';
import { usePipelineStore } from '../store/usePipelineStore';
import React from 'react';
import { NodeContainer, DeleteButton, NodeHeader, StyledSelect } from '../components/BaseNode';
import type { CommonNodeData } from '../types/nodes';

export const ArrayNode = ({ id, data }: NodeProps<CommonNodeData>) => {
    const { setNodes, nodes, deleteNode } = usePipelineStore();
    const [mode, setMode] = React.useState(data.mode || 'create');

    const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newMode = e.target.value as 'create' | 'push' | 'get';
        setMode(newMode);
        setNodes(
            nodes.map(n =>
                n.id === id ? { ...n, data: { ...n.data, mode: newMode, label: `Array: ${newMode.toUpperCase()}` } } : n
            )
        );
    };

    return (
        <NodeContainer $borderColor="#9c27b0" $minWidth="160px" $isError={!!data.error}>
            <DeleteButton className="nodrag" onClick={() => deleteNode(id)}>×</DeleteButton>

            <NodeHeader style={{ color: '#9c27b0' }}>
                <span>ARRAY</span>
            </NodeHeader>
            <StyledSelect id={`array-mode-${id}`} name="array-mode" className="nodrag" value={mode} onChange={handleModeChange} style={{ marginBottom: '8px' }}>
                <option value="create">Create Empty []</option>
                <option value="push">Push to Array</option>
                <option value="get">Get by Index</option>
            </StyledSelect>

            {data.error && <div style={{ color: 'var(--danger)', fontSize: '9px', textAlign: 'center', marginBottom: '4px' }}>{data.error}</div>}

            {mode === 'push' && (
                <div style={{ fontSize: '10px' }}>
                    <div style={{ marginBottom: '15px' }}>Array In: <Handle type="target" position={Position.Left} id="arr" style={{ top: '65px', background: '#9c27b0' }} /></div>
                    <div>Value In: <Handle type="target" position={Position.Left} id="val" style={{ top: '85px', background: '#aaa' }} /></div>
                </div>
            )}

            {mode === 'get' && (
                <div style={{ fontSize: '10px' }}>
                    <div style={{ marginBottom: '15px' }}>Array In: <Handle type="target" position={Position.Left} id="arr" style={{ top: '65px', background: '#9c27b0' }} /></div>
                    <div>Index In: <Handle type="target" position={Position.Left} id="idx" style={{ top: '85px', background: '#aaa' }} /></div>
                </div>
            )}

            <Handle type="source" position={Position.Right} style={{ background: '#9c27b0' }} />
        </NodeContainer>
    );
};
