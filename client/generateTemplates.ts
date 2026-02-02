import { type Node, type Edge } from 'reactflow';
import type { CommonNodeData } from './src/types/nodes';
import { parseCodeToPipeline } from './src/utils/codeParser';
import * as fs from 'fs';

interface Template {
    id: string;
    name: string;
    description: string;
    category: string;
    nodes: Node<CommonNodeData>[];
    edges: Edge[];
}

const patterns = {
    basic: [
        { name: 'Hello Console', code: 'console.log("Hello VPos!");' },
        { name: 'Adder', code: 'const a = 10; const b = 20; const sum = a + b; console.log(sum);' },
        { name: 'String Joiner', code: 'const first = "Hello"; const last = "World"; const full = first + " " + last;' },
        { name: 'Boolean Not', code: 'const active = true; const inactive = !active;' },
        { name: 'Even Odd', code: 'const num = 7; const isEven = (num % 2 == 0);' },
        { name: 'Sign Detector', code: 'const n = -5; if (n > 0) { console.log("Pos"); } else { console.log("Neg"); }' },
        { name: 'Absolute Value', code: 'let val = -10; if (val < 0) { val = val * -1; }' },
        { name: 'Min Checker', code: 'const a = 5; const b = 10; let min = a; if (b < a) { min = b; }' },
        { name: 'Max Checker', code: 'const a = 5; const b = 10; let max = b; if (a > b) { max = a; }' },
        { name: 'Cheap Discount', code: 'const price = 100; const disc = 10; const final = price - disc;' }
    ],
    medium: [
        { name: 'Loop Factorial', code: 'let n = 5; let f = 1; let i = 1; while(i <= n) { f = f * i; i = i + 1; }' },
        { name: 'Sum Series', code: 'let n = 10; let s = 0; let i = 1; while(i <= n) { s = s + i; i = i + 1; }' },
        { name: 'Array Filler', code: 'let arr = []; let i = 0; while(i < 5) { arr.push(i); i = i + 1; }' },
        { name: 'Linear Search', code: 'let list = [1,2,3]; let target = 2; let found = false; for(let i=0; i<3; i++) { if(list[i] == target) { found = true; } }' },
        { name: 'Grade Calc', code: 'let score = 85; let grade = "F"; if(score > 90) { grade = "A"; } else { if(score > 80) { grade = "B"; } }' },
        { name: 'Variable Swap', code: 'let a = 1; let b = 2; let temp = a; a = b; b = temp;' },
        { name: 'Multiplication Row', code: 'let n = 7; let i = 1; while(i <= 10) { console.log(n * i); i = i + 1; }' },
        { name: 'Power Loop', code: 'let b = 2; let p = 3; let res = 1; while(p > 0) { res = res * b; p = p - 1; }' },
        { name: 'Temp Convert', code: 'let c = 30; let f = (c * 9 / 5) + 32;' },
        { name: 'Basic Average', code: 'let a = 10; let b = 20; let c = 30; let avg = (a+b+c)/3;' }
    ],
    advanced: [
        { name: 'Fibonacci Array', code: 'let arr = [0, 1]; for(let i=2; i<10; i++) { arr.push(arr[i-1] + arr[i-2]); }' },
        { name: 'Bubble Sort Pass', code: 'let arr = [3,1,2]; for(let i=0; i<2; i++) { if(arr[i] > arr[i+1]) { let t = arr[i]; arr[i] = arr[i+1]; arr[i+1] = t; } }' },
        { name: 'Prime Check', code: 'let n = 13; let isP = true; for(let i=2; i<n; i++) { if(n % i == 0) { isP = false; } }' },
        { name: 'Find Duplicate', code: 'let arr = [1,2,2,3]; let dup = -1; for(let i=0; i<4; i++) { for(let j=i+1; j<4; j++) { if(arr[i] == arr[j]) { dup = arr[i]; } } }' },
        { name: 'Palindrome Check', code: 'let s = "racecar"; let isPal = true; let len = 7; for(let i=0; i<3; i++) { if(s[i] != s[len-1-i]) { isPal = false; } }' },
        { name: 'Vowel Counter', code: 'let s = "hello"; let count = 0; for(let i=0; i<5; i++) { if(s[i] == "a") { count = count + 1; } }' },
        { name: 'Min in List', code: 'let arr = [5,2,9,1]; let min = arr[0]; for(let i=1; i<4; i++) { if(arr[i] < min) { min = arr[i]; } }' },
        { name: 'Reverse Number', code: 'let n = 123; let rev = 0; while(n > 0) { let d = n % 10; rev = rev * 10 + d; n = n / 10; }' },
        { name: 'Object Map', code: 'let obj = {a: 1, b: 2}; let val = obj["a"];' },
        { name: 'Nested Sum', code: 'let s = 0; for(let i=0; i<3; i++) { for(let j=0; j<3; j++) { s = s + (i * j); } }' }
    ]
};

const processedTemplates: Template[] = [];

Object.entries(patterns).forEach(([category, items]) => {
    items.forEach((item, idx) => {
        try {
            const { nodes, edges } = parseCodeToPipeline(item.code);
            processedTemplates.push({
                id: `${category}-${idx}`,
                name: item.name,
                description: `JS Pattern: ${item.code.substring(0, 30)}...`,
                category: category.charAt(0).toUpperCase() + category.slice(1),
                nodes,
                edges
            });
        } catch (e) { console.error(`Failed ${item.name}`, e); }
    });
});

const content = `export const templates = ${JSON.stringify(processedTemplates, null, 4)};

export const getTemplateById = (id: string) => templates.find(t => t.id === id);
export const getTemplatesByCategory = (category: string) => templates.filter(t => t.category === category);
export const getAllCategories = () => [...new Set(templates.map(t => t.category))];
`;

fs.writeFileSync('./src/data/templates.ts', content);
console.log('30 templates generated successfully.');
