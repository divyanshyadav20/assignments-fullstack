import { Router } from "express";
import interviewQuestionsRouter from "./interviewQuestions.route";

const router = Router();

router.use("/interview-questions", interviewQuestionsRouter);

export default router;
