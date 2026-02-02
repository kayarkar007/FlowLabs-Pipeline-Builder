import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', time: new Date().toISOString(), env: process.env.NODE_ENV });
});

app.post('/api/ai-mentor', async (req: Request, res: Response) => {
    const { question, context } = req.body;
    const apiKey = process.env.HF_TOKEN; 
    const model = "meta-llama/Meta-Llama-3-8B-Instruct";

    if (!apiKey) {
        return res.status(500).json({ error: "AI Mentor is not configured (missing HF_TOKEN)" });
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
            throw new Error(`Hugging Face API Error: ${response.status}`);
        }

        const data = await response.json() as any;
        let answer = data.choices?.[0]?.message?.content || "I couldn't generate a response.";
        res.json({ answer });
    } catch (e: any) {
        res.status(500).json({ error: `AI Service Error: ${e?.message || 'Unknown'}` });
    }
});

export default app;
