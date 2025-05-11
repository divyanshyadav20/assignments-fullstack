import { z } from "zod";

export const GenerateQuestionsSchema = z.object({
  role: z.string().min(1, "Role is required"),
  experienceLevel: z.enum(["junior", "mid", "senior"]),
  numberOfQuestions: z.number().min(1).max(20).default(5),
  topics: z.array(z.string()).optional(),
});

export const InterviewQuestionSchema = z.object({
  question: z.string().min(1),
  difficulty: z.enum(["easy", "medium", "hard"]),
  category: z.string(),
  expectedAnswer: z.string().optional(),
  followUpQuestions: z.array(z.string()).optional(),
});

export const InterviewQuestionsResponseSchema = z.object({
  questions: z.array(InterviewQuestionSchema),
  metadata: z.object({
    role: z.string(),
    experienceLevel: z.enum(["junior", "mid", "senior"]),
    totalQuestions: z.number(),
    topics: z.array(z.string()).optional(),
  }),
});
