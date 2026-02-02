import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';


dotenv.config();

export const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

app.post('/api/parse-python', (req, res) => {
    const { code } = req.body;
    if (!code) {
        res.status(400).json({ error: "No code provided" });
        return;
    }

    const scriptPath = path.join(process.cwd(), 'src', 'python-parser.py');
    
    // Try 'python' then 'python3' as fallback
    const trySpawn = (cmd: string) => {
        return new Promise<{stdout: string, stderr: string, code: number | null}>((resolve) => {
            const proc = spawn(cmd, [scriptPath]);
            let stdout = '';
            let stderr = '';
            
            proc.stdin.write(code);
            proc.stdin.end();

            proc.stdout.on('data', (data) => stdout += data.toString());
            proc.stderr.on('data', (data) => stderr += data.toString());
            proc.on('close', (c) => resolve({ stdout, stderr, code: c }));
            proc.on('error', () => resolve({ stdout: '', stderr: 'cmd not found', code: -1 }));
        });
    };

    (async () => {
        let result = await trySpawn('python');
        if (result.code !== 0) {
            result = await trySpawn('python3');
        }

        if (result.code !== 0) {
            res.status(500).json({ error: result.stderr || 'Python process failed' });
        } else {
            try {
                const json = JSON.parse(result.stdout);
                res.json(json);
            } catch (e) {
                res.status(500).json({ error: 'Failed to parse Python output' });
            }
        }
    })();
});

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function scanDir(dirPath: string): Promise<any> {
    const items = await readdir(dirPath);
    const result = [];

    for (const item of items) {
        if (item.startsWith('.') || item === 'node_modules' || item === 'dist') continue;

        const fullPath = path.join(dirPath, item);
        const stats = await stat(fullPath);

        if (stats.isDirectory()) {
            result.push({
                name: item,
                type: 'directory',
                children: await scanDir(fullPath)
            });
        } else if (item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.py')) {
            result.push({
                name: item,
                type: 'file',
                path: fullPath
            });
        }
    }
    return result;
}

app.get('/api/read-file', async (req, res) => {
    try {
        const filePath = req.query.path as string;
        if (!filePath) {
            res.status(400).json({ error: 'No path provided' });
            return;
        }

        const rootPath = path.resolve(process.cwd(), '..');
        const resolvedPath = path.resolve(filePath);

        if (!resolvedPath.startsWith(rootPath)) {
            res.status(403).json({ error: 'Access denied' });
            return;
        }

        const stats = await stat(resolvedPath);
        if (stats.size > 1024 * 1024) {
            res.status(400).json({ error: 'File too large' });
            return;
        }

        const content = await promisify(fs.readFile)(resolvedPath, 'utf-8');
        res.json({ content });
    } catch (e) {
        res.status(500).json({ error: String(e) });
    }
});

app.get('/api/project-files', async (req, res) => {
    try {
        const rootPath = path.resolve(process.cwd(), '..');
        const files = await scanDir(rootPath);
        res.json(files);
    } catch (e) {
        res.status(500).json({ error: String(e) });
    }
});

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

app.post('/api/ai-mentor', async (req, res) => {
    const { question, context } = req.body;
    const apiKey = process.env.HF_TOKEN; 
    const model = "meta-llama/Meta-Llama-3-8B-Instruct";

    if (!apiKey) {
        console.log("[AI Mentor] No API Key provided in .env.");
        res.status(500).json({ error: "AI Mentor is not configured (missing HF_TOKEN)" });
        return;
    }

    const payload = {
        model: model,
        messages: [
            {
                role: "system",
                content: "You are an AI Mentor for FlowLabs. Explain logic simply for students. ALWAYS provide your answers in clear bullet points for better readability. Be encouraging and concise."
            },
            {
                role: "user",
                content: `Context: ${JSON.stringify(context)}\n\nQuestion: ${question}`
            }
        ],
        max_tokens: 500
    };

    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            const response = await fetch(`https://router.huggingface.co/v1/chat/completions`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorText = await response.text();
                if (response.status === 503 && errorText.includes("currently loading")) {
                    await delay(15000);
                    attempt++;
                    continue;
                }
                throw new Error(`Hugging Face API Error: ${response.status}`);
            }

            const data = await response.json() as any;
            let answer = data.choices?.[0]?.message?.content || "I couldn't generate a response.";
            res.json({ answer });
            return;

        } catch (e: any) {
            if (attempt === maxRetries - 1) {
                res.status(500).json({ error: `AI Service Error: ${e?.message || 'Unknown'}` });
                return;
            }
            attempt++;
        }
    }
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test' && !process.env.VITEST) {
    httpServer.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

