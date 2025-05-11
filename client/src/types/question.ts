import type { InterviewQuestionSchema } from "@/schema";
import { z } from "zod";

export type Question = z.infer<typeof InterviewQuestionSchema>;

export type QuestionsContextType = {
  questions: Question[];
  handleQuestionsGenerated: (data: Question[]) => void;
};
