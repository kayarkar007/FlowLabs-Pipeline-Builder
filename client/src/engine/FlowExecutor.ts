import { type Node, type Edge } from 'reactflow';
import type { CommonNodeData } from '../types/nodes';

export type ExecutionValue = string | number | boolean | any[] | Record<string, any> | undefined;

class Scope {
    public variables: Record<string, ExecutionValue> = {};
    public parent: Scope | null;

    constructor(parent: Scope | null = null) {
        this.parent = parent;
    }

    get(name: string): ExecutionValue {
        if (name in this.variables) return this.variables[name];
        if (this.parent) return this.parent.get(name);
        return undefined;
    }

    set(name: string, value: ExecutionValue) {
        if (this.parent && this.parent.has(name)) {
            this.parent.set(name, value);
        } else {
            this.variables[name] = value;
        }
    }

    has(name: string): boolean {
        return (name in this.variables) || (this.parent ? this.parent.has(name) : false);
    }
}

export class FlowExecutor {
    private nodes: Map<string, Node<CommonNodeData>>;
    private edges: Map<string, Edge[]>;
    private rootScope: Scope;
    private currentScope: Scope;
    private logs: string[];
    private executionQueue: Node<CommonNodeData>[];
    public nodeOutputs: Map<string, ExecutionValue>;
    public nodeErrors: Map<string, string>;
    public stepExplanations: Map<string, string>;
    private studentMode: boolean;
    private lastExecutionTick: Map<string, number>;
    private currentTick: number;

    // Use loopStates to track progress through a loop node
    private loopStates: Map<string, 'init' | 'check' | 'body' | 'increment' | 'exit'> = new Map();

    constructor(nodes: Node<CommonNodeData>[], edges: Edge[], studentMode: boolean = false) {
        this.nodes = new Map(nodes.map(n => [n.id, n]));
        this.edges = new Map();
        this.rootScope = new Scope();
        this.currentScope = this.rootScope;
        this.logs = [];
        this.executionQueue = [];
        this.nodeOutputs = new Map();
        this.nodeErrors = new Map();
        this.stepExplanations = new Map();
        this.studentMode = studentMode;
        this.lastExecutionTick = new Map();
        this.currentTick = 0;

        edges.forEach(e => {
            if (!this.edges.has(e.source)) this.edges.set(e.source, []);
            this.edges.get(e.source)?.push(e);
        });
    }

    public prepare() {
        const allEdges = Array.from(this.edges.values()).flat();
        const incomingFlow = new Set(allEdges.filter(e => !e.targetHandle || ['flow-in', 'body', 'true', 'false', 'init', 'flow'].includes(e.targetHandle || '')).map(e => e.target));
        
        const roots = Array.from(this.nodes.values()).filter(n => {
            const hasIncomingFlow = incomingFlow.has(n.id);
            const isControl = ['if', 'while', 'for', 'assignment', 'console', 'output', 'return', 'break', 'input'].includes(n.type || '');
            return !hasIncomingFlow && isControl;
        });

        roots.sort((a, b) => a.position.y - b.position.y || a.id.localeCompare(b.id));

        this.executionQueue = [...roots];
        this.nodeOutputs.clear();
        this.nodeErrors.clear();
        this.stepExplanations.clear();
        this.lastExecutionTick.clear();
        this.loopStates.clear();
        this.currentScope = this.rootScope;
        this.rootScope.variables = {};
        this.currentTick = 0;
        this.log(`FlowLabs Ready. Code: ${this.nodes.size} nodes. Mode: ${this.studentMode ? 'Student' : 'Full'}`);
    }

    public async execute() {
        this.prepare();
        let safety = 0;
        while (this.executionQueue.length > 0 && safety < 10000) {
            await this.step();
            safety++;
        }
        if (safety >= 10000) this.log("Execution limit exceeded (Infinite loop?).");
        return { context: this.currentScope.variables, logs: this.logs };
    }

