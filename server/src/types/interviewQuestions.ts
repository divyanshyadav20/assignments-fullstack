import {
  GenerateQuestionsSchema,
  InterviewQuestionSchema,
  InterviewQuestionsResponseSchema,
} from "@/schemas/interviewQuestions.schema";
import { z } from "zod";

export type GenerateQuestions = z.infer<typeof GenerateQuestionsSchema>;
export type InterviewQuestion = z.infer<typeof InterviewQuestionSchema>;
export type InterviewQuestionsResponse = z.infer<typeof InterviewQuestionsResponseSchema>;
