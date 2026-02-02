import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const Overlay = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(8px);
  z-index: 5000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease;
`;

const Modal = styled.div`
  background: var(--bg-panel);
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 48px;
  max-width: 680px;
  width: 90%;
  box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.1);
  animation: ${scaleIn} 0.35s cubic-bezier(0.34,1.56,0.64,1);
`;

const Logo = styled.div`
  font-size: 2.2em;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  letter-spacing: -1px;
`;

const Tagline = styled.p`
  color: var(--text-secondary);
  font-size: 1.05em;
  margin: 0 0 36px 0;
  line-height: 1.5;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 28px;
`;

const Option = styled.button<{ $color: string }>`
  background: var(--bg-input);
  border: 2px solid var(--border) !important;
  border-radius: 14px !important;
  padding: 20px 14px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: var(--transition);
  text-align: center;

  &:hover {
    border-color: ${p => p.$color} !important;
    background: ${p => p.$color}18 !important;
    transform: translateY(-3px) !important;
    box-shadow: 0 8px 24px ${p => p.$color}30 !important;
  }

  .opt-icon { font-size: 2em; }
  .opt-title { font-size: 13px; font-weight: 700; color: var(--text-primary); }
  .opt-desc { font-size: 11px; color: var(--text-secondary); line-height: 1.4; }
`;

const SkipBtn = styled.button`
  background: transparent !important;
  color: var(--text-muted) !important;
  font-size: 12px !important;
  opacity: 0.7;
  width: 100%;
  justify-content: center;
  &:hover { opacity: 1; color: var(--text-secondary) !important; }
`;

const Features = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 28px;
  flex-wrap: wrap;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--text-secondary);
  .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-primary); }
`;

interface WelcomeModalProps {
  onClose: () => void;
  onPasteCode: () => void;
  onBuildFresh: () => void;
  onLoadTemplate: () => void;
}

export const WelcomeModal = ({ onClose, onPasteCode, onBuildFresh, onLoadTemplate }: WelcomeModalProps) => (
  <Overlay onClick={onClose}>
    <Modal onClick={e => e.stopPropagation()}>
      <Logo>⚡ FlowLabs</Logo>
      <Tagline>
        Turn confusing code into <strong style={{ color: 'var(--accent-primary)' }}>clear visual pipelines</strong>.
        <br />Build logic visually, understand it step-by-step with AI.
      </Tagline>

      <Features>
        {[
          'Visual Pipeline Builder',
          'Step-by-step AI Explanation',
          'Code ↔ Pipeline Sync',
          'Debug Mode',
          'Student Mode',
          '10+ Templates',
        ].map(f => (
          <Feature key={f}><span className="dot" />{f}</Feature>
        ))}
      </Features>

      <Grid>
        <Option $color="#6366f1" onClick={() => { onPasteCode(); onClose(); }}>
          <span className="opt-icon">📋</span>
          <span className="opt-title">Paste My Code</span>
          <span className="opt-desc">I have code I want to understand visually</span>
        </Option>
        <Option $color="#10b981" onClick={() => { onBuildFresh(); onClose(); }}>
          <span className="opt-icon">🏗️</span>
          <span className="opt-title">Build Visual</span>
          <span className="opt-desc">Drag & drop nodes to create a pipeline</span>
        </Option>
        <Option $color="#f59e0b" onClick={() => { onLoadTemplate(); onClose(); }}>
          <span className="opt-icon">📚</span>
          <span className="opt-title">Load Template</span>
          <span className="opt-desc">Start from Hello World, FizzBuzz, Fibonacci...</span>
        </Option>
      </Grid>

      <SkipBtn onClick={onClose}>Skip — I know what I'm doing →</SkipBtn>
    </Modal>
  </Overlay>
);
