import React from 'react';
import { Handle, Position } from 'reactflow';
import { NodeContainer, NodeHeader, NodeBody, NodeInput, ResultBadge } from './NodeStyles';
import { usePipelineStore } from '../store/usePipelineStore';

export const InputNode = ({ id, data, selected }: any) => {
    const updateNodeData = usePipelineStore(s => s.updateNodeData);

    return (
        <NodeContainer $selected={selected} $isActive={data.isActive}>
            <NodeHeader $color="rgba(99, 102, 241, 0.1)">
                <span className="icon">📥</span>
                <span className="label">Input / Variable</span>
            </NodeHeader>
            <NodeBody>
                <NodeInput>
                    <label>Label</label>
                    <input 
                        className="nodrag"
                        type="text" 
                        value={data.label || ''} 
                        onChange={(e) => updateNodeData(id, { label: e.target.value })}
                        placeholder="e.const x"
                    />
                </NodeInput>
                <NodeInput>
                    <label>Initial Value</label>
                    <input 
                        className="nodrag"
                        type="text" 
                        value={data.value || ''} 
                        onChange={(e) => updateNodeData(id, { value: e.target.value })}
                        placeholder="Value"
                    />
                </NodeInput>

                {data.result !== undefined && (
                    <ResultBadge>
                        <span className="title">Current Value</span>
                        <div style={{ wordBreak: 'break-all' }}>
                          {JSON.stringify(data.result)}
                        </div>
                    </ResultBadge>
                )}
            </NodeBody>

            <Handle type="target" position={Position.Left} id="value" style={{ background: 'var(--accent-primary)' }} />
            <Handle type="source" position={Position.Right} style={{ background: 'var(--accent-primary)' }} />
        </NodeContainer>
    );
};
