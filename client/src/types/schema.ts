import type { questionRequestFormSchema } from "@/schema";
import { z } from "zod";

export type QuestionRequestForm = z.infer<typeof questionRequestFormSchema>;
