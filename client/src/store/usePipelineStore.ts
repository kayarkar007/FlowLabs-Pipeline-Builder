import { create } from 'zustand';
import {
    type Connection,
    type Edge,
    type EdgeChange,
    type Node,
    type NodeChange,
    addEdge,
    type OnNodesChange,
    type OnEdgesChange,
    type OnConnect,
    applyNodeChanges,
    applyEdgeChanges,
} from 'reactflow';
import dagre from 'dagre';

type HistoryEntry = { nodes: Node[]; edges: Edge[] };

export type PipelineState = {
    nodes: Node[];
    edges: Edge[];
    studentMode: boolean;
    activeNodeId: string | null;
    executionLogs: string[];
    currentVariables: Record<string, any>;
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
    addNode: (node: any) => void;
    deleteNode: (id: string) => void;
    updateNodeData: (id: string, patch: Record<string, any>) => void;
    setNodes: (nodes: Node[]) => void;
    setEdges: (edges: Edge[]) => void;
    toggleStudentMode: () => void;
    setActiveNodeId: (id: string | null) => void;
    addExecutionLog: (log: string) => void;
    clearExecutionLogs: () => void;
    autoLayout: () => void;
    validatePipeline: () => string[];
    code: string;
    setCode: (code: string) => void;
    needsFitView: boolean;
    setNeedsFitView: (val: boolean) => void;
    executionSpeed: number;
    setExecutionSpeed: (speed: number) => void;
    // Undo / Redo
    past: HistoryEntry[];
    future: HistoryEntry[];
    undo: () => void;
    redo: () => void;
    _pushHistory: () => void;
    setCurrentVariables: (vars: Record<string, any>) => void;
};

const DEFAULT_CODE = `// Write your JavaScript code here
// Then click "Sync to Pipeline" to visualize it!

const a = 10;
const b = 20;
const sum = a + b;
console.log("Sum is:", sum);
`;

