import React from 'react';
import Editor from '@monaco-editor/react';
import styled from 'styled-components';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid var(--border);
  background: var(--bg-panel);
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: var(--bg-dark);
  border-bottom: 1px solid var(--border);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 11px;
  font-weight: 800;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: var(--accent-primary);
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  transition: var(--transition-fast);
  box-shadow: 0 0 10px var(--accent-glow);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 15px var(--accent-glow);
  }
`;

interface CodeEditorProps {
    code: string;
    language: 'javascript' | 'python';
    onChange: (value: string | undefined) => void;
    onSync: () => void;
    theme: 'dark' | 'light';
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, language, onChange, onSync, theme }) => {
    return (
        <EditorContainer>
            <EditorHeader>
                <Title>
                   <span style={{ color: 'var(--accent-primary)' }}>{language === 'javascript' ? 'JS' : 'PY'}</span>
                   {language === 'javascript' ? 'Implementation' : 'Script'}
                </Title>
                <ActionButton onClick={onSync}>Sync to Pipeline</ActionButton>
            </EditorHeader>
            <Editor
                height="100%"
                language={language}
                theme={theme === 'dark' ? 'vs-dark' : 'light'}
                value={code}
                onChange={onChange}
                options={{
                    minimap: { enabled: false },
                    fontSize: 13,
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    padding: { top: 10 },
                    cursorStyle: 'block',
                    smoothScrolling: true
                }}
            />
        </EditorContainer>
    );
};
