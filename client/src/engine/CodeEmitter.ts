import { type Node, type Edge } from 'reactflow';
import type { CommonNodeData } from '../types/nodes';

export type TargetLanguage = 'javascript' | 'python';

export class CodeEmitter {
    private nodes: Map<string, Node<CommonNodeData>>;
    private edges: Map<string, Edge[]>;
    private generatedCode: string;
    private indentLevel: number;
    private visited: Set<string>;
    private language: TargetLanguage;

    constructor(nodes: Node<CommonNodeData>[], edges: Edge[], language: TargetLanguage = 'javascript') {
        this.nodes = new Map(nodes.map(n => [n.id, n]));
        this.edges = new Map();
        this.generatedCode = '';
        this.indentLevel = 0;
        this.visited = new Set();
        this.language = language;

        edges.forEach(e => {
            if (!this.edges.has(e.source)) this.edges.set(e.source, []);
            this.edges.get(e.source)?.push(e);
        });
    }

    private indent(): string {
        return '  '.repeat(this.indentLevel);
    }

    private emit(line: string) {
        this.generatedCode += this.indent() + line + '\n';
    }

    public generate(): string {
        this.generatedCode = '';
        this.visited.clear();
        this.indentLevel = 0;

        const allEdges = Array.from(this.edges.values()).flat();
        const incomingFlow = new Set(allEdges.filter(e => !e.targetHandle || ['flow-in', 'body', 'true', 'false', 'init', 'flow'].includes(e.targetHandle || '')).map(e => e.target));

        const roots = Array.from(this.nodes.values()).filter(n => {
            const hasIncomingFlow = incomingFlow.has(n.id);
            const isControlOrExpr = ['if', 'while', 'for', 'assignment', 'console', 'output', 'return', 'break', 'input', 'math', 'compare', 'logic'].includes(n.type || '');
            return !hasIncomingFlow && isControlOrExpr;
        });

        roots.sort((a, b) => a.position.y - b.position.y || a.id.localeCompare(b.id));

        for (const root of roots) {
            this.visit(root);
        }

        return this.generatedCode.trim();
    }

    private visit(node: Node<CommonNodeData>) {
        if (this.visited.has(node.id)) return;
        this.visited.add(node.id);

        const type = node.type;
        const data = node.data;

        switch (type) {
            case 'input': {
                const label = data.label || '';
                const varMatch = label.match(/\b(const|let|var)\b\s+([a-zA-Z0-9_$]+)/);
                if (varMatch) {
                    const varName = varMatch[2];
                    const valExpr = this.getIn(node.id, 'value') || (data.value !== undefined ? JSON.stringify(data.value) : '0');
                    if (this.language === 'javascript') {
                        this.emit(`${varMatch[1]} ${varName} = ${valExpr};`);
                    } else {
                        this.emit(`${varName} = ${valExpr}`);
                    }
                } else {
                    const valExpr = this.getIn(node.id, 'value') || (data.value !== undefined ? JSON.stringify(data.value) : 'None');
                    const comment = this.language === 'javascript' ? `// ${label}` : `# ${label}`;
                    this.emit(`${comment}: ${valExpr}`);
                }
                break;
            }
            case 'assignment': {
                const varName = data.varName || 'x';
                const valExpr = this.getIn(node.id, 'value') || '0';
                this.emit(this.language === 'javascript' ? `${varName} = ${valExpr};` : `${varName} = ${valExpr}`);
                break;
            }
            case 'console': {
                const valExpr = this.getIn(node.id, 'value') || '""';
                this.emit(this.language === 'javascript' ? `console.log(${valExpr});` : `print(${valExpr})`);
                break;
            }
            case 'if': {
                const cond = this.getIn(node.id, 'condition') || 'false';
                this.emit(this.language === 'javascript' ? `if (${cond}) {` : `if ${cond}:`);
                this.indentLevel++;
                const trueEdge = this.getOut(node.id, 'true');
                if (trueEdge) this.visit(this.nodes.get(trueEdge.target)!);
                this.indentLevel--;
                const falseEdge = this.getOut(node.id, 'false');
                if (falseEdge) {
                    this.emit(this.language === 'javascript' ? `} else {` : `else:`);
                    this.indentLevel++;
                    this.visit(this.nodes.get(falseEdge.target)!);
                    this.indentLevel--;
                }
                if (this.language === 'javascript') this.emit('}');
                break;
            }
            case 'while': {
                const cond = this.getIn(node.id, 'condition') || 'false';
                this.emit(this.language === 'javascript' ? `while (${cond}) {` : `while ${cond}:`);
                this.indentLevel++;
                const bodyEdge = this.getOut(node.id, 'body');
                if (bodyEdge) this.visit(this.nodes.get(bodyEdge.target)!);
                this.indentLevel--;
                if (this.language === 'javascript') this.emit('}');
                break;
            }
            case 'for': {
                const initEdge = this.getOut(node.id, 'init');
                if (initEdge) this.visit(this.nodes.get(initEdge.target)!);

                const cond = this.getIn(node.id, 'condition') || 'true';
                this.emit(this.language === 'javascript' ? `for (; ${cond}; ) {` : `while ${cond}:`);
                this.indentLevel++;
                
                const bodyEdge = this.getOut(node.id, 'body');
                if (bodyEdge) this.visit(this.nodes.get(bodyEdge.target)!);

                const stepEdge = this.getOut(node.id, 'step') || this.getOut(node.id, 'increment');
                if (stepEdge) this.visit(this.nodes.get(stepEdge.target)!);

                this.indentLevel--;
                if (this.language === 'javascript') this.emit('}');
                break;
            }
            case 'output': {
                const valExpr = this.getIn(node.id, 'value') || 'null';
                this.emit(this.language === 'javascript' ? `// Result: ${valExpr}` : `# Result: ${valExpr}`);
                break;
            }
            case 'return': {
                const valExpr = this.getIn(node.id, 'value') || '';
                this.emit(`return ${valExpr}`.trim() + (this.language === 'javascript' ? ';' : ''));
                break;
            }
            case 'math':
            case 'compare':
            case 'logic': {
                const expr = this.getExpr(node.id);
                this.emit(this.language === 'javascript' ? `${expr};` : expr);
                break;
            }
            case 'delay': {
                const ms = Number(data.duration) || 1000;
                if (this.language === 'javascript') {
                    this.emit(`await new Promise(r => setTimeout(r, ${ms}));`);
                } else {
                    this.emit(`import time; time.sleep(${ms / 1000})`);
                }
                break;
            }
        }

        // Sequential flow
        const out = this.edges.get(node.id) || [];
        for (const e of out) {
            if (!e.sourceHandle || e.sourceHandle === 'flow-out') {
                const target = this.nodes.get(e.target);
                if (target && !this.visited.has(target.id)) this.visit(target);
            }
        }
    }

