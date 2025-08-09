import React from 'react'
import SuggestionCard from './suggestion-card'
import { ResumeAnalysisResponse } from '@/types/resume-analysis.types'

interface SuggestionsListProps {
    suggestions: ResumeAnalysisResponse['suggestions']
}

const SuggestionsList = ({ suggestions }: SuggestionsListProps) => (
    <div className="space-y-4">
        {suggestions?.map((suggestion, index) => (
            <div
                key={suggestion.id}
                className="animate-fade-in-up"
                style={{
                    animationDelay: `${index * 0.15}s`,
                    animationDuration: '0.6s'
                }}
            >
                <SuggestionCard suggestion={suggestion} index={index} />
            </div>
        ))}

        {/* <Separator className="my-6" /> */}

        {/* <div className="text-center space-y-3 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Download Improved Resume
            </Button>
            <p className="text-xs text-slate-500 dark:text-slate-400">
                Get your resume with AI-suggested improvements applied
            </p>
        </div> */}
    </div>
)

export default SuggestionsList 