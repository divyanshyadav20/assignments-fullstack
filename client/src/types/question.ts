import type { InterviewQuestionSchema, InterviewQuestionsResponseSchema } from "@/schema";
import { z } from "zod";
import type { QuestionRequestForm } from "./schema";

export type Question = z.infer<typeof InterviewQuestionSchema>;
export type Metadata = z.infer<typeof InterviewQuestionsResponseSchema>["metadata"];

export type QuestionsContextType = {
  questions: Question[];
  metadata: Metadata | null;
  isLoading: boolean;
  fetchQuestions: (payload: QuestionRequestForm) => Promise<void>;
};
