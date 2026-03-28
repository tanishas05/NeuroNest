// src/components/Layout.tsx
import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Brain, BookOpen, Gamepad2, BarChart3, Compass } from "lucide-react";

interface NavItem {
  path: string;
  icon: any;
  label: string;
}

export function Layout() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  const [role, setRole] = useState<string | null>(null);

  // Load role from localStorage
  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, []);

  // Role-based navigation items
  const navItems: NavItem[] = role === "parent"
    ? [
        { path: "/parent-dashboard", icon: BarChart3, label: "Dashboard" },
        { path: "/connect-child", icon: Compass, label: "Connect Child" },
      ]
    : role === "child"
    ? [
        { path: "/social-coach", icon: Brain, label: "Social Coach" },
        { path: "/learning", icon: BookOpen, label: "Learning Engine" },
        { path: "/dyslexia-games", icon: Gamepad2, label: "Games" },
      ]
    : [];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      {!isLanding && role && (
        <header className="bg-white shadow-sm border-b border-purple-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-800">NeuroKids</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
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

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </nav>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="w-full pt-4">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      {!isLanding && role && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="flex items-center justify-around py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                    isActive ? "text-purple-600" : "text-gray-500"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
                </Link>
              );
            })}

            {/* Logout on mobile */}
            <button
              onClick={handleLogout}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-red-500 hover:text-red-600 transition"
            >
              <span className="text-xs">Logout</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}