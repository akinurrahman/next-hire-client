"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Sparkles } from 'lucide-react'
import React from 'react'
import { useResumeAnalysisStore } from '@/stores'
import { AiSuggestionSkeleton } from './suggestion-skeleton'
import EmptyState from './empty-state'
import SuggestionsList from './suggestions-list'

const AiSuggestion = () => {
    const {
        uploadedFile,
        analysisData,
        isResumeAnalyzing
    } = useResumeAnalysisStore()

    // Access suggestions from the wrapped response
    const suggestions = analysisData?.data?.suggestions

    const getCardDescription = () => {
        if (!uploadedFile) {
            return "Upload your resume to get AI-powered suggestions"
        }
        if (isResumeAnalyzing) {
            return "Analyzing your resume with AI..."
        }
        return "Personalized suggestions to make your resume stand out"
    }

    const renderContent = () => {
        if (!uploadedFile) {
            return <EmptyState />
        }

        if (isResumeAnalyzing) {
            return <AiSuggestionSkeleton />
        }

        if (suggestions) {
            return <SuggestionsList suggestions={suggestions} />
        } else {
            return <EmptyState />
        }
    }

    return (
        <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-slate-200/50 dark:border-slate-700/50 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                        <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    AI Suggestions
                </CardTitle>
                <CardDescription className="text-base">
                    {getCardDescription()}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {renderContent()}
            </CardContent>
        </Card>
    )
}

export default AiSuggestion