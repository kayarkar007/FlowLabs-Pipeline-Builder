import React, { createContext, useContext, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  success: (msg: string) => void;
  error: (msg: string) => void;
  warning: (msg: string) => void;
  info: (msg: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const slideIn = keyframes`
  from { transform: translateX(120%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;
const slideOut = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(120%); opacity: 0; }
`;

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
`;

const COLORS: Record<ToastType, { bg: string; border: string; icon: string }> = {
  success: { bg: 'rgba(16,185,129,0.15)', border: '#10b981', icon: '✅' },
  error:   { bg: 'rgba(239,68,68,0.15)',   border: '#ef4444', icon: '❌' },
  warning: { bg: 'rgba(245,158,11,0.15)',  border: '#f59e0b', icon: '⚠️' },
  info:    { bg: 'rgba(99,102,241,0.15)',  border: '#6366f1', icon: 'ℹ️' },
};

const ToastItem = styled.div<{ $type: ToastType; $exiting: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid ${p => COLORS[p.$type].border};
  background: ${p => COLORS[p.$type].bg};
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
  min-width: 280px;
  max-width: 380px;
  pointer-events: all;
  cursor: pointer;
  animation: ${p => p.$exiting ? slideOut : slideIn} 0.3s cubic-bezier(0.4,0,0.2,1) forwards;

  .icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
  .msg  { font-size: 13px; font-weight: 500; color: var(--text-primary); line-height: 1.4; flex: 1; }
  .progress {
    position: absolute;
    bottom: 0; left: 0;
    height: 2px;
    background: ${p => COLORS[p.$type].border};
    border-radius: 0 0 10px 10px;
  }
`;

let toastCounter = 0;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [exiting, setExiting] = useState<Set<string>>(new Set());

  const dismiss = useCallback((id: string) => {
    setExiting(prev => new Set(prev).add(id));
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
      setExiting(prev => { const s = new Set(prev); s.delete(id); return s; });
    }, 300);
  }, []);

  const showToast = useCallback((message: string, type: ToastType = 'info', duration = 3500) => {
    const id = `toast-${++toastCounter}`;
    setToasts(prev => [...prev, { id, type, message, duration }]);
    setTimeout(() => dismiss(id), duration);
  }, [dismiss]);

  const ctx: ToastContextValue = {
    showToast,
    success: msg => showToast(msg, 'success'),
    error:   msg => showToast(msg, 'error', 5000),
    warning: msg => showToast(msg, 'warning'),
    info:    msg => showToast(msg, 'info'),
  };

  return (
    <ToastContext.Provider value={ctx}>
      {children}
      <ToastContainer>
        {toasts.map(t => (
          <ToastItem key={t.id} $type={t.type} $exiting={exiting.has(t.id)} onClick={() => dismiss(t.id)}>
            <span className="icon">{COLORS[t.type].icon}</span>
            <span className="msg">{t.message}</span>
          </ToastItem>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};
