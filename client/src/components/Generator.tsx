import { QuestionsProvider } from "@/context/questionsContext";
import InterviewQuestionForm from "./InterviewQuestionForm";

const Generator = () => {
  return (
    <QuestionsProvider>
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <div className="w-full md:w-[35%]">
          <InterviewQuestionForm />
        </div>
        <div className="w-full bg-gray-200 md:w-[65%]">Right Content</div>
      </div>
    </QuestionsProvider>
  );
};

export default Generator;
