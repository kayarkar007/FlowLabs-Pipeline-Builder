import { describe, it, expect } from 'vitest';
import { FlowExecutor } from './FlowExecutor';
import { type Node, type Edge } from 'reactflow';

describe('FlowExecutor', () => {
    it('should execute a simple math pipeline', async () => {
        const nodes: Node[] = [
            { id: '1', type: 'input', data: { label: 'const a = 10', value: 10 }, position: { x: 0, y: 0 } },
            { id: '2', type: 'input', data: { label: 'const b = 20', value: 20 }, position: { x: 0, y: 0 } },
            { id: '3', type: 'default', data: { label: 'Call console.log(a + b)' }, position: { x: 0, y: 0 } }
        ];
        const edges: Edge[] = [
            { id: 'e1', source: '1', target: '3' },
            { id: 'e2', source: '2', target: '3' }
        ];

        const executor = new FlowExecutor(nodes, edges);
        const result = await executor.execute();

        expect(result.context['a']).toBe(10);
        expect(result.context['b']).toBe(20);

        // Check logs for output
        const outputLog = result.logs.find(l => l.includes('[STDOUT] 30'));
        expect(outputLog).toBeDefined();
    });

    it('should handle variables correctly', async () => {
        const nodes: Node[] = [
            { id: '1', type: 'input', data: { label: 'const x = 50', value: 50 }, position: { x: 0, y: 0 } }
        ];
        const executor = new FlowExecutor(nodes, []);
        const result = await executor.execute();
        expect(result.context['x']).toBe(50);
    });
});
