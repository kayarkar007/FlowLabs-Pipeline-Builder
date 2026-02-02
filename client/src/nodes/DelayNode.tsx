import { Handle, Position } from 'reactflow';
import { NodeContainer, NodeHeader, NodeBody, NodeInput } from './NodeStyles';
import { usePipelineStore } from '../store/usePipelineStore';

export const DelayNode = ({ id, data, selected }: any) => {
    const updateNodeData = usePipelineStore(s => s.updateNodeData);

    return (
        <NodeContainer $selected={selected} $isActive={data.isActive}>
            <NodeHeader $color="rgba(245, 158, 11, 0.1)">
                <span className="icon">⏳</span>
                <span className="label">Delay / Pause</span>
            </NodeHeader>
            <NodeBody>
                <NodeInput>
                    <label>Duration (ms)</label>
                    <input 
                        className="nodrag"
                        type="number" 
                        value={data.duration || 1000} 
                        onChange={(e) => updateNodeData(id, { duration: Number(e.target.value) })}
                        min="0"
                        step="100"
                    />
                </NodeInput>
            </NodeBody>

            <Handle type="target" position={Position.Top} id="flow-in" />
            <Handle type="source" position={Position.Bottom} id="flow-out" />
        </NodeContainer>
    );
};
