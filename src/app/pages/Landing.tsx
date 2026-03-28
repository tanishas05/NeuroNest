import { useEffect } from "react";
import { useNavigate } from "react-router";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { Brain, BookOpen, Gamepad2, BarChart3, ArrowRight, Compass } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function Landing() {
  const navigate = useNavigate();

  // Redirect logged-in users directly to dashboard
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/parent-dashboard", { replace: true });
    }
  }, [navigate]);

  const features = [
    {
      title: "Social Coach",
      description: "Learn to understand social cues and conversations with real-world scenarios",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "/social-coach",
      badge: "Person 1",
    },
    {
      title: "Learning Engine",
      description: "Personalized lessons based on your interests - cars, animals, space & more!",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      link: "/learning",
      badge: "Person 2",
    },
    {
      title: "Dyslexia Games",
      description: "Fun word games, phonetic exercises, and reading practice",
      icon: Gamepad2,
      color: "from-green-500 to-emerald-500",
      link: "/dyslexia-games",
      badge: "Person 2",
    },
    {
      title: "Parent Dashboard",
      description: "Track progress, view insights, and get actionable suggestions",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      link: "/parent-dashboard",
      badge: "Person 3",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-purple-600">
          Welcome to NeuroKids
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Empowering children with ADHD, Autism, and Dyslexia through personalized learning and social support
        </p>

        {/* Google Login Button */}
        <div>
          <GoogleLoginButton />
        </div>
      </div>

      {/* Remove all other links/buttons until user logs in */}
      <p className="text-gray-500 mt-4 text-sm">
        Please login to access all features.
      </p>
    </div>
  );
}