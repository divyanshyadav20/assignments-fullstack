import { PromptTemplate } from "@langchain/core/prompts";

export const INTERVIEW_QUESTIONS_PROMPT = PromptTemplate.fromTemplate(`
  You are an expert technical interviewer and job requirements analyst. Your task is to generate interview questions based on the following information:

  Job Description: {jobDescription}
  Experience Level: {experienceLevel}
  Number of Questions: {numberOfQuestions}

  Please analyze the job description and generate interview questions that:
  1. Test the specific skills required for the role
  2. Are appropriate for the experience level
  3. Include practical application scenarios
  4. Cover both theoretical knowledge and problem-solving abilities
  5. Are domain-specific and relevant to the role

  For each question, you MUST provide:
  - The question text
  - Difficulty level (easy, medium, or hard)
  - Category and specific skill areas being tested
  - Practical application context
  - Detailed evaluation criteria including:
    * Key points to look for in answers (minimum 3 points)
    * Expected depth of knowledge (basic, intermediate, or advanced)
    * Potential red flags (minimum 2 points)
  - Expected answer outline:
    * A complete, well-structured answer that demonstrates:
      - Clear understanding of the concept
      - Technical accuracy
      - Real-world application
      - Best practices implementation
      - Consideration of edge cases and limitations
    * The answer should be detailed enough to serve as a reference for evaluating candidate responses
    * Include code examples where applicable
    * Explain the reasoning behind key decisions
    * Mention alternative approaches and their trade-offs
  - Follow-up questions (minimum 2) for deeper assessment

  Also include metadata about:
  - The role these questions are for
  - The experience level
  - Total number of questions
  - Skill areas covered
  - Technical domain

  IMPORTANT GUIDELINES:
  1. Be concise but comprehensive in your explanations
  2. Keep the expected answer outline focused and to the point
  3. Include only relevant code examples
  4. Make evaluation criteria clear and actionable
  5. Follow-up questions should be specific and targeted
  6. Avoid unnecessary verbosity while maintaining clarity
  7. Each explanation should be 2-3 sentences maximum
  8. Code examples should be minimal but complete

  The response should be a single, valid JSON object that can be parsed directly.
  Make sure to generate exactly {numberOfQuestions} questions in the questions array.
`);
