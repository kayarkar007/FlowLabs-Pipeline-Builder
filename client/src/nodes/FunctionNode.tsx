import { Handle, Position } from 'reactflow';
import styled from 'styled-components';
import { useState } from 'react';

const NodeContainer = styled.div`
  padding: 12px;
  background: var(--bg-panel);
  border: 1px solid var(--accent-primary);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);
  min-width: 180px;
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
  color: var(--accent-primary);
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

const HandleLabel = styled.div`
  font-size: 10px;
  color: var(--text-secondary);
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;

export const FunctionNode = ({ data, id }: any) => {
  const [funcName, setFuncName] = useState(data.name || 'my_function');

  return (
    <NodeContainer>
      <Header>
        <Icon>λ</Icon>
        <div style={{ fontSize: '12px', fontWeight: 'bold' }}>FUNCTION</div>
      </Header>

      <Input
        id={`func-name-${id}`}
        name="func-name"
        value={funcName}
        onChange={(e) => setFuncName(e.target.value)}
        placeholder="Function Name"
      />

      <div style={{ marginTop: '10px' }}>
        <HandleLabel>
          <span>FLOW IN</span>
          <span>FLOW OUT</span>
        </HandleLabel>
      </div>

      {/* Control Handles */}
      <Handle type="target" position={Position.Top} id="flow-in" style={{ left: '20%' }} />
      <Handle type="source" position={Position.Bottom} id="flow-out" style={{ left: '20%' }} />

      {/* Logic Body Handle */}
      <div style={{ position: 'relative', height: '20px', marginTop: '10px' }}>
        <HandleLabel style={{ justifyContent: 'flex-end', width: '100%' }}>
          <span>BODY</span>
        </HandleLabel>
        <Handle
          type="source"
          position={Position.Right}
          id="body"
          style={{ background: 'var(--accent-primary)', top: '10px' }}
        />
      </div>

      {/* Data Handles could be added dynamically here in the future */}
    </NodeContainer>
  );
};
