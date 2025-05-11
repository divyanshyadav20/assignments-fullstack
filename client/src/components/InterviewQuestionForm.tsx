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
  const form = useForm<QuestionRequestForm>({
    resolver: zodResolver(questionRequestFormSchema),
    defaultValues: {
      experienceLevel: null,
      jobDescription: "",
    },
  });

  function onSubmit(data: QuestionRequestForm) {
    console.log(data);
  }

  return (
    <div className="h-full rounded-2xl border border-slate-100 p-4 shadow-lg">
      {/* Title */}
      <div className="mb-6 flex items-center">
        <div className="from-primary/20 to-secondary/20 mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br">
          <BrainCircuit className="text-primary h-5 w-5" />
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
                <FormLabel className="text-sm font-medium text-gray-700">
                  Experience Level
                </FormLabel>
                <Select onValueChange={field.onChange}>
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
                <FormLabel className="text-sm font-medium text-gray-700">Job Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste job description here..."
                    className="focus:ring-primary/50 min-h-[200px] resize-none rounded-lg border-slate-200 shadow-sm"
                    rows={6}
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
              className="from-primary to-secondary w-full rounded-lg bg-gradient-to-r py-6 text-white shadow-md transition-all hover:opacity-90"
              //   disabled={generateQuestionsMutation.isPending}
            >
              <Sparkles className="mr-2 h-4 w-4" /> Generate Questions
            </Button>
          </div>

          <div>
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-lg border-slate-200 bg-white py-6 text-gray-700 hover:bg-slate-50"
              // onClick={handleReset}
            >
              Reset Form
            </Button>
          </div>
        </form>
      </Form>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <h4 className="mb-3 text-sm font-semibold text-gray-700">How it works</h4>
        <ul className="space-y-3 text-sm text-gray-600">
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
