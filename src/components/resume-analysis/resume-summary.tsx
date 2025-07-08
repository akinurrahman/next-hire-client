import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, FileText, Hash } from 'lucide-react'

interface ResumeSummaryProps {
    score?: number
    summary?: string
    keywords?: string[]
}

const ResumeSummary = ({ score, summary, keywords }: ResumeSummaryProps) => {
    if (!score && !summary && !keywords?.length) {
        return null
    }

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-600 dark:text-green-400'
        if (score >= 60) return 'text-yellow-600 dark:text-yellow-400'
        return 'text-red-600 dark:text-red-400'
    }

    const getScoreLabel = (score: number) => {
        if (score >= 80) return 'Excellent'
        if (score >= 60) return 'Good'
        return 'Needs Improvement'
    }

    return (
        <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-slate-200/50 dark:border-slate-700/50 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    Resume Analysis
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Score Section */}
                {score !== undefined && (
                    <div className="space-y-3">
                        <div className="flex items-center gap-4">
                            <div className="text-3xl font-bold">
                                <span className={getScoreColor(score)}>{score}</span>
                                <span className="text-slate-400">/100</span>
                            </div>
                            <Badge variant="secondary" className={getScoreColor(score).replace('text-', 'bg-').replace('dark:text-', 'dark:bg-')}>
                                {getScoreLabel(score)}
                            </Badge>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div
                                className={`h-2 rounded-full transition-all duration-500 ${getScoreColor(score).replace('text-', 'bg-').replace('dark:text-', 'dark:bg-')}`}
                                style={{ width: `${score}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Summary Section */}
                {summary && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                            <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            Summary
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {summary}
                        </p>
                    </div>
                )}

                {/* Keywords Section */}
                {keywords && keywords.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                            <Hash className="h-4 w-4 text-green-600 dark:text-green-400" />
                            Suggested Keywords to Add
                            <span className="text-xs text-slate-400 ml-1">(AI recommended)</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                            These are keywords our AI recommends you add to your resume for better results.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {keywords.map((keyword, index) => (
                                <Badge
                                    key={keyword}
                                    variant="outline"
                                    className="animate-fade-in-up"
                                    style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                                >
                                    <span className="mr-1 text-green-500">+</span>
                                    {keyword}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export default ResumeSummary 