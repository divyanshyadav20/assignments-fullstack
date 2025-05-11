import { ChatOpenAI } from "@langchain/openai";

export const model = new ChatOpenAI({
  temperature: 0,
  model: "gpt-4o",
  openAIApiKey: process.env.OPENAI_API_KEY,
  maxTokens: 1000,
});
