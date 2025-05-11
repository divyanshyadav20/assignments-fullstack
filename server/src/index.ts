import dotenv from "dotenv";
dotenv.config();

import ai from "@/services/langchain";
import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  try {
    const response = await ai.invoke({
      context: "You are a helpful assistant.",
      question: "What is the capital of France?",
    });

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  return console.log(`Express is listening at PORT:${PORT}`);
});
