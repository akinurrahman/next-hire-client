import { BaseEntity } from "./common.types";

export type ResumeAnalysisResponse = {
  suggestions: ResumeSuggestion[];
  score?: number;
  summary?: string;
  keywords?: string[];
};


export type ResumeSuggestion = BaseEntity & {
  id: string;
  type: "improvement" | "warning" | "success" | "critical";
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  impact?: string;
  category?: string;
  icon: string;
};
