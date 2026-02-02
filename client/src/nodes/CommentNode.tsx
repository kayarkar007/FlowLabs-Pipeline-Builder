import styled from 'styled-components';
import { usePipelineStore } from '../store/usePipelineStore';

const CommentContainer = styled.div<{ $selected: boolean }>`
  background: #fef3c7; /* Light Amber */
  border: 1px solid ${p => p.$selected ? 'var(--warning)' : '#fcd34d'};
  border-radius: 4px;
  padding: 12px;
  width: 250px;
  min-height: 80px;
  box-shadow: ${p => p.$selected ? '0 0 15px rgba(245,158,11,0.3)' : 'var(--shadow-sm)'};
  color: #92400e; /* Dark Amber */
  font-family: 'Handlee', 'cursive', 'sans-serif';
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 0; height: 0;
    border-style: solid;
    border-width: 0 15px 15px 0;
    border-color: transparent white transparent transparent;
    opacity: 0.5;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  resize: vertical;
  font-family: inherit;
  font-size: 13px;
  color: inherit;
  outline: none;
  min-height: 50px;
`;

export const CommentNode = ({ id, data, selected }: any) => {
    const updateNodeData = usePipelineStore(s => s.updateNodeData);

    return (
        <CommentContainer $selected={selected} className="nodrag">
            <div style={{ fontSize: '10px', fontWeight: '800', marginBottom: '8px', opacity: 0.6, letterSpacing: '1px' }}>
                NOTE
            </div>
            <TextArea 
                value={data.comment || ''} 
                onChange={(e) => updateNodeData(id, { comment: e.target.value })}
                placeholder="Write a note here..."
            />
        </CommentContainer>
    );
};
