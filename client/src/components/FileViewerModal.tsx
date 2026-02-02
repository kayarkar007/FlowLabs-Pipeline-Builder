import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 2000;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: var(--bg-panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 20px 60px -10px rgb(0 0 0 / 0.5);
  max-width: 900px;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  border-radius: 4px;
  
  &:hover {
    color: var(--text-primary);
    background: var(--bg-input);
  }
`;

const ModalBody = styled.div`
  flex: 1;
  overflow: auto;
  background: var(--bg-dark);
  padding: 0;
`;

const CodeContent = styled.pre`
  margin: 0;
  padding: 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
  color: #e0e0e0;
  tab-size: 2;
  counter-reset: line;
`;

const LoadingState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--text-secondary);
`;

const ErrorState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--danger);
  flex-direction: column;
  gap: 8px;
`;

interface FileViewerModalProps {
    isOpen: boolean;
    filePath: string | null;
    onClose: () => void;
}

export const FileViewerModal = ({ isOpen, filePath, onClose }: FileViewerModalProps) => {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen && filePath) {
            setLoading(true);
            setError(null);
            setContent('');

            fetch(`http://localhost:3000/api/read-file?path=${encodeURIComponent(filePath)}`)
                .then(async res => {
                    if (!res.ok) {
                        const data = await res.json();
                        throw new Error(data.error || 'Failed to read file');
                    }
                    return res.json();
                })
                .then(data => {
                    setContent(data.content);
                    setLoading(false);
                })
                .catch(err => {
                    setError(String(err));
                    setLoading(false);
                });
        }
    }, [isOpen, filePath]);

    if (!isOpen) return null;

    return (
        <ModalOverlay $isOpen={isOpen} onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>
                        <span>📄</span>
                        <span>{filePath ? filePath.split(/[\\/]/).pop() : 'File Viewer'}</span>
                        {filePath && <span style={{ opacity: 0.5, fontSize: '0.8em', fontWeight: 'normal' }}>{filePath}</span>}
                    </ModalTitle>
                    <CloseButton onClick={onClose}>×</CloseButton>
                </ModalHeader>
                <ModalBody>
                    {loading && <LoadingState>Loading content...</LoadingState>}
                    {error && (
                        <ErrorState>
                            <span style={{ fontSize: '24px' }}>⚠️</span>
                            <span>{error}</span>
                        </ErrorState>
                    )}
                    {!loading && !error && content && (
                        <CodeContent>{content}</CodeContent>
                    )}
                </ModalBody>
            </ModalContent>
        </ModalOverlay>
    );
};
