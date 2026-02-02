import ast
import json
from http.server import BaseHTTPRequestHandler

def parse_python_to_vpos(code):
    try:
        tree = ast.parse(code)
    except SyntaxError as e:
        return {"error": str(e)}

    nodes = []
    edges = []
    
    y_pos = 100
    x_pos = 100
    
    for i, stmt in enumerate(tree.body):
        node_id = f"py-node-{i}"
        label = "Unknown"
        node_type = "default"
        
        if isinstance(stmt, ast.Assign):
            targets = [t.id for t in stmt.targets if isinstance(t, ast.Name)]
            label = f"Assign {','.join(targets)}"
            node_type = "input"
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

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)
        code = data.get('code', '')
        
        result = parse_python_to_vpos(code)
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(result).encode('utf-8'))
        return

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
