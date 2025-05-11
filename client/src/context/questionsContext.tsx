import type { Question, QuestionsContextType } from "@/types";
import { createContext, useContext, useState } from "react";

const QuestionsContext = createContext<QuestionsContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useQuestionsContext = () => {
  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error("useQuestionsContext must be used within a QuestionsProvider");
  }

  return context;
};

export const QuestionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleQuestionsGenerated = (data: Question[]) => {
    setQuestions(data);
  };

  return (
    <QuestionsContext.Provider value={{ questions, handleQuestionsGenerated }}>
      {children}
    </QuestionsContext.Provider>
  );
};
