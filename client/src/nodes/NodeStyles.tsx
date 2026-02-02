import styled from 'styled-components';

export const NodeContainer = styled.div<{ $type?: string; $selected?: boolean; $isActive?: boolean }>`
  background: var(--bg-panel);
  border: 1px solid ${p => p.$selected ? 'var(--accent-primary)' : 'var(--border-light)'};
  border-radius: 12px;
  min-width: 180px;
  box-shadow: ${p => p.$selected ? '0 0 20px var(--accent-glow)' : 'var(--shadow-md)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  position: relative;

  ${p => p.$isActive && `
    border-color: var(--success);
    box-shadow: 0 0 25px var(--success-glow);
    transform: scale(1.02);
  `}
`;

export const NodeHeader = styled.div<{ $color?: string }>`
  padding: 8px 12px;
  background: ${p => p.$color || 'var(--bg-panel-2)'};
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 8px;
  
  span.icon { font-size: 14px; }
  span.label { 
    font-size: 11px; 
    font-weight: 800; 
    text-transform: uppercase; 
    letter-spacing: 0.5px;
    color: var(--text-primary);
  }
`;

export const NodeBody = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NodeInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  label { 
    font-size: 9px; 
    font-weight: 700; 
    color: var(--text-muted); 
    text-transform: uppercase;
  }
  
  input, select {
    background: var(--bg-input);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 6px 8px;
    color: var(--text-primary);
    font-size: 12px;
    width: 100%;
    outline: none;
    transition: border-color 0.2s;
    &:focus { border-color: var(--accent-primary); }
  }
`;

export const ResultBadge = styled.div<{ $error?: boolean }>`
  margin-top: 8px;
  padding: 6px 10px;
  background: ${p => p.$error ? 'var(--danger-glow)' : 'var(--bg-panel-2)'};
  border: 1px solid ${p => p.$error ? 'var(--danger)' : 'var(--border)'};
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: ${p => p.$error ? 'var(--danger)' : 'var(--success)'};
  word-break: break-all;
  display: flex;
  flex-direction: column;
  gap: 2px;
  
  .title { 
    font-size: 8px; 
    font-weight: 800; 
    color: var(--text-muted); 
    text-transform: uppercase;
  }
`;

export const ConnectionPoint = styled.div`
  font-size: 9px;
  font-weight: 800;
  color: var(--text-muted);
  pointer-events: none;
`;
