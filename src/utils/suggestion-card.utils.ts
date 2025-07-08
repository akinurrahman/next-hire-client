import { AlertCircle, CheckCircle, FileText, Shield, TrendingUp } from "lucide-react";

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800";
    case "low":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400 border-gray-200 dark:border-gray-800";
  }
};

export const getSuggestionColor = (type: string) => {
  switch (type) {
    case "improvement":
      return "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800";
    case "warning":
      return "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800";
    case "success":
      return "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800";
    case "critical":
      return "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800";
    default:
      return "bg-gray-100 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400 border-gray-200 dark:border-gray-800";
  }
};
