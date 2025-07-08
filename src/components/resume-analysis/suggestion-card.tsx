import { Badge } from '../ui/badge'
import { cn } from '@/lib/utils'
import { getPriorityColor, getSuggestionColor } from '@/utils/suggestion-card.utils'
import { Target, FileText, Star, TrendingUp, Zap, SparklesIcon } from 'lucide-react'
import React from 'react'
import * as LucideIcons from "lucide-react"

interface ResumeSuggestion {
    id: string
    type: 'improvement' | 'warning' | 'success' | 'critical'
    title: string
    description: string
    priority: 'high' | 'medium' | 'low'
    impact?: string
    category?: string
    icon: string 
}

const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Contact': return <Target className="h-3 w-3" />
        case 'Content': return <FileText className="h-3 w-3" />
        case 'Optimization': return <Zap className="h-3 w-3" />
        case 'Writing': return <SparklesIcon className="h-3 w-3" />
        case 'Structure': return <TrendingUp className="h-3 w-3" />
        default: return <Star className="h-3 w-3" />
    }
}

const SuggestionCard = ({ suggestion, index }: { suggestion: ResumeSuggestion, index: number }) => {
    const IconComponent = (LucideIcons as any)[suggestion.icon] || LucideIcons.Star

    return (
        <div
            key={suggestion.id}
            className="p-4 rounded-xl border bg-slate-50/80 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-slate-100/80 dark:hover:bg-slate-800/50 transition-all duration-200 group"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="flex items-start gap-4">
                <div className={cn(
                    "p-3 rounded-full border transition-all duration-200 group-hover:scale-110",
                    getSuggestionColor(suggestion.type)
                )}>
                    <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                                {suggestion.title}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {suggestion.description}
                            </p>
                        </div>
                        <Badge
                            variant="secondary"
                            className={cn("border", getPriorityColor(suggestion.priority))}
                        >
                            {suggestion.priority}
                        </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                        {suggestion.category && (
                            <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                {getCategoryIcon(suggestion.category)}
                                <span>{suggestion.category}</span>
                            </div>
                        )}
                        {suggestion.impact && (
                            <div className="text-xs font-medium text-green-600 dark:text-green-400">
                                {suggestion.impact}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestionCard