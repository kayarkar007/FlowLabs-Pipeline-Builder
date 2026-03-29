import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { NodeSidebar } from './components/NodeSidebar';
import { PipelineCanvas } from './components/PipelineCanvas';
import { usePipelineStore } from './store/usePipelineStore';
import { AIMentorPanel } from './components/AIMentorPanel';
import { SaveLoadPanel } from './components/SaveLoadPanel';
import { CodeEditor } from './components/CodeEditor';
import { WelcomeModal } from './components/WelcomeModal';
import { useToast } from './components/ToastNotification';
import type { FlowExecutor } from './engine/FlowExecutor';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--bg-dark);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 20px;
  background: var(--bg-panel);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 100;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  &:hover span { color: var(--accent-primary); }
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--primary), var(--accent-secondary));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 900;
  font-size: 18px;
  box-shadow: 0 4px 12px var(--primary-glow);
`;

const LogoText = styled.span`
  font-weight: 800;
  font-size: 1.3em;
  background: linear-gradient(to right, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
  transition: var(--transition-fast);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const NavDivider = styled.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`;

const MainLayout = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const CanvasArea = styled.main`
  flex: 1;
  position: relative;
  background: var(--bg-dark);
`;

const EditorArea = styled.aside<{ $isOpen: boolean }>`
  width: ${p => p.$isOpen ? '35%' : '0px'};
  border-right: ${p => p.$isOpen ? '1px solid var(--border)' : 'none'};
  background: var(--bg-panel);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`;

const BottomPanel = styled.footer<{ $isOpen: boolean }>`
  height: ${p => p.$isOpen ? '200px' : '36px'};
  border-top: 1px solid var(--border);
  background: var(--bg-panel);
  display: flex;
  flex-direction: column;
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const BottomHeader = styled.div`
  padding: 0 16px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-dark);
  cursor: pointer;
  user-select: none;
  &:hover { background: var(--bg-panel-2); }
`;

const PanelTitle = styled.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogArea = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const LogColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  &:last-child { border-right: none; }
`;

const LogSubHeader = styled.div`
  padding: 6px 16px;
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  background: var(--bg-panel-2);
  border-bottom: 1px solid var(--border);
`;

const LogContent = styled.div`
  flex: 1;
  padding: 10px 16px;
  overflow-y: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-primary);
  line-height: 1.6;
  
  .log-item { margin-bottom: 4px; }
  .ai-log { color: var(--accent-primary); font-weight: 500; }
  .error-log { color: var(--danger); }
  .success-log { color: var(--success); }