    public async step() {
        if (this.executionQueue.length === 0) return null;

        const node = this.executionQueue.shift()!;
        await this.processNode(node);

        const currentEdges = this.edges.get(node.id) || [];
        let nextNodes: Node<CommonNodeData>[] = [];

        if (node.type === 'if') {
            const cond = !!this.nodeOutputs.get(node.id);
            const handle = cond ? 'true' : 'false';
            nextNodes = currentEdges.filter(e => e.sourceHandle === handle || (!e.sourceHandle && cond)).map(e => this.nodes.get(e.target)!).filter(Boolean);
            if (nextNodes.length === 0) {
                 nextNodes = currentEdges.filter(e => e.sourceHandle === 'flow-out').map(e => this.nodes.get(e.target)!).filter(Boolean);
            }
        } else if (node.type === 'while') {
            const cond = !!this.nodeOutputs.get(node.id);
            if (cond) {
                nextNodes = currentEdges.filter(e => e.sourceHandle === 'body').map(e => this.nodes.get(e.target)!).filter(Boolean);
            } else {
                nextNodes = currentEdges.filter(e => e.sourceHandle === 'exit' || e.sourceHandle === 'flow-out').map(e => this.nodes.get(e.target)!).filter(Boolean);
            }
        } else if (node.type === 'for') {
            const state = this.loopStates.get(node.id) || 'init';
            if (state === 'init') {
                const initEdge = currentEdges.find(e => e.sourceHandle === 'init');
                if (initEdge) {
                    nextNodes = [this.nodes.get(initEdge.target)!];
                    this.loopStates.set(node.id, 'check');
                } else this.loopStates.set(node.id, 'check');
                this.executionQueue.unshift(node);
                return { node: node.id, logs: [...this.logs], context: this.currentScope.variables, explanation: "Loop initialising..." };
            } else if (state === 'check') {
                const cond = !!this.nodeOutputs.get(node.id);
                if (cond) {
                    this.loopStates.set(node.id, 'body');
                    const bodyEdge = currentEdges.find(e => e.sourceHandle === 'body');
                    if (bodyEdge) nextNodes = [this.nodes.get(bodyEdge.target)!];
                } else {
                    this.loopStates.set(node.id, 'exit');
                    const exitEdge = currentEdges.find(e => e.sourceHandle === 'exit' || e.sourceHandle === 'flow-out');
                    if (exitEdge) nextNodes = [this.nodes.get(exitEdge.target)!];
                }
            } else if (state === 'body') {
                // Return to me after body is done? Usually nodes have back-edges to for/while.
                // For 'for' loops, explicitly find the 'increment' edge
                this.loopStates.set(node.id, 'increment');
                this.executionQueue.unshift(node);
                return { node: node.id, logs: [...this.logs], context: this.currentScope.variables, explanation: "Loop body completed." };
            } else if (state === 'increment') {
                const stepEdge = currentEdges.find(e => e.sourceHandle === 'step' || e.sourceHandle === 'increment');
                if (stepEdge) {
                    nextNodes = [this.nodes.get(stepEdge.target)!];
                }
                this.loopStates.set(node.id, 'check');
                this.executionQueue.unshift(node);
                 return { node: node.id, logs: [...this.logs], context: this.currentScope.variables, explanation: "Incrementing loop..." };
            }
        } else {
            // Check for control flow exits from cycles
            const backEdge = currentEdges.find(e => this.nodes.get(e.target)?.type === 'for' || this.nodes.get(e.target)?.type === 'while');
            if (backEdge) {
                nextNodes = [this.nodes.get(backEdge.target)!];
            } else {
                nextNodes = currentEdges.filter(e => !e.sourceHandle || e.sourceHandle === 'flow-out').map(e => this.nodes.get(e.target)!).filter(Boolean);
            }
        }

        nextNodes.forEach(nxt => {
            if (!this.executionQueue.some(q => q.id === nxt.id)) this.executionQueue.push(nxt);
        });

        return { node: node.id, logs: [...this.logs], context: this.currentScope.variables, explanation: this.stepExplanations.get(node.id) || "" };
    }

    private async processNode(node: Node<CommonNodeData>) {
        this.currentTick++;
        this.lastExecutionTick.set(node.id, this.currentTick);

        try {
            switch (node.type) {
                case 'input': {
                    const label = node.data.label || '';
                    if (label.match(/\b(const|let|var)\b/)) {
                        const varName = label.split(/\s+/)[1];
                        let val = await this.resolveInput(node.id, 'value');
                        if (val === undefined) val = node.data.value;
                        this.currentScope.set(varName, val);
                        this.nodeOutputs.set(node.id, val);
                        this.stepExplanations.set(node.id, `Declared '${varName}' as ${JSON.stringify(val)}`);
                    } else {
                        const v = node.data.value;
                        const res = isNaN(Number(v)) || v === "" ? v : Number(v);
                        this.nodeOutputs.set(node.id, res);
                    }
                    break;
                }
                case 'math': {
                    const a = Number(await this.resolveInput(node.id, 'a') ?? 0);
                    const b = Number(await this.resolveInput(node.id, 'b') ?? 0);
                    const op = node.data.op || 'add';
                    let res = 0;
                    if (op === 'add') res = a + b;
                    else if (op === 'sub') res = a - b;
                    else if (op === 'mul') res = a * b;
                    else if (op === 'div') res = b !== 0 ? a / b : Infinity;
                    else if (op === 'mod') res = a % b;
                    this.nodeOutputs.set(node.id, res);
                    this.stepExplanations.set(node.id, `Math: ${a} ${op} ${b} = ${res}`);
                    break;
                }
                case 'compare': {
                    const a = await this.resolveInput(node.id, 'a');
                    const b = await this.resolveInput(node.id, 'b');
                    const op = node.data.op || 'eq';
                    let res = false;
                    if (op === 'eq') res = a == b;
                    else if (op === 'neq') res = a != b;
                    else if (op === 'gt') res = (a as any) > (b as any);
                    else if (op === 'lt') res = (a as any) < (b as any);
                    else if (op === 'gte') res = (a as any) >= (b as any);
                    else if (op === 'lte') res = (a as any) <= (b as any);
                    this.nodeOutputs.set(node.id, res);
                    this.stepExplanations.set(node.id, `Compare: ${a} ${op} ${b} is ${res}`);
                    break;
                }
                case 'logic': {
                    const a = await this.resolveInput(node.id, 'a');
                    const b = await this.resolveInput(node.id, 'b');
                    const op = node.data.op || 'and';
                    let res = false;
                    if (op === 'and') res = Boolean(a) && Boolean(b);
                    else if (op === 'or') res = Boolean(a) || Boolean(b);
                    else if (op === 'not') res = !a;
                    this.nodeOutputs.set(node.id, res);
                    this.stepExplanations.set(node.id, `Logic: ${op} result is ${res}`);
                    break;
                }
                case 'if':
                case 'while':
                case 'for': {
                    const cond = await this.resolveInput(node.id, 'condition');
                    this.nodeOutputs.set(node.id, Boolean(cond));
                    this.stepExplanations.set(node.id, `Condition check: ${Boolean(cond)}`);
                    break;
                }
                case 'assignment': {
                    const name = node.data.varName || 'x';
                    const val = await this.resolveInput(node.id, 'value');
                    this.currentScope.set(name, val);
                    this.nodeOutputs.set(node.id, val);
                    this.stepExplanations.set(node.id, `Assign ${name} = ${JSON.stringify(val)}`);
                    break;
                }
                case 'console': {
                    const val = await this.resolveInput(node.id, 'value');
                    this.log(`[LOG] ${JSON.stringify(val)}`);
                    this.nodeOutputs.set(node.id, val);
                    this.stepExplanations.set(node.id, `Printing to console: ${JSON.stringify(val)}`);
                    break;
                }
                case 'object': {
                    const keysStr = (node.data as any).keys || '';
                    const keys = String(keysStr).split(',').map((s: string) => s.trim()).filter(Boolean);
                    const obj: Record<string, any> = {};
                    for (const key of keys) {
                        obj[key] = await this.resolveInput(node.id, key);
                    }
                    this.nodeOutputs.set(node.id, obj);
                    break;
                }
                case 'delay': {
                    const ms = (node.data as any).duration || 1000;
                    await new Promise(resolve => setTimeout(resolve, ms));
                    this.stepExplanations.set(node.id, `Delayed for ${ms}ms`);
                    break;
                }
                case 'output': {
                    const val = await this.resolveInput(node.id, 'value');
                    this.nodeOutputs.set(node.id, val);
                    this.log(`Result: ${JSON.stringify(val)}`);
                    break;
                }
                case 'string': {
                    const val = node.data.value || '';
                    const a = await this.resolveInput(node.id, 'a');
                    const b = await this.resolveInput(node.id, 'b');
                    const res = (a !== undefined || b !== undefined) ? String(a ?? '') + String(b ?? '') : val;
                    this.nodeOutputs.set(node.id, res);
                    break;
                }
            }
        } catch (e) {
            this.log(`Error in node ${node.id}: ${String(e)}`);
            this.nodeErrors.set(node.id, String(e));
        }
    }

    private async resolveInput(nodeId: string, handleName: string): Promise<ExecutionValue> {
        const incoming = Array.from(this.edges.values()).flat().filter(e => e.target === nodeId && e.targetHandle === handleName);
        if (incoming.length === 0) {
            // Handle variable names used as direct inputs (for assignment or function calls)
            if (handleName === 'value' || handleName === 'condition') return undefined; 
            return this.currentScope.get(handleName);
        }

        const edge = incoming[0];
        const sourceNode = this.nodes.get(edge.source);
        if (sourceNode && ['math', 'compare', 'logic', 'input', 'string', 'object', 'array'].includes(sourceNode.type || '')) {
            await this.processNode(sourceNode);
        }
        return this.nodeOutputs.get(edge.source);
    }

    private log(msg: string) {
        this.logs.push(msg);
        console.log(`[DEBUG] ${msg}`);
    }
}
