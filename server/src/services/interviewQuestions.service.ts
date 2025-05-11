import { InterviewQuestionsResponseSchema } from "@/schemas/interviewQuestions.schema";
import { GenerateQuestions } from "@/types";
import { OutputFixingParser, StructuredOutputParser } from "langchain/output_parsers";
import { model } from "./langchain";
import { INTERVIEW_QUESTIONS_PROMPT } from "./langchain/prompts";

const parser = StructuredOutputParser.fromZodSchema(InterviewQuestionsResponseSchema);
const outputFixingParser = OutputFixingParser.fromLLM(model, parser);

// Create a chain that includes the format instructions
const interviewQuestionsChain = INTERVIEW_QUESTIONS_PROMPT.pipe(model).pipe(outputFixingParser);

export const generateInterviewQuestions = async (params: GenerateQuestions) => {
  try {
    const { jobDescription, experienceLevel } = params;
    return await interviewQuestionsChain.invoke({
      jobDescription,
      experienceLevel,
      numberOfQuestions: 5,
    });
  } catch (error) {
    console.error("Error generating interview questions:", error);
    throw error;
  }
};
