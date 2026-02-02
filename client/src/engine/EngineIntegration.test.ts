import { describe, it, expect, vi } from 'vitest';
import { parseCodeToPipeline } from '../utils/codeParser';
import { FlowExecutor } from './FlowExecutor';
import { CodeEmitter } from './CodeEmitter';

describe('VPos Engine Integration', () => {
    it('should parse code, execute it, and emit back same logic', async () => {
        const sourceCode = `const a = 10;
const b = 20;
const sum = a + b;
console.log(sum);`;

        // 1. Parse Code to Pipeline
        const { nodes, edges } = parseCodeToPipeline(sourceCode);
        expect(nodes.length).toBeGreaterThan(0);
        expect(edges.length).toBeGreaterThan(0);

        // 2. Execute Pipeline
        const executor = new FlowExecutor(nodes, edges);
        const { context, logs } = await executor.execute();

        expect(context['a']).toBe(10);
        expect(context['b']).toBe(20);
        expect(context['sum']).toBe(30);
        expect(logs.some(l => l.includes('[CONSOLE.LOG] 30'))).toBe(true);

        // 3. Emit Pipeline back to Code
        const emitter = new CodeEmitter(nodes, edges);
        const generatedCode = emitter.generate();

        // Check if logic is preserved (emitter output doesn't have to be identical string, but equivalent)
        expect(generatedCode).toContain('a = 10');
        expect(generatedCode).toContain('b = 20');
        expect(generatedCode).toContain('sum = (a + b)');
        expect(generatedCode).toContain('console.log(sum)');
    });

    it('should handle loops correctly', async () => {
        const loopCode = `let i = 0;
while (i < 5) {
  i++;
}`;
        const { nodes, edges } = parseCodeToPipeline(loopCode);
        const executor = new FlowExecutor(nodes, edges);
        const { context } = await executor.execute();

        expect(context['i']).toBe(5);
    });

    it('should handle if conditions', async () => {
        const ifCode = `const x = 10;
let res = 0;
if (x > 5) {
  res = 1;
} else {
  res = 2;
}`;
        const { nodes, edges } = parseCodeToPipeline(ifCode);
        const executor = new FlowExecutor(nodes, edges);
        const { context } = await executor.execute();

        expect(context['res']).toBe(1);
    });
});
