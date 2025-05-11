import { QuestionsProvider } from "@/context/questionsContext";
import InterviewQuestionForm from "./InterviewQuestionForm";
import QuestionList from "./QuestionList";

const Generator = () => {
  return (
    <QuestionsProvider>
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-4">
        <div className="h-full w-full lg:w-[35%]">
          <InterviewQuestionForm />
        </div>
        <div className="w-full lg:w-[65%]">
          <QuestionList />
        </div>
      </div>
    </QuestionsProvider>
  );
};

export default Generator;
