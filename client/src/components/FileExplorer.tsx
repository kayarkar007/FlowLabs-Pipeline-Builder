import React from 'react';
import styled from 'styled-components';

const TreeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-panel);
  color: var(--text-primary);
  overflow-y: auto;
  font-size: 13px;
  padding: 10px;
`;

const FileItem = styled.div<{ $depth?: number; $type?: string }>`
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.2s;
  
  &:hover {
    background: var(--bg-input);
  }
  
  padding-left: ${(props) => (props.$depth || 0) * 12 + 8}px;
  color: ${(props) => props.$type === 'directory' ? 'var(--warning)' : 'var(--info)'};
`;

const FileNode = ({ node, depth, onSelect }: any) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleClick = () => {
        if (node.type === 'directory') {
            setExpanded(!expanded);
        } else {
            onSelect(node);
        }
    };

    return (
        <>
            <FileItem $depth={depth} $type={node.type} onClick={handleClick}>
                {node.type === 'directory' ? (expanded ? '📂 ' : '📁 ') : '📄 '}
                {node.name}
            </FileItem>
            {expanded && node.children && node.children.map((child: any) => (
                <FileNode key={child.name} node={child} depth={depth + 1} onSelect={onSelect} />
            ))}
        </>
    );
};

export const FileExplorer = ({ onFileSelect }: { onFileSelect: (file: any) => void }) => {
    const [files, setFiles] = React.useState<any[]>([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/api/project-files')
            .then(res => res.json())
            .then(setFiles)
            .catch(console.error);
    }, []);

    return (
        <TreeContainer>
            <h3>Project Files</h3>
            {files.map((file) => (
                <FileNode key={file.name} node={file} depth={0} onSelect={onFileSelect} />
            ))}
        </TreeContainer>
    );
};
