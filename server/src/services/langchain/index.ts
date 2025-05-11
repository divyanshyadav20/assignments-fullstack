import { ChatOpenAI } from "@langchain/openai";

export const model = new ChatOpenAI({
  temperature: 0,
  model: "gpt-4o",
  maxTokens: 2000,
  openAIApiKey: process.env.OPENAI_API_KEY,
});
