import { useQuestionsContext } from "@/context/questionsContext";
import { LoaderPinwheel, Sparkles } from "lucide-react";
const QuestionList = () => {
  const { isLoading, questions } = useQuestionsContext();

  return (
    <div className="rounded-2xl border bg-slate-50 p-4 shadow-lg">
      {/* Loading State */}
      {isLoading && (
        <div className="flex h-[300px] flex-col items-center justify-center py-10">
          <div className="relative">
            <LoaderPinwheel className="text-primary mb-4 h-16 w-16 animate-spin" />
          </div>
          <p className="mt-2 text-lg font-medium text-slate-700">Generating your questions...</p>
          <p className="mt-2 text-sm text-slate-500">This may take a few seconds</p>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && questions.length === 0 && (
        <div className="flex h-[300px] flex-col items-center justify-center py-12 text-center">
          <div className="relative mb-6">
            <div className="gradient-background flex h-24 w-24 items-center justify-center rounded-full">
              <Sparkles className="gradient-foreground h-10 w-10" />
            </div>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-slate-800">No questions generated yet</h3>
          <p className="mx-auto max-w-md text-slate-500">
            Select your experience level, paste a job description, and click "Generate Questions" to
            see tailored interview questions appear here.
          </p>
        </div>
      )}

      {/* Question List */}
      {!isLoading && questions.length > 0 && (
        <div className="flex flex-col gap-4">
          {questions.map((question) => (
            <div key={question.question}>{question.question}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionList;
