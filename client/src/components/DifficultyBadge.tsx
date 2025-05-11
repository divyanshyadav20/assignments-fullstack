import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DifficultyBadgeProps {
  difficulty: "easy" | "medium" | "hard";
  className?: string;
}

export function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  const variants = {
    easy: "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-200 hover:from-green-200 hover:to-green-300",
    medium:
      "bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border-amber-200 hover:from-amber-200 hover:to-amber-300",
    hard: "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-200 hover:from-red-200 hover:to-red-300",
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-medium shadow-sm transition-all",
        variants[difficulty],
        className,
      )}
    >
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </Badge>
  );
}
