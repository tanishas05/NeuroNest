import { Card } from "./ui/card";
import { CheckCircle2, Users, Target, Sparkles } from "lucide-react";

export function PlatformOverview() {
  const howItWorks = [
    {
      step: 1,
      title: "Choose a Module",
      description: "Start with Social Coach, Learning Engine, or Dyslexia Games based on your child's needs",
      icon: Target
    },
    {
      step: 2,
      title: "Engage & Learn",
      description: "Children interact with personalized content designed for their interests and learning style",
      icon: Sparkles
    },
    {
      step: 3,
      title: "Track Progress",
      description: "Parents view the dashboard to see insights, patterns, and get actionable recommendations",
      icon: Users
    },
    {
      step: 4,
      title: "Adjust & Grow",
      description: "Use insights to refine strategies and celebrate progress together",
      icon: CheckCircle2
    }
  ];

  return (
    <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        How the Platform Works
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {howItWorks.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.step} className="text-center">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
