import { ChatOpenAI } from "@langchain/openai";
import { MAIN_PROMPT } from "./prompts";

const model = new ChatOpenAI({
  temperature: 0,
  model: "gpt-4o",
  maxTokens: 1000,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const ai = MAIN_PROMPT.pipe(model);

export default ai;
