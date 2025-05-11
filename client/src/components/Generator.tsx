import { QuestionsProvider } from "@/context/questionsContext";
import InterviewQuestionForm from "./InterviewQuestionForm";
import QuestionList from "./QuestionList";

const Generator = () => {
  return (
    <QuestionsProvider>
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <div className="w-full md:w-[35%]">
          <InterviewQuestionForm />
        </div>
        <div className="w-full md:w-[65%]">
          <QuestionList />
        </div>
      </div>
    </QuestionsProvider>
  );
};

export default Generator;
