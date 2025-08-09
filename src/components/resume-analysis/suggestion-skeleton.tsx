import React from 'react'

interface SuggestionSkeletonProps {
    index: number
}

const SuggestionSkeleton = ({ index }: SuggestionSkeletonProps) => (
    <div
        className="animate-pulse"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
        <div className="flex items-start gap-4 p-4 rounded-lg border border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            {/* Icon skeleton */}
            <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex-shrink-0"></div>

            <div className="flex-1 space-y-3">
                {/* Title skeleton */}
                <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>

                {/* Description skeleton */}
                <div className="space-y-2">
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                </div>

                {/* Tags skeleton */}
                <div className="flex gap-2">
                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-16"></div>
                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-20"></div>
                </div>
            </div>
        </div>
    </div>
)

const AiSuggestionSkeleton = () => (
    <div className="space-y-4">
        {/* Generate 5 skeleton cards with staggered animation delays */}
        {Array.from({ length: 5 }).map((_, index) => (
            <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                <SuggestionSkeleton index={index} />
            </div>
        ))}

        {/* <Separator className="my-6" /> */}

        {/* Download button skeleton */}
        {/* <div className="text-center space-y-3">
            <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-full animate-pulse"></div>
            <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3 mx-auto"></div>
        </div> */}
    </div>
)

export { SuggestionSkeleton, AiSuggestionSkeleton } 