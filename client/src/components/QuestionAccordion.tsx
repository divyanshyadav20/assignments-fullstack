import { Badge } from "@/components/ui/badge";
import type { Question } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  CircleCheck,
  CircleHelp,
  CircleIcon,
  CircleX,
  LightbulbIcon,
} from "lucide-react";
import { useState } from "react";
import { DifficultyBadge } from "./DifficultyBadge";

interface QuestionAccordionProps {
  question: Question;
  index: number;
}

export function QuestionAccordion({ question, index }: QuestionAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{
        y: -2,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-slate-200/20"
        onClick={toggleAccordion}
      >
        <div className="flex-1">
          <div className="mb-3 flex items-center">
            <DifficultyBadge difficulty={question.difficulty} className="mr-3" />
            <span className="text-sm font-medium text-slate-500">{question.category}</span>
          </div>
          <h3 className="text-base font-semibold text-slate-800">{question.question}</h3>
        </div>
        <div className="ml-4">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-full bg-slate-100 p-2"
          >
            <ChevronDown className="h-5 w-5 text-slate-500" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-gradient-to-br from-slate-50 to-white"
          >
            <div className="p-2 sm:p-6">
              <div className="mb-6">
                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <h4 className="mb-3 flex items-center text-lg font-semibold text-slate-800">
                    <LightbulbIcon className="mr-2 h-5 w-5 text-yellow-500" />
                    Answer
                  </h4>
                  <div className="space-y-4 text-slate-700">
                    <p className="leading-relaxed">{question.expectedAnswer}</p>

                    <div className="mt-4 rounded-lg bg-slate-200/30 p-4">
                      <p className="text-primary mb-2 flex items-center font-medium">
                        <CircleCheck className="mr-2 h-4 w-4 text-green-600" />
                        Key Points
                      </p>
                      <ul className="list-none space-y-2 pl-1">
                        {question.evaluationCriteria.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-green-600" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {question.evaluationCriteria.redFlags.length > 0 && (
                      <div className="mt-2 rounded-lg bg-red-50 p-4">
                        <p className="mb-2 flex items-center font-medium text-red-700">
                          <CircleX className="mr-2 h-4 w-4" />
                          Red Flags
                        </p>
                        <ul className="list-none space-y-2 pl-1">
                          {question.evaluationCriteria.redFlags.map((flag, idx) => (
                            <li key={idx} className="flex items-start">
                              <ArrowRight className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-red-500" />
                              <span className="text-red-700">{flag}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                <h4 className="mb-3 flex items-center text-base font-semibold text-slate-800">
                  <CircleHelp className="mr-2 h-5 w-5 text-yellow-500" />
                  Follow-up Questions
                </h4>
                <ul className="space-y-3 text-slate-700">
                  {question.followUpQuestions.map((followUp, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center rounded-lg bg-slate-50 p-3"
                      whileHover={{ x: 3 }}
                    >
                      <CircleIcon className="mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500 text-yellow-500" />
                      <p>{followUp}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="mb-3 flex items-center text-base font-semibold text-slate-800">
                  <BrainCircuit className="mr-2 h-5 w-5 text-pink-800" />
                  Skill Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {question.skillAreas.map((skill, idx) => (
                    <motion.div key={idx} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                      <Badge
                        variant="secondary"
                        className="gradient-background gradient-foreground rounded-full bg-gradient-to-r px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
