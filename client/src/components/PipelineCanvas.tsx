import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useReactFlow,
    ReactFlowProvider,
    BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';
import styled from 'styled-components';
import { usePipelineStore } from '../store/usePipelineStore';
import { nodeTypes, edgeTypes } from '../config/flowConfig';

const NODE_DEFAULT_DATA: Record<string, any> = {
    start:      { label: 'Start' },
    input:      { label: 'const x', value: '0' },
    assignment: { label: 'Assign x', varName: 'x' },
    output:     { label: 'Output', result: undefined },
    console:    { label: 'Console Log' },
    math:       { label: 'Math: add', op: 'add' },
    compare:    { label: 'Compare: eq', op: 'eq' },
    logic:      { label: 'Logic: and', op: 'and' },
    string:     { label: 'String', value: '' },
    array:      { label: 'Array', mode: 'create' },
    object:     { label: 'Object', keys: 'name, age' },
    if:         { label: 'If Condition' },
    while:      { label: 'While Loop' },
    for:        { label: 'For Loop' },
    break:      { label: 'Break' },
    continue:   { label: 'Continue' },
    return:     { label: 'Return' },
    function:   { label: 'Function', name: 'myFunction' },
    call:       { label: 'Call', name: 'myFunction' },
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ContextMenu = styled.div<{ x: number; y: number }>`
  position: fixed;
  top: ${p => p.y}px;
  left: ${p => p.x}px;
  background: var(--bg-panel);
  border: 1px solid var(--border-light);
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  min-width: 160px;
  overflow: hidden;
  animation: fadeIn 0.15s ease;
  @keyframes fadeIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }
`;

const MenuItem = styled.button<{ $danger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 9px 14px;
  border: none;
  border-radius: 0;
  background: transparent;
  font-size: 12.5px;
  font-weight: 500;
  color: ${p => p.$danger ? 'var(--danger)' : 'var(--text-primary)'};
  text-align: left;
  &:hover {
    background: ${p => p.$danger ? 'rgba(239,68,68,0.1)' : 'var(--bg-input)'};
    transform: none;
  }
`;

const MenuDivider = styled.div`
  height: 1px;
  background: var(--border);
  margin: 2px 0;
`;

const defaultEdgeOptions = {
    type: 'buttonEdge',
    animated: true,
    style: { stroke: 'var(--border-light)', strokeWidth: 2 },
};

interface ContextMenuState { x: number; y: number; nodeId: string | null; }

const PipelineCanvasContent = () => {
    const {
        nodes, edges, onNodesChange, onEdgesChange, onConnect,
        addNode, deleteNode, activeNodeId, needsFitView, setNeedsFitView,
    } = usePipelineStore();

    const wrapperRef = useRef<HTMLDivElement>(null);
    const { screenToFlowPosition, fitView } = useReactFlow();
    const [ctxMenu, setCtxMenu] = useState<ContextMenuState | null>(null);

    useEffect(() => {
        if (needsFitView) { fitView({ padding: 0.2, duration: 600 }); setNeedsFitView(false); }
    }, [needsFitView, fitView, setNeedsFitView]);

    // Close context menu on outside click
    useEffect(() => {
        const handler = () => setCtxMenu(null);
        window.addEventListener('click', handler);
        return () => window.removeEventListener('click', handler);
    }, []);

    const onDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        const type = e.dataTransfer.getData('application/reactflow');
        if (!type) return;

        let extraData = {};
        try {
            const raw = e.dataTransfer.getData('application/nodedata');
            if (raw) extraData = JSON.parse(raw);
        } catch {}

        const position = screenToFlowPosition({ x: e.clientX, y: e.clientY });
        addNode({
            id: `node-${type}-${Date.now()}`,
            type,
            position,
            data: { ...(NODE_DEFAULT_DATA[type] || { label: type }), ...extraData },
        });
    }, [screenToFlowPosition, addNode]);

    const onNodeContextMenu = useCallback((e: React.MouseEvent, node: any) => {
        e.preventDefault();
        setCtxMenu({ x: e.clientX, y: e.clientY, nodeId: node.id });
    }, []);

    const onPaneContextMenu = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setCtxMenu({ x: e.clientX, y: e.clientY, nodeId: null });
    }, []);

    const highlightedNodes = nodes.map(n => ({
        ...n,
        data: { ...n.data, isActive: n.id === activeNodeId },
        style: n.id === activeNodeId ? {
            boxShadow: '0 0 0 2px var(--success), 0 0 20px rgba(16,185,129,0.4)',
            transition: 'all 0.3s ease',
        } : n.style,
    }));

    return (
        <Wrapper ref={wrapperRef}>
            <ReactFlow
                nodes={highlightedNodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onNodeContextMenu={onNodeContextMenu}
                onPaneContextMenu={onPaneContextMenu}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                deleteKeyCode={['Backspace', 'Delete']}
                fitView
                proOptions={{ hideAttribution: true }}
            >
                <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="var(--border)" />
                <Controls showInteractive={false} />
                <MiniMap
                    nodeColor={n => {
                        const colors: Record<string, string> = {
                            input:'#6366f1', math:'#3b82f6', compare:'#8b5cf6', logic:'#e91e63',
                            if:'#f59e0b', while:'#06b6d4', for:'#3f51b5', output:'#10b981',
                        };
                        return colors[n.type || ''] || '#64748b';
                    }}
                    maskColor="rgba(10,15,30,0.7)"
                    style={{ background: 'var(--bg-panel)', border: '1px solid var(--border)', borderRadius: '8px' }}
                />
            </ReactFlow>

            {ctxMenu && (
                <ContextMenu x={ctxMenu.x} y={ctxMenu.y}>
                    {ctxMenu.nodeId ? (
                        <>
                            <MenuItem onClick={() => { askAI(ctxMenu.nodeId!); setCtxMenu(null); }}>
                                🤖 Explain this node
                            </MenuItem>
                            <MenuItem onClick={() => {
                                const node = nodes.find(n => n.id === ctxMenu.nodeId!);
                                if (node) addNode({ ...node, id: `node-${Date.now()}`, position: { x: node.position.x + 30, y: node.position.y + 30 } });
                                setCtxMenu(null);
                            }}>
                                📋 Duplicate
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem $danger onClick={() => { deleteNode(ctxMenu.nodeId!); setCtxMenu(null); }}>
                                🗑️ Delete node
                            </MenuItem>
                        </>
                    ) : (
                        <>
                            <MenuItem onClick={() => { fitView({ duration: 600 }); setCtxMenu(null); }}>
                                🎯 Fit to view
                            </MenuItem>
                            <MenuDivider />
                            <div style={{ padding: '4px 14px', fontSize: '10px', fontWeight: 'bold', color: 'var(--text-muted)' }}>QUICK ADD</div>
                            <MenuItem onClick={() => { 
                                addNode({ id: `node-input-${Date.now()}`, type: 'input', position: screenToFlowPosition({ x: ctxMenu.x, y: ctxMenu.y }), data: NODE_DEFAULT_DATA.input });
                                setCtxMenu(null);
                            }}>
                                📥 Variable
                            </MenuItem>
                            <MenuItem onClick={() => { 
                                addNode({ id: `node-math-${Date.now()}`, type: 'math', position: screenToFlowPosition({ x: ctxMenu.x, y: ctxMenu.y }), data: NODE_DEFAULT_DATA.math });
                                setCtxMenu(null);
                            }}>
                                ➕ Math Op
                            </MenuItem>
                            <MenuItem onClick={() => { 
                                addNode({ id: `node-comment-${Date.now()}`, type: 'comment', position: screenToFlowPosition({ x: ctxMenu.x, y: ctxMenu.y }), data: { comment: '' } });
                                setCtxMenu(null);
                            }}>
                                📝 Sticky Note
                            </MenuItem>
                        </>
                    )}
                </ContextMenu>
            )}
        </Wrapper>
    );
};

// Helper to dispatch explain request — will use window event
function askAI(nodeId: string) {
    window.dispatchEvent(new CustomEvent('flowlabs:explainNode', { detail: { nodeId } }));
}

export const PipelineCanvas = () => (
    <ReactFlowProvider>
        <PipelineCanvasContent />
    </ReactFlowProvider>
);
