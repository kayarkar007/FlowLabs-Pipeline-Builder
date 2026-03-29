
import { FlowExecutor } from './FlowExecutor';
import type { Node, Edge } from 'reactflow';

// Mock Node and Edge types if needed, but we import from FlowExecutor which imports types
// We need to construct a scenario where multiple inputs feed into one node
// and ensure that regardless of edge array order, the same input is chosen (based on tick or ID).

async function runDeterministicTest() {
    console.log("Starting Deterministic Input Resolution Test...");

    const edges: Edge[] = [
        // Both A and B connect to Output
        // We will execute them so they finish at the same tick
        { id: 'e1', source: 'node-A', target: 'node-out', sourceHandle: 'val', targetHandle: 'target' },
        { id: 'e2', source: 'node-B', target: 'node-out', sourceHandle: 'val', targetHandle: 'target' },
    ];

    const nodes: Node[] = [
        { id: 'node-A', type: 'input', data: { label: 'Node A', value: 10 }, position: { x: 0, y: 0 } },
        { id: 'node-B', type: 'input', data: { label: 'Node B', value: 20 }, position: { x: 0, y: 50 } },
        { id: 'node-out', type: 'output', data: { label: 'Output' }, position: { x: 100, y: 25 } },
    ];

    // Case 1: Standard Order
    const executor1 = new FlowExecutor(nodes, edges);
    await executor1.execute();
    const result1 = executor1.nodeOutputs.get('node-out');
    console.log(`Run 1 (Standard) Result: ${result1}`);

    // Case 2: Swapped Edge Order
    // The executor sorts edges internally in the constructor or we pass them swapped
    const edgesSwapped = [edges[1], edges[0]];
    const executor2 = new FlowExecutor(nodes, edgesSwapped);
    await executor2.execute();
    const result2 = executor2.nodeOutputs.get('node-out');
    console.log(`Run 2 (Swapped Edges) Result: ${result2}`);

    // Case 3: Swapped Node Order (affects execution order if not careful, but ticks should be equal)
    // Actually, if we use BFS, order might depend on array order.
    // FlowExecutor uses: roots sort by default? 
    // Roots sort: "Inputs first", but then stable sort?
    // Let's see FlowExecutor: roots.sort inputs first...
    // If both are inputs, it uses default sort (0).
    // So `executionQueue` order depends on `nodes` array order if they are equal priority.
    // If A runs first, it sets tick 1. B runs second, it sets tick 2.
    // Wait, `processNode` increments `currentTick`.
    // So `lastExecutionTick` will be different!
    // If A runs at tick 1, B runs at tick 2.
    // Output node runs at tick 3.
    // It picks Max Tick. So B (tick 2) should win.

    // So the last executed node wins.
    // Determinism here means: "If I run the same graph, same nodes/edges logic, I get same result."
    // If `nodes` array is shaken, execution order might change, thus winner changes.
    // Ideally, we want topological sort to be stable.
    // FlowExecutor sort: 
    // roots.sort((a,b) => ...).
    // If a and b are same type, returns 0. Array.sort is stable in modern JS? 
    // But if we want stricter determinism, we should sort by ID or Position if types match.

    // Let's verify if result matches.

    if (result1 === result2) {
        console.log("PASS: Result is consistent despite edge order.");
    } else {
        console.error("FAIL: Result changed with edge order!");
    }
}

runDeterministicTest().catch(console.error);
