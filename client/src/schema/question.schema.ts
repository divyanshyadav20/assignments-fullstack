import { z } from "zod";

export const EvaluationCriteriaSchema = z.object({
  keyPoints: z.array(z.string()),
  expectedDepth: z.enum(["basic", "intermediate", "advanced"]),
  redFlags: z.array(z.string()),
});

export const InterviewQuestionSchema = z.object({
  question: z.string().min(1),
  difficulty: z.enum(["easy", "medium", "hard"]),
  category: z.string(),
  skillAreas: z.array(z.string()),
  evaluationCriteria: EvaluationCriteriaSchema,
  practicalApplication: z.string(),
  expectedAnswer: z.string(),
  followUpQuestions: z.array(z.string()),
});

export const InterviewQuestionsResponseSchema = z.object({
  questions: z.array(InterviewQuestionSchema),
  metadata: z.object({
    role: z.string(),
    experienceLevel: z.enum(["junior", "mid", "senior"]),
    totalQuestions: z.number(),
    topics: z.array(z.string()),
    skillAreas: z.array(z.string()),
    domain: z.enum(["web", "mobile", "backend", "fullstack", "data", "devops"]),
  }),
});

export const questionRequestFormSchema = z.object({
  experienceLevel: z.enum(["junior", "mid-level", "senior"]).nullable(),
  jobDescription: z.string().min(1, "Job description is required"),
});
