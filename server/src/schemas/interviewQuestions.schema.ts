import { z } from "zod";

export const EvaluationCriteriaSchema = z.object({
  keyPoints: z.array(z.string()).describe("The key points to look for in answers"),
  expectedDepth: z
    .enum(["basic", "intermediate", "advanced"])
    .describe("The expected depth of knowledge"),
  redFlags: z.array(z.string()).describe("The potential red flags"),
});

export const InterviewQuestionSchema = z.object({
  question: z.string().min(1).describe("The question text"),
  difficulty: z.enum(["easy", "medium", "hard"]).describe("The difficulty level of the question"),
  category: z.string().describe("The category and specific skill areas being tested"),
  skillAreas: z.array(z.string()).describe("The specific skill areas being tested"),
  evaluationCriteria: EvaluationCriteriaSchema,
  practicalApplication: z.string().describe("The practical application context"),
  expectedAnswer: z.string().describe("The expected answer outline"),
  followUpQuestions: z.array(z.string()).describe("The follow-up questions for deeper assessment"),
});

export const InterviewQuestionsResponseSchema = z.object({
  questions: z.array(InterviewQuestionSchema).describe("The generated interview questions"),
  metadata: z.object({
    role: z.string().describe("The role these questions are for"),
    experienceLevel: z
      .enum(["junior", "mid", "senior"])
      .describe("The experience level of the job"),
    totalQuestions: z.number().describe("The total number of questions generated"),
    topics: z.array(z.string()).describe("The topics covered in the questions"),
    skillAreas: z.array(z.string()).describe("The specific skill areas being tested"),
    domain: z
      .enum(["web", "mobile", "backend", "fullstack", "data", "devops"])
      .describe("The technical domain of the questions"),
  }),
});

export const GenerateQuestionsSchema = z.object({
  description: z.string().describe("The job description"),
  experienceLevel: z.enum(["junior", "mid", "senior"]).describe("The experience level of the job"),
  numberOfQuestions: z
    .number()
    .min(1)
    .max(10)
    .default(5)
    .describe("The number of questions to generate"),
});
