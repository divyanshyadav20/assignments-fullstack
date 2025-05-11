import { useQuestionsContext } from "@/context/questionsContext";
import { motion } from "framer-motion";
import { LoaderPinwheel, Sparkles } from "lucide-react";
import { QuestionAccordion } from "./QuestionAccordion";
import { Accordion } from "./ui/accordion";

const QuestionList = () => {
  const { isLoading, metadata, questions } = useQuestionsContext();
  const { experienceLevel } = metadata ?? {};

  return (
    <div className="rounded-2xl border bg-slate-50 p-2 shadow-lg sm:p-4">
      {/* Loading State */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-[300px] flex-col items-center justify-center py-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <LoaderPinwheel className="text-primary mb-4 h-16 w-16 animate-spin" />
          </motion.div>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-2 text-lg font-medium text-slate-700"
          >
            Generating your questions...
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-2 text-sm text-slate-500"
          >
            This may take a few seconds
          </motion.p>
        </motion.div>
      )}

      {/* Empty State */}
      {!isLoading && questions.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-[300px] flex-col items-center justify-center py-12 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-6"
          >
            <div className="gradient-background flex h-24 w-24 items-center justify-center rounded-full">
              <Sparkles className="gradient-foreground h-10 w-10" />
            </div>
          </motion.div>
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-3 text-xl font-semibold text-slate-800"
          >
            No questions generated yet
          </motion.h3>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-md text-slate-500"
          >
            Select your experience level, paste a job description, and click "Generate Questions" to
            see tailored interview questions appear here.
          </motion.p>
        </motion.div>
      )}

      {/* Question List */}
      {!isLoading && questions.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 flex items-center justify-between"
          >
            <h3 className="text-xl font-medium text-slate-800">Generated Questions</h3>
            <div className="flex items-center gap-2">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium tracking-tight text-pink-800 capitalize dark:bg-pink-900 dark:text-pink-200"
              >
                {experienceLevel} Level
              </motion.div>
              <span className="text-slate-400">•</span>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-sm tracking-tight text-slate-500 dark:text-slate-400"
              >
                {questions.length} questions
              </motion.div>
            </div>
          </motion.div>

          <Accordion type="multiple" className="space-y-4">
            {questions.map((question, index) => (
              <QuestionAccordion key={index} question={question} index={index} />
            ))}
          </Accordion>
        </motion.div>
      )}
    </div>
  );
};

export default QuestionList;
