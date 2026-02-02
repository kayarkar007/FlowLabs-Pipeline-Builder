import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { usePipelineStore } from '../store/usePipelineStore';
import { templates, getAllCategories } from '../data/templates';
import { useToast } from './ToastNotification';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.3s ease;
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

const ModalContent = styled.div`
  background: var(--bg-panel);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  max-width: 900px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
`;

const ModalHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-dark);
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  &:hover { color: var(--danger); transform: rotate(90deg); }
  transition: var(--transition-fast);
`;

const TabContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 24px 0;
  border-bottom: 1px solid var(--border);
  background: var(--bg-panel);
`;

const Tab = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? 'var(--bg-input)' : 'transparent'};
  color: ${props => props.$active ? 'var(--accent-primary)' : 'var(--text-muted)'};
  border: 1px solid ${p => p.$active ? 'var(--border-light)' : 'transparent'};
  border-bottom: 2px solid ${p => p.$active ? 'var(--accent-primary)' : 'transparent'};
  padding: 10px 20px;
  border-radius: 8px 8px 0 0;
  font-weight: 700;
  font-size: 13px;
  &:hover { color: var(--text-primary); }
`;

const ModalBody = styled.div`
  padding: 24px;
  flex: 1;
  overflow-y: auto;
  background: var(--bg-dark);
`;

const CategoryBar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 8px;
  &::-webkit-scrollbar { height: 4px; }
`;

const CatBtn = styled.button<{ $active: boolean }>`
  font-size: 11px !important;
  background: ${p => p.$active ? 'var(--accent-primary)' : 'var(--bg-panel)'} !important;
  color: ${p => p.$active ? 'white' : 'var(--text-secondary)'} !important;
  border: 1px solid ${p => p.$active ? 'var(--accent-primary)' : 'var(--border)'} !important;
  padding: 4px 12px !important;
  border-radius: 20px !important;
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`;

const TemplateCard = styled.div`
  background: var(--bg-panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    border-color: var(--accent-primary);
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg), 0 0 20px var(--accent-glow);
  }
`;

const TemplateTitle = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
`;

const TemplateDescription = styled.p`
  margin: 0;
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.5;
  flex: 1;
`;

const CategoryBadge = styled.span`
  align-self: flex-start;
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--accent-primary);
  background: var(--accent-glow);
  padding: 2px 8px;
  border-radius: 4px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = styled.div`
  background: var(--bg-panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
  &:hover { border-color: var(--accent-primary); background: var(--bg-panel-2); }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: var(--text-primary);
`;

const DateText = styled.div`
  font-size: 11px;
  color: var(--text-muted);
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const Empty = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  .icon { font-size: 48px; opacity: 0.3; }
`;

interface SaveLoadPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_KEY = 'flowlabs_saved_pipelines';

