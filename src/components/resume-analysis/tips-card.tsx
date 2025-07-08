import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Target } from 'lucide-react'
import { FileText } from 'lucide-react'
import { TrendingUp } from 'lucide-react'
import { Zap } from 'lucide-react'

const TipsCard = () => {
  return (
      <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-slate-200/50 dark:border-slate-700/50 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  Resume Best Practices
              </CardTitle>
              <CardDescription className="text-base">
                  Expert tips to create a resume that gets you noticed
              </CardDescription>
          </CardHeader>
          <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-3 p-4 rounded-lg bg-slate-50/80 dark:bg-slate-900/50">
                      <div className="flex items-center gap-2">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                              <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">Format & Structure</h4>
                      </div>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Use clear, professional fonts (Arial, Calibri)</span>
                          </li>
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Keep it to 1-2 pages maximum</span>
                          </li>
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Use bullet points for easy scanning</span>
                          </li>
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Include relevant keywords for ATS</span>
                          </li>
                      </ul>
                  </div>

                  <div className="space-y-3 p-4 rounded-lg bg-slate-50/80 dark:bg-slate-900/50">
                      <div className="flex items-center gap-2">
                          <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                              <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">Content & Impact</h4>
                      </div>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Quantify achievements with numbers</span>
                          </li>
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Use action verbs to start bullet points</span>
                          </li>
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Tailor content to the job description</span>
                          </li>
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Include measurable results</span>
                          </li>
                      </ul>
                  </div>

                  <div className="space-y-3 p-4 rounded-lg bg-slate-50/80 dark:bg-slate-900/50">
                      <div className="flex items-center gap-2">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                              <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">Optimization</h4>
                      </div>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Research industry-specific keywords</span>
                          </li>
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Optimize for Applicant Tracking Systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Use standard section headings</span>
                          </li>
                          <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Keep formatting simple and clean</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </CardContent>
      </Card>
  )
}

export default TipsCard