import { Link } from "react-router";
import { Brain, BookOpen, Gamepad2, BarChart3, ArrowRight, Sparkles, Compass } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function Landing() {
  const features = [
    {
      title: "Social Coach",
      description: "Learn to understand social cues and conversations with real-world scenarios",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "/social-coach",
      badge: "Person 1"
    },
    {
      title: "Learning Engine",
      description: "Personalized lessons based on your interests - cars, animals, space & more!",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      link: "/learning",
      badge: "Person 2"
    },
    {
      title: "Dyslexia Games",
      description: "Fun word games, phonetic exercises, and reading practice",
      icon: Gamepad2,
      color: "from-green-500 to-emerald-500",
      link: "/dyslexia-games",
      badge: "Person 2"
    },
    {
      title: "Parent Dashboard",
      description: "Track progress, view insights, and get actionable suggestions",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      link: "/parent-dashboard",
      badge: "Person 3"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">100% Free Platform for Neurodivergent Kids</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Welcome to NeuroKids
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
              Empowering children with ADHD, Autism, and Dyslexia through personalized learning and social support
            </p>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Built with Next.js, Tailwind CSS, and powered by smart JavaScript logic
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/social-coach">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/explore">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  <Compass className="w-4 h-4 mr-2" />
                  Explore All
                </Button>
              </Link>
              <Link to="/parent-dashboard">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  For Parents
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Four Powerful Modules
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Developed by 3 teammates, each module addresses unique challenges faced by neurodivergent children
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <Link to={feature.link} className="block p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                          {feature.badge}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{feature.description}</p>
                      <div className="flex items-center text-purple-600 font-medium group-hover:gap-2 transition-all">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-purple-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Built with Modern, Free Technology
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">⚛️</span>
              </div>
              <p className="font-medium text-gray-800">Next.js (React)</p>
              <p className="text-sm text-gray-600">Frontend</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🎨</span>
              </div>
              <p className="font-medium text-gray-800">Tailwind CSS</p>
              <p className="text-sm text-gray-600">Styling</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📝</span>
              </div>
              <p className="font-medium text-gray-800">Static JSON</p>
              <p className="text-sm text-gray-600">Data Storage</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">▲</span>
              </div>
              <p className="font-medium text-gray-800">Vercel</p>
              <p className="text-sm text-gray-600">Deployment</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">NeuroKids Platform - Supporting Neurodivergent Children & Families</p>
          <p className="text-sm">Built with ❤️ by a team of 3 developers</p>
        </div>
      </footer>
    </div>
  );
}