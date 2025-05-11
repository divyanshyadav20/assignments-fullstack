import { InterviewQuestionsResponseSchema } from "@/schemas";
import { GenerateQuestions } from "@/types";
import { StructuredOutputParser } from "langchain/output_parsers";
import { model } from "./langchain";
import { INTERVIEW_QUESTIONS_PROMPT } from "./langchain/prompts";

const parser = StructuredOutputParser.fromZodSchema(InterviewQuestionsResponseSchema);
const interviewQuestionsChain = INTERVIEW_QUESTIONS_PROMPT.pipe(model).pipe(parser);

export const generateInterviewQuestions = async (params: GenerateQuestions) => {
  try {
    return await interviewQuestionsChain.invoke({
      role: params.role,
      experienceLevel: params.experienceLevel,
      numberOfQuestions: params.numberOfQuestions,
      topics: params.topics?.join(", ") || "General",
    });
  } catch (error) {
    console.error("Error generating interview questions:", error);
    throw error;
  }
};
