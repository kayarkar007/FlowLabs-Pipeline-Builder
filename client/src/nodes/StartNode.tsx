import { Handle, Position } from 'reactflow';
import styled from 'styled-components';

const NodeContainer = styled.div`
  padding: 12px 20px;
  background: var(--bg-panel);
  border: 1px solid var(--success);
  border-radius: 20px;
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 120px;
`;

const Icon = styled.div`
  color: var(--success);
  font-size: 1.2em;
`;

const Label = styled.div`
  font-weight: 600;
  font-size: 13px;
`;

export const StartNode = ({ data }: any) => {
    return (
        <NodeContainer>
            <Icon>🏁</Icon>
            <Label>{data.label || 'START'}</Label>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: 'var(--success)', width: 8, height: 8 }}
            />
        </NodeContainer>
    );
};
