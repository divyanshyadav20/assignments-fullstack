import { Router } from "express";
import interviewQuestionsRouter from "./interviewQuestions.route";

const router = Router();

// Combine all routes
router.use("/interview-questions", interviewQuestionsRouter);

export default router;
