import styled from 'styled-components';

export const NodeContainer = styled.div<{ $borderColor?: string; $minWidth?: string; $isError?: boolean }>`
  padding: 10px;
  border-radius: 8px;
  background: var(--bg-panel);
  color: var(--text-primary);
  border: 2px solid ${props => props.$isError ? 'var(--danger)' : (props.$borderColor || 'var(--border)')};
  min-width: ${props => props.$minWidth || '140px'};
  box-shadow: ${props => props.$isError ? '0 0 10px var(--danger)' : 'var(--shadow)'};
  position: relative;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  z-index: 10;
  /* Removed isolation: isolate to prevent context trapping issues with some libraries if not needed, 
     but kept if it was for handle rendering. ReactFlow handles are usually absolute. */
  
  &:hover {
    box-shadow: var(--node-shadow-hover);
    transform: translateY(-2px);
    z-index: 11; /* Reduced boost to prevent massive layer jumps vs other nodes */
  }
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  background: var(--danger);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.2s, transform 0.1s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 20;

  ${NodeContainer}:hover & {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const NodeHeader = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
  color: inherit;
  border-bottom: 1px solid var(--border);
  padding-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NodeLabel = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--border);
  background-color: var(--bg-input); 
  color: var(--text-primary);
  padding: 6px;
  outline: none;
  font-size: 12px;
  font-family: inherit;
  appearance: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 6px;
  background: var(--bg-input);
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 12px;
  outline: none;
  cursor: pointer;

  &:focus {

    border-color: var(--primary);
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 40px;
  padding: 6px;
  background: var(--bg-input);
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 12px;
  resize: vertical;
  outline: none;
  font-family: inherit;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;
