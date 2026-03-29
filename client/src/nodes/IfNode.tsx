import { Handle, Position } from 'reactflow';
import { NodeContainer, NodeHeader, NodeBody, ResultBadge, ConnectionPoint } from './NodeStyles';

export const IfNode = ({ data, selected }: any) => {
    return (
        <NodeContainer $selected={selected} $isActive={data.isActive}>
            <NodeHeader $color="rgba(245, 158, 11, 0.1)">
                <span className="icon">❓</span>
                <span className="label">If Condition</span>
            </NodeHeader>
            <NodeBody>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', textAlign: 'center', padding: '4px' }}>
                    Branching Logic
                </div>

                {data.result !== undefined && (
                    <ResultBadge>
                        <span className="title">Branch Taken</span>
                        <div style={{ fontWeight: '800', color: data.result ? 'var(--success)' : 'var(--danger)' }}>
                            {data.result ? 'TRUE' : 'FALSE'}
                        </div>
                    </ResultBadge>
                )}
            </NodeBody>

            <Handle type="target" position={Position.Left} id="condition" style={{ background: 'var(--warning)' }} />
            <Handle type="target" position={Position.Top} id="flow-in" />
            
            <div style={{ position: 'absolute', right: -30, top: '25%', display: 'flex', alignItems: 'center', gap: 4 }}>
                <ConnectionPoint>TRUE</ConnectionPoint>
                <Handle type="source" position={Position.Right} id="true" style={{ top: '25%', background: 'var(--success)' }} />
            </div>
            
            <div style={{ position: 'absolute', right: -35, top: '75%', display: 'flex', alignItems: 'center', gap: 4 }}>
                <ConnectionPoint>FALSE</ConnectionPoint>
                <Handle type="source" position={Position.Right} id="false" style={{ top: '75%', background: 'var(--danger)' }} />
            </div>
            
            <Handle type="source" position={Position.Bottom} id="flow-out" />
        </NodeContainer>
    );
};
