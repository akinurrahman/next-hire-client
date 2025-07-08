import React, { useCallback } from 'react'
import { Upload, CheckCircle, Eye, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface UploadAreaProps {
    uploadedFile: File | null
    isDragOver: boolean
    onDragOver: (e: React.DragEvent) => void
    onDragLeave: (e: React.DragEvent) => void
    onDrop: (e: React.DragEvent) => void
    onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
    onRemoveFile: () => void
}

const UploadArea = ({
    uploadedFile,
    isDragOver,
    onDragOver,
    onDragLeave,
    onDrop,
    onFileSelect,
    onRemoveFile
}: UploadAreaProps) => {
    return (
        <div
            className={cn(
                "border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 relative overflow-hidden",
                isDragOver
                    ? "border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 scale-105"
                    : "border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50/50 dark:hover:bg-slate-800/50",
                uploadedFile && "border-green-500 bg-green-50/80 dark:bg-green-950/40"
            )}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
        >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400"></div>
            </div>

            {!uploadedFile ? (
                <EmptyState onFileSelect={onFileSelect} />
            ) : (
                <FilePreview
                    file={uploadedFile}
                    onFileSelect={onFileSelect}
                    onRemoveFile={onRemoveFile}
                />
            )}
        </div>
    )
}

const EmptyState = ({ onFileSelect }: { onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="relative space-y-4">
        <div className="relative">
            <Upload className="h-16 w-16 mx-auto text-slate-400 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
        </div>
        <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Drop your resume here
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
                or click to browse files
            </p>
        </div>
        <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('file-input')?.click()}
            className="mt-4 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
        >
            <Upload className="h-4 w-4 mr-2" />
            Choose File
        </Button>
        <input
            id="file-input"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={onFileSelect}
            className="hidden"
        />
    </div>
)

const FilePreview = ({
    file,
    onFileSelect,
    onRemoveFile
}: {
    file: File
    onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
    onRemoveFile: () => void
}) => (
    <div className="relative space-y-4">
        <div className="relative">
            <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
            <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
        </div>
        <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {file.name}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
                {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
        </div>
        <div className="flex gap-3 justify-center">
            <Button
                variant="outline"
                size="sm"
                onClick={() => document.getElementById('file-input')?.click()}
                className="hover:bg-slate-100 dark:hover:bg-slate-700"
            >
                <Eye className="h-4 w-4 mr-1" />
                Replace
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={onRemoveFile}
                className="hover:bg-red-50 dark:hover:bg-red-950/20 hover:border-red-200 dark:hover:border-red-800"
            >
                <Trash2 className="h-4 w-4 mr-1" />
                Remove
            </Button>
        </div>
    </div>
)

export default UploadArea 