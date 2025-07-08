export interface FileValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateResumeFile = (file: File): FileValidationResult => {
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: "Please upload a PDF or Word document",
    };
  }

  if (file.size > 10 * 1024 * 1024) {
    return {
      isValid: false,
      error: "File size must be less than 10MB",
    };
  }

  return { isValid: true };
};
