export const templates = [
    {
        "id": "basic-0",
        "name": "Hello Console",
        "description": "JS Pattern: console.log(\"Hello VPos!\");...",
        "category": "Basic",
        "nodes": [
            {
                "id": "node-0-1769110119766",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: Hello VPos!",
                    "value": "Hello VPos!"
                }
            },
            {
                "id": "node-1-1769110119766",
                "type": "console",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "Console Log"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119766-node-1-1769110119766-1769110119766-2",
                "source": "node-0-1769110119766",
                "target": "node-1-1769110119766",
                "targetHandle": "value",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "basic-1",
        "name": "Adder",
        "description": "JS Pattern: const a = 10; const b = 20; co...",
        "category": "Basic",
        "nodes": [
            {
                "id": "node-0-1769110119768",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-1-1769110119768",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "const a",
                    "value": 10
                }
            },
            {
                "id": "node-3-1769110119768",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 20",
                    "value": 20
                }
            },
            {
                "id": "node-4-1769110119768",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "const b",
                    "value": 20
                }
            },
            {
                "id": "node-7-1769110119768",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-10-1769110119768",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "const sum",
                    "value": 0
                }
            },
            {
                "id": "node-13-1769110119768",
                "type": "console",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "Console Log"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119768-node-1-1769110119768-1769110119768-2",
                "source": "node-0-1769110119768",
                "target": "node-1-1769110119768",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119768-node-4-1769110119768-1769110119768-5",
                "source": "node-3-1769110119768",
                "target": "node-4-1769110119768",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119768-node-4-1769110119768-1769110119768-6",
                "source": "node-1-1769110119768",
                "target": "node-4-1769110119768",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119768-node-7-1769110119768-1769110119768-8",
                "source": "node-1-1769110119768",
                "target": "node-7-1769110119768",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119768-node-7-1769110119768-1769110119768-9",
                "source": "node-4-1769110119768",
                "target": "node-7-1769110119768",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119768-node-10-1769110119768-1769110119768-11",
                "source": "node-7-1769110119768",
                "target": "node-10-1769110119768",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119768-node-10-1769110119768-1769110119768-12",
                "source": "node-4-1769110119768",
                "target": "node-10-1769110119768",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-10-1769110119768-node-13-1769110119768-1769110119768-14",
                "source": "node-10-1769110119768",
                "target": "node-13-1769110119768",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-10-1769110119768-node-13-1769110119768-1769110119768-15",
                "source": "node-10-1769110119768",
                "target": "node-13-1769110119768",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "basic-2",
        "name": "String Joiner",
        "description": "JS Pattern: const first = \"Hello\"; const l...",
        "category": "Basic",
        "nodes": [
            {
                "id": "node-0-1769110119769",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: Hello",
                    "value": "Hello"
                }
            },
            {
                "id": "node-1-1769110119769",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "const first",
                    "value": "Hello"
                }
            },
            {
                "id": "node-3-1769110119769",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: World",
                    "value": "World"
                }
            },
            {
                "id": "node-4-1769110119769",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "const last",
                    "value": "World"
                }
            },
            {
                "id": "node-7-1769110119769",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal:  ",
                    "value": " "
                }
            },
            {
                "id": "node-8-1769110119769",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-11-1769110119769",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-14-1769110119769",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "const full",
                    "value": 0
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119769-node-1-1769110119769-1769110119769-2",
                "source": "node-0-1769110119769",
                "target": "node-1-1769110119769",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119769-node-4-1769110119769-1769110119769-5",
                "source": "node-3-1769110119769",
                "target": "node-4-1769110119769",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119769-node-4-1769110119769-1769110119769-6",
                "source": "node-1-1769110119769",
                "target": "node-4-1769110119769",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119769-node-8-1769110119769-1769110119769-9",
                "source": "node-1-1769110119769",
                "target": "node-8-1769110119769",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119769-node-8-1769110119769-1769110119769-10",
                "source": "node-7-1769110119769",
                "target": "node-8-1769110119769",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119769-node-11-1769110119769-1769110119769-12",
                "source": "node-8-1769110119769",
                "target": "node-11-1769110119769",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119769-node-11-1769110119769-1769110119769-13",
                "source": "node-4-1769110119769",
                "target": "node-11-1769110119769",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119769-node-14-1769110119769-1769110119769-15",
                "source": "node-11-1769110119769",
                "target": "node-14-1769110119769",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119769-node-14-1769110119769-1769110119769-16",
                "source": "node-4-1769110119769",
                "target": "node-14-1769110119769",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "basic-3",
        "name": "Boolean Not",
        "description": "JS Pattern: const active = true; const ina...",
        "category": "Basic",
        "nodes": [
            {
                "id": "node-0-1769110119770",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: true",
                    "value": true
                }
            },
            {
                "id": "node-1-1769110119770",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "const active",
                    "value": true
                }
            },
            {
                "id": "node-3-1769110119770",
                "type": "logic",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Logic: NOT",
                    "op": "not"
                }
            },
            {
                "id": "node-5-1769110119770",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "const inactive",
                    "value": 0
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119770-node-1-1769110119770-1769110119770-2",
                "source": "node-0-1769110119770",
                "target": "node-1-1769110119770",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119770-node-3-1769110119770-1769110119770-4",
                "source": "node-1-1769110119770",
                "target": "node-3-1769110119770",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119770-node-5-1769110119770-1769110119770-6",
                "source": "node-3-1769110119770",
                "target": "node-5-1769110119770",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119770-node-5-1769110119770-1769110119770-7",
                "source": "node-1-1769110119770",
                "target": "node-5-1769110119770",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "basic-4",
        "name": "Even Odd",
        "description": "JS Pattern: const num = 7; const isEven = ...",
        "category": "Basic",
        "nodes": [
            {
                "id": "node-0-1769110119771",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 7",
                    "value": 7
                }
            },
            {
                "id": "node-1-1769110119771",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "const num",
                    "value": 7
                }
            },
            {
                "id": "node-3-1769110119771",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 2",
                    "value": 2
                }
            },
            {
                "id": "node-4-1769110119771",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "MATH: %",
                    "op": "mod"
                }
            },
            {
                "id": "node-7-1769110119771",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-8-1769110119771",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "COMPARE: ==",
                    "op": "eq"
                }
            },
            {
                "id": "node-11-1769110119771",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "const isEven",
                    "value": 0
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119771-node-1-1769110119771-1769110119771-2",
                "source": "node-0-1769110119771",
                "target": "node-1-1769110119771",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119771-node-4-1769110119771-1769110119771-5",
                "source": "node-1-1769110119771",
                "target": "node-4-1769110119771",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119771-node-4-1769110119771-1769110119771-6",
                "source": "node-3-1769110119771",
                "target": "node-4-1769110119771",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119771-node-8-1769110119771-1769110119771-9",
                "source": "node-4-1769110119771",
                "target": "node-8-1769110119771",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119771-node-8-1769110119771-1769110119771-10",
                "source": "node-7-1769110119771",
                "target": "node-8-1769110119771",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119771-node-11-1769110119771-1769110119771-12",
                "source": "node-8-1769110119771",
                "target": "node-11-1769110119771",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119771-node-11-1769110119771-1769110119771-13",
                "source": "node-1-1769110119771",
                "target": "node-11-1769110119771",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "basic-5",
        "name": "Sign Detector",
        "description": "JS Pattern: const n = -5; if (n > 0) { con...",
        "category": "Basic",
        "nodes": [
            {
                "id": "node-0-1769110119771",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 5",
                    "value": 5
                }
            },
            {
                "id": "node-1-1769110119771",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "const n",
                    "value": 0
                }
            },
            {
                "id": "node-2-1769110119771",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-3-1769110119771",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "COMPARE: >",
                    "op": "gt"
                }
            },
            {
                "id": "node-6-1769110119771",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-8-1769110119771",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: Pos",
                    "value": "Pos"
                }
            },
            {
                "id": "node-9-1769110119771",
                "type": "console",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "Console Log"
                }
            },
            {
                "id": "node-12-1769110119771",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Literal: Neg",
                    "value": "Neg"
                }
            },
            {
                "id": "node-13-1769110119771",
                "type": "console",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "Console Log"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-1-1769110119771-node-3-1769110119771-1769110119771-4",
                "source": "node-1-1769110119771",
                "target": "node-3-1769110119771",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-2-1769110119771-node-3-1769110119771-1769110119771-5",
                "source": "node-2-1769110119771",
                "target": "node-3-1769110119771",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119771-node-6-1769110119771-1769110119771-7",
                "source": "node-3-1769110119771",
                "target": "node-6-1769110119771",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119771-node-9-1769110119771-1769110119771-10",
                "source": "node-8-1769110119771",
                "target": "node-9-1769110119771",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-6-1769110119771-node-9-1769110119771-1769110119771-11",
                "source": "node-6-1769110119771",
                "target": "node-9-1769110119771",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-12-1769110119771-node-13-1769110119771-1769110119771-14",
                "source": "node-12-1769110119771",
                "target": "node-13-1769110119771",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-6-1769110119771-node-13-1769110119771-1769110119771-15",
                "source": "node-6-1769110119771",
                "target": "node-13-1769110119771",
                "sourceHandle": "false",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119771-node-6-1769110119771-1769110119771-16",
                "source": "node-1-1769110119771",
                "target": "node-6-1769110119771",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "basic-6",
        "name": "Absolute Value",
        "description": "JS Pattern: let val = -10; if (val < 0) { ...",
        "category": "Basic",
        "nodes": [
            {
                "id": "node-0-1769110119773",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-1-1769110119773",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let val",
                    "value": 0
                }
            },
            {
                "id": "node-2-1769110119773",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-3-1769110119773",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-6-1769110119773",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-8-1769110119773",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-9-1769110119773",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "MATH: *",
                    "op": "mul"
                }
            },
            {
                "id": "node-11-1769110119773",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Assign to val",
                    "varName": "val"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-1-1769110119773-node-3-1769110119773-1769110119773-4",
                "source": "node-1-1769110119773",
                "target": "node-3-1769110119773",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-2-1769110119773-node-3-1769110119773-1769110119773-5",
                "source": "node-2-1769110119773",
                "target": "node-3-1769110119773",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119773-node-6-1769110119773-1769110119773-7",
                "source": "node-3-1769110119773",
                "target": "node-6-1769110119773",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119773-node-9-1769110119773-1769110119773-10",
                "source": "node-1-1769110119773",
                "target": "node-9-1769110119773",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-9-1769110119773-node-11-1769110119773-1769110119773-12",
                "source": "node-9-1769110119773",
                "target": "node-11-1769110119773",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-6-1769110119773-node-11-1769110119773-1769110119773-13",
                "source": "node-6-1769110119773",
                "target": "node-11-1769110119773",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119773-node-6-1769110119773-1769110119773-14",
                "source": "node-1-1769110119773",
                "target": "node-6-1769110119773",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "basic-7",
        "name": "Min Checker",
        "description": "JS Pattern: const a = 5; const b = 10; let...",
        "category": "Basic",
        "nodes": [
            {
                "id": "node-0-1769110119773",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 5",
                    "value": 5
                }
            },
            {
                "id": "node-1-1769110119773",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "const a",
                    "value": 5
                }
            },
            {
                "id": "node-3-1769110119773",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-4-1769110119773",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "const b",
                    "value": 10
                }
            },
            {
                "id": "node-7-1769110119773",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "let min",
                    "value": 0
                }
            },
            {
                "id": "node-10-1769110119773",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-13-1769110119773",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-15-1769110119773",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Assign to min",
                    "varName": "min"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119773-node-1-1769110119773-1769110119773-2",
                "source": "node-0-1769110119773",
                "target": "node-1-1769110119773",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119773-node-4-1769110119773-1769110119773-5",
                "source": "node-3-1769110119773",
                "target": "node-4-1769110119773",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119773-node-4-1769110119773-1769110119773-6",
                "source": "node-1-1769110119773",
                "target": "node-4-1769110119773",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119773-node-7-1769110119773-1769110119773-8",
                "source": "node-1-1769110119773",
                "target": "node-7-1769110119773",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119773-node-7-1769110119773-1769110119773-9",
                "source": "node-4-1769110119773",
                "target": "node-7-1769110119773",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119773-node-10-1769110119773-1769110119773-11",
                "source": "node-4-1769110119773",
                "target": "node-10-1769110119773",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119773-node-10-1769110119773-1769110119773-12",
                "source": "node-1-1769110119773",
                "target": "node-10-1769110119773",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-10-1769110119773-node-13-1769110119773-1769110119773-14",
                "source": "node-10-1769110119773",
                "target": "node-13-1769110119773",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119773-node-15-1769110119773-1769110119773-16",
                "source": "node-4-1769110119773",
                "target": "node-15-1769110119773",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119773-node-15-1769110119773-1769110119773-17",
                "source": "node-13-1769110119773",
                "target": "node-15-1769110119773",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119773-node-13-1769110119773-1769110119773-18",
                "source": "node-7-1769110119773",
                "target": "node-13-1769110119773",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "basic-8",
        "name": "Max Checker",
        "description": "JS Pattern: const a = 5; const b = 10; let...",
        "category": "Basic",
        "nodes": [
            {
                "id": "node-0-1769110119774",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 5",
                    "value": 5
                }
            },
            {
                "id": "node-1-1769110119774",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "const a",
                    "value": 5
                }
            },
            {
                "id": "node-3-1769110119774",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-4-1769110119774",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "const b",
                    "value": 10
                }
            },
            {
                "id": "node-7-1769110119774",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "let max",
                    "value": 0
                }
            },
            {
                "id": "node-10-1769110119774",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "COMPARE: >",
                    "op": "gt"
                }
            },
            {
                "id": "node-13-1769110119774",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-15-1769110119774",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Assign to max",
                    "varName": "max"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119774-node-1-1769110119774-1769110119774-2",
                "source": "node-0-1769110119774",
                "target": "node-1-1769110119774",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119774-node-4-1769110119774-1769110119774-5",
                "source": "node-3-1769110119774",
                "target": "node-4-1769110119774",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119774-node-4-1769110119774-1769110119774-6",
                "source": "node-1-1769110119774",
                "target": "node-4-1769110119774",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119774-node-7-1769110119774-1769110119774-8",
                "source": "node-4-1769110119774",
                "target": "node-7-1769110119774",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119774-node-7-1769110119774-1769110119774-9",
                "source": "node-4-1769110119774",
                "target": "node-7-1769110119774",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119774-node-10-1769110119774-1769110119774-11",
                "source": "node-1-1769110119774",
                "target": "node-10-1769110119774",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119774-node-10-1769110119774-1769110119774-12",
                "source": "node-4-1769110119774",
                "target": "node-10-1769110119774",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-10-1769110119774-node-13-1769110119774-1769110119774-14",
                "source": "node-10-1769110119774",
                "target": "node-13-1769110119774",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119774-node-15-1769110119774-1769110119774-16",
                "source": "node-1-1769110119774",
                "target": "node-15-1769110119774",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119774-node-15-1769110119774-1769110119774-17",
                "source": "node-13-1769110119774",
                "target": "node-15-1769110119774",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119774-node-13-1769110119774-1769110119774-18",
                "source": "node-7-1769110119774",
                "target": "node-13-1769110119774",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "basic-9",
        "name": "Cheap Discount",
        "description": "JS Pattern: const price = 100; const disc ...",
        "category": "Basic",
        "nodes": [
            {
                "id": "node-0-1769110119774",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 100",
                    "value": 100
                }
            },
            {
                "id": "node-1-1769110119774",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "const price",
                    "value": 100
                }
            },
            {
                "id": "node-3-1769110119774",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-4-1769110119774",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "const disc",
                    "value": 10
                }
            },
            {
                "id": "node-7-1769110119774",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "MATH: -",
                    "op": "sub"
                }
            },
            {
                "id": "node-10-1769110119774",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "const final",
                    "value": 0
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119774-node-1-1769110119774-1769110119774-2",
                "source": "node-0-1769110119774",
                "target": "node-1-1769110119774",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119774-node-4-1769110119774-1769110119774-5",
                "source": "node-3-1769110119774",
                "target": "node-4-1769110119774",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119774-node-4-1769110119774-1769110119774-6",
                "source": "node-1-1769110119774",
                "target": "node-4-1769110119774",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119774-node-7-1769110119774-1769110119774-8",
                "source": "node-1-1769110119774",
                "target": "node-7-1769110119774",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119774-node-7-1769110119774-1769110119774-9",
                "source": "node-4-1769110119774",
                "target": "node-7-1769110119774",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119774-node-10-1769110119774-1769110119774-11",
                "source": "node-7-1769110119774",
                "target": "node-10-1769110119774",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119774-node-10-1769110119774-1769110119774-12",
                "source": "node-4-1769110119774",
                "target": "node-10-1769110119774",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "medium-0",
        "name": "Loop Factorial",
        "description": "JS Pattern: let n = 5; let f = 1; let i = ...",
        "category": "Medium",
        "nodes": [
            {
                "id": "node-0-1769110119775",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 5",
                    "value": 5
                }
            },
            {
                "id": "node-1-1769110119775",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let n",
                    "value": 5
                }
            },
            {
                "id": "node-3-1769110119775",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-4-1769110119775",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let f",
                    "value": 1
                }
            },
            {
                "id": "node-7-1769110119775",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-8-1769110119775",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "let i",
                    "value": 1
                }
            },
            {
                "id": "node-11-1769110119775",
                "type": "while",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "While Loop"
                }
            },
            {
                "id": "node-12-1769110119775",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "COMPARE: <=",
                    "op": "lte"
                }
            },
            {
                "id": "node-16-1769110119775",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "MATH: *",
                    "op": "mul"
                }
            },
            {
                "id": "node-19-1769110119775",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "Assign to f",
                    "varName": "f"
                }
            },
            {
                "id": "node-21-1769110119775",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-22-1769110119775",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-25-1769110119775",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "Assign to i",
                    "varName": "i"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119775-node-1-1769110119775-1769110119775-2",
                "source": "node-0-1769110119775",
                "target": "node-1-1769110119775",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119775-node-4-1769110119775-1769110119775-5",
                "source": "node-3-1769110119775",
                "target": "node-4-1769110119775",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119775-node-4-1769110119775-1769110119775-6",
                "source": "node-1-1769110119775",
                "target": "node-4-1769110119775",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119775-node-8-1769110119775-1769110119775-9",
                "source": "node-7-1769110119775",
                "target": "node-8-1769110119775",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119775-node-8-1769110119775-1769110119775-10",
                "source": "node-4-1769110119775",
                "target": "node-8-1769110119775",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119775-node-12-1769110119775-1769110119775-13",
                "source": "node-8-1769110119775",
                "target": "node-12-1769110119775",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119775-node-12-1769110119775-1769110119775-14",
                "source": "node-1-1769110119775",
                "target": "node-12-1769110119775",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-12-1769110119775-node-11-1769110119775-1769110119775-15",
                "source": "node-12-1769110119775",
                "target": "node-11-1769110119775",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119775-node-16-1769110119775-1769110119775-17",
                "source": "node-4-1769110119775",
                "target": "node-16-1769110119775",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119775-node-16-1769110119775-1769110119775-18",
                "source": "node-8-1769110119775",
                "target": "node-16-1769110119775",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-16-1769110119775-node-19-1769110119775-1769110119775-20",
                "source": "node-16-1769110119775",
                "target": "node-19-1769110119775",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119775-node-22-1769110119775-1769110119775-23",
                "source": "node-8-1769110119775",
                "target": "node-22-1769110119775",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-21-1769110119775-node-22-1769110119775-1769110119775-24",
                "source": "node-21-1769110119775",
                "target": "node-22-1769110119775",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-22-1769110119775-node-25-1769110119775-1769110119775-26",
                "source": "node-22-1769110119775",
                "target": "node-25-1769110119775",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-19-1769110119775-node-25-1769110119775-1769110119775-27",
                "source": "node-19-1769110119775",
                "target": "node-25-1769110119775",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119775-node-19-1769110119775-1769110119775-28",
                "source": "node-11-1769110119775",
                "target": "node-19-1769110119775",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-25-1769110119775-node-11-1769110119775-1769110119775-29",
                "source": "node-25-1769110119775",
                "target": "node-11-1769110119775",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119775-node-11-1769110119775-1769110119775-30",
                "source": "node-8-1769110119775",
                "target": "node-11-1769110119775",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "medium-1",
        "name": "Sum Series",
        "description": "JS Pattern: let n = 10; let s = 0; let i =...",
        "category": "Medium",
        "nodes": [
            {
                "id": "node-0-1769110119776",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-1-1769110119776",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let n",
                    "value": 10
                }
            },
            {
                "id": "node-3-1769110119776",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-4-1769110119776",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let s",
                    "value": 0
                }
            },
            {
                "id": "node-7-1769110119776",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-8-1769110119776",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "let i",
                    "value": 1
                }
            },
            {
                "id": "node-11-1769110119776",
                "type": "while",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "While Loop"
                }
            },
            {
                "id": "node-12-1769110119776",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "COMPARE: <=",
                    "op": "lte"
                }
            },
            {
                "id": "node-16-1769110119776",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-19-1769110119776",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "Assign to s",
                    "varName": "s"
                }
            },
            {
                "id": "node-21-1769110119776",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-22-1769110119776",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-25-1769110119776",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "Assign to i",
                    "varName": "i"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119776-node-1-1769110119776-1769110119776-2",
                "source": "node-0-1769110119776",
                "target": "node-1-1769110119776",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119776-node-4-1769110119776-1769110119776-5",
                "source": "node-3-1769110119776",
                "target": "node-4-1769110119776",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119776-node-4-1769110119776-1769110119776-6",
                "source": "node-1-1769110119776",
                "target": "node-4-1769110119776",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119776-node-8-1769110119776-1769110119776-9",
                "source": "node-7-1769110119776",
                "target": "node-8-1769110119776",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119776-node-8-1769110119776-1769110119776-10",
                "source": "node-4-1769110119776",
                "target": "node-8-1769110119776",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119776-node-12-1769110119776-1769110119776-13",
                "source": "node-8-1769110119776",
                "target": "node-12-1769110119776",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119776-node-12-1769110119776-1769110119776-14",
                "source": "node-1-1769110119776",
                "target": "node-12-1769110119776",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-12-1769110119776-node-11-1769110119776-1769110119776-15",
                "source": "node-12-1769110119776",
                "target": "node-11-1769110119776",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119776-node-16-1769110119776-1769110119776-17",
                "source": "node-4-1769110119776",
                "target": "node-16-1769110119776",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119776-node-16-1769110119776-1769110119776-18",
                "source": "node-8-1769110119776",
                "target": "node-16-1769110119776",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-16-1769110119776-node-19-1769110119776-1769110119776-20",
                "source": "node-16-1769110119776",
                "target": "node-19-1769110119776",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119776-node-22-1769110119776-1769110119776-23",
                "source": "node-8-1769110119776",
                "target": "node-22-1769110119776",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-21-1769110119776-node-22-1769110119776-1769110119776-24",
                "source": "node-21-1769110119776",
                "target": "node-22-1769110119776",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-22-1769110119776-node-25-1769110119776-1769110119776-26",
                "source": "node-22-1769110119776",
                "target": "node-25-1769110119776",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-19-1769110119776-node-25-1769110119776-1769110119776-27",
                "source": "node-19-1769110119776",
                "target": "node-25-1769110119776",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119776-node-19-1769110119776-1769110119776-28",
                "source": "node-11-1769110119776",
                "target": "node-19-1769110119776",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-25-1769110119776-node-11-1769110119776-1769110119776-29",
                "source": "node-25-1769110119776",
                "target": "node-11-1769110119776",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119776-node-11-1769110119776-1769110119776-30",
                "source": "node-8-1769110119776",
                "target": "node-11-1769110119776",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "medium-2",
        "name": "Array Filler",
        "description": "JS Pattern: let arr = []; let i = 0; while...",
        "category": "Medium",
        "nodes": [
            {
                "id": "node-0-1769110119777",
                "type": "array",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "New Array []",
                    "mode": "create"
                }
            },
            {
                "id": "node-1-1769110119777",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let arr",
                    "value": 0
                }
            },
            {
                "id": "node-3-1769110119777",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-4-1769110119777",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let i",
                    "value": 0
                }
            },
            {
                "id": "node-7-1769110119777",
                "type": "while",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "While Loop"
                }
            },
            {
                "id": "node-8-1769110119777",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: 5",
                    "value": 5
                }
            },
            {
                "id": "node-9-1769110119777",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-13-1769110119777",
                "type": "array",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "mode": "push",
                    "label": "Push to arr"
                }
            },
            {
                "id": "node-16-1769110119777",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-17-1769110119777",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-20-1769110119777",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "Assign to i",
                    "varName": "i"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119777-node-1-1769110119777-1769110119777-2",
                "source": "node-0-1769110119777",
                "target": "node-1-1769110119777",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119777-node-4-1769110119777-1769110119777-5",
                "source": "node-3-1769110119777",
                "target": "node-4-1769110119777",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119777-node-4-1769110119777-1769110119777-6",
                "source": "node-1-1769110119777",
                "target": "node-4-1769110119777",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119777-node-9-1769110119777-1769110119777-10",
                "source": "node-4-1769110119777",
                "target": "node-9-1769110119777",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119777-node-9-1769110119777-1769110119777-11",
                "source": "node-8-1769110119777",
                "target": "node-9-1769110119777",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-9-1769110119777-node-7-1769110119777-1769110119777-12",
                "source": "node-9-1769110119777",
                "target": "node-7-1769110119777",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119777-node-13-1769110119777-1769110119777-14",
                "source": "node-1-1769110119777",
                "target": "node-13-1769110119777",
                "targetHandle": "arr",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119777-node-13-1769110119777-1769110119777-15",
                "source": "node-4-1769110119777",
                "target": "node-13-1769110119777",
                "targetHandle": "val",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119777-node-17-1769110119777-1769110119777-18",
                "source": "node-4-1769110119777",
                "target": "node-17-1769110119777",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-16-1769110119777-node-17-1769110119777-1769110119777-19",
                "source": "node-16-1769110119777",
                "target": "node-17-1769110119777",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119777-node-20-1769110119777-1769110119777-21",
                "source": "node-17-1769110119777",
                "target": "node-20-1769110119777",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119777-node-20-1769110119777-1769110119777-22",
                "source": "node-13-1769110119777",
                "target": "node-20-1769110119777",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119777-node-13-1769110119777-1769110119777-23",
                "source": "node-7-1769110119777",
                "target": "node-13-1769110119777",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-20-1769110119777-node-7-1769110119777-1769110119777-24",
                "source": "node-20-1769110119777",
                "target": "node-7-1769110119777",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119777-node-7-1769110119777-1769110119777-25",
                "source": "node-4-1769110119777",
                "target": "node-7-1769110119777",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "medium-3",
        "name": "Linear Search",
        "description": "JS Pattern: let list = [1,2,3]; let target...",
        "category": "Medium",
        "nodes": [
            {
                "id": "node-0-1769110119778",
                "type": "array",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "New Array []",
                    "mode": "create"
                }
            },
            {
                "id": "node-1-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let list",
                    "value": 0
                }
            },
            {
                "id": "node-3-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 2",
                    "value": 2
                }
            },
            {
                "id": "node-4-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let target",
                    "value": 2
                }
            },
            {
                "id": "node-7-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal: false",
                    "value": false
                }
            },
            {
                "id": "node-8-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "let found",
                    "value": false
                }
            },
            {
                "id": "node-11-1769110119778",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-12-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-13-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "let i",
                    "value": 0
                }
            },
            {
                "id": "node-16-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "Literal: 3",
                    "value": 3
                }
            },
            {
                "id": "node-17-1769110119778",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-21-1769110119778",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "COMPARE: ==",
                    "op": "eq"
                }
            },
            {
                "id": "node-23-1769110119778",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-25-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1610
                },
                "data": {
                    "label": "Literal: true",
                    "value": true
                }
            },
            {
                "id": "node-26-1769110119778",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1730
                },
                "data": {
                    "label": "Assign to found",
                    "varName": "found"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119778-node-1-1769110119778-1769110119778-2",
                "source": "node-0-1769110119778",
                "target": "node-1-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119778-node-4-1769110119778-1769110119778-5",
                "source": "node-3-1769110119778",
                "target": "node-4-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119778-node-4-1769110119778-1769110119778-6",
                "source": "node-1-1769110119778",
                "target": "node-4-1769110119778",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119778-node-8-1769110119778-1769110119778-9",
                "source": "node-7-1769110119778",
                "target": "node-8-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119778-node-8-1769110119778-1769110119778-10",
                "source": "node-4-1769110119778",
                "target": "node-8-1769110119778",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-12-1769110119778-node-13-1769110119778-1769110119778-14",
                "source": "node-12-1769110119778",
                "target": "node-13-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119778-node-13-1769110119778-1769110119778-15",
                "source": "node-11-1769110119778",
                "target": "node-13-1769110119778",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119778-node-17-1769110119778-1769110119778-18",
                "source": "node-13-1769110119778",
                "target": "node-17-1769110119778",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-16-1769110119778-node-17-1769110119778-1769110119778-19",
                "source": "node-16-1769110119778",
                "target": "node-17-1769110119778",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119778-node-11-1769110119778-1769110119778-20",
                "source": "node-17-1769110119778",
                "target": "node-11-1769110119778",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119778-node-21-1769110119778-1769110119778-22",
                "source": "node-4-1769110119778",
                "target": "node-21-1769110119778",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-21-1769110119778-node-23-1769110119778-1769110119778-24",
                "source": "node-21-1769110119778",
                "target": "node-23-1769110119778",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-25-1769110119778-node-26-1769110119778-1769110119778-27",
                "source": "node-25-1769110119778",
                "target": "node-26-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-23-1769110119778-node-26-1769110119778-1769110119778-28",
                "source": "node-23-1769110119778",
                "target": "node-26-1769110119778",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119778-node-23-1769110119778-1769110119778-29",
                "source": "node-11-1769110119778",
                "target": "node-23-1769110119778",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119778-node-11-1769110119778-1769110119778-30",
                "source": "node-8-1769110119778",
                "target": "node-11-1769110119778",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "medium-4",
        "name": "Grade Calc",
        "description": "JS Pattern: let score = 85; let grade = \"F...",
        "category": "Medium",
        "nodes": [
            {
                "id": "node-0-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 85",
                    "value": 85
                }
            },
            {
                "id": "node-1-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let score",
                    "value": 85
                }
            },
            {
                "id": "node-3-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: F",
                    "value": "F"
                }
            },
            {
                "id": "node-4-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let grade",
                    "value": "F"
                }
            },
            {
                "id": "node-7-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal: 90",
                    "value": 90
                }
            },
            {
                "id": "node-8-1769110119778",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "COMPARE: >",
                    "op": "gt"
                }
            },
            {
                "id": "node-11-1769110119778",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-13-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Literal: A",
                    "value": "A"
                }
            },
            {
                "id": "node-14-1769110119778",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "Assign to grade",
                    "varName": "grade"
                }
            },
            {
                "id": "node-17-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "Literal: 80",
                    "value": 80
                }
            },
            {
                "id": "node-18-1769110119778",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "COMPARE: >",
                    "op": "gt"
                }
            },
            {
                "id": "node-21-1769110119778",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-23-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "Literal: B",
                    "value": "B"
                }
            },
            {
                "id": "node-24-1769110119778",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1610
                },
                "data": {
                    "label": "Assign to grade",
                    "varName": "grade"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119778-node-1-1769110119778-1769110119778-2",
                "source": "node-0-1769110119778",
                "target": "node-1-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119778-node-4-1769110119778-1769110119778-5",
                "source": "node-3-1769110119778",
                "target": "node-4-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119778-node-4-1769110119778-1769110119778-6",
                "source": "node-1-1769110119778",
                "target": "node-4-1769110119778",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119778-node-8-1769110119778-1769110119778-9",
                "source": "node-1-1769110119778",
                "target": "node-8-1769110119778",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119778-node-8-1769110119778-1769110119778-10",
                "source": "node-7-1769110119778",
                "target": "node-8-1769110119778",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119778-node-11-1769110119778-1769110119778-12",
                "source": "node-8-1769110119778",
                "target": "node-11-1769110119778",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119778-node-14-1769110119778-1769110119778-15",
                "source": "node-13-1769110119778",
                "target": "node-14-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119778-node-14-1769110119778-1769110119778-16",
                "source": "node-11-1769110119778",
                "target": "node-14-1769110119778",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119778-node-18-1769110119778-1769110119778-19",
                "source": "node-1-1769110119778",
                "target": "node-18-1769110119778",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119778-node-18-1769110119778-1769110119778-20",
                "source": "node-17-1769110119778",
                "target": "node-18-1769110119778",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-18-1769110119778-node-21-1769110119778-1769110119778-22",
                "source": "node-18-1769110119778",
                "target": "node-21-1769110119778",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-23-1769110119778-node-24-1769110119778-1769110119778-25",
                "source": "node-23-1769110119778",
                "target": "node-24-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-21-1769110119778-node-24-1769110119778-1769110119778-26",
                "source": "node-21-1769110119778",
                "target": "node-24-1769110119778",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119778-node-21-1769110119778-1769110119778-27",
                "source": "node-11-1769110119778",
                "target": "node-21-1769110119778",
                "sourceHandle": "false",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119778-node-11-1769110119778-1769110119778-28",
                "source": "node-4-1769110119778",
                "target": "node-11-1769110119778",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "medium-5",
        "name": "Variable Swap",
        "description": "JS Pattern: let a = 1; let b = 2; let temp...",
        "category": "Medium",
        "nodes": [
            {
                "id": "node-0-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-1-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let a",
                    "value": 1
                }
            },
            {
                "id": "node-3-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 2",
                    "value": 2
                }
            },
            {
                "id": "node-4-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let b",
                    "value": 2
                }
            },
            {
                "id": "node-7-1769110119778",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "let temp",
                    "value": 0
                }
            },
            {
                "id": "node-10-1769110119779",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Assign to a",
                    "varName": "a"
                }
            },
            {
                "id": "node-13-1769110119779",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "Assign to b",
                    "varName": "b"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119778-node-1-1769110119778-1769110119778-2",
                "source": "node-0-1769110119778",
                "target": "node-1-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119778-node-4-1769110119778-1769110119778-5",
                "source": "node-3-1769110119778",
                "target": "node-4-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119778-node-4-1769110119778-1769110119778-6",
                "source": "node-1-1769110119778",
                "target": "node-4-1769110119778",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119778-node-7-1769110119778-1769110119778-8",
                "source": "node-1-1769110119778",
                "target": "node-7-1769110119778",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119778-node-7-1769110119778-1769110119778-9",
                "source": "node-4-1769110119778",
                "target": "node-7-1769110119778",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119778-node-10-1769110119779-1769110119779-11",
                "source": "node-4-1769110119778",
                "target": "node-10-1769110119779",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119778-node-10-1769110119779-1769110119779-12",
                "source": "node-7-1769110119778",
                "target": "node-10-1769110119779",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119778-node-13-1769110119779-1769110119779-14",
                "source": "node-7-1769110119778",
                "target": "node-13-1769110119779",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-10-1769110119779-node-13-1769110119779-1769110119779-15",
                "source": "node-10-1769110119779",
                "target": "node-13-1769110119779",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "medium-6",
        "name": "Multiplication Row",
        "description": "JS Pattern: let n = 7; let i = 1; while(i ...",
        "category": "Medium",
        "nodes": [
            {
                "id": "node-0-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 7",
                    "value": 7
                }
            },
            {
                "id": "node-1-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let n",
                    "value": 7
                }
            },
            {
                "id": "node-3-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-4-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let i",
                    "value": 1
                }
            },
            {
                "id": "node-7-1769110119780",
                "type": "while",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "While Loop"
                }
            },
            {
                "id": "node-8-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-9-1769110119780",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "COMPARE: <=",
                    "op": "lte"
                }
            },
            {
                "id": "node-13-1769110119780",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "MATH: *",
                    "op": "mul"
                }
            },
            {
                "id": "node-16-1769110119780",
                "type": "console",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "Console Log"
                }
            },
            {
                "id": "node-18-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-19-1769110119780",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-22-1769110119780",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "Assign to i",
                    "varName": "i"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119780-node-1-1769110119780-1769110119780-2",
                "source": "node-0-1769110119780",
                "target": "node-1-1769110119780",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119780-node-4-1769110119780-1769110119780-5",
                "source": "node-3-1769110119780",
                "target": "node-4-1769110119780",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119780-node-4-1769110119780-1769110119780-6",
                "source": "node-1-1769110119780",
                "target": "node-4-1769110119780",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119780-node-9-1769110119780-1769110119780-10",
                "source": "node-4-1769110119780",
                "target": "node-9-1769110119780",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119780-node-9-1769110119780-1769110119780-11",
                "source": "node-8-1769110119780",
                "target": "node-9-1769110119780",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-9-1769110119780-node-7-1769110119780-1769110119780-12",
                "source": "node-9-1769110119780",
                "target": "node-7-1769110119780",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119780-node-13-1769110119780-1769110119780-14",
                "source": "node-1-1769110119780",
                "target": "node-13-1769110119780",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119780-node-13-1769110119780-1769110119780-15",
                "source": "node-4-1769110119780",
                "target": "node-13-1769110119780",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119780-node-16-1769110119780-1769110119780-17",
                "source": "node-13-1769110119780",
                "target": "node-16-1769110119780",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119780-node-19-1769110119780-1769110119780-20",
                "source": "node-4-1769110119780",
                "target": "node-19-1769110119780",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-18-1769110119780-node-19-1769110119780-1769110119780-21",
                "source": "node-18-1769110119780",
                "target": "node-19-1769110119780",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-19-1769110119780-node-22-1769110119780-1769110119780-23",
                "source": "node-19-1769110119780",
                "target": "node-22-1769110119780",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-16-1769110119780-node-22-1769110119780-1769110119780-24",
                "source": "node-16-1769110119780",
                "target": "node-22-1769110119780",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119780-node-16-1769110119780-1769110119780-25",
                "source": "node-7-1769110119780",
                "target": "node-16-1769110119780",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-22-1769110119780-node-7-1769110119780-1769110119780-26",
                "source": "node-22-1769110119780",
                "target": "node-7-1769110119780",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119780-node-7-1769110119780-1769110119780-27",
                "source": "node-4-1769110119780",
                "target": "node-7-1769110119780",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "medium-7",
        "name": "Power Loop",
        "description": "JS Pattern: let b = 2; let p = 3; let res ...",
        "category": "Medium",
        "nodes": [
            {
                "id": "node-0-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 2",
                    "value": 2
                }
            },
            {
                "id": "node-1-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let b",
                    "value": 2
                }
            },
            {
                "id": "node-3-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 3",
                    "value": 3
                }
            },
            {
                "id": "node-4-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let p",
                    "value": 3
                }
            },
            {
                "id": "node-7-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-8-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "let res",
                    "value": 1
                }
            },
            {
                "id": "node-11-1769110119780",
                "type": "while",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "While Loop"
                }
            },
            {
                "id": "node-12-1769110119780",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-13-1769110119780",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "COMPARE: >",
                    "op": "gt"
                }
            },
            {
                "id": "node-17-1769110119780",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "MATH: *",
                    "op": "mul"
                }
            },
            {
                "id": "node-20-1769110119781",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "Assign to res",
                    "varName": "res"
                }
            },
            {
                "id": "node-22-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-23-1769110119781",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "MATH: -",
                    "op": "sub"
                }
            },
            {
                "id": "node-26-1769110119781",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1610
                },
                "data": {
                    "label": "Assign to p",
                    "varName": "p"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119780-node-1-1769110119780-1769110119780-2",
                "source": "node-0-1769110119780",
                "target": "node-1-1769110119780",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119780-node-4-1769110119780-1769110119780-5",
                "source": "node-3-1769110119780",
                "target": "node-4-1769110119780",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119780-node-4-1769110119780-1769110119780-6",
                "source": "node-1-1769110119780",
                "target": "node-4-1769110119780",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119780-node-8-1769110119780-1769110119780-9",
                "source": "node-7-1769110119780",
                "target": "node-8-1769110119780",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119780-node-8-1769110119780-1769110119780-10",
                "source": "node-4-1769110119780",
                "target": "node-8-1769110119780",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119780-node-13-1769110119780-1769110119780-14",
                "source": "node-4-1769110119780",
                "target": "node-13-1769110119780",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-12-1769110119780-node-13-1769110119780-1769110119780-15",
                "source": "node-12-1769110119780",
                "target": "node-13-1769110119780",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119780-node-11-1769110119780-1769110119780-16",
                "source": "node-13-1769110119780",
                "target": "node-11-1769110119780",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119780-node-17-1769110119780-1769110119781-18",
                "source": "node-8-1769110119780",
                "target": "node-17-1769110119780",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119780-node-17-1769110119780-1769110119781-19",
                "source": "node-1-1769110119780",
                "target": "node-17-1769110119780",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119780-node-20-1769110119781-1769110119781-21",
                "source": "node-17-1769110119780",
                "target": "node-20-1769110119781",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119780-node-23-1769110119781-1769110119781-24",
                "source": "node-4-1769110119780",
                "target": "node-23-1769110119781",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-22-1769110119781-node-23-1769110119781-1769110119781-25",
                "source": "node-22-1769110119781",
                "target": "node-23-1769110119781",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-23-1769110119781-node-26-1769110119781-1769110119781-27",
                "source": "node-23-1769110119781",
                "target": "node-26-1769110119781",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-20-1769110119781-node-26-1769110119781-1769110119781-28",
                "source": "node-20-1769110119781",
                "target": "node-26-1769110119781",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119780-node-20-1769110119781-1769110119781-29",
                "source": "node-11-1769110119780",
                "target": "node-20-1769110119781",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-26-1769110119781-node-11-1769110119780-1769110119781-30",
                "source": "node-26-1769110119781",
                "target": "node-11-1769110119780",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119780-node-11-1769110119780-1769110119781-31",
                "source": "node-8-1769110119780",
                "target": "node-11-1769110119780",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "medium-8",
        "name": "Temp Convert",
        "description": "JS Pattern: let c = 30; let f = (c * 9 / 5...",
        "category": "Medium",
        "nodes": [
            {
                "id": "node-0-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 30",
                    "value": 30
                }
            },
            {
                "id": "node-1-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let c",
                    "value": 30
                }
            },
            {
                "id": "node-3-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 9",
                    "value": 9
                }
            },
            {
                "id": "node-4-1769110119781",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "MATH: *",
                    "op": "mul"
                }
            },
            {
                "id": "node-7-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal: 5",
                    "value": 5
                }
            },
            {
                "id": "node-8-1769110119781",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "MATH: /",
                    "op": "div"
                }
            },
            {
                "id": "node-11-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "Literal: 32",
                    "value": 32
                }
            },
            {
                "id": "node-12-1769110119781",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-15-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "let f",
                    "value": 0
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119781-node-1-1769110119781-1769110119781-2",
                "source": "node-0-1769110119781",
                "target": "node-1-1769110119781",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119781-node-4-1769110119781-1769110119781-5",
                "source": "node-1-1769110119781",
                "target": "node-4-1769110119781",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119781-node-4-1769110119781-1769110119781-6",
                "source": "node-3-1769110119781",
                "target": "node-4-1769110119781",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119781-node-8-1769110119781-1769110119781-9",
                "source": "node-4-1769110119781",
                "target": "node-8-1769110119781",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119781-node-8-1769110119781-1769110119781-10",
                "source": "node-7-1769110119781",
                "target": "node-8-1769110119781",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119781-node-12-1769110119781-1769110119781-13",
                "source": "node-8-1769110119781",
                "target": "node-12-1769110119781",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119781-node-12-1769110119781-1769110119781-14",
                "source": "node-11-1769110119781",
                "target": "node-12-1769110119781",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-12-1769110119781-node-15-1769110119781-1769110119781-16",
                "source": "node-12-1769110119781",
                "target": "node-15-1769110119781",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119781-node-15-1769110119781-1769110119781-17",
                "source": "node-1-1769110119781",
                "target": "node-15-1769110119781",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "medium-9",
        "name": "Basic Average",
        "description": "JS Pattern: let a = 10; let b = 20; let c ...",
        "category": "Medium",
        "nodes": [
            {
                "id": "node-0-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-1-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let a",
                    "value": 10
                }
            },
            {
                "id": "node-3-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 20",
                    "value": 20
                }
            },
            {
                "id": "node-4-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let b",
                    "value": 20
                }
            },
            {
                "id": "node-7-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal: 30",
                    "value": 30
                }
            },
            {
                "id": "node-8-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "let c",
                    "value": 30
                }
            },
            {
                "id": "node-11-1769110119781",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-14-1769110119781",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-17-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "Literal: 3",
                    "value": 3
                }
            },
            {
                "id": "node-18-1769110119781",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "MATH: /",
                    "op": "div"
                }
            },
            {
                "id": "node-21-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "let avg",
                    "value": 0
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119781-node-1-1769110119781-1769110119781-2",
                "source": "node-0-1769110119781",
                "target": "node-1-1769110119781",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119781-node-4-1769110119781-1769110119781-5",
                "source": "node-3-1769110119781",
                "target": "node-4-1769110119781",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119781-node-4-1769110119781-1769110119781-6",
                "source": "node-1-1769110119781",
                "target": "node-4-1769110119781",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119781-node-8-1769110119781-1769110119781-9",
                "source": "node-7-1769110119781",
                "target": "node-8-1769110119781",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119781-node-8-1769110119781-1769110119781-10",
                "source": "node-4-1769110119781",
                "target": "node-8-1769110119781",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119781-node-11-1769110119781-1769110119781-12",
                "source": "node-1-1769110119781",
                "target": "node-11-1769110119781",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119781-node-11-1769110119781-1769110119781-13",
                "source": "node-4-1769110119781",
                "target": "node-11-1769110119781",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119781-node-14-1769110119781-1769110119781-15",
                "source": "node-11-1769110119781",
                "target": "node-14-1769110119781",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119781-node-14-1769110119781-1769110119781-16",
                "source": "node-8-1769110119781",
                "target": "node-14-1769110119781",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-14-1769110119781-node-18-1769110119781-1769110119781-19",
                "source": "node-14-1769110119781",
                "target": "node-18-1769110119781",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119781-node-18-1769110119781-1769110119781-20",
                "source": "node-17-1769110119781",
                "target": "node-18-1769110119781",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-18-1769110119781-node-21-1769110119781-1769110119781-22",
                "source": "node-18-1769110119781",
                "target": "node-21-1769110119781",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119781-node-21-1769110119781-1769110119781-23",
                "source": "node-8-1769110119781",
                "target": "node-21-1769110119781",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "advanced-0",
        "name": "Fibonacci Array",
        "description": "JS Pattern: let arr = [0, 1]; for(let i=2;...",
        "category": "Advanced",
        "nodes": [
            {
                "id": "node-0-1769110119781",
                "type": "array",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "New Array []",
                    "mode": "create"
                }
            },
            {
                "id": "node-1-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let arr",
                    "value": 0
                }
            },
            {
                "id": "node-3-1769110119781",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-4-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "Literal: 2",
                    "value": 2
                }
            },
            {
                "id": "node-5-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "let i",
                    "value": 2
                }
            },
            {
                "id": "node-8-1769110119781",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-9-1769110119781",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-13-1769110119781",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-14-1769110119781",
                "type": "array",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "mode": "push",
                    "label": "Push to arr"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119781-node-1-1769110119781-1769110119781-2",
                "source": "node-0-1769110119781",
                "target": "node-1-1769110119781",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119781-node-5-1769110119781-1769110119781-6",
                "source": "node-4-1769110119781",
                "target": "node-5-1769110119781",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119781-node-5-1769110119781-1769110119781-7",
                "source": "node-3-1769110119781",
                "target": "node-5-1769110119781",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-5-1769110119781-node-9-1769110119781-1769110119781-10",
                "source": "node-5-1769110119781",
                "target": "node-9-1769110119781",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119781-node-9-1769110119781-1769110119781-11",
                "source": "node-8-1769110119781",
                "target": "node-9-1769110119781",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-9-1769110119781-node-3-1769110119781-1769110119781-12",
                "source": "node-9-1769110119781",
                "target": "node-3-1769110119781",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119781-node-14-1769110119781-1769110119781-15",
                "source": "node-1-1769110119781",
                "target": "node-14-1769110119781",
                "targetHandle": "arr",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119781-node-14-1769110119781-1769110119781-16",
                "source": "node-13-1769110119781",
                "target": "node-14-1769110119781",
                "targetHandle": "val",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119781-node-14-1769110119781-1769110119781-17",
                "source": "node-3-1769110119781",
                "target": "node-14-1769110119781",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119781-node-3-1769110119781-1769110119781-18",
                "source": "node-1-1769110119781",
                "target": "node-3-1769110119781",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "advanced-1",
        "name": "Bubble Sort Pass",
        "description": "JS Pattern: let arr = [3,1,2]; for(let i=0...",
        "category": "Advanced",
        "nodes": [
            {
                "id": "node-0-1769110119782",
                "type": "array",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "New Array []",
                    "mode": "create"
                }
            },
            {
                "id": "node-1-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let arr",
                    "value": 0
                }
            },
            {
                "id": "node-3-1769110119782",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-4-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-5-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "let i",
                    "value": 0
                }
            },
            {
                "id": "node-8-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: 2",
                    "value": 2
                }
            },
            {
                "id": "node-9-1769110119782",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-13-1769110119782",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "COMPARE: >",
                    "op": "gt"
                }
            },
            {
                "id": "node-14-1769110119782",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-16-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "let t",
                    "value": 0
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119782-node-1-1769110119782-1769110119782-2",
                "source": "node-0-1769110119782",
                "target": "node-1-1769110119782",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119782-node-5-1769110119782-1769110119782-6",
                "source": "node-4-1769110119782",
                "target": "node-5-1769110119782",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119782-node-5-1769110119782-1769110119782-7",
                "source": "node-3-1769110119782",
                "target": "node-5-1769110119782",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-5-1769110119782-node-9-1769110119782-1769110119782-10",
                "source": "node-5-1769110119782",
                "target": "node-9-1769110119782",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119782-node-9-1769110119782-1769110119782-11",
                "source": "node-8-1769110119782",
                "target": "node-9-1769110119782",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-9-1769110119782-node-3-1769110119782-1769110119782-12",
                "source": "node-9-1769110119782",
                "target": "node-3-1769110119782",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119782-node-14-1769110119782-1769110119782-15",
                "source": "node-13-1769110119782",
                "target": "node-14-1769110119782",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-14-1769110119782-node-16-1769110119782-1769110119782-17",
                "source": "node-14-1769110119782",
                "target": "node-16-1769110119782",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119782-node-14-1769110119782-1769110119782-18",
                "source": "node-3-1769110119782",
                "target": "node-14-1769110119782",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119782-node-3-1769110119782-1769110119782-19",
                "source": "node-1-1769110119782",
                "target": "node-3-1769110119782",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "advanced-2",
        "name": "Prime Check",
        "description": "JS Pattern: let n = 13; let isP = true; fo...",
        "category": "Advanced",
        "nodes": [
            {
                "id": "node-0-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 13",
                    "value": 13
                }
            },
            {
                "id": "node-1-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let n",
                    "value": 13
                }
            },
            {
                "id": "node-3-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: true",
                    "value": true
                }
            },
            {
                "id": "node-4-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let isP",
                    "value": true
                }
            },
            {
                "id": "node-7-1769110119782",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-8-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: 2",
                    "value": 2
                }
            },
            {
                "id": "node-9-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "let i",
                    "value": 2
                }
            },
            {
                "id": "node-12-1769110119782",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-16-1769110119782",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "MATH: %",
                    "op": "mod"
                }
            },
            {
                "id": "node-19-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-20-1769110119782",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "COMPARE: ==",
                    "op": "eq"
                }
            },
            {
                "id": "node-23-1769110119782",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-25-1769110119782",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "Literal: false",
                    "value": false
                }
            },
            {
                "id": "node-26-1769110119782",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1610
                },
                "data": {
                    "label": "Assign to isP",
                    "varName": "isP"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119782-node-1-1769110119782-1769110119782-2",
                "source": "node-0-1769110119782",
                "target": "node-1-1769110119782",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119782-node-4-1769110119782-1769110119782-5",
                "source": "node-3-1769110119782",
                "target": "node-4-1769110119782",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119782-node-4-1769110119782-1769110119782-6",
                "source": "node-1-1769110119782",
                "target": "node-4-1769110119782",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119782-node-9-1769110119782-1769110119782-10",
                "source": "node-8-1769110119782",
                "target": "node-9-1769110119782",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119782-node-9-1769110119782-1769110119782-11",
                "source": "node-7-1769110119782",
                "target": "node-9-1769110119782",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-9-1769110119782-node-12-1769110119782-1769110119782-13",
                "source": "node-9-1769110119782",
                "target": "node-12-1769110119782",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119782-node-12-1769110119782-1769110119782-14",
                "source": "node-1-1769110119782",
                "target": "node-12-1769110119782",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-12-1769110119782-node-7-1769110119782-1769110119782-15",
                "source": "node-12-1769110119782",
                "target": "node-7-1769110119782",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119782-node-16-1769110119782-1769110119782-17",
                "source": "node-1-1769110119782",
                "target": "node-16-1769110119782",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-9-1769110119782-node-16-1769110119782-1769110119782-18",
                "source": "node-9-1769110119782",
                "target": "node-16-1769110119782",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-16-1769110119782-node-20-1769110119782-1769110119782-21",
                "source": "node-16-1769110119782",
                "target": "node-20-1769110119782",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-19-1769110119782-node-20-1769110119782-1769110119782-22",
                "source": "node-19-1769110119782",
                "target": "node-20-1769110119782",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-20-1769110119782-node-23-1769110119782-1769110119782-24",
                "source": "node-20-1769110119782",
                "target": "node-23-1769110119782",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-25-1769110119782-node-26-1769110119782-1769110119782-27",
                "source": "node-25-1769110119782",
                "target": "node-26-1769110119782",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-23-1769110119782-node-26-1769110119782-1769110119782-28",
                "source": "node-23-1769110119782",
                "target": "node-26-1769110119782",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119782-node-23-1769110119782-1769110119782-29",
                "source": "node-7-1769110119782",
                "target": "node-23-1769110119782",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119782-node-7-1769110119782-1769110119782-30",
                "source": "node-4-1769110119782",
                "target": "node-7-1769110119782",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "advanced-3",
        "name": "Find Duplicate",
        "description": "JS Pattern: let arr = [1,2,2,3]; let dup =...",
        "category": "Advanced",
        "nodes": [
            {
                "id": "node-0-1769110119783",
                "type": "array",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "New Array []",
                    "mode": "create"
                }
            },
            {
                "id": "node-1-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let arr",
                    "value": 0
                }
            },
            {
                "id": "node-3-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-4-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let dup",
                    "value": 0
                }
            },
            {
                "id": "node-6-1769110119783",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-7-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-8-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "let i",
                    "value": 0
                }
            },
            {
                "id": "node-11-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Literal: 4",
                    "value": 4
                }
            },
            {
                "id": "node-12-1769110119783",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-16-1769110119783",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-17-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-18-1769110119783",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-21-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "let j",
                    "value": 0
                }
            },
            {
                "id": "node-24-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1610
                },
                "data": {
                    "label": "Literal: 4",
                    "value": 4
                }
            },
            {
                "id": "node-25-1769110119783",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1730
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-29-1769110119783",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1850
                },
                "data": {
                    "label": "COMPARE: ==",
                    "op": "eq"
                }
            },
            {
                "id": "node-30-1769110119783",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 1970
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-32-1769110119783",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 2090
                },
                "data": {
                    "label": "Assign to dup",
                    "varName": "dup"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119783-node-1-1769110119783-1769110119783-2",
                "source": "node-0-1769110119783",
                "target": "node-1-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119783-node-4-1769110119783-1769110119783-5",
                "source": "node-1-1769110119783",
                "target": "node-4-1769110119783",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119783-node-8-1769110119783-1769110119783-9",
                "source": "node-7-1769110119783",
                "target": "node-8-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-6-1769110119783-node-8-1769110119783-1769110119783-10",
                "source": "node-6-1769110119783",
                "target": "node-8-1769110119783",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119783-node-12-1769110119783-1769110119783-13",
                "source": "node-8-1769110119783",
                "target": "node-12-1769110119783",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119783-node-12-1769110119783-1769110119783-14",
                "source": "node-11-1769110119783",
                "target": "node-12-1769110119783",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-12-1769110119783-node-6-1769110119783-1769110119783-15",
                "source": "node-12-1769110119783",
                "target": "node-6-1769110119783",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119783-node-18-1769110119783-1769110119783-19",
                "source": "node-8-1769110119783",
                "target": "node-18-1769110119783",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119783-node-18-1769110119783-1769110119783-20",
                "source": "node-17-1769110119783",
                "target": "node-18-1769110119783",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-18-1769110119783-node-21-1769110119783-1769110119783-22",
                "source": "node-18-1769110119783",
                "target": "node-21-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-16-1769110119783-node-21-1769110119783-1769110119783-23",
                "source": "node-16-1769110119783",
                "target": "node-21-1769110119783",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-21-1769110119783-node-25-1769110119783-1769110119783-26",
                "source": "node-21-1769110119783",
                "target": "node-25-1769110119783",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-24-1769110119783-node-25-1769110119783-1769110119783-27",
                "source": "node-24-1769110119783",
                "target": "node-25-1769110119783",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-25-1769110119783-node-16-1769110119783-1769110119783-28",
                "source": "node-25-1769110119783",
                "target": "node-16-1769110119783",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-29-1769110119783-node-30-1769110119783-1769110119783-31",
                "source": "node-29-1769110119783",
                "target": "node-30-1769110119783",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-30-1769110119783-node-32-1769110119783-1769110119783-33",
                "source": "node-30-1769110119783",
                "target": "node-32-1769110119783",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-16-1769110119783-node-30-1769110119783-1769110119783-34",
                "source": "node-16-1769110119783",
                "target": "node-30-1769110119783",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-6-1769110119783-node-16-1769110119783-1769110119783-35",
                "source": "node-6-1769110119783",
                "target": "node-16-1769110119783",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119783-node-6-1769110119783-1769110119783-36",
                "source": "node-4-1769110119783",
                "target": "node-6-1769110119783",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "advanced-4",
        "name": "Palindrome Check",
        "description": "JS Pattern: let s = \"racecar\"; let isPal =...",
        "category": "Advanced",
        "nodes": [
            {
                "id": "node-0-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: racecar",
                    "value": "racecar"
                }
            },
            {
                "id": "node-1-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let s",
                    "value": "racecar"
                }
            },
            {
                "id": "node-3-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: true",
                    "value": true
                }
            },
            {
                "id": "node-4-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let isPal",
                    "value": true
                }
            },
            {
                "id": "node-7-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal: 7",
                    "value": 7
                }
            },
            {
                "id": "node-8-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "let len",
                    "value": 7
                }
            },
            {
                "id": "node-11-1769110119783",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-12-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-13-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "let i",
                    "value": 0
                }
            },
            {
                "id": "node-16-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "Literal: 3",
                    "value": 3
                }
            },
            {
                "id": "node-17-1769110119783",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-21-1769110119783",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "COMPARE: !=",
                    "op": "neq"
                }
            },
            {
                "id": "node-22-1769110119783",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-24-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1610
                },
                "data": {
                    "label": "Literal: false",
                    "value": false
                }
            },
            {
                "id": "node-25-1769110119783",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1730
                },
                "data": {
                    "label": "Assign to isPal",
                    "varName": "isPal"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119783-node-1-1769110119783-1769110119783-2",
                "source": "node-0-1769110119783",
                "target": "node-1-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119783-node-4-1769110119783-1769110119783-5",
                "source": "node-3-1769110119783",
                "target": "node-4-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119783-node-4-1769110119783-1769110119783-6",
                "source": "node-1-1769110119783",
                "target": "node-4-1769110119783",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119783-node-8-1769110119783-1769110119783-9",
                "source": "node-7-1769110119783",
                "target": "node-8-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119783-node-8-1769110119783-1769110119783-10",
                "source": "node-4-1769110119783",
                "target": "node-8-1769110119783",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-12-1769110119783-node-13-1769110119783-1769110119783-14",
                "source": "node-12-1769110119783",
                "target": "node-13-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119783-node-13-1769110119783-1769110119783-15",
                "source": "node-11-1769110119783",
                "target": "node-13-1769110119783",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119783-node-17-1769110119783-1769110119783-18",
                "source": "node-13-1769110119783",
                "target": "node-17-1769110119783",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-16-1769110119783-node-17-1769110119783-1769110119783-19",
                "source": "node-16-1769110119783",
                "target": "node-17-1769110119783",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119783-node-11-1769110119783-1769110119783-20",
                "source": "node-17-1769110119783",
                "target": "node-11-1769110119783",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-21-1769110119783-node-22-1769110119783-1769110119783-23",
                "source": "node-21-1769110119783",
                "target": "node-22-1769110119783",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-24-1769110119783-node-25-1769110119783-1769110119783-26",
                "source": "node-24-1769110119783",
                "target": "node-25-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-22-1769110119783-node-25-1769110119783-1769110119783-27",
                "source": "node-22-1769110119783",
                "target": "node-25-1769110119783",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119783-node-22-1769110119783-1769110119783-28",
                "source": "node-11-1769110119783",
                "target": "node-22-1769110119783",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119783-node-11-1769110119783-1769110119783-29",
                "source": "node-8-1769110119783",
                "target": "node-11-1769110119783",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "advanced-5",
        "name": "Vowel Counter",
        "description": "JS Pattern: let s = \"hello\"; let count = 0...",
        "category": "Advanced",
        "nodes": [
            {
                "id": "node-0-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: hello",
                    "value": "hello"
                }
            },
            {
                "id": "node-1-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let s",
                    "value": "hello"
                }
            },
            {
                "id": "node-3-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-4-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let count",
                    "value": 0
                }
            },
            {
                "id": "node-7-1769110119783",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-8-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-9-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "let i",
                    "value": 0
                }
            },
            {
                "id": "node-12-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Literal: 5",
                    "value": 5
                }
            },
            {
                "id": "node-13-1769110119783",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-17-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "Literal: a",
                    "value": "a"
                }
            },
            {
                "id": "node-18-1769110119783",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "COMPARE: ==",
                    "op": "eq"
                }
            },
            {
                "id": "node-20-1769110119783",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-22-1769110119783",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-23-1769110119783",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1610
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-26-1769110119783",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1730
                },
                "data": {
                    "label": "Assign to count",
                    "varName": "count"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119783-node-1-1769110119783-1769110119783-2",
                "source": "node-0-1769110119783",
                "target": "node-1-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119783-node-4-1769110119783-1769110119783-5",
                "source": "node-3-1769110119783",
                "target": "node-4-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119783-node-4-1769110119783-1769110119783-6",
                "source": "node-1-1769110119783",
                "target": "node-4-1769110119783",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119783-node-9-1769110119783-1769110119783-10",
                "source": "node-8-1769110119783",
                "target": "node-9-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119783-node-9-1769110119783-1769110119783-11",
                "source": "node-7-1769110119783",
                "target": "node-9-1769110119783",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-9-1769110119783-node-13-1769110119783-1769110119783-14",
                "source": "node-9-1769110119783",
                "target": "node-13-1769110119783",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-12-1769110119783-node-13-1769110119783-1769110119783-15",
                "source": "node-12-1769110119783",
                "target": "node-13-1769110119783",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119783-node-7-1769110119783-1769110119783-16",
                "source": "node-13-1769110119783",
                "target": "node-7-1769110119783",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119783-node-18-1769110119783-1769110119783-19",
                "source": "node-17-1769110119783",
                "target": "node-18-1769110119783",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-18-1769110119783-node-20-1769110119783-1769110119783-21",
                "source": "node-18-1769110119783",
                "target": "node-20-1769110119783",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119783-node-23-1769110119783-1769110119783-24",
                "source": "node-4-1769110119783",
                "target": "node-23-1769110119783",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-22-1769110119783-node-23-1769110119783-1769110119783-25",
                "source": "node-22-1769110119783",
                "target": "node-23-1769110119783",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-23-1769110119783-node-26-1769110119783-1769110119783-27",
                "source": "node-23-1769110119783",
                "target": "node-26-1769110119783",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-20-1769110119783-node-26-1769110119783-1769110119783-28",
                "source": "node-20-1769110119783",
                "target": "node-26-1769110119783",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119783-node-20-1769110119783-1769110119783-29",
                "source": "node-7-1769110119783",
                "target": "node-20-1769110119783",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119783-node-7-1769110119783-1769110119783-30",
                "source": "node-4-1769110119783",
                "target": "node-7-1769110119783",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "advanced-6",
        "name": "Min in List",
        "description": "JS Pattern: let arr = [5,2,9,1]; let min =...",
        "category": "Advanced",
        "nodes": [
            {
                "id": "node-0-1769110119784",
                "type": "array",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "New Array []",
                    "mode": "create"
                }
            },
            {
                "id": "node-1-1769110119784",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let arr",
                    "value": 0
                }
            },
            {
                "id": "node-3-1769110119784",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "let min",
                    "value": 0
                }
            },
            {
                "id": "node-5-1769110119784",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-6-1769110119784",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "Literal: 1",
                    "value": 1
                }
            },
            {
                "id": "node-7-1769110119784",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "let i",
                    "value": 1
                }
            },
            {
                "id": "node-10-1769110119784",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "Literal: 4",
                    "value": 4
                }
            },
            {
                "id": "node-11-1769110119784",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-15-1769110119784",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-17-1769110119784",
                "type": "if",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "If Condition"
                }
            },
            {
                "id": "node-19-1769110119784",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "Assign to min",
                    "varName": "min"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119784-node-1-1769110119784-1769110119784-2",
                "source": "node-0-1769110119784",
                "target": "node-1-1769110119784",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119784-node-3-1769110119784-1769110119784-4",
                "source": "node-1-1769110119784",
                "target": "node-3-1769110119784",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-6-1769110119784-node-7-1769110119784-1769110119784-8",
                "source": "node-6-1769110119784",
                "target": "node-7-1769110119784",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-5-1769110119784-node-7-1769110119784-1769110119784-9",
                "source": "node-5-1769110119784",
                "target": "node-7-1769110119784",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119784-node-11-1769110119784-1769110119784-12",
                "source": "node-7-1769110119784",
                "target": "node-11-1769110119784",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-10-1769110119784-node-11-1769110119784-1769110119784-13",
                "source": "node-10-1769110119784",
                "target": "node-11-1769110119784",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-11-1769110119784-node-5-1769110119784-1769110119784-14",
                "source": "node-11-1769110119784",
                "target": "node-5-1769110119784",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119784-node-15-1769110119784-1769110119784-16",
                "source": "node-3-1769110119784",
                "target": "node-15-1769110119784",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-15-1769110119784-node-17-1769110119784-1769110119784-18",
                "source": "node-15-1769110119784",
                "target": "node-17-1769110119784",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119784-node-19-1769110119784-1769110119784-20",
                "source": "node-17-1769110119784",
                "target": "node-19-1769110119784",
                "sourceHandle": "true",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-5-1769110119784-node-17-1769110119784-1769110119784-21",
                "source": "node-5-1769110119784",
                "target": "node-17-1769110119784",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119784-node-5-1769110119784-1769110119784-22",
                "source": "node-3-1769110119784",
                "target": "node-5-1769110119784",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "advanced-7",
        "name": "Reverse Number",
        "description": "JS Pattern: let n = 123; let rev = 0; whil...",
        "category": "Advanced",
        "nodes": [
            {
                "id": "node-0-1769110119785",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 123",
                    "value": 123
                }
            },
            {
                "id": "node-1-1769110119785",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let n",
                    "value": 123
                }
            },
            {
                "id": "node-3-1769110119785",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-4-1769110119785",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "let rev",
                    "value": 0
                }
            },
            {
                "id": "node-7-1769110119785",
                "type": "while",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "While Loop"
                }
            },
            {
                "id": "node-8-1769110119785",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-9-1769110119785",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "COMPARE: >",
                    "op": "gt"
                }
            },
            {
                "id": "node-13-1769110119785",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-14-1769110119785",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "MATH: %",
                    "op": "mod"
                }
            },
            {
                "id": "node-17-1769110119785",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "let d",
                    "value": 0
                }
            },
            {
                "id": "node-19-1769110119785",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-20-1769110119785",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "MATH: *",
                    "op": "mul"
                }
            },
            {
                "id": "node-23-1769110119785",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-26-1769110119785",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1610
                },
                "data": {
                    "label": "Assign to rev",
                    "varName": "rev"
                }
            },
            {
                "id": "node-29-1769110119785",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1730
                },
                "data": {
                    "label": "Literal: 10",
                    "value": 10
                }
            },
            {
                "id": "node-30-1769110119785",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1850
                },
                "data": {
                    "label": "MATH: /",
                    "op": "div"
                }
            },
            {
                "id": "node-33-1769110119785",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1970
                },
                "data": {
                    "label": "Assign to n",
                    "varName": "n"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119785-node-1-1769110119785-1769110119785-2",
                "source": "node-0-1769110119785",
                "target": "node-1-1769110119785",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119785-node-4-1769110119785-1769110119785-5",
                "source": "node-3-1769110119785",
                "target": "node-4-1769110119785",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119785-node-4-1769110119785-1769110119785-6",
                "source": "node-1-1769110119785",
                "target": "node-4-1769110119785",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119785-node-9-1769110119785-1769110119785-10",
                "source": "node-1-1769110119785",
                "target": "node-9-1769110119785",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119785-node-9-1769110119785-1769110119785-11",
                "source": "node-8-1769110119785",
                "target": "node-9-1769110119785",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-9-1769110119785-node-7-1769110119785-1769110119785-12",
                "source": "node-9-1769110119785",
                "target": "node-7-1769110119785",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119785-node-14-1769110119785-1769110119785-15",
                "source": "node-1-1769110119785",
                "target": "node-14-1769110119785",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119785-node-14-1769110119785-1769110119785-16",
                "source": "node-13-1769110119785",
                "target": "node-14-1769110119785",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-14-1769110119785-node-17-1769110119785-1769110119785-18",
                "source": "node-14-1769110119785",
                "target": "node-17-1769110119785",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119785-node-20-1769110119785-1769110119785-21",
                "source": "node-4-1769110119785",
                "target": "node-20-1769110119785",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-19-1769110119785-node-20-1769110119785-1769110119785-22",
                "source": "node-19-1769110119785",
                "target": "node-20-1769110119785",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-20-1769110119785-node-23-1769110119785-1769110119785-24",
                "source": "node-20-1769110119785",
                "target": "node-23-1769110119785",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119785-node-23-1769110119785-1769110119785-25",
                "source": "node-17-1769110119785",
                "target": "node-23-1769110119785",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-23-1769110119785-node-26-1769110119785-1769110119785-27",
                "source": "node-23-1769110119785",
                "target": "node-26-1769110119785",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-17-1769110119785-node-26-1769110119785-1769110119785-28",
                "source": "node-17-1769110119785",
                "target": "node-26-1769110119785",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119785-node-30-1769110119785-1769110119785-31",
                "source": "node-1-1769110119785",
                "target": "node-30-1769110119785",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-29-1769110119785-node-30-1769110119785-1769110119785-32",
                "source": "node-29-1769110119785",
                "target": "node-30-1769110119785",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-30-1769110119785-node-33-1769110119785-1769110119785-34",
                "source": "node-30-1769110119785",
                "target": "node-33-1769110119785",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-26-1769110119785-node-33-1769110119785-1769110119785-35",
                "source": "node-26-1769110119785",
                "target": "node-33-1769110119785",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-7-1769110119785-node-17-1769110119785-1769110119785-36",
                "source": "node-7-1769110119785",
                "target": "node-17-1769110119785",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-33-1769110119785-node-7-1769110119785-1769110119785-37",
                "source": "node-33-1769110119785",
                "target": "node-7-1769110119785",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119785-node-7-1769110119785-1769110119785-38",
                "source": "node-4-1769110119785",
                "target": "node-7-1769110119785",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "advanced-8",
        "name": "Object Map",
        "description": "JS Pattern: let obj = {a: 1, b: 2}; let va...",
        "category": "Advanced",
        "nodes": [
            {
                "id": "node-0-1769110119786",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "let obj",
                    "value": 0
                }
            },
            {
                "id": "node-1-1769110119786",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let val",
                    "value": 0
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119786-node-1-1769110119786-1769110119786-2",
                "source": "node-0-1769110119786",
                "target": "node-1-1769110119786",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    },
    {
        "id": "advanced-9",
        "name": "Nested Sum",
        "description": "JS Pattern: let s = 0; for(let i=0; i<3; i...",
        "category": "Advanced",
        "nodes": [
            {
                "id": "node-0-1769110119786",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 50
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-1-1769110119786",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 170
                },
                "data": {
                    "label": "let s",
                    "value": 0
                }
            },
            {
                "id": "node-3-1769110119786",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 290
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-4-1769110119786",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 410
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-5-1769110119786",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 530
                },
                "data": {
                    "label": "let i",
                    "value": 0
                }
            },
            {
                "id": "node-8-1769110119786",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 650
                },
                "data": {
                    "label": "Literal: 3",
                    "value": 3
                }
            },
            {
                "id": "node-9-1769110119786",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 770
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-13-1769110119786",
                "type": "for",
                "position": {
                    "x": 250,
                    "y": 890
                },
                "data": {
                    "label": "For Loop"
                }
            },
            {
                "id": "node-14-1769110119786",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1010
                },
                "data": {
                    "label": "Literal: 0",
                    "value": 0
                }
            },
            {
                "id": "node-15-1769110119786",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1130
                },
                "data": {
                    "label": "let j",
                    "value": 0
                }
            },
            {
                "id": "node-18-1769110119786",
                "type": "input",
                "position": {
                    "x": 250,
                    "y": 1250
                },
                "data": {
                    "label": "Literal: 3",
                    "value": 3
                }
            },
            {
                "id": "node-19-1769110119786",
                "type": "compare",
                "position": {
                    "x": 250,
                    "y": 1370
                },
                "data": {
                    "label": "COMPARE: <",
                    "op": "lt"
                }
            },
            {
                "id": "node-23-1769110119786",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1490
                },
                "data": {
                    "label": "MATH: *",
                    "op": "mul"
                }
            },
            {
                "id": "node-26-1769110119786",
                "type": "math",
                "position": {
                    "x": 250,
                    "y": 1610
                },
                "data": {
                    "label": "MATH: +",
                    "op": "add"
                }
            },
            {
                "id": "node-29-1769110119786",
                "type": "assignment",
                "position": {
                    "x": 250,
                    "y": 1730
                },
                "data": {
                    "label": "Assign to s",
                    "varName": "s"
                }
            }
        ],
        "edges": [
            {
                "id": "e-node-0-1769110119786-node-1-1769110119786-1769110119786-2",
                "source": "node-0-1769110119786",
                "target": "node-1-1769110119786",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-4-1769110119786-node-5-1769110119786-1769110119786-6",
                "source": "node-4-1769110119786",
                "target": "node-5-1769110119786",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119786-node-5-1769110119786-1769110119786-7",
                "source": "node-3-1769110119786",
                "target": "node-5-1769110119786",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-5-1769110119786-node-9-1769110119786-1769110119786-10",
                "source": "node-5-1769110119786",
                "target": "node-9-1769110119786",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-8-1769110119786-node-9-1769110119786-1769110119786-11",
                "source": "node-8-1769110119786",
                "target": "node-9-1769110119786",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-9-1769110119786-node-3-1769110119786-1769110119786-12",
                "source": "node-9-1769110119786",
                "target": "node-3-1769110119786",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-14-1769110119786-node-15-1769110119786-1769110119786-16",
                "source": "node-14-1769110119786",
                "target": "node-15-1769110119786",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119786-node-15-1769110119786-1769110119786-17",
                "source": "node-13-1769110119786",
                "target": "node-15-1769110119786",
                "sourceHandle": "init",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-15-1769110119786-node-19-1769110119786-1769110119786-20",
                "source": "node-15-1769110119786",
                "target": "node-19-1769110119786",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-18-1769110119786-node-19-1769110119786-1769110119786-21",
                "source": "node-18-1769110119786",
                "target": "node-19-1769110119786",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-19-1769110119786-node-13-1769110119786-1769110119786-22",
                "source": "node-19-1769110119786",
                "target": "node-13-1769110119786",
                "targetHandle": "condition",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-5-1769110119786-node-23-1769110119786-1769110119786-24",
                "source": "node-5-1769110119786",
                "target": "node-23-1769110119786",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-15-1769110119786-node-23-1769110119786-1769110119786-25",
                "source": "node-15-1769110119786",
                "target": "node-23-1769110119786",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119786-node-26-1769110119786-1769110119786-27",
                "source": "node-1-1769110119786",
                "target": "node-26-1769110119786",
                "targetHandle": "a",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-23-1769110119786-node-26-1769110119786-1769110119786-28",
                "source": "node-23-1769110119786",
                "target": "node-26-1769110119786",
                "targetHandle": "b",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-26-1769110119786-node-29-1769110119786-1769110119786-30",
                "source": "node-26-1769110119786",
                "target": "node-29-1769110119786",
                "targetHandle": "value",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-13-1769110119786-node-29-1769110119786-1769110119786-31",
                "source": "node-13-1769110119786",
                "target": "node-29-1769110119786",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-3-1769110119786-node-13-1769110119786-1769110119786-32",
                "source": "node-3-1769110119786",
                "target": "node-13-1769110119786",
                "sourceHandle": "body",
                "type": "buttonEdge"
            },
            {
                "id": "e-node-1-1769110119786-node-3-1769110119786-1769110119786-33",
                "source": "node-1-1769110119786",
                "target": "node-3-1769110119786",
                "targetHandle": "flow-in",
                "type": "buttonEdge"
            }
        ]
    }
];

export const getTemplateById = (id: string) => templates.find(t => t.id === id);
export const getTemplatesByCategory = (category: string) => templates.filter(t => t.category === category);
export const getAllCategories = () => [...new Set(templates.map(t => t.category))];
