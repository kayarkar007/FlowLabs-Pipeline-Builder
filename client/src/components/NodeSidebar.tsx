import React, { useState } from 'react';
import styled from 'styled-components';
import { usePipelineStore } from '../store/usePipelineStore';

const Sidebar = styled.div<{ $collapsed: boolean }>`
  width: ${p => p.$collapsed ? '44px' : '200px'};
  background: var(--bg-panel);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transition: width 0.25s cubic-bezier(0.4,0,0.2,1);
  overflow: hidden;
  flex-shrink: 0;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
  gap: 6px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg-input);
  color: var(--text-primary);
  padding: 5px 8px;
  font-size: 12px;
  font-family: inherit;
  outline: none;
  transition: var(--transition-fast);
  min-width: 0;
  &:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 2px var(--accent-glow); }
  &::placeholder { color: var(--text-muted); }
`;

const CollapseBtn = styled.button`
  background: transparent !important;
  border: none !important;
  padding: 4px 6px !important;
  font-size: 14px !important;
  flex-shrink: 0;
  color: var(--text-muted) !important;
  &:hover { color: var(--text-primary) !important; }
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px;
`;

const CategoryLabel = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 6px 4px 4px;
  margin-top: 4px;
`;

const NodeItem = styled.div<{ $color: string }>`
  padding: 7px 10px;
  background: var(--bg-input);
  border-radius: 7px;
  border: 1px solid var(--border);
  cursor: grab;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-primary);
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
  user-select: none;

  .icon {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: ${p => p.$color}22;
    border: 1px solid ${p => p.$color}44;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    flex-shrink: 0;
    color: ${p => p.$color};
    font-weight: 700;
  }

  &:hover {
    border-color: ${p => p.$color};
    background: ${p => p.$color}12;
    transform: translateX(2px);
    box-shadow: 3px 0 0 0 ${p => p.$color};
  }
  &:active { cursor: grabbing; }
`;

const NODE_CATALOG = [
  {
    name: 'Basic',
    nodes: [
      { type: 'start',      label: 'Start',        icon: '▶',  color: '#94a3b8', defaultData: { label: 'Start' } },
      { type: 'input',      label: 'Variable',     icon: 'x=', color: '#6366f1', defaultData: { label: 'const x', value: '0' } },
      { type: 'assignment', label: 'Assignment',   icon: '=',  color: '#10b981', defaultData: { label: 'Assign x', varName: 'x' } },
      { type: 'output',     label: 'Output',       icon: '📤', color: '#10b981', defaultData: { label: 'Output' } },
      { type: 'console',    label: 'Console.log',  icon: '🖥', color: '#06b6d4', defaultData: { label: 'Console Log' } },
      { type: 'comment',    label: 'Sticky Note',  icon: '📝', color: '#fcd34d', defaultData: { comment: 'Write a note...' } },
    ],
  },
  {
    name: 'Math & Logic',
    nodes: [
      { type: 'math',    label: 'Math Op',    icon: '±',  color: '#3b82f6', defaultData: { label: 'Math: add', op: 'add' } },
      { type: 'compare', label: 'Compare',    icon: '⚖', color: '#8b5cf6', defaultData: { label: 'Compare: eq', op: 'eq' } },
      { type: 'logic',   label: 'Logic Gate', icon: '∧',  color: '#e91e63', defaultData: { label: 'Logic: and', op: 'and' } },
      { type: 'string',  label: 'String',     icon: '"',  color: '#f59e0b', defaultData: { label: 'String', value: '' } },
      { type: 'delay',   label: 'Delay',      icon: '⏳', color: '#f59e0b', defaultData: { duration: 1000 } },
    ],
  },
  {
    name: 'Control Flow',
    nodes: [
      { type: 'if',       label: 'If / Else',  icon: '?', color: '#f59e0b', defaultData: { label: 'If Condition' } },
      { type: 'while',    label: 'While Loop', icon: '↺', color: '#06b6d4', defaultData: { label: 'While Loop' } },
      { type: 'for',      label: 'For Loop',   icon: '↻', color: '#3f51b5', defaultData: { label: 'For Loop' } },
      { type: 'break',    label: 'Break',      icon: '⛔', color: '#ef4444', defaultData: { label: 'Break' } },
      { type: 'continue', label: 'Continue',   icon: '↷', color: '#f59e0b', defaultData: { label: 'Continue' } },
      { type: 'return',   label: 'Return',     icon: '⬅', color: '#8b5cf6', defaultData: { label: 'Return' } },
    ],
  },
  {
    name: 'Data Structures',
    nodes: [
      { type: 'array',  label: 'Array',    icon: '[]', color: '#8b5cf6', defaultData: { label: 'Array', mode: 'create' } },
      { type: 'object', label: 'Object',   icon: '{}', color: '#f97316', defaultData: { label: 'Object', keys: 'name, age' } },
    ],
  },
  {
    name: 'Functions',
    nodes: [
      { type: 'function', label: 'Function Def', icon: 'λ', color: '#6366f1', defaultData: { label: 'Function', name: 'myFunction' } },
      { type: 'call',     label: 'Call Function', icon: '()', color: '#06b6d4', defaultData: { label: 'Call', name: 'myFunction' } },
    ],
  },
];

export const NodeSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState('');
  const addNode = usePipelineStore(s => s.addNode);

  const onDragStart = (e: React.DragEvent, type: string, defaultData: any) => {
    e.dataTransfer.setData('application/reactflow', type);
    e.dataTransfer.setData('application/nodedata', JSON.stringify(defaultData));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDoubleClick = (type: string, defaultData: any) => {
    addNode({
      id: `node-${type}-${Date.now()}`,
      type,
      position: { x: 400 + Math.random() * 200, y: 150 + Math.random() * 200 },
      data: { ...defaultData },
    });
  };

  const filteredCatalog = NODE_CATALOG.map(cat => ({
    ...cat,
    nodes: cat.nodes.filter(n =>
      !search || n.label.toLowerCase().includes(search.toLowerCase()) || n.type.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.nodes.length > 0);

  return (
    <Sidebar $collapsed={collapsed}>
      <SidebarHeader>
        {!collapsed && (
          <SearchInput
            placeholder="Search nodes…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        )}
        <CollapseBtn onClick={() => setCollapsed(p => !p)} title={collapsed ? 'Expand' : 'Collapse'}>
          {collapsed ? '▶' : '◀'}
        </CollapseBtn>
      </SidebarHeader>

      {!collapsed && (
        <ScrollArea>
          {filteredCatalog.map(cat => (
            <div key={cat.name}>
              <CategoryLabel>{cat.name}</CategoryLabel>
              {cat.nodes.map(node => (
                <NodeItem
                  key={node.type}
                  $color={node.color}
                  draggable
                  title={`Drag to canvas or double-click to add`}
                  onDragStart={e => onDragStart(e, node.type, node.defaultData)}
                  onDoubleClick={() => handleDoubleClick(node.type, node.defaultData)}
                >
                  <span className="icon">{node.icon}</span>
                  {node.label}
                </NodeItem>
              ))}
            </div>
          ))}
          {filteredCatalog.length === 0 && (
            <div style={{ padding: '20px 8px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '12px' }}>
              No nodes found
            </div>
          )}
          <div style={{ padding: '8px 4px', color: 'var(--text-muted)', fontSize: '10px', textAlign: 'center', marginTop: '8px' }}>
            Drag to canvas or double-click to add
          </div>
        </ScrollArea>
      )}
    </Sidebar>
  );
};
