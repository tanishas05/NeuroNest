import { ReactNode } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Brain, BookOpen, Gamepad2, BarChart3, Home, Compass } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/explore", icon: Compass, label: "Explore" },
    { path: "/social-coach", icon: Brain, label: "Social Coach" },
    { path: "/learning", icon: BookOpen, label: "Learning" },
    { path: "/dyslexia-games", icon: Gamepad2, label: "Games" },
    { path: "/parent-dashboard", icon: BarChart3, label: "Dashboard" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      {!isLanding && (
        <header className="bg-white shadow-sm border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-800">NeuroKids</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2">
                {navItems.slice(1).map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        isActive
                          ? "bg-purple-100 text-purple-700"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="w-full">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      {!isLanding && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="flex items-center justify-around py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "text-purple-600"
                      : "text-gray-500"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}