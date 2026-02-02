import { useState } from 'react';
import styled from 'styled-components';

const PaletteContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const PaletteButton = styled.button`
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
  color: white;
  font-weight: bold;
  padding: 0.6em 1.5em;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: var(--shadow);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px -2px rgb(0 0 0 / 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Dropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: var(--bg-panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.3);
  min-width: 600px;
  max-height: 500px;
  overflow-y: auto;
  z-index: 1000;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  padding: 12px;
`;

const CategorySection = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.div`
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--border);
  letter-spacing: 0.5px;
`;

const NodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const NodeButton = styled.button<{ $color?: string }>`
  background: var(--bg-input);
  color: var(--text-primary);
  border: 2px solid ${props => props.$color || 'var(--border)'};
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;

  &:hover {
    background: ${props => props.$color || 'var(--primary)'};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 2px 8px -2px ${props => props.$color || 'var(--primary)'};
  }

  &:active {
    transform: scale(0.98);
  }
`;

interface NodeCategory {
    title: string;
    nodes: {
        icon: string;
        label: string;
        color: string;
        onClick: () => void;
    }[];
}

interface NodePaletteProps {
    categories: NodeCategory[];
}

export const NodePalette = ({ categories }: NodePaletteProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <PaletteContainer>
            <PaletteButton onClick={() => setIsOpen(!isOpen)}>
                <span>🎨</span>
                <span>Add Nodes</span>
                <span style={{ fontSize: '10px' }}>{isOpen ? '▲' : '▼'}</span>
            </PaletteButton>

            <Dropdown $isOpen={isOpen}>
                {categories.map((category, idx) => (
                    <CategorySection key={idx}>
                        <CategoryTitle>{category.title}</CategoryTitle>
                        <NodeGrid>
                            {category.nodes.map((node, nodeIdx) => (
                                <NodeButton
                                    key={nodeIdx}
                                    $color={node.color}
                                    onClick={() => {
                                        node.onClick();
                                        setIsOpen(false);
                                    }}
                                >
                                    <span>{node.icon}</span>
                                    <span>{node.label}</span>
                                </NodeButton>
                            ))}
                        </NodeGrid>
                    </CategorySection>
                ))}
            </Dropdown>
        </PaletteContainer>
    );
};
