import { type Node, type Edge } from 'reactflow';

export const emitPipelineToCode = (nodes: Node[], edges: Edge[]) => {
    let code = '';
    const visited = new Set<string>();

    const getVariableForNode = (nodeId: string) => {
        const node = nodes.find(n => n.id === nodeId);
        if (!node) return 'undefined';
        if (node.type === 'input') return node.data.value;
        if (node.type === 'math') return `(${nodeId}_res)`;
        return `${nodeId}_val`;
    };

    const emitNode = (nodeId: string, indent: string = ''): string => {
        if (visited.has(nodeId)) return '';
        const node = nodes.find(n => n.id === nodeId);
        if (!node) return '';

        let nodeCode = '';
        const incomingEdges = edges.filter(e => e.target === nodeId);
        const inputs: any = {};
        incomingEdges.forEach(e => {
            inputs[e.targetHandle || 'default'] = getVariableForNode(e.source);
        });

        switch (node.type) {
            case 'input':
                if (node.data.label.includes('let') || node.data.label.includes('var')) {
                    const varName = node.data.label.split(' ')[1];
                    nodeCode = `${indent}let ${varName} = ${node.data.value};\n`;
                }
                break;
            case 'assignment':
                nodeCode = `${indent}${node.data.varName} = ${inputs['value'] || 0};\n`;
                break;
            case 'math':
                nodeCode = `${indent}const ${node.id}_res = ${inputs['a'] || 0} ${getOpChar(node.data.op)} ${inputs['b'] || 0};\n`;
                break;
            case 'if':
                nodeCode = `${indent}if (${inputs['condition'] || 'false'}) {\n`;
                const trueEdge = edges.find(e => e.source === nodeId && e.sourceHandle === 'true');
                if (trueEdge) nodeCode += emitNode(trueEdge.target, indent + '  ');
                nodeCode += `${indent}}`;
                const falseEdge = edges.find(e => e.source === nodeId && e.sourceHandle === 'false');
                if (falseEdge) {
                    nodeCode += ` else {\n`;
                    nodeCode += emitNode(falseEdge.target, indent + '  ');
                    nodeCode += `${indent}}\n`;
                } else {
                    nodeCode += `\n`;
                }
                visited.add(nodeId); // Mark as visited to avoid re-emitting in main loop
                return nodeCode;
            case 'while':
                nodeCode = `${indent}while (${inputs['condition'] || 'false'}) {\n`;
                const bodyEdge = edges.find(e => e.source === nodeId && e.sourceHandle === 'body');
                if (bodyEdge) nodeCode += emitNode(bodyEdge.target, indent + '  ');
                nodeCode += `${indent}}\n`;
                visited.add(nodeId);
                const exitEdge = edges.find(e => e.source === nodeId && e.sourceHandle === 'exit');
                if (exitEdge) nodeCode += emitNode(exitEdge.target, indent);
                return nodeCode;
            case 'string':
                nodeCode = `${indent}const ${node.id}_res = "${node.data.value || ''}";\n`;
                break;
            case 'default':
                if (node.data.label.includes('console.log')) {
                    nodeCode = `${indent}console.log(${inputs['default'] || ''});\n`;
                }
                break;
        }

        visited.add(nodeId);

        // Follow default flow
        const nextEdge = edges.find(e => e.source === nodeId && !e.sourceHandle);
        if (nextEdge) {
            nodeCode += emitNode(nextEdge.target, indent);
        }

        return nodeCode;
    };

    const getOpChar = (op: string) => {
        if (op === 'add') return '+';
        if (op === 'sub') return '-';
        if (op === 'mul') return '*';
        if (op === 'div') return '/';
        return '+';
    };

    // Find roots
    const incomings = new Set(edges.map(e => e.target));
    const roots = nodes.filter(n => !incomings.has(n.id));

    roots.forEach(r => {
        code += emitNode(r.id);
    });

    return code;
};
