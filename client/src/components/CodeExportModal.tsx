import { useState } from 'react';
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
  max-width: 800px;
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 24px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: var(--bg-input);
    color: var(--text-primary);
  }
`;

const ModalBody = styled.div`
  padding: 24px;
  flex: 1;
  overflow-y: auto;
`;

const CodeBlock = styled.pre`
  background: var(--bg-dark);
  color: var(--text-primary);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
  overflow-x: auto;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 4px;
  }
`;

const ModalFooter = styled.div`
  padding: 16px 24px;
  border-top: 1px solid var(--border);
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const Button = styled.button<{ $variant?: 'primary' | 'success' }>`
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;

  ${props => props.$variant === 'primary' && `
    background: var(--primary);
    color: white;
    &:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px -2px var(--primary);
    }
  `}

  ${props => props.$variant === 'success' && `
    background: var(--success);
    color: white;
    &:hover {
      background: #0ea472;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px -2px var(--success);
    }
  `}

  ${props => !props.$variant && `
    background: var(--bg-input);
    color: var(--text-primary);
    &:hover {
      background: var(--border);
    }
  `}
`;

interface CodeExportModalProps {
    isOpen: boolean;
    code: string;
    onClose: () => void;
}

export const CodeExportModal = ({ isOpen, code, onClose }: CodeExportModalProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        const blob = new Blob([code], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'vpos-generated-code.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <ModalOverlay $isOpen={isOpen} onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>
                        <span>📝</span>
                        <span>Generated JavaScript Code</span>
                    </ModalTitle>
                    <CloseButton onClick={onClose}>×</CloseButton>
                </ModalHeader>

                <ModalBody>
                    <CodeBlock>{code || '// No code generated'}</CodeBlock>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                    <Button $variant="primary" onClick={handleCopy}>
                        <span>{copied ? '✓' : '📋'}</span>
                        <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                    </Button>
                    <Button $variant="success" onClick={handleDownload}>
                        <span>💾</span>
                        <span>Download .js</span>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ModalOverlay>
    );
};
