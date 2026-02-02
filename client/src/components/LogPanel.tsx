import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-panel);
  border-top: 1px solid var(--border);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: var(--bg-dark);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
`;

const Title = styled.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
`;

const ClearBtn = styled.button`
  background: transparent !important;
  border: 1px solid var(--border) !important;
  padding: 2px 8px !important;
  font-size: 10px !important;
  color: var(--text-muted) !important;
  &:hover { border-color: var(--danger) !important; color: var(--danger) !important; }
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LogLine = styled.div<{ $type?: 'error' | 'success' | 'info' | 'log' | 'debug' }>`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 11.5px;
  padding: 3px 8px;
  border-radius: 4px;
  line-height: 1.6;
  animation: ${fadeIn} 0.2s ease;
  border-left: 2px solid transparent;

  ${p => p.$type === 'error' && `
    color: var(--danger);
    background: rgba(239,68,68,0.08);
    border-left-color: var(--danger);
  `}
  ${p => p.$type === 'success' && `
    color: var(--success);
    background: rgba(16,185,129,0.08);
    border-left-color: var(--success);
  `}
  ${p => p.$type === 'info' && `
    color: var(--info);
    background: rgba(14,165,233,0.08);
    border-left-color: var(--info);
  `}
  ${p => p.$type === 'debug' && `
    color: var(--text-muted);
    font-style: italic;
  `}
  ${p => p.$type === 'log' && `
    color: var(--text-primary);
  `}
`;

const VarTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 8px;
  background: var(--bg-input);
  border-radius: 8px;
  margin-top: 4px;
`;

const VarRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 4px 8px;
  background: var(--bg-card, var(--bg-panel-2));
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
`;
const VarName = styled.span`
  color: var(--accent-primary);
  font-weight: 600;
`;
const VarEq = styled.span` color: var(--text-muted); `;
const VarVal = styled.span`
  color: var(--text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 8px;
  color: var(--text-muted);
  font-size: 12px;
  .icon { font-size: 24px; opacity: 0.5; }
`;

const getLogType = (log: string): 'error' | 'success' | 'info' | 'log' | 'debug' => {
  if (log.includes('[ERROR]') || log.includes('Error') || log.includes('❌')) return 'error';
  if (log.includes('✅') || log.includes('valid') || log.includes('Success')) return 'success';
  if (log.includes('[CONSOLE') || log.includes('[STDOUT]') || log.includes('OUTPUT')) return 'info';
  if (log.includes('Process:') || log.includes('Pushing') || log.includes('Debugger')) return 'debug';
  return 'log';
};

interface LogPanelProps {
  logs: string[];
  variables?: Record<string, any>;
  onClear: () => void;
}

export const LogPanel = ({ logs, variables = {}, onClear }: LogPanelProps) => {
  const varEntries = Object.entries(variables);

  return (
    <Panel>
      {varEntries.length > 0 && (
        <>
          <Header>
            <Title>📊 Variables</Title>
          </Header>
          <VarTable>
            {varEntries.map(([k, v]) => (
              <VarRow key={k}>
                <VarName>{k}</VarName>
                <VarEq>=</VarEq>
                <VarVal>{JSON.stringify(v)}</VarVal>
              </VarRow>
            ))}
          </VarTable>
        </>
      )}

      <Header>
        <Title>🖥️ System Logs</Title>
        <ClearBtn onClick={onClear}>Clear</ClearBtn>
      </Header>
      <Content>
        {logs.length === 0 ? (
          <Empty>
            <span className="icon">📋</span>
            <span>Run pipeline to see logs</span>
          </Empty>
        ) : (
          logs.map((log, i) => (
            <LogLine key={i} $type={getLogType(log)}>{log}</LogLine>
          ))
        )}
      </Content>
    </Panel>
  );
};
