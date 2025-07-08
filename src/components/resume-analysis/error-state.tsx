import React from 'react'
import { FileText } from 'lucide-react'

interface ErrorStateProps {
    error: Error
}

const ErrorState = ({ error }: ErrorStateProps) => (
    <div className="text-center py-12 text-red-500 dark:text-red-400">
        <div className="relative mb-6">
            <FileText className="h-16 w-16 mx-auto opacity-50" />
        </div>
        <p className="text-lg font-medium mb-2">Analysis failed</p>
        <p className="text-sm">{error.message || "Something went wrong. Please try again."}</p>
    </div>
)

export default ErrorState 