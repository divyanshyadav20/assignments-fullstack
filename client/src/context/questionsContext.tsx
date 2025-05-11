import { useFetchQuestions } from "@/hooks/useFetchQuestions";
import type { QuestionsContextType } from "@/types";
import { createContext, useContext } from "react";

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
  const state = useFetchQuestions();
  return <QuestionsContext.Provider value={state}>{children}</QuestionsContext.Provider>;
};
