
import { FlowExecutor } from './FlowExecutor';
import { type Node, type Edge } from 'reactflow';

// Mock Nodes and Edges for Testing
const testMathFlow = () => {
    console.log("Testing Math Flow...");
    const nodes: Node[] = [
        { id: '1', type: 'input', data: { label: 'Input A', value: 10 }, position: { x: 0, y: 0 } },
        { id: '2', type: 'input', data: { label: 'Input B', value: 5 }, position: { x: 0, y: 0 } },
        { id: '3', type: 'math', data: { label: 'Add', op: 'add' }, position: { x: 0, y: 0 } },
        { id: '4', type: 'output', data: { label: 'Out' }, position: { x: 0, y: 0 } }
    ];
    const edges: Edge[] = [
        { id: 'e1', source: '1', target: '3', targetHandle: 'a' },
        { id: 'e2', source: '2', target: '3', targetHandle: 'b' },
        { id: 'e3', source: '3', target: '4' }
    ];

    const executor = new FlowExecutor(nodes, edges);
    return executor.execute().then(() => {
        const output = executor.nodeOutputs.get('4');
        if (output === 15) console.log("✅ Math Flow Passed: 15");
        else console.error(`❌ Math Flow Failed: Expected 15, got ${output}`);
    });
};

const testLogicFlow = () => {
    console.log("Testing Logic Flow...");
    const nodes: Node[] = [
        { id: '1', type: 'input', data: { label: 'Val 1', value: 10 }, position: { x: 0, y: 0 } },
        { id: '2', type: 'input', data: { label: 'Val 2', value: 20 }, position: { x: 0, y: 0 } },
        { id: '3', type: 'compare', data: { label: 'Compare', op: 'lt' }, position: { x: 0, y: 0 } }, // 10 < 20 = true
        { id: '4', type: 'if', data: { label: 'If' }, position: { x: 0, y: 0 } },
        { id: '5', type: 'assignment', data: { label: 'Set True', varName: 'status' }, position: { x: 0, y: 0 } },
        { id: '6', type: 'input', data: { label: 'TrueVal', value: 1 }, position: { x: 0, y: 0 } }
    ];
    const edges: Edge[] = [
        { id: 'e1', source: '1', target: '3', targetHandle: 'a' },
        { id: 'e2', source: '2', target: '3', targetHandle: 'b' },
        { id: 'e3', source: '3', target: '4', targetHandle: 'condition' },
        { id: 'e4', source: '4', sourceHandle: 'true', target: '5' },
        { id: 'e5', source: '6', target: '5', targetHandle: 'value' }
    ];

    const executor = new FlowExecutor(nodes, edges);
    return executor.execute().then(res => {
        const status = res.context['status'];
        if (status === 1) console.log("✅ Logic Flow Passed: status = 1");
        else console.error(`❌ Logic Flow Failed: Expected status=1, got ${status}`);
    });
};


