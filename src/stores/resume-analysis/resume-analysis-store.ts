import { BaseApiResponse } from "@/types/common.types";
import { ResumeAnalysisResponse } from "@/types/resume-analysis.types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ResumeAnalysisStore {
  uploadedFile: File | null;
  isDragOver: boolean;

  isResumeAnalyzing:boolean;
  analysisData: BaseApiResponse<ResumeAnalysisResponse> | null;

  setUploadedFile: (file: File | null) => void;
  setIsDragOver: (isDragOver: boolean) => void;
  setIsResumeAnalyzing: (isResumeAnalyzing: boolean) => void;
  setAnalysisData: (
    data: BaseApiResponse<ResumeAnalysisResponse> | null
  ) => void;

  reset: () => void;
}

const initialState = {
  uploadedFile: null,
  isDragOver: false,
  isResumeAnalyzing: false,
  analysisData: null,
};

export const useResumeAnalysisStore = create<ResumeAnalysisStore>()(
  devtools(
    (set) => ({
      ...initialState,

      setUploadedFile: (file) =>
        set({ uploadedFile: file }, false, "setUploadedFile"),
      setIsDragOver: (isDragOver) =>
        set({ isDragOver }, false, "setIsDragOver"),
      setAnalysisData: (data) =>
        set({ analysisData: data }, false, "setAnalysisData"),
      setIsResumeAnalyzing: (isResumeAnalyzing) =>
        set({ isResumeAnalyzing }, false, "setIsResumeAnalyzing"),

      reset: () => {
        set(initialState, false, "reset");
      },
    }),
    {
      name: "resume-analysis-store",
    }
  )
);
