async function testAI() {
    const apiKey = process.env.HF_TOKEN;
    const models = [
        "mistralai/Mistral-7B-Instruct-v0.3",
        "meta-llama/Meta-Llama-3-8B-Instruct",
        "Qwen/Qwen2.5-72B-Instruct",
        "microsoft/Phi-3-mini-4k-instruct",
        "HuggingFaceH4/zephyr-7b-beta"
    ];

    console.log("Testing Hugging Face API (OpenAI Compatible Endpoint)...");
    const url = `https://router.huggingface.co/v1/chat/completions`;

    if (typeof fetch === 'undefined') {
        console.error("ERROR: 'fetch' is not defined.");
        return;
    }

    for (const model of models) {
        console.log(`\n--- Testing Model: ${model} ---`);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: model,
                    messages: [{ role: "user", content: "Say hello." }],
                    max_tokens: 20
                })
            });

            const text = await response.text();
            console.log(`Status: ${response.status}`);

            if (response.ok) {
                console.log("SUCCESS! This model is supported.");
                console.log("Response:", text);
                return; // Stop after finding a working model
            } else {
                console.log("Failed:", text);
            }

        } catch (e: any) {
            console.error("Exception:", e.message);
        }
    }
    console.log("\nNo working models found in the list.");
}

testAI();