    private getIn(nodeId: string, handle: string): string | null {
        const edge = Array.from(this.edges.values()).flat().find(e => e.target === nodeId && e.targetHandle === handle);
        if (!edge) return null;
        return this.getExpr(edge.source);
    }

    private getOut(nodeId: string, handle: string) {
        return (this.edges.get(nodeId) || []).find(e => e.sourceHandle === handle);
    }

    private getExpr(nodeId: string): string {
        const node = this.nodes.get(nodeId);
        if (!node) return 'undefined';
        const data = node.data;

        switch (node.type) {
            case 'input': return (data.label || '').split(/\s+/)[1] || JSON.stringify(data.value ?? 0);
            case 'math': {
                const a = this.getIn(node.id, 'a') || '0';
                const b = this.getIn(node.id, 'b') || '0';
                const ops: any = { add: '+', sub: '-', mul: '*', div: '/', mod: '%' };
                return `(${a} ${ops[data.op || 'add']} ${b})`;
            }
            case 'compare': {
                const a = this.getIn(node.id, 'a') || '0';
                const b = this.getIn(node.id, 'b') || '0';
                const ops: any = { eq: '==', neq: '!=', gt: '>', lt: '<', gte: '>=', lte: '<=' };
                return `(${a} ${ops[data.op || 'eq']} ${b})`;
            }
            case 'logic': {
                const a = this.getIn(node.id, 'a') || 'false';
                const b = this.getIn(node.id, 'b') || 'false';
                if (data.op === 'not') return `(!${a})`;
                const op = data.op === 'and' ? (this.language === 'javascript' ? '&&' : 'and') : (this.language === 'javascript' ? '||' : 'or');
                return `(${a} ${op} ${b})`;
            }
            case 'string': return JSON.stringify(data.value || "");
            case 'object': {
                const keys = String((data as any).keys || '').split(',').map(s => s.trim()).filter(Boolean);
                const pairs = keys.map(k => `${this.language === 'javascript' ? k : JSON.stringify(k)}: ${this.getIn(node.id, k) || 'null'}`);
                return `{ ${pairs.join(', ')} }`;
            }
            case 'assignment': return data.varName || 'x';
            default: return 'null';
        }
    }
}
