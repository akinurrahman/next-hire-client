import React from 'react'
import { FileText } from 'lucide-react'

const EmptyState = () => (
    <div className="text-center py-12 text-slate-500 dark:text-slate-400">
        <div className="relative mb-6">
            <FileText className="h-16 w-16 mx-auto opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 blur-xl"></div>
        </div>
        <p className="text-lg font-medium mb-2">No resume uploaded yet</p>
        <p className="text-sm">Upload your resume to see personalized AI suggestions</p>
    </div>
)

export default EmptyState 