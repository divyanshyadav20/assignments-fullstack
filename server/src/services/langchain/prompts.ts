import { PromptTemplate } from "@langchain/core/prompts";

export const MAIN_PROMPT = PromptTemplate.fromTemplate(
  ` 
    You are a helpful AI assistant. 
    Context: {context}
    Question: {question}

    Please provide a helpful response:
  `,
);
