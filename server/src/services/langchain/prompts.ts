import { PromptTemplate } from "@langchain/core/prompts";

export const INTERVIEW_QUESTIONS_PROMPT = PromptTemplate.fromTemplate(`
  You are an expert technical interviewer. Your task is to generate interview questions based on the following parameters:

  Role: {role}
  Experience Level: {experienceLevel}
  Number of Questions: {numberOfQuestions}
  Topics: {topics}

  Please generate interview questions that are:
  1. Relevant to the role and experience level
  2. Cover both technical and problem-solving aspects
  3. Include a mix of theoretical and practical questions
  4. Appropriate for the specified experience level

  For each question, provide:
  - The question text
  - Difficulty level (easy, medium, or hard)
  - Category (e.g., System Design, Algorithms, Frontend, etc.)
  - Expected answer outline (optional)
  - Follow-up questions (optional)

  Also include metadata about:
  - The role these questions are for
  - The experience level
  - Total number of questions
  - Topics covered

  Format your response as a valid JSON object with the following structure:
  - questions: array of question objects
  - metadata: object containing role, experience level, total questions, and topics
`);