const testWhileLoop = () => {
    console.log("Testing While Loop...");
    // i = 0; while(i < 3) { i = i + 1 }
    const nodes: Node[] = [
        { id: '1', type: 'assignment', data: { label: 'Init i=0', varName: 'i' }, position: { x: 0, y: 0 } },
        { id: 'start_val', type: 'input', data: { value: 0 }, position: { x: 0, y: 0 } },

        { id: '2', type: 'while', data: { label: 'While' }, position: { x: 0, y: 0 } },

        // Condition: i < 3
        { id: '3', type: 'input', data: { label: 'Limit', value: 3 }, position: { x: 0, y: 0 } },
        { id: '4', type: 'compare', data: { label: 'i < 3', op: 'lt' }, position: { x: 0, y: 0 } },

        // Body: i = i + 1
        { id: '5', type: 'math', data: { label: 'Add 1', op: 'add' }, position: { x: 0, y: 0 } },
        { id: 'inc_val', type: 'input', data: { value: 1 }, position: { x: 0, y: 0 } },
        { id: '6', type: 'assignment', data: { label: 'i = i+1', varName: 'i' }, position: { x: 0, y: 0 } },

        // Read i for condition and math
        // In real app, we usually have a "Variable Read" node or directly connect from assignment?
        // FlowExecutor context handling implies we might need to rely on 'assignment' outputting the value.
    ];

    // Note: The execution engine puts results in 'nodeOutputs' and 'context'.
    // For loop condition, we need to feed the CURRENT value of 'i' into the compare node.
    // In FlowExecutor, 'assignment' outputs the assigned value.
    // But 'i' changes over time. The edges need to come from the node that represents 'i'.
    // In this simple graph model, referencing a variable usually requires a "Get Variable" node or similar.
    // However, FlowExecutor doesn't have a specific "Get Variable" node type in the switch case!
    // It relies on direct connections. 
    // Wait, 'InputNode' with specific label 'const/let' sets context.
    // But how do we read it back?
    // Looking at FlowExecutor: 'math' reads from 'edge.source'.
    // So we must connect the 'assignment' node (which outputs expected value) to 'compare'.
    // BUT checks run before body.
    // This circular dependency is standard in dataflow. 
    // Let's see if FlowExecutor handles re-evaluation:
    // It uses 'executionQueue'. It re-executes nodes if they are in the queue.
    // When loop body finishes, it pushes 'while' node again.
    // 'while' node re-evaluates condition.
    // condition depends on 'compare', which depends on 'i'.
    // So 'compare' must also be re-evaluated?
    // FlowExecutor logic:
    // `outputs.forEach(edge => { if (target) executionQueue.push(target) })`
    // This pushes NEXT nodes. It doesn't automatically re-evaluate PREVIOUS dependency nodes (like 'compare').
    // THIS IS A POTENTIAL BUG in the visual programming model or the executor!
    // If 'compare' isn't re-run, the condition never changes!

    // Let's test this hypothesis.
    // Constructing the edges:

    const edges: Edge[] = [
        { id: 'e1', source: 'start_val', target: '1', targetHandle: 'value' }, // Init i=0
        { id: 'e2', source: '1', target: '2' }, // Flow: Init -> While

        // Condition
        // We need 'i' into 'compare'. Initial 'i' comes from '1'. Updated 'i' comes from '6'.
        // ReactFlow allows multiple connections to one handle? Usually yes.
        // Let's connect '1' (init) and '6' (update) to '4' (compare a).
        { id: 'e3', source: '1', target: '4', targetHandle: 'a' },
        { id: 'e4', source: '6', target: '4', targetHandle: 'a' },
        { id: 'e5', source: '3', target: '4', targetHandle: 'b' }, // 3 into compare b
        { id: 'e6', source: '4', target: '2', targetHandle: 'condition' }, // Compare -> While Condition

        // Body
        { id: 'e7', source: '2', sourceHandle: 'body', target: '5' }, // While Body -> Add

        // Math: i + 1. 'i' comes from '1' or '6'.
        { id: 'e8', source: '1', target: '5', targetHandle: 'a' },
        { id: 'e9', source: '6', target: '5', targetHandle: 'a' },
        { id: 'e10', source: 'inc_val', target: '5', targetHandle: 'b' }, // 1 into Math b

        // Assign Result -> i
        { id: 'e11', source: '5', target: '6', targetHandle: 'value' },

        // Loop back?? FlowExecutor While logic:
        // "Determine Next Nodes... outputs... push target".
        // It pushes 'body' target.
        // At end of Body chain, how does it go back to While?
        // `if (node.type === 'while')` -> pushes body.
        // Normal nodes -> push children.
        // So we must connect the end of body ('6') back to 'while' ('2')?
        // Usually visual loops have an implicit loop back or an explicit edge.
        // FlowExecutor `while` doesn't explicitly look for a back edge. 
        // But if '6' connects to '2', it would push '2' to queue.
        { id: 'e12', source: '6', target: '2' }
    ];

    const executor = new FlowExecutor(nodes, edges);
    return executor.execute().then(res => {
        // Assert i = 3
        const finalI = res.context['i'];
        console.log("While Loop Result:", finalI);
        if (finalI === 3) console.log("✅ While Loop Passed");
        else console.error(`❌ While Loop Failed: Expected 3, got ${finalI}`);
    });
};

const testArrayOps = () => {
    console.log("Testing Array Ops...");
    // [] -> Push 10 -> Push 20
    const nodes: Node[] = [
        { id: '1', type: 'array', data: { label: 'Create', mode: 'create' }, position: { x: 0, y: 0 } },
        { id: '2', type: 'input', data: { value: 10 }, position: { x: 0, y: 0 } },
        { id: '3', type: 'array', data: { label: 'Push 10', mode: 'push' }, position: { x: 0, y: 0 } },
        { id: '4', type: 'input', data: { value: 20 }, position: { x: 0, y: 0 } },
        { id: '5', type: 'array', data: { label: 'Push 20', mode: 'push' }, position: { x: 0, y: 0 } },
    ];
    const edges: Edge[] = [
        // Create -> Push 10
        { id: 'e1', source: '1', target: '3', targetHandle: 'arr' },
        { id: 'e2', source: '2', target: '3', targetHandle: 'val' },
        { id: 'e_flow1', source: '1', target: '3' }, // Control flow

        // Push 10 -> Push 20
        { id: 'e3', source: '3', target: '5', targetHandle: 'arr' },
        { id: 'e4', source: '4', target: '5', targetHandle: 'val' },
        { id: 'e_flow2', source: '3', target: '5' } // Control flow

    ];

    const executor = new FlowExecutor(nodes, edges);
    return executor.execute().then(() => {
        const finalArr = executor.nodeOutputs.get('5');
        console.log("Array Result:", finalArr);
        if (Array.isArray(finalArr) && finalArr.length === 2 && finalArr[1] === 20) console.log("✅ Array Ops Passed");
        else console.error(`❌ Array Ops Failed: Expected [10, 20], got ${JSON.stringify(finalArr)}`);
    });
};


const runTests = async () => {
    try {
        await testMathFlow();
        await testLogicFlow();
        await testWhileLoop();
        await testArrayOps();
        console.log("All tests completed.");
        // @ts-ignore
        process.exit(0);
    } catch (e) {
        console.error("Test Error:", e);
        // @ts-ignore
        process.exit(1);
    }
};

runTests();