export const usePipelineStore = create<PipelineState>((set, get) => ({
    nodes: [],
    edges: [],
    code: DEFAULT_CODE,
    setCode: (code: string) => set({ code }),
    needsFitView: false,
    setNeedsFitView: (val: boolean) => set({ needsFitView: val }),
    executionSpeed: 500,
    setExecutionSpeed: (speed: number) => set({ executionSpeed: speed }),
    studentMode: false,
    activeNodeId: null,
    executionLogs: [],
    currentVariables: {},
    past: [],
    future: [],

    _pushHistory: () => {
        const { nodes, edges, past } = get();
        const snapshot: HistoryEntry = { nodes: JSON.parse(JSON.stringify(nodes)), edges: JSON.parse(JSON.stringify(edges)) };
        set({ past: [...past.slice(-49), snapshot], future: [] });
    },

    undo: () => {
        const { past, nodes, edges, future } = get();
        if (past.length === 0) return;
        const prev = past[past.length - 1];
        const current: HistoryEntry = { nodes: JSON.parse(JSON.stringify(nodes)), edges: JSON.parse(JSON.stringify(edges)) };
        set({
            nodes: prev.nodes,
            edges: prev.edges,
            past: past.slice(0, -1),
            future: [current, ...future.slice(0, 49)],
        });
    },

    redo: () => {
        const { past, nodes, edges, future } = get();
        if (future.length === 0) return;
        const next = future[0];
        const current: HistoryEntry = { nodes: JSON.parse(JSON.stringify(nodes)), edges: JSON.parse(JSON.stringify(edges)) };
        set({
            nodes: next.nodes,
            edges: next.edges,
            past: [...past.slice(-49), current],
            future: future.slice(1),
        });
    },

    onNodesChange: (changes: NodeChange[]) => {
        const isSignificant = changes.some(c => c.type === 'remove' || c.type === 'add');
        if (isSignificant) get()._pushHistory();
        set({ nodes: applyNodeChanges(changes, get().nodes) });
    },

    onEdgesChange: (changes: EdgeChange[]) => {
        const isSignificant = changes.some(c => c.type === 'remove' || c.type === 'add');
        if (isSignificant) get()._pushHistory();
        set({ edges: applyEdgeChanges(changes, get().edges) });
    },

    onConnect: (connection: Connection) => {
        get()._pushHistory();
        set({ edges: addEdge({ ...connection, type: 'buttonEdge', animated: true }, get().edges) });
    },

    addNode: (node: any) => {
        get()._pushHistory();
        set({ nodes: [...get().nodes, node] });
    },

    deleteNode: (id: string) => {
        get()._pushHistory();
        set({
            nodes: get().nodes.filter(n => n.id !== id),
            edges: get().edges.filter(e => e.source !== id && e.target !== id),
        });
    },

    updateNodeData: (id: string, patch: Record<string, any>) => {
        set({
            nodes: get().nodes.map(n =>
                n.id === id ? { ...n, data: { ...n.data, ...patch } } : n
            ),
        });
    },

    setNodes: (nodes: Node[]) => set({ nodes }),
    setEdges: (edges: Edge[]) => set({ edges }),

    toggleStudentMode: () => set(state => ({ studentMode: !state.studentMode })),
    setActiveNodeId: (id: string | null) => set({ activeNodeId: id }),
    addExecutionLog: (log: string) => set(state => ({ executionLogs: [...state.executionLogs, log] })),
    clearExecutionLogs: () => set({ executionLogs: [] }),
    setCurrentVariables: (vars: Record<string, any>) => set({ currentVariables: vars }),

    autoLayout: () => {
        const { nodes, edges } = get();
        if (nodes.length === 0) return;

        const g = new dagre.graphlib.Graph();
        g.setDefaultEdgeLabel(() => ({}));
        g.setGraph({ rankdir: 'TB', ranksep: 80, nodesep: 60, edgesep: 40 });

        nodes.forEach(n => g.setNode(n.id, { width: 180, height: 100 }));
        edges.forEach(e => g.setEdge(e.source, e.target));

        dagre.layout(g);

        const newNodes = nodes.map(n => {
            const pos = g.node(n.id);
            return { ...n, position: { x: pos.x - 90, y: pos.y - 50 } };
        });

        set({ nodes: newNodes, needsFitView: true });
    },

    validatePipeline: () => {
        const { nodes, edges } = get();
        const errors: string[] = [];

        if (nodes.length === 0) {
            errors.push('Pipeline is empty. Add some nodes to get started.');
            return errors;
        }

        const incomingEdges = new Set(edges.map(e => e.target));

        nodes.forEach(node => {
            const type = node.type || '';
            const label = node.data?.label || node.id;

            // Check math/compare need both inputs
            if (type === 'math' || type === 'compare') {
                const hasA = edges.some(e => e.target === node.id && e.targetHandle === 'a');
                const hasB = edges.some(e => e.target === node.id && e.targetHandle === 'b');
                if (!hasA) errors.push(`"${label}": Missing input A`);
                if (!hasB) errors.push(`"${label}": Missing input B`);
            }

            // Logic node needs at least A (B optional for NOT)
            if (type === 'logic') {
                const hasA = edges.some(e => e.target === node.id && e.targetHandle === 'a');
                if (!hasA) errors.push(`"${label}": Missing input A`);
            }

            // If/While/For need a condition
            if (type === 'if' || type === 'while' || type === 'for') {
                const hasCond = edges.some(e => e.target === node.id && e.targetHandle === 'condition');
                if (!hasCond) errors.push(`"${label}": Missing condition input`);
            }

            // Output needs a value
            if (type === 'output') {
                const hasVal = edges.some(e => e.target === node.id && e.targetHandle === 'value');
                if (!hasVal) errors.push(`"${label}": Not connected to any output value`);
            }

            // Warn about isolated non-expression nodes
            const isPure = ['math', 'compare', 'logic', 'string', 'array', 'input'].includes(type);
            if (!isPure && !incomingEdges.has(node.id) && type !== 'start') {
                const hasOutgoing = edges.some(e => e.source === node.id);
                if (!hasOutgoing && nodes.length > 1) {
                    errors.push(`"${label}": This node is isolated (not connected)`);
                }
            }
        });

        return errors;
    },
}));
