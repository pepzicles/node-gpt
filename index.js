const { OpenAI, OpenAIApi } = require("openai");

const openai = new OpenAI({
  apiKey: '[your api key here]',
});


const runPrompt = async () => { 
    const prompt = "Tell me a joke about a cat eating pasta";
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
        max_tokens: 256,
        temperature: 1,
    });

    console.log(response['choices'][0]['message']['content']);
}

runPrompt();