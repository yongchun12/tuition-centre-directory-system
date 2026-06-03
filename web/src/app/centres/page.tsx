import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { MapPin, Star, BookOpen, Clock, Heart, Search, Sparkles } from "lucide-react";

// Mock Data for the Showcase
const mockCentres = [
  {
    id: "1",
    name: "Apex Excellence Academy",
    description: "Premium tuition specializing in STEM subjects with a track record of 90% A* students.",
    location: "Petaling Jaya, Selangor",
    rating: 4.9,
    reviews: 128,
    subjects: ["Additional Math", "Physics", "Chemistry"],
    price: "RM 250/mo",
    mode: "Hybrid",
    aiMatch: 98,
    image: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
  {
    id: "2",
    name: "Bright Sparks Learning",
    description: "Interactive and engaging classes focusing on secondary school core subjects.",
    location: "Subang Jaya, Selangor",
    rating: 4.7,
    reviews: 84,
    subjects: ["English", "Mathematics", "Science"],
    price: "RM 180/mo",
    mode: "Physical",
    aiMatch: 85,
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    id: "3",
    name: "Global Mind Tutors",
    description: "International syllabus experts (IGCSE/A-Levels) with highly qualified educators.",
    location: "Kuala Lumpur",
    rating: 4.8,
    reviews: 215,
    subjects: ["Biology", "Economics", "Business"],
    price: "RM 300/mo",
    mode: "Online",
    aiMatch: 92,
    image: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    id: "4",
    name: "Pusat Tuisyen Cemerlang",
    description: "Affordable and comprehensive tuition for SPM preparations.",
    location: "Shah Alam, Selangor",
    rating: 4.5,
    reviews: 312,
    subjects: ["Sejarah", "Bahasa Melayu", "Mathematics"],
    price: "RM 120/mo",
    mode: "Physical",
    aiMatch: 78,
    image: "bg-gradient-to-br from-orange-500 to-red-500",
  }
];

export default function CentresDirectory() {
  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-8 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">Explore Tuition Centres</h1>
              <p className="text-slate-500 dark:text-slate-400">Discover and compare the best tuition centres tailored to your needs.</p>
            </div>
            <div className="w-full md:w-[400px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search by name or subject..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all dark:text-white shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 dark:text-white">Filters</h3>
              
              <div className="space-y-6">
                {/* Subjects */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white">Subjects</h4>
                  {["Mathematics", "Science", "English", "Physics", "Chemistry"].map(subject => (
                    <label key={subject} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 group-hover:border-indigo-500 flex items-center justify-center transition-colors">
                        <div className="w-3 h-3 rounded-sm bg-indigo-500 opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                      </div>
                      <input type="checkbox" className="hidden" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{subject}</span>
                    </label>
                  ))}
                </div>

                {/* Teaching Mode */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white">Teaching Mode</h4>
                  {["Physical", "Online", "Hybrid"].map(mode => (
                    <label key={mode} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 group-hover:border-indigo-500 flex items-center justify-center transition-colors">
                        <div className="w-3 h-3 rounded-full bg-indigo-500 opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                      </div>
                      <input type="radio" name="mode" className="hidden" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{mode}</span>
                    </label>
                  ))}
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white">Max Monthly Fee</h4>
                  <Slider defaultValue={[300]} max={500} step={10} className="w-full" />
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span>RM 50</span>
                    <span>RM 500+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Showing {mockCentres.length} results</span>
              <select className="bg-transparent text-sm font-medium text-slate-700 dark:text-slate-300 outline-none cursor-pointer">
                <option>Sort by: Recommended</option>
                <option>Sort by: Highest Rated</option>
                <option>Sort by: Lowest Price</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mockCentres.map((centre) => (
                <Card key={centre.id} className="group overflow-hidden rounded-2xl border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
                  {/* Image/Gradient Header */}
                  <div className={`h-32 w-full ${centre.image} relative p-4 flex items-start justify-between`}>
                    <Badge className="bg-white/90 text-slate-900 hover:bg-white border-none font-bold shadow-sm backdrop-blur-md">
                      <Star className="w-3.5 h-3.5 text-yellow-500 mr-1 fill-yellow-500" />
                      {centre.rating} ({centre.reviews})
                    </Badge>
                    <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center backdrop-blur-md transition-colors text-white">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <CardHeader className="pt-4 pb-2">
                    <div className="flex justify-between items-start gap-2">
                      <Link href={`/centres/${centre.id}`}>
                        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {centre.name}
                        </h3>
                      </Link>
                    </div>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {centre.location}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-4 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">
                      {centre.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {centre.subjects.map(subject => (
                        <Badge key={subject} variant="secondary" className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* AI Recommendation Badge */}
                    {centre.aiMatch > 80 && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-100 dark:border-indigo-800">
                        <Sparkles className="w-3.5 h-3.5" />
                        {centre.aiMatch}% Match for you
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="border-t border-slate-100 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{centre.price}</div>
                      <div className="text-xs text-slate-500 flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {centre.mode} Mode
                      </div>
                    </div>
                    <Link href={`/centres/${centre.id}`}>
                      <Button className="rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-700">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
