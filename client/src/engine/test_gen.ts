
import { CodeEmitter } from './CodeEmitter';
import { type Node, type Edge } from 'reactflow';

const testForLoopGen = () => {
    console.log("Testing Code Generation for For Loop...");
    const nodes: Node[] = [
        { id: '1', type: 'for', data: { label: 'For Loop' }, position: { x: 0, y: 0 } },
        { id: '2', type: 'input', data: { value: 10 }, position: { x: 0, y: 0 } },
        { id: '3', type: 'compare', data: { label: 'i < 10', op: 'lt' }, position: { x: 0, y: 0 } },
        { id: '4', type: 'console', data: { label: 'Log Body' }, position: { x: 0, y: 0 } }
    ];

    const edges: Edge[] = [
        // Condition connected to For Loop
        { id: 'e1', source: '2', target: '3', targetHandle: 'b' },
        { id: 'e2', source: '3', target: '1', targetHandle: 'condition' },

        // Body connected
        { id: 'e3', source: '1', sourceHandle: 'body', target: '4' }
    ];

    const emitter = new CodeEmitter(nodes, edges);
    const code = emitter.generate();
    console.log("Generated Code:\n" + code);

    if (code.includes('while (') && code.includes('console.log')) {
        console.log("✅ For Loop Code Gen Passed (fallback to while)");
    } else {
        console.error("❌ For Loop Code Gen Failed");
    }
};

testForLoopGen();