export const SaveLoadPanel = ({ isOpen, onClose }: SaveLoadPanelProps) => {
  const toast = useToast();
  const [activeTab, setActiveTab] = useState<'templates' | 'saved'>('templates');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [savedPipelines, setSavedPipelines] = useState<any[]>([]);
  const { setNodes, setEdges, setCode, setNeedsFitView } = usePipelineStore();

  useEffect(() => {
    if (isOpen) loadSavedPipelines();
  }, [isOpen]);

  const loadSavedPipelines = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setSavedPipelines(saved ? JSON.parse(saved) : []);
  };

  const handleLoadTemplate = (t: any) => {
    setNodes(t.nodes);
    setEdges(t.edges);
    setNeedsFitView(true);
    toast.success(`Loaded "${t.name}" template`);
    onClose();
  };

  const handleSaveCurrent = () => {
    const { nodes, edges, code } = usePipelineStore.getState();
    const name = prompt('Name your pipeline:');
    if (!name) return;

    const pipeline = {
      id: `p-${Date.now()}`,
      name,
      nodes,
      edges,
      code,
      timestamp: Date.now()
    };

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    saved.push(pipeline);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    loadSavedPipelines();
    toast.success("Pipeline saved!");
  };

  const handleLoadPipeline = (p: any) => {
    setNodes(p.nodes);
    setEdges(p.edges);
    if (p.code) setCode(p.code);
    setNeedsFitView(true);
    toast.success(`Loaded "${p.name}"`);
    onClose();
  };

  const handleDeletePipeline = (id: string) => {
    if (!confirm('Are you sure you want to delete this pipeline?')) return;
    const updated = savedPipelines.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSavedPipelines(updated);
    toast.info("Pipeline deleted");
  };

  const handleRename = (id: string, oldName: string) => {
    const newName = prompt('New name:', oldName);
    if (!newName || newName === oldName) return;
    const updated = savedPipelines.map(p => p.id === id ? { ...p, name: newName } : p);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSavedPipelines(updated);
    toast.success("Renamed!");
  };

  const handleExportJSON = () => {
    const { nodes, edges, code } = usePipelineStore.getState();
    const data = JSON.stringify({ nodes, edges, code, version: '2.0' }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flowlabs-export-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported JSON");
  };

  const handleImportJSON = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event: any) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data.nodes && data.edges) {
            setNodes(data.nodes);
            setEdges(data.edges);
            if (data.code) setCode(data.code);
            setNeedsFitView(true);
            toast.success("Imported successfully");
            onClose();
          } else throw new Error("Invalid format");
        } catch { toast.error("Failed to import: Invalid JSON file"); }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            <span>💾</span>
            Explorer
          </ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <TabContainer>
          <Tab $active={activeTab === 'templates'} onClick={() => setActiveTab('templates')}>
            Templates
          </Tab>
          <Tab $active={activeTab === 'saved'} onClick={() => setActiveTab('saved')}>
            My Pipelines
          </Tab>
        </TabContainer>

        <ModalBody>
          {activeTab === 'templates' ? (
            <>
              <CategoryBar>
                <CatBtn $active={selectedCategory === 'All'} onClick={() => setSelectedCategory('All')}>All</CatBtn>
                {getAllCategories().map(cat => (
                  <CatBtn key={cat} $active={selectedCategory === cat} onClick={() => setSelectedCategory(cat)}>{cat}</CatBtn>
                ))}
              </CategoryBar>
              <TemplateGrid>
                {templates
                  .filter(t => selectedCategory === 'All' || t.category === selectedCategory)
                  .map(t => (
                    <TemplateCard key={t.id} onClick={() => handleLoadTemplate(t)}>
                      <CategoryBadge>{t.category}</CategoryBadge>
                      <TemplateTitle>{t.name}</TemplateTitle>
                      <TemplateDescription>{t.description}</TemplateDescription>
                    </TemplateCard>
                  ))}
              </TemplateGrid>
            </>
          ) : (
            <>
              <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <button onClick={handleSaveCurrent} style={{ background: 'var(--success)', color: 'white' }}>Save Current</button>
                <button onClick={handleImportJSON}>Import JSON</button>
                <button onClick={handleExportJSON}>Export All</button>
              </div>

              {savedPipelines.length === 0 ? (
                <Empty>
                  <div className="icon">📂</div>
                  <div>No saved pipelines yet.</div>
                  <div style={{ fontSize: '11px' }}>Build something cool and save it here!</div>
                </Empty>
              ) : (
                <List>
                  {savedPipelines.map(p => (
                    <Item key={p.id}>
                      <Info>
                        <Name>{p.name}</Name>
                        <DateText>{new Date(p.timestamp).toLocaleString()}</DateText>
                      </Info>
                      <Actions>
                        <button onClick={() => handleLoadPipeline(p)} style={{ color: 'var(--success)' }}>Load</button>
                        <button onClick={() => handleRename(p.id, p.name)}>Rename</button>
                        <button onClick={() => handleDeletePipeline(p.id)} style={{ color: 'var(--danger)' }}>Delete</button>
                      </Actions>
                    </Item>
                  ))}
                </List>
              )}
            </>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};