`;

function App() {
  const toast = useToast();
  const [isDark, setIsDark] = useState(() => localStorage.getItem('flowlabs_theme') !== 'light');
  const [showWelcome, setShowWelcome] = useState(() => !localStorage.getItem('flowlabs_visited'));
  const [showEditor, setShowEditor] = useState(true);
  const [showLogs, setShowLogs] = useState(true);
  const [saveLoadOpen, setSaveLoadOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [executing, setExecuting] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [language, setLanguage] = useState<'javascript' | 'python'>('javascript');
  const [executor, setExecutor] = useState<FlowExecutor | null>(null);

  const { 
    nodes, edges, setNodes, setEdges, 
    studentMode, toggleStudentMode, 
    code, setCode, 
    executionLogs, addExecutionLog, clearExecutionLogs,
    autoLayout, validatePipeline, setNeedsFitView,
    executionSpeed, setExecutionSpeed,
    undo, redo, setActiveNodeId
  } = usePipelineStore();

  const toggleTheme = () => setIsDark(p => !p);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('flowlabs_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    if (showWelcome) localStorage.setItem('flowlabs_visited', 'true');
  }, [showWelcome]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 's': e.preventDefault(); handleSave(); break;
          case 'r': e.preventDefault(); handleRun(); break;
          case 'd': e.preventDefault(); handleDebugStart(); break;
          case 'z': e.preventDefault(); if (e.shiftKey) redo(); else undo(); break;
          case 'y': e.preventDefault(); redo(); break;
          case 'k': e.preventDefault(); setShowEditor(p => !p); break;
          case 'l': e.preventDefault(); setShowLogs(p => !p); break;
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo]);

  const handleSave = () => {
    const data = { nodes, edges, code, timestamp: Date.now() };
    const saved = JSON.parse(localStorage.getItem('flowlabs_saved_pipelines') || '[]');
    saved.push({ id: `p-${Date.now()}`, name: `Pipeline ${new Date().toLocaleString()}`, ...data });
    localStorage.setItem('flowlabs_saved_pipelines', JSON.stringify(saved));
    toast.success("Pipeline saved successfully!");
  };

  const handleRun = async () => {
    if (nodes.length === 0) { toast.warning("Canvas is empty!"); return; }
    
    const errors = validatePipeline();
    if (errors.length > 0) {
      errors.forEach(err => toast.error(err));
      return;
    }

    setExecuting(true);
    clearExecutionLogs();
    setActiveNodeId(null);
    setShowLogs(true);
    
    try {
      const { FlowExecutor } = await import('./engine/FlowExecutor');
      const engine = new FlowExecutor(nodes, edges, studentMode);
      const result = await engine.execute();
      
      if (result) {
        setNodes(nodes.map(n => ({
          ...n,
          data: {
            ...n.data,
            result: engine.nodeOutputs.get(n.id),
            error: engine.nodeErrors.get(n.id)
          }
        })));
        toast.success("Pipeline executed successfully!");
      }
    } catch (e) {
      toast.error(`Execution failed: ${String(e)}`);
    } finally {
      setExecuting(false);
    }
  };

  const handleDebugStart = async () => {
    if (nodes.length === 0) return;
    const { FlowExecutor } = await import('./engine/FlowExecutor');
    const engine = new FlowExecutor(nodes, edges, studentMode);
    engine.prepare();
    setExecutor(engine);
    setDebugMode(true);
    clearExecutionLogs();
    setActiveNodeId(null);
    setShowLogs(true);
    toast.info("Debugger started. Click 'Next Step' to proceed.");
  };

  const handleStep = async () => {
    if (!executor) return;
    const res = await executor.step();
    if (res) {
      setActiveNodeId(res.node);
      if (res.explanation) addExecutionLog(res.explanation);

      setNodes(nodes.map(n => ({
        ...n,
        data: {
          ...n.data,
          result: executor.nodeOutputs.get(n.id),
          error: executor.nodeErrors.get(n.id)
        }
      })));
    } else {
      toast.success("Execution completed.");
      setDebugMode(false);
      setExecutor(null);
      setActiveNodeId(null);
    }
  };

  const handleStop = () => {
    setDebugMode(false);
    setExecutor(null);
    setActiveNodeId(null);
    toast.info("Execution stopped.");
  };

  const handleSyncToPipeline = async () => {
    try {
      if (language === 'python') {
        const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '');
        const response = await fetch(`${API_URL}/api/parse-python`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        });
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setNodes(data.nodes);
        setEdges(data.edges);
      } else {
        const { parseCodeToPipeline } = await import('./utils/codeParser');
        const { nodes: newNodes, edges: newEdges } = parseCodeToPipeline(code);
        setNodes(newNodes);
        setEdges(newEdges);
      }
      setNeedsFitView(true);
      toast.success(`${language === 'python' ? 'Python' : 'JS'} synced to pipeline!`);
    } catch (e) {
      toast.error(`Sync failed: ${String(e)}`);
    }
  };

  const handleSyncToCode = async () => {
    try {
      const { CodeEmitter } = await import('./engine/CodeEmitter');
      const emitter = new CodeEmitter(nodes, edges, language);
      const generated = emitter.generate();
      setCode(generated);
      toast.success(`Synced to ${language === 'javascript' ? 'JavaScript' : 'Python'}!`);
      return generated;
    } catch (e) {
      toast.error(`Sync failed: ${String(e)}`);
      return '';
    }
  };

  const handleExport = () => {
    const data = { nodes, edges, language, timestamp: Date.now() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flowlabs-pipeline-${Date.now()}.json`;
    a.click();
    toast.success("Pipeline exported as JSON!");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.nodes && data.edges) {
          setNodes(data.nodes);
          setEdges(data.edges);
          if (data.language) setLanguage(data.language);
          setNeedsFitView(true);
          toast.success("Pipeline imported successfully!");
        }
      } catch (err) {
        toast.error("Failed to parse JSON file");
      }
    };
    reader.readAsText(file);
  };

  const handleDownloadCode = async () => {
    const generated = await handleSyncToCode();
    if (!generated) return;
    const blob = new Blob([generated], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const ext = language === 'javascript' ? 'js' : 'py';
    a.download = `flowlabs-code-${Date.now()}.${ext}`;
    a.click();
    toast.success(`Code downloaded as .${ext}`);
  };

  return (
    <AppContainer>
      <Header>
        <LogoArea onClick={() => setShowWelcome(true)}>
          <LogoIcon>
            <img src="/logo.png" alt="FlowLabs Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
          </LogoIcon>
          <LogoText>FlowLabs</LogoText>
        </LogoArea>

        <ButtonGroup>
          <button onClick={() => setSaveLoadOpen(true)}>💾 Templates</button>
          
          <div style={{ position: 'relative' }}>
            <button onClick={() => fileInputRef.current?.click()} title="Import JSON">📤 Import</button>
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              accept=".json" 
              onChange={handleImport} 
            />
          </div>
          
          <button onClick={handleExport} title="Export JSON">📥 Export</button>

          <button onClick={() => { autoLayout(); toast.info("Layout applied"); }}>📐 Layout</button>
          <button onClick={() => {
            const errs = validatePipeline();
            if (errs.length === 0) toast.success("Pipeline is valid!");
            else errs.forEach(e => toast.error(e));
          }}>🔍 Validate</button>
        </ButtonGroup>

        <NavDivider />

        <div style={{ flex: 1 }} />

        <ButtonGroup>
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value as any)}
            style={{ 
               background: 'var(--bg-panel-2)', 
               color: 'var(--text-primary)', 
               border: '1px solid var(--border)',
               borderRadius: '6px',
               padding: '4px 8px',
               fontSize: '11px',
               fontWeight: '700'
            }}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>

          <button 
            style={{ 
              borderColor: studentMode ? 'var(--success)' : 'var(--border)',
              background: studentMode ? 'var(--success-glow)' : 'transparent'
            }}
            onClick={toggleStudentMode}
          >
            🎓 {studentMode ? 'Student Mode' : 'Standard Mode'}
          </button>

          {!debugMode ? (
            <button onClick={handleDebugStart} style={{ color: 'var(--warning)' }}>🐞 Debug</button>
          ) : (
            <>
              <button onClick={handleStep} style={{ background: 'var(--warning)', color: 'white' }}>Next Step ▶</button>
              <button onClick={handleStop} style={{ color: 'var(--danger)' }}>Stop</button>
            </>
          )}
          
          <button 
            onClick={handleDownloadCode}
            style={{ color: 'var(--info)' }}
            title={`Download as .${language === 'javascript' ? 'js' : 'py'}`}
          >
            💾 Code
          </button>

          <button 
            onClick={handleRun} 
            disabled={executing}
            style={{ background: 'var(--success)', color: 'white' }}
          >
            {executing ? '⏳ Running...' : '🚀 Run'}
          </button>
        </ButtonGroup>

        <NavDivider />

        <ButtonGroup>
          <button onClick={() => setShowEditor(p => !p)} title="Toggle Code Editor (Ctrl+K)">
            {showEditor ? 'Hide Code' : 'Show Code'}
          </button>
          <button onClick={toggleTheme} title="Toggle Theme">
            {isDark ? '☀️' : '🌙'}
          </button>
        </ButtonGroup>
      </Header>

      <MainLayout>
        <EditorArea $isOpen={showEditor}>
          <CodeEditor
            code={code}
            language={language}
            onChange={(val: string | undefined) => setCode(val || '')}
            onSync={handleSyncToPipeline}
            theme={isDark ? 'dark' : 'light'}
          />
        </EditorArea>

        <NodeSidebar />

        <CanvasArea>
          <PipelineCanvas />
          
          <div style={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', gap: 10 }}>
            <button onClick={undo} title="Undo (Ctrl+Z)">⟲</button>
            <button onClick={redo} title="Redo (Ctrl+Y)">⟳</button>
          </div>
        </CanvasArea>

        <AIMentorPanel />
      </MainLayout>

      <BottomPanel $isOpen={showLogs}>
        <BottomHeader onClick={() => setShowLogs(p => !p)}>
          <PanelTitle>
            <span>{showLogs ? '▼' : '▲'}</span>
            Status & Execution Info
          </PanelTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginRight: '15px' }} onClick={e => e.stopPropagation()}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: 'var(--text-muted)' }}>
                <span>🐢 Slow</span>
                <input 
                  type="range" 
                  min="0" 
                  max="2000" 
                  step="100" 
                  value={executionSpeed} 
                  onChange={(e) => setExecutionSpeed(Number(e.target.value))}
                  style={{ width: '100px', height: '4px' }}
                />
                <span>🐇 Fast</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold', minWidth: '45px' }}>{executionSpeed}ms</span>
             </div>
          </div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
            Ctrl+L to toggle
          </div>
        </BottomHeader>
        {showLogs && (
          <LogArea>
            <LogColumn>
              <LogSubHeader>STEP-BY-STEP EXPLANATION</LogSubHeader>
              <LogContent>
                {executionLogs.length === 0 ? (
                  <div style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>Run in Student Mode to see AI explanations...</div>
                ) : (
                  executionLogs.map((log, i) => <div key={i} className="log-item ai-log">✨ {log}</div>)
                )}
              </LogContent>
            </LogColumn>
            <LogColumn style={{ flex: 0.5 }}>
              <LogSubHeader>PIPELINE SYNC</LogSubHeader>
              <LogContent style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                <button onClick={handleSyncToCode} style={{ width: '80%' }}>Pipeline → Code</button>
                <button onClick={handleSyncToPipeline} style={{ width: '80%' }}>Code → Pipeline</button>
              </LogContent>
            </LogColumn>
          </LogArea>
        )}
      </BottomPanel>

      {showWelcome && (
        <WelcomeModal 
          onClose={() => setShowWelcome(false)}
          onPasteCode={() => setShowEditor(true)}
          onBuildFresh={() => { setNodes([]); setEdges([]); setShowWelcome(false); }}
          onLoadTemplate={() => { setSaveLoadOpen(true); setShowWelcome(false); }}
        />
      )}

      <SaveLoadPanel
        isOpen={saveLoadOpen}
        onClose={() => setSaveLoadOpen(false)}
      />
    </AppContainer>
  );
}

export default App;
