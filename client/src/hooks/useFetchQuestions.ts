import api from "@/lib/axios";
import {
  type Metadata,
  type Question,
  type QuestionRequestForm,
  type QuestionResponse,
} from "@/types";
import { useState } from "react";

export const useFetchQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function reset() {
    setQuestions([]);
    setMetadata(null);
    setIsError(false);
    setIsLoading(false);
  }

  async function fetchQuestions(payload: QuestionRequestForm) {
    setIsLoading(true);
    try {
      const { data } = await api.post<QuestionResponse>("/interview-questions/generate", payload);
      setQuestions(data.questions);
      setMetadata(data.metadata);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return { questions, metadata, isLoading, isError, fetchQuestions, reset };
};
