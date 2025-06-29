import { OpenAIApi, Configuration } from "openai";

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

export async function askAI(prompt: string): Promise<string> {
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }]
  });
  return res.data.choices[0].message?.content || "No response";
}
