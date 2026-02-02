import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { usePipelineStore } from '../store/usePipelineStore';

const typing = keyframes`
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-6px); opacity: 1; }
`;

const Panel = styled.div`
  background: var(--bg-panel);
  color: var(--text-primary);
  border-left: 1px solid var(--border);
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const PanelHeader = styled.div`
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-dark);
  flex-shrink: 0;
`;

const PanelTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatusBadge = styled.span<{ $on: boolean }>`
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 20px;
  font-weight: 700;
  background: ${p => p.$on ? 'var(--success)' : 'var(--bg-input)'};
  color: ${p => p.$on ? 'white' : 'var(--text-muted)'};
`;

const ClearBtn = styled.button`
  background: transparent !important;
  border: 1px solid var(--border) !important;
  padding: 3px 8px !important;
  font-size: 10px !important;
  color: var(--text-muted) !important;
  &:hover { border-color: var(--danger) !important; color: var(--danger) !important; }
`;

const ChatBox = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--bg-dark);
`;

const Bubble = styled.div<{ $isUser: boolean; $isStep?: boolean }>`
  padding: 10px 13px;
  border-radius: ${p => p.$isUser ? '12px 12px 3px 12px' : '12px 12px 12px 3px'};
  font-size: 12.5px;
  line-height: 1.5;
  max-width: 90%;
  align-self: ${p => p.$isUser ? 'flex-end' : 'flex-start'};
  animation: fadeIn 0.2s ease;

  ul, ol {
    margin: 8px 0;
    padding-left: 20px;
  }
  li {
    margin-bottom: 4px;
  }
  p:first-child { margin-top: 0; }
  p:last-child { margin-bottom: 0; }

  ${p => p.$isUser ? `
    background: var(--accent-primary);
    color: white;
  ` : p.$isStep ? `
    background: rgba(99,102,241,0.12);
    border: 1px solid rgba(99,102,241,0.3);
    color: var(--text-primary);
  ` : `
    background: var(--bg-input);
    color: var(--text-primary);
  `}
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const TypingIndicator = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 10px 14px;
  background: var(--bg-input);
  border-radius: 12px 12px 12px 3px;
  align-self: flex-start;
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--text-muted);
    animation: ${typing} 1.2s infinite;
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`;

const QuickActions = styled.div`
  padding: 8px 12px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--border);
  background: var(--bg-panel);
`;

const QuickBtn = styled.button`
  background: var(--bg-input) !important;
  border: 1px solid var(--border) !important;
  padding: 4px 10px !important;
  font-size: 11px !important;
  border-radius: 20px !important;
  color: var(--text-secondary) !important;
  &:hover { border-color: var(--accent-primary) !important; color: var(--accent-primary) !important; }
`;

const InputRow = styled.div`
  display: flex;
  gap: 6px;
  padding: 10px;
  border-top: 1px solid var(--border);
  background: var(--bg-panel);
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  background: var(--bg-input);
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 12.5px;
  font-family: inherit;
  outline: none;
  &:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 2px var(--accent-glow); }
  &::placeholder { color: var(--text-muted); }
`;

const SendBtn = styled.button<{ $loading?: boolean }>`
  background: var(--accent-primary) !important;
  color: white !important;
  border: none !important;
  padding: 8px 14px !important;
  border-radius: 8px !important;
  font-weight: 700 !important;
  font-size: 13px !important;
  opacity: ${p => p.$loading ? 0.6 : 1};
`;

interface Message { text: string; isUser: boolean; isAIStep?: boolean; }

export const AIMentorPanel = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const { executionLogs, studentMode, nodes, code } = usePipelineStore();
  const [messages, setMessages] = useState<Message[]>([
    { text: "👋 Hi! I'm your AI Mentor. Paste or build code, then ask me anything! Enable **Student Mode** for step-by-step explanations as you run your pipeline.", isUser: false },
  ]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Inject step explanations from student mode
  useEffect(() => {
    if (studentMode && executionLogs.length > 0) {
      const last = executionLogs[executionLogs.length - 1];
      setMessages(prev => {
        if (prev.length > 0 && prev[prev.length - 1].text === last) return prev;
        return [...prev, { text: last, isUser: false, isAIStep: true }];
      });
    }
  }, [executionLogs, studentMode]);

  const askAI = async (question: string) => {
    if (!question.trim()) return;
    setMessages(prev => [...prev, { text: question, isUser: true }]);
    setInput('');
    setLoading(true);
    const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '');
    try {
      const response = await fetch(`${API_URL}/api/ai-mentor`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          context: { code, nodes: nodes.slice(0, 20) }
        }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.answer || "I couldn't generate a response.", isUser: false }]);
    } catch {
      setMessages(prev => [...prev, {
        text: "🔌 I'm offline right now, but I can still show step-by-step explanations in Student Mode!",
        isUser: false,
      }]);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = [
    { label: '📖 Explain pipeline', q: 'Can you explain what this pipeline does step by step?' },
    { label: '🐛 Find bugs', q: 'Are there any logical errors or bugs in my code/pipeline?' },
    { label: '💡 Improve it', q: 'How can I improve or optimize this code?' },
    { label: '🎓 What is this?', q: 'Explain this code to me like I am a beginner student.' },
  ];

  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>
          🤖 AI Mentor
          <StatusBadge $on={studentMode}>{studentMode ? 'STUDENT ON' : 'STUDENT OFF'}</StatusBadge>
        </PanelTitle>
        <ClearBtn onClick={() => setMessages([{ text: "Chat cleared! Ask me anything 🚀", isUser: false }])}>
          Clear
        </ClearBtn>
      </PanelHeader>

      <QuickActions>
        {quickQuestions.map(q => (
          <QuickBtn key={q.label} onClick={() => askAI(q.q)}>{q.label}</QuickBtn>
        ))}
      </QuickActions>

      <ChatBox ref={chatRef}>
        {messages.map((m, i) => (
          <Bubble key={i} $isUser={m.isUser} $isStep={m.isAIStep}>
            {m.isAIStep && <strong style={{ color: 'var(--accent-primary)', display: 'block', marginBottom: '4px', fontSize: '10px' }}>STEP INFO</strong>}
            <ReactMarkdown>{m.text}</ReactMarkdown>
          </Bubble>
        ))}
        {loading && (
          <TypingIndicator>
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </TypingIndicator>
        )}
      </ChatBox>

      <InputRow>
        <ChatInput
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !loading && askAI(input)}
          placeholder="Ask about your code…"
          disabled={loading}
        />
        <SendBtn $loading={loading} onClick={() => askAI(input)} disabled={loading}>
          {loading ? '⏳' : '↑'}
        </SendBtn>
      </InputRow>
    </Panel>
  );
};
