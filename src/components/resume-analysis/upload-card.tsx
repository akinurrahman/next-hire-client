import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload } from 'lucide-react'
import React, { useCallback } from 'react'
import { useResumeAnalysisStore } from '@/stores'
import { useFileUpload } from '@/hooks/resume-analysis/use-file-upload'
import UploadArea from './upload-area'
import UploadStatus from './upload-status'

const UploadCard = () => {
    const { uploadedFile, isDragOver, setIsDragOver } = useResumeAnalysisStore()
    const { handleFileUpload, handleRemoveFile, isUploading, analysisComplete } = useFileUpload()

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(true)
    }, [setIsDragOver])

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)
    }, [setIsDragOver])

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)

        const files = Array.from(e.dataTransfer.files)
        if (files.length > 0) {
            handleFileUpload(files[0])
        }
    }, [setIsDragOver, handleFileUpload])

    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            handleFileUpload(files[0])
        }
    }, [handleFileUpload])
    return (
        <Card className="h-fit backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-slate-200/50 dark:border-slate-700/50 shadow-xl animate-fade-in-up">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Upload className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    Upload Resume
                </CardTitle>
                <CardDescription className="text-base">
                    Drag and drop your resume or click to browse. Supports PDF and Word documents up to 10MB.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <UploadArea
                    uploadedFile={uploadedFile}
                    isDragOver={isDragOver}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onFileSelect={handleFileSelect}
                    onRemoveFile={handleRemoveFile}
                />

                <UploadStatus
                    isUploading={isUploading}
                    analysisComplete={analysisComplete}
                    uploadedFile={uploadedFile}
                />
            </CardContent>
        </Card>
    )
}

export default UploadCard