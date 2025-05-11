import {
  EvaluationCriteriaSchema,
  GenerateQuestionsSchema,
  InterviewQuestionSchema,
  InterviewQuestionsResponseSchema,
} from "@/schemas/interviewQuestions.schema";
import { z } from "zod";

export type EvaluationCriteria = z.infer<typeof EvaluationCriteriaSchema>;
export type InterviewQuestion = z.infer<typeof InterviewQuestionSchema>;
export type InterviewQuestionsResponse = z.infer<typeof InterviewQuestionsResponseSchema>;
export type GenerateQuestions = z.infer<typeof GenerateQuestionsSchema>;
