import React from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle } from 'lucide-react'

interface UploadStatusProps {
    isUploading: boolean
    analysisComplete: boolean
    uploadedFile: File | null
}

const UploadStatus = ({ isUploading, analysisComplete, uploadedFile }: UploadStatusProps) => {
    if (!isUploading && !analysisComplete) return null

    return (
        <>
            {/* Upload Progress */}
            {isUploading && (
                <div className="space-y-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-700 dark:text-slate-300">Analyzing resume...</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        Uploading and analyzing your resume with AI...
                    </p>
                </div>
            )}

            {/* Upload Complete */}
            {uploadedFile && !isUploading && analysisComplete && (
                <Alert className="border-green-200 bg-green-50/80 dark:border-green-800 dark:bg-green-950/20 backdrop-blur-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-200 font-medium">
                        Resume analysis completed successfully!
                    </AlertDescription>
                </Alert>
            )}
        </>
    )
}

export default UploadStatus 