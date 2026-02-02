import ast
import json
import sys

def parse_python_to_vpos(code):
    try:
        tree = ast.parse(code)
    except SyntaxError as e:
        return {"error": str(e)}

    nodes = []
    edges = []
    
    # Simple linear layout helper
    y_pos = 100
    x_pos = 100
    
    for i, stmt in enumerate(tree.body):
        node_id = f"py-node-{i}"
        label = "Unknown"
        node_type = "default"
        
        if isinstance(stmt, ast.Assign):
            # const x = 10
            targets = [t.id for t in stmt.targets if isinstance(t, ast.Name)]
            label = f"Assign {','.join(targets)}"
            node_type = "input"
            # Try to grab value for init
            if isinstance(stmt.value, ast.Constant):
                # We put value in data so InputNode picks it up?
                # The React InputNode expects 'value' in data to pre-fill
                pass

        elif isinstance(stmt, ast.If):
            label = "If Condition"
        
        elif isinstance(stmt, ast.For) or isinstance(stmt, ast.While):
            label = "Loop"
            
        elif isinstance(stmt, ast.Expr):
            if isinstance(stmt.value, ast.Call):
                func_name = "func"
                if isinstance(stmt.value.func, ast.Name):
                    func_name = stmt.value.func.id
                elif isinstance(stmt.value.func, ast.Attribute):
                    func_name = stmt.value.func.attr
                label = f"Call {func_name}()"
            else:
                label = "Expression"

        elif isinstance(stmt, ast.FunctionDef):
            label = f"Def {stmt.name}"

        nodes.append({
            "id": node_id,
            "type": node_type,
            "position": {"x": x_pos, "y": y_pos + (i * 120)},
            "data": {"label": label}
        })
        
        if i > 0:
            edges.append({
                "id": f"edge-{i-1}-{i}",
                "source": f"py-node-{i-1}",
                "target": node_id
            })

    return {"nodes": nodes, "edges": edges}

if __name__ == "__main__":
    # Read from stdin
    code = sys.stdin.read()
    if not code.strip():
        # Default demo if empty (checking health)
        code = "x = 10\ny = 20\nprint(x + y)"
        
    result = parse_python_to_vpos(code)
    print(json.dumps(result))
