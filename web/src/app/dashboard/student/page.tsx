import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, BookOpen, Clock, Settings, LogOut, ChevronRight } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 min-h-screen flex">
      {/* Dashboard Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg">
            J
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white">John Doe</div>
            <div className="text-xs text-slate-500">Student</div>
          </div>
        </div>
        
        <nav className="flex-1 space-y-2">
          <Link href="/dashboard/student" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium">
            <Sparkles className="w-5 h-5" /> Recommendations
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 font-medium transition-colors">
            <Heart className="w-5 h-5" /> Saved Centres
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 font-medium transition-colors">
            <BookOpen className="w-5 h-5" /> My Bookings
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>
        
        <div>
          <Button variant="ghost" className="w-full justify-start text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors">
            <LogOut className="w-5 h-5 mr-3" /> Log Out
          </Button>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">Welcome back, John!</h1>
              <p className="text-slate-500 dark:text-slate-400">Here are your personalized AI recommendations based on your profile.</p>
            </div>
            <Button className="hidden md:flex rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-700">
              Update Preferences
            </Button>
          </div>

          {/* AI Recommended Centres */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Top Matches For You</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Apex Excellence Academy", match: 98, subject: "Physics", reason: "Matches your location and preference for small class sizes." },
                { name: "Bright Sparks Learning", match: 85, subject: "Mathematics", reason: "Highly rated by students with similar academic goals." },
              ].map((centre, i) => (
                <Card key={i} className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-heading text-lg">{centre.name}</CardTitle>
                      <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none dark:bg-indigo-900/50 dark:text-indigo-300">
                        {centre.match}% Match
                      </Badge>
                    </div>
                    <CardDescription className="text-emerald-600 dark:text-emerald-400 font-medium text-xs mt-2">
                      <Sparkles className="w-3 h-3 inline mr-1" />
                      {centre.reason}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center pt-2">
                      <Badge variant="outline" className="text-slate-500 dark:text-slate-400">{centre.subject}</Badge>
                      <Link href="/centres/1" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center hover:underline">
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activity / Status */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Recent Enquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">Global Mind Tutors</div>
                    <div className="text-xs text-slate-500 flex items-center mt-1">
                      <Clock className="w-3 h-3 mr-1" /> Sent 2 days ago
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-900/30 dark:border-amber-800">Pending</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm bg-gradient-to-br from-indigo-500 to-violet-600 text-white border-none">
              <CardHeader>
                <CardTitle className="font-heading text-lg text-white">Complete Your Profile</CardTitle>
                <CardDescription className="text-indigo-100">
                  The AI engine needs more data to provide better recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                  <div className="bg-white h-2 rounded-full w-[40%]"></div>
                </div>
                <Button className="w-full bg-white text-indigo-600 hover:bg-slate-100 rounded-xl font-bold">
                  Continue Setup
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
