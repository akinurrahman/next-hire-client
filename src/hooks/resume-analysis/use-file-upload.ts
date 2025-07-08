import { useCallback } from "react";
import { useResumeAnalysis } from "./use-resume-analysis";
import { useResumeAnalysisStore } from "@/stores";
import { validateResumeFile } from "@/utils/file-validation";
import { toast } from "sonner";

export const useFileUpload = () => {
  const { setUploadedFile, reset, isResumeAnalyzing, analysisData } =
    useResumeAnalysisStore();
  const { mutate: analysisMutation } = useResumeAnalysis();

  const handleFileUpload = useCallback(
    (file: File) => {
      // Validate file
      const validation = validateResumeFile(file);
      if (!validation.isValid) {
        toast.error(validation.error!);
        return;
      }

      // Set file in store and start analysis
      setUploadedFile(file);
      analysisMutation(file);
    },
    [setUploadedFile, analysisMutation]
  );

  const handleRemoveFile = useCallback(() => {
    reset();
  }, [reset]);

  return {
    handleFileUpload,
    handleRemoveFile,
    isUploading: isResumeAnalyzing,
    analysisComplete: !!analysisData,
  };
};
