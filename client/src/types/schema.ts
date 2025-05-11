import type { InterviewQuestionsResponseSchema, questionRequestFormSchema } from "@/schema";
import { z } from "zod";

export type QuestionRequestForm = z.infer<typeof questionRequestFormSchema>;
export type QuestionResponse = z.infer<typeof InterviewQuestionsResponseSchema>;
