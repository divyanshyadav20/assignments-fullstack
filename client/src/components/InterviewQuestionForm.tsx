import { useQuestionsContext } from "@/context/questionsContext";
import { questionRequestFormSchema } from "@/schema";
import { type QuestionRequestForm } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { BrainCircuit, CheckCircle2, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

const InterviewQuestionForm = () => {
  const { fetchQuestions, isLoading } = useQuestionsContext();

  const form = useForm<QuestionRequestForm>({
    resolver: zodResolver(questionRequestFormSchema),
    defaultValues: {
      experienceLevel: undefined,
      jobDescription: "",
    },
  });

  function onSubmit(data: QuestionRequestForm) {
    console.log(data);
    fetchQuestions(data);
  }

  function handleReset() {
    form.reset();
  }

  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-lg">
      {/* Title */}
      <div className="mb-6 flex items-center">
        <div className="gradient-background mr-3 flex h-10 w-10 items-center justify-center rounded-full">
          <BrainCircuit className="gradient-foreground h-5 w-5" />
        </div>
        <h3 className="text-xl font-medium text-gray-800">Create Questions</h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Experience Level */}
          <FormField
            control={form.control}
            name="experienceLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-gray-700">
                  Experience Level
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger className="focus:ring-primary/50 w-full cursor-pointer rounded-lg border-slate-200 shadow-sm">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="mid-level">Mid-level</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Job Description */}
          <FormField
            control={form.control}
            name="jobDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-gray-700">
                  Job Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste job description here..."
                    className="focus:ring-primary/50 h-[200px] overflow-y-auto rounded-lg border-slate-200 shadow-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Generate Button */}
          <div>
            <Button
              type="submit"
              className="gradient-background gradient-foreground w-full rounded-lg py-6 text-white shadow-md transition-all hover:opacity-90"
              disabled={isLoading}
            >
              <Sparkles className="mr-2 h-4 w-4" /> Generate Questions
            </Button>
          </div>

          <div>
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-lg border-slate-200 bg-white py-6 text-gray-700 hover:bg-slate-50"
              onClick={handleReset}
            >
              Reset Form
            </Button>
          </div>
        </form>
      </Form>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <h4 className="mb-3 text-base font-semibold text-gray-700">How it works</h4>
        <ul className="space-y-3 text-base text-gray-600">
          <li className="flex items-start">
            <CheckCircle2 className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
            <span>Select your experience level (junior, mid-level, senior)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
            <span>Paste the full job description to improve question relevance</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
            <span>
              Get tailored interview questions with detailed answers and evaluation criteria
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InterviewQuestionForm;
