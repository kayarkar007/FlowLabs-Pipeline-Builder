import { Handle, Position } from 'reactflow';
import styled from 'styled-components';
import { useState } from 'react';

const NodeContainer = styled.div`
  padding: 12px;
  background: var(--bg-panel);
  border: 1px solid var(--info);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
  box-shadow: 0 4px 15px rgba(23, 162, 184, 0.2);
  min-width: 150px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 6px;
`;

const Icon = styled.span`
  color: var(--info);
  font-weight: bold;
`;

const Input = styled.input`
  background: var(--bg-input);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  width: 100%;
`;

export const CallNode = ({ data, id }: any) => {
  const [targetFunc, setTargetFunc] = useState(data.target || '');

  return (
    <NodeContainer>
      <Header>
        <Icon>📞</Icon>
        <div style={{ fontSize: '11px', fontWeight: 'bold' }}>CALL</div>
      </Header>

      <Input
        id={`call-target-${id}`}
        name="call-target"
        value={targetFunc}
        onChange={(e) => setTargetFunc(e.target.value)}
        placeholder="Function Name"
      />

      {/* Control Handles */}
      <Handle type="target" position={Position.Top} id="flow-in" />
      <Handle type="source" position={Position.Bottom} id="flow-out" />

      {/* Potential Output Value Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id="result"
        style={{ top: '70%', background: 'var(--info)' }}
      />
    </NodeContainer>
  );
};
