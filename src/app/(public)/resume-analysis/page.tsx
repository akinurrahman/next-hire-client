"use client"

import React from 'react'
import { Sparkles } from 'lucide-react'
import { AiSuggestion, TipsCard, UploadCard } from '@/components/resume-analysis'


const ResumeUploadPage = () => {


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative p-4 sm:p-6 lg:p-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Enhanced Header */}
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700">
                            <Sparkles className="h-4 w-4 text-purple-500" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">AI-Powered Resume Analysis</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 dark:from-slate-100 dark:via-purple-200 dark:to-slate-100 bg-clip-text text-transparent">
                            Resume Upload & Analysis
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Upload your resume and get instant AI-powered suggestions to make it stand out to recruiters
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <UploadCard />
                        <AiSuggestion />

                    </div>

                    <TipsCard />

                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out;
                }
                .animate-pulse-slow {
                    animation: pulse 2s infinite;
                }
            `}</style>
        </div>
    )
}

export default ResumeUploadPage