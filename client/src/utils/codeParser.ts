import { parse } from '@babel/parser';
import type { Statement, Expression } from '@babel/types';
import { type Node, type Edge } from 'reactflow';
import type { CommonNodeData } from '../types/nodes';

export const parseCodeToPipeline = (code: string) => {
    try {
        const ast = parse(code, {
            sourceType: 'module',
            plugins: ['typescript']
        });

        const nodes: Node<CommonNodeData>[] = [];
        const edges: Edge[] = [];
        let yOffset = 100;
        const xOffset = 300;

        // Maps variable names to the Node ID that produced/assigned it last
        const varToNode = new Map<string, string>();
        let nodeCount = 0;

        const createNode = (type: string, data: CommonNodeData, position?: { x: number, y: number }) => {
            const id = `node-${nodeCount++}-${Date.now()}`;
            const newNode: Node<CommonNodeData> = {
                id,
                type,
                position: position || { x: xOffset, y: yOffset },
                data: { ...data }
            };
            nodes.push(newNode);
            yOffset += 120;
            return id;
        };

        const createEdge = (source: string, target: string, sourceHandle?: string, targetHandle?: string) => {
            edges.push({
                id: `e-${source}-${target}-${Date.now()}-${nodeCount++}`,
                source,
                target,
                sourceHandle,
                targetHandle,
                type: 'buttonEdge'
            });
        };

        // Recursive expression parser
        const parseExpression = (expr: Expression | null | undefined): string | null => {
            if (!expr) return null;

            if (expr.type === 'NumericLiteral' || expr.type === 'StringLiteral' || expr.type === 'BooleanLiteral') {
                return createNode('input', { label: `Literal: ${expr.value}`, value: expr.value });
            }
            if (expr.type === 'ArrayExpression') {
                return createNode('array', { label: 'New Array []', mode: 'create' });
            }
            if (expr.type === 'Identifier') {
                return varToNode.get(expr.name) || createNode('input', { label: `Var: ${expr.name}`, value: 0 });
            }
            if (expr.type === 'BinaryExpression') {
                const leftId = parseExpression(expr.left as Expression);
                const rightId = parseExpression(expr.right);

                const mathOps = ['+', '-', '*', '/', '%'];
                const compOps = ['==', '===', '!=', '!==', '>', '<', '>=', '<='];

                let type = 'math';
                let op = 'add';

                if (mathOps.includes(expr.operator)) {
                    type = 'math';
                    op = expr.operator === '+' ? 'add' : expr.operator === '-' ? 'sub' : expr.operator === '*' ? 'mul' : expr.operator === '/' ? 'div' : 'mod';
                } else if (compOps.includes(expr.operator)) {
                    type = 'compare';
                    op = expr.operator.includes('==') ? 'eq' : expr.operator.includes('!') ? 'neq' :
                        expr.operator === '>' ? 'gt' : expr.operator === '<' ? 'lt' :
                            expr.operator === '>=' ? 'gte' : 'lte';
                }

                const nodeId = createNode(type, { label: `${type.toUpperCase()}: ${expr.operator}`, op });
                if (leftId) createEdge(leftId, nodeId, undefined, 'a');
                if (rightId) createEdge(rightId, nodeId, undefined, 'b');
                return nodeId;
            }
            if (expr.type === 'LogicalExpression') {
                const leftId = parseExpression(expr.left);
                const rightId = parseExpression(expr.right);
                const op = expr.operator === '&&' ? 'and' : 'or';
                const nodeId = createNode('logic', { label: `Logic: ${expr.operator}`, op });
                if (leftId) createEdge(leftId, nodeId, undefined, 'a');
                if (rightId) createEdge(rightId, nodeId, undefined, 'b');
                return nodeId;
            }
            if (expr.type === 'UnaryExpression') {
                const argId = parseExpression(expr.argument);
                if (expr.operator === '!') {
                    const nodeId = createNode('logic', { label: 'Logic: NOT', op: 'not' });
                    if (argId) createEdge(argId, nodeId, undefined, 'a');
                    return nodeId;
                }
            }
            return null;
        };

        const parseBlock = (body: Statement[], prevFlowId: string | null = null): { first: string | null, last: string | null } => {
            let firstFlowId: string | null = null;
            let lastFlowId = prevFlowId;

            body.forEach((stmt) => {
                let currentId: string | null = null;
                switch (stmt.type) {
                    case 'VariableDeclaration':
                        stmt.declarations.forEach((decl) => {
                            if (decl.id.type === 'Identifier') {
                                const valId = decl.init ? parseExpression(decl.init) : null;
                                currentId = createNode('input', {
                                    label: `${stmt.kind} ${decl.id.name}`,
                                    value: (decl.init as any)?.value !== undefined ? (decl.init as any).value : 0
                                });
                                if (valId) createEdge(valId, currentId, undefined, 'value');
                                varToNode.set(decl.id.name, currentId);
                            }
                        });
                        break;

                    case 'ExpressionStatement':
                        if (stmt.expression.type === 'AssignmentExpression') {
                            const expr = stmt.expression;
                            if (expr.left.type === 'Identifier') {
                                const valId = parseExpression(expr.right);
                                currentId = createNode('assignment', {
                                    label: `Assign to ${expr.left.name}`,
                                    varName: expr.left.name
                                });
                                if (valId) createEdge(valId, currentId, undefined, 'value');
                                varToNode.set(expr.left.name, currentId);
                            }
                        } else if (stmt.expression.type === 'CallExpression') {
                            const expr = stmt.expression;
                            if (expr.callee.type === 'MemberExpression') {
                                const calleeObj = expr.callee.object as any;
                                const calleeProp = expr.callee.property as any;

                                if (calleeObj.name === 'console' && calleeProp.name === 'log') {
                                    const argId = parseExpression(expr.arguments[0] as Expression);
                                    currentId = createNode('console', { label: 'Console Log' });
                                    if (argId) createEdge(argId, currentId, undefined, 'value');
                                } else if (calleeProp.name === 'push') {
                                    const arrName = calleeObj.name;
                                    const valId = parseExpression(expr.arguments[0] as Expression);
                                    const arrNodeId = varToNode.get(arrName);
                                    currentId = createNode('array', { mode: 'push', label: `Push to ${arrName}` });
                                    if (arrNodeId) createEdge(arrNodeId, currentId, undefined, 'arr');
                                    if (valId) createEdge(valId, currentId, undefined, 'val');
                                    varToNode.set(arrName, currentId);
                                }
                            }
                        } else if (stmt.expression.type === 'UpdateExpression') {
                            const expr = stmt.expression;
                            if (expr.argument.type === 'Identifier') {
                                const varName = expr.argument.name;
                                const op = expr.operator === '++' ? 'add' : 'sub';
                                const mathId = createNode('math', { label: `Inc/Dec ${varName}`, op });
                                const prevId = varToNode.get(varName);
                                if (prevId) createEdge(prevId, mathId, undefined, 'a');
                                const oneId = createNode('input', { label: '1', value: 1 });
                                createEdge(oneId, mathId, undefined, 'b');

                                currentId = createNode('assignment', { label: `Assign ${varName}`, varName });
                                createEdge(mathId, currentId, undefined, 'value');
                                varToNode.set(varName, currentId);
                            }
                        } else {
                            // General expression (e.g. x + 5)
                            currentId = parseExpression(stmt.expression as Expression);
                        }
                        break;

                    case 'IfStatement': {
                        const condId = parseExpression(stmt.test);
                        currentId = createNode('if', { label: 'If Condition' });
                        if (condId) createEdge(condId, currentId, undefined, 'condition');

                        const trueBranch = parseBlock(stmt.consequent.type === 'BlockStatement' ? stmt.consequent.body : [stmt.consequent as Statement], null);
                        if (trueBranch.first) createEdge(currentId, trueBranch.first, 'true', 'flow-in');

                        if (stmt.alternate) {
                            const falseBranch = parseBlock(stmt.alternate.type === 'BlockStatement' ? stmt.alternate.body : [stmt.alternate as Statement], null);
                            if (falseBranch.first) createEdge(currentId, falseBranch.first, 'false', 'flow-in');
                        }
                        break;
                    }

                    case 'WhileStatement': {
                        currentId = createNode('while', { label: 'While Loop' });
                        const condId = parseExpression(stmt.test);
                        if (condId) createEdge(condId, currentId, undefined, 'condition');

                        const bodyBranch = parseBlock(stmt.body.type === 'BlockStatement' ? stmt.body.body : [stmt.body as Statement], null);
                        if (bodyBranch.first) createEdge(currentId, bodyBranch.first, 'body', 'flow-in');

                        if (bodyBranch.last) createEdge(bodyBranch.last, currentId, 'flow-out', 'flow-in');
                        break;
                    }

                    case 'ForStatement': {
                        currentId = createNode('for', { label: 'For Loop' });

                        if (stmt.init) {
                            const initBranch = parseBlock([stmt.init as unknown as Statement], null);
                            if (initBranch.first) createEdge(currentId, initBranch.first, 'init', 'flow-in');
                        }

                        if (stmt.test) {
                            const condId = parseExpression(stmt.test as Expression);
                            if (condId) createEdge(condId, currentId, undefined, 'condition');
                        }

                        if (stmt.body) {
                            const bodyBranch = parseBlock(stmt.body.type === 'BlockStatement' ? stmt.body.body : [stmt.body as Statement], null);
                            if (bodyBranch.first) createEdge(currentId, bodyBranch.first, 'body', 'flow-in');

                            if (stmt.update) {
                                const updateBranch = parseBlock([stmt.update as unknown as Statement], null);
                                if (bodyBranch.last && updateBranch.first) createEdge(bodyBranch.last, updateBranch.first, 'flow-out', 'flow-in');
                                if (updateBranch.last) createEdge(updateBranch.last, currentId, 'flow-out', 'flow-in');
                            } else if (bodyBranch.last) {
                                createEdge(bodyBranch.last, currentId, 'flow-out', 'flow-in');
                            }
                        }
                        break;
                    }

                    case 'ReturnStatement': {
                        const valId = parseExpression(stmt.argument as Expression);
                        currentId = createNode('return', { label: 'Return' });
                        if (valId) createEdge(valId, currentId, undefined, 'value');
                        break;
                    }
                    case 'BreakStatement':
                        currentId = createNode('break', { label: 'Break' });
                        break;
                    case 'ContinueStatement':
                        currentId = createNode('continue', { label: 'Continue' });
                        break;
                }

                if (currentId) {
                    if (!firstFlowId) firstFlowId = currentId;
                    if (lastFlowId) {
                        createEdge(lastFlowId, currentId, 'flow-out', 'flow-in');
                    }
                    lastFlowId = currentId;
                }
            });

            return { first: firstFlowId, last: lastFlowId };
        };

        parseBlock(ast.program.body);

        return { nodes, edges };
    } catch (e) {
        console.error("Parse error", e);
        throw e;
    }
};


