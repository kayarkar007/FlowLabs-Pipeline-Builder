import { Handle, Position } from 'reactflow';
import { NodeContainer, NodeHeader, NodeBody, NodeInput, ResultBadge } from './NodeStyles';
import { usePipelineStore } from '../store/usePipelineStore';

export const MathNode = ({ id, data, selected }: any) => {
    const updateNodeData = usePipelineStore(s => s.updateNodeData);

    return (
        <NodeContainer $selected={selected} $isActive={data.isActive}>
            <NodeHeader $color="rgba(59, 130, 246, 0.1)">
                <span className="icon">➕</span>
                <span className="label">Math Operation</span>
            </NodeHeader>
            <NodeBody>
                <NodeInput>
                    <label>Operation</label>
                    <select 
                        className="nodrag"
                        value={data.op || 'add'} 
                        onChange={(e) => updateNodeData(id, { op: e.target.value })}
                    >
                        <option value="add">Add (+)</option>
                        <option value="sub">Subtract (-)</option>
                        <option value="mul">Multiply (*)</option>
                        <option value="div">Divide (/)</option>
                        <option value="mod">Modulo (%)</option>
                    </select>
                </NodeInput>

                {(data.result !== undefined || data.error) && (
                    <ResultBadge $error={!!data.error}>
                        <span className="title">{data.error ? 'Error' : 'Result'}</span>
                        <div style={{ wordBreak: 'break-all' }}>
                          {data.error || JSON.stringify(data.result)}
                        </div>
                    </ResultBadge>
                )}
            </NodeBody>

            <Handle type="target" position={Position.Left} id="a" style={{ top: '30%', background: 'var(--accent-primary)' }} />
            <Handle type="target" position={Position.Left} id="b" style={{ top: '70%', background: 'var(--accent-secondary)' }} />
            <Handle type="source" position={Position.Right} style={{ background: 'var(--success)' }} />
        </NodeContainer>
    );
};
