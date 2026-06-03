"use client";

import { use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Star, Clock, CheckCircle2, TrendingUp, MessageSquare, ArrowLeft, Heart, ShieldCheck, ThumbsUp, ThumbsDown, Minus, Sparkles, BookOpen } from "lucide-react";

export default function CentreDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-20">
      {/* Premium Hero Section */}
      <div className="w-full h-[40vh] bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full p-6">
          <Link href="/centres">
            <Button variant="ghost" className="text-white hover:bg-white/20 backdrop-blur-sm rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Search
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-8 md:p-12">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-none shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Verified Centre
                  </Badge>
                  <Badge className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-none">
                    Hybrid Mode
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">Apex Excellence Academy</h1>
                <div className="flex items-center text-slate-200 text-sm md:text-base">
                  <MapPin className="w-4 h-4 mr-1" />
                  Petaling Jaya, Selangor
                  <Separator orientation="vertical" className="h-4 mx-3 bg-slate-500" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="font-medium text-white">4.9</span>
                  <span className="ml-1 text-slate-300">(128 reviews)</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md rounded-xl">
                  <Heart className="w-4 h-4 mr-2" /> Save
                </Button>
                <Button className="bg-white text-indigo-600 hover:bg-slate-100 rounded-xl shadow-xl font-bold">
                  Book Trial Class
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Tabs) */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full bg-white dark:bg-slate-900 p-1 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 justify-start overflow-x-auto">
                <TabsTrigger value="overview" className="rounded-xl px-6 data-[state=active]:bg-indigo-50 dark:data-[state=active]:bg-indigo-900/50 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400">Overview</TabsTrigger>
                <TabsTrigger value="subjects" className="rounded-xl px-6 data-[state=active]:bg-indigo-50 dark:data-[state=active]:bg-indigo-900/50 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400">Subjects & Pricing</TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-xl px-6 data-[state=active]:bg-indigo-50 dark:data-[state=active]:bg-indigo-900/50 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400">Reviews & AI Analysis</TabsTrigger>
              </TabsList>

              {/* OVERVIEW TAB */}
              <TabsContent value="overview" className="mt-6 space-y-6">
                <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">About this Centre</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
                    <p>
                      Apex Excellence Academy is a premium tuition centre specializing in STEM subjects for secondary school students. With a team of highly qualified educators and a proven track record, we ensure that every student reaches their full potential.
                    </p>
                    <p>
                      Our state-of-the-art facilities include interactive smart boards, a dedicated science lab, and comfortable learning spaces designed to foster focus and creativity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">Key Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "90% of students scored A/A* in SPM 2024",
                        "Small class sizes (Max 15 students)",
                        "Monthly progress reports powered by AI",
                        "Free access to digital resource library"
                      ].map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* REVIEWS & AI ANALYSIS TAB */}
              <TabsContent value="reviews" className="mt-6 space-y-6">
                <Card className="rounded-3xl border-indigo-100 dark:border-indigo-900 shadow-lg shadow-indigo-100/50 dark:shadow-none bg-gradient-to-br from-white to-indigo-50/50 dark:from-slate-900 dark:to-indigo-950/30 overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <TrendingUp className="w-32 h-32 text-indigo-500" />
                  </div>
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-indigo-500" />
                      <h3 className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-xs">AI Insight Generation</h3>
                    </div>
                    <CardTitle className="font-heading text-2xl">Sentiment Analysis Summary</CardTitle>
                    <CardDescription>
                      Our ML model processed 128 student reviews to bring you the truth about this centre.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center shadow-sm border border-slate-100 dark:border-slate-700">
                        <ThumbsUp className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">85%</div>
                        <div className="text-xs text-slate-500 font-medium">Positive</div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center shadow-sm border border-slate-100 dark:border-slate-700">
                        <Minus className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">10%</div>
                        <div className="text-xs text-slate-500 font-medium">Neutral</div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center shadow-sm border border-slate-100 dark:border-slate-700">
                        <ThumbsDown className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">5%</div>
                        <div className="text-xs text-slate-500 font-medium">Negative</div>
                      </div>
                    </div>

                    <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-4 backdrop-blur-sm border border-indigo-100 dark:border-indigo-800/50">
                      <p className="text-sm text-indigo-900 dark:text-indigo-200 font-medium leading-relaxed">
                        <span className="font-bold">AI Verdict: </span> 
                        Highly recommended for students struggling with Advanced Mathematics. Reviewers frequently praise the "patient teachers" and "clear explanations". Some minor complaints regarding limited parking space during peak hours.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Individual Reviews */}
                <div className="space-y-4">
                  {[
                    { name: "Sarah Lim", score: "positive", text: "Teacher was amazing, helped me pull up my Add Math grade from C to A- in just 3 months. The notes are very concise.", rating: 5 },
                    { name: "Jason Chong", score: "neutral", text: "Classes are okay, standard stuff. But the chairs are a bit uncomfortable for 2-hour sessions.", rating: 3 },
                    { name: "Ahmad Fizal", score: "positive", text: "Best tuition centre in PJ! The hybrid mode makes it so convenient when I can't travel due to heavy rain.", rating: 5 },
                  ].map((review, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <span className="font-bold text-slate-500">{review.name[0]}</span>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, idx) => (
                              <Star key={idx} className={`w-3.5 h-3.5 ${idx < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                            ))}
                          </div>
                        </div>
                        <Badge variant="outline" className={`mb-3 text-xs border-none ${review.score === 'positive' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30' : review.score === 'negative' ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-600'}`}>
                          AI Score: {review.score.charAt(0).toUpperCase() + review.score.slice(1)}
                        </Badge>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">"{review.text}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="subjects" className="mt-6">
                <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm">
                   <CardHeader>
                     <CardTitle className="font-heading">Subjects Offered</CardTitle>
                   </CardHeader>
                   <CardContent>
                     <div className="space-y-4">
                       {["Additional Mathematics", "Physics", "Chemistry"].map(sub => (
                         <div key={sub} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                           <div className="flex items-center gap-3">
                             <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                               <BookOpen className="w-5 h-5" />
                             </div>
                             <span className="font-semibold text-slate-900 dark:text-white">{sub}</span>
                           </div>
                           <span className="font-bold text-indigo-600 dark:text-indigo-400">RM 150/mo</span>
                         </div>
                       ))}
                     </div>
                   </CardContent>
                </Card>
              </TabsContent>

            </Tabs>
          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-24 space-y-6">
              <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="font-heading">Enquire Now</CardTitle>
                  <CardDescription>Get in touch with the centre admin directly.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Message</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none h-32 dark:text-white"
                      placeholder="Hi, I would like to know more about the Form 5 Add Math class..."
                    ></textarea>
                  </div>
                  <Button className="w-full py-6 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-md text-base">
                    <MessageSquare className="w-5 h-5 mr-2" /> Send Message
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Location Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-48 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    <MapPin className="w-8 h-8 opacity-50" />
                    <span className="ml-2 font-medium">Map Integration</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
