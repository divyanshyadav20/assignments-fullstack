import { GenerateQuestionsSchema } from "@/schemas";
import { generateInterviewQuestions } from "@/services";
import { Request, Response, Router } from "express";
import { z } from "zod";

const router = Router();

// Generate interview questions endpoint
router.post("/generate", async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = GenerateQuestionsSchema.parse(req.body);

    // Generate questions using LangChain
    const questions = await generateInterviewQuestions({
      role: validatedData.role,
      experienceLevel: validatedData.experienceLevel,
      numberOfQuestions: validatedData.numberOfQuestions,
      topics: validatedData.topics,
    });

    res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        error: "Invalid request data",
        details: error.errors,
      });
    }

    console.error("Error generating questions:", error);
    res.status(500).json({
      success: false,
      error: "Failed to generate interview questions",
    });
  }
});

export default router;
