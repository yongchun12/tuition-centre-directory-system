import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, MessageSquare, TrendingUp, BarChart3, Settings, LogOut, ArrowUpRight } from "lucide-react";

export default function OwnerDashboard() {
  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 min-h-screen flex">
      {/* Dashboard Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold">
            AE
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white leading-tight">Apex Academy</div>
            <div className="text-xs text-slate-500">Centre Owner</div>
          </div>
        </div>
        
        <nav className="flex-1 space-y-2 mt-8">
          <Link href="/dashboard/owner" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 font-medium">
            <BarChart3 className="w-5 h-5" /> Overview
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 font-medium transition-colors">
            <Sparkles className="w-5 h-5" /> AI Insights
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 font-medium transition-colors">
            <Users className="w-5 h-5" /> Enquiries
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 font-medium transition-colors">
            <Settings className="w-5 h-5" /> Manage Centre
          </Link>
        </nav>
        
        <div>
          <Button variant="ghost" className="w-full justify-start text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors">
            <LogOut className="w-5 h-5 mr-3" /> Log Out
          </Button>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">Centre Performance</h1>
              <p className="text-slate-500 dark:text-slate-400">Track your metrics, enquiries, and AI-driven review sentiments.</p>
            </div>
            <Button className="hidden md:flex rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-violet-600 dark:hover:bg-violet-700">
              Edit Centre Details
            </Button>
          </div>

          {/* Top Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Total Profile Views</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">1,248</h3>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-emerald-600 font-medium">
                  <ArrowUpRight className="w-4 h-4 mr-1" /> +12% from last month
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">New Enquiries</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">24</h3>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-emerald-600 font-medium">
                  <ArrowUpRight className="w-4 h-4 mr-1" /> +4 this week
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-violet-200 dark:border-violet-900 shadow-md bg-gradient-to-br from-violet-50 to-white dark:from-slate-900 dark:to-violet-950/20">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-1 flex items-center gap-1">
                      <Sparkles className="w-4 h-4" /> Overall Sentiment
                    </p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Positive</h3>
                  </div>
                  <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-slate-600 dark:text-slate-300 font-medium">
                  Based on 128 AI-analyzed reviews
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Review Insights */}
            <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-lg">AI Review Insights</CardTitle>
                    <CardDescription>Machine learning analysis of student feedback.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wider">Top Praises</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span> "Teachers explain complex math concepts very clearly."
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span> "Small class sizes help with individual attention."
                    </li>
                  </ul>
                </div>
                
                <div className="w-full h-px bg-slate-100 dark:bg-slate-800" />
                
                <div>
                  <h4 className="text-sm font-semibold text-rose-600 dark:text-rose-400 mb-2 uppercase tracking-wider">Areas for Improvement</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-rose-500 mt-0.5">•</span> "Parking is difficult to find around 6 PM."
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-rose-500 mt-0.5">•</span> "Air conditioning in Room B is sometimes too cold."
                    </li>
                  </ul>
                </div>
                
                <div className="mt-auto pt-4">
                  <Button variant="outline" className="w-full rounded-xl border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    View Full Sentiment Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Enquiries */}
            <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm">
              <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-heading text-lg">Recent Enquiries</CardTitle>
                  <CardDescription>Students interested in your centre.</CardDescription>
                </div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800">
                  4 Pending
                </Badge>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { name: "Sarah Lim", subject: "Add Math (Form 5)", time: "2 hours ago" },
                    { name: "Ahmad Fizal", subject: "Physics (SPM)", time: "5 hours ago" },
                    { name: "Mrs. Chong", subject: "IGCSE Biology", time: "1 day ago" },
                  ].map((enquiry, i) => (
                    <div key={i} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500">
                          {enquiry.name[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white text-sm">{enquiry.name}</p>
                          <p className="text-xs text-slate-500">{enquiry.subject}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-400 mb-2">{enquiry.time}</p>
                        <Button size="sm" className="h-8 rounded-lg text-xs bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900">
                          Reply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
