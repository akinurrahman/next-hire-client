import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useResumeAnalysisStore } from "@/stores/resume-analysis/resume-analysis-store";
import { apiCall } from "@/lib/api-client";
import { BaseApiResponse } from "@/types/common.types";
import { ResumeAnalysisResponse } from "@/types/resume-analysis.types";

export function useResumeAnalysis() {
  const setAnalysisData = useResumeAnalysisStore(
    (state) => state.setAnalysisData
  );
  const setIsResumeAnalyzing = useResumeAnalysisStore(
    (state) => state.setIsResumeAnalyzing
  );

  return useMutation<BaseApiResponse<ResumeAnalysisResponse>, Error, File>({
    mutationFn: async (file: File) => {
      setIsResumeAnalyzing(true);
      const formData = new FormData();
      formData.append("resume", file);

      const response = await apiCall("/resume-analysis", formData, "POST");
      return response;
    },
    onSuccess: (data) => {
      setAnalysisData(data);
      setIsResumeAnalyzing(false);
      toast.success("Resume analysis completed!");
    },
    onError: (error: Error) => {
      setIsResumeAnalyzing(false);
      toast.error(error.message || "Failed to analyze resume");
    },
  });
}
