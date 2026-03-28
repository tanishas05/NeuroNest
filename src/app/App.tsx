import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router"; // fixed import
import { Landing } from "./pages/Landing";
import { ParentDashboard } from "./pages/ParentDashboard";
import { SocialCoach } from "./pages/SocialCoach";
import { DyslexiaGames } from "./pages/DyslexiaGames";
import { Explore } from "./pages/Explore";
import { Insights } from "./pages/Insights";
import { LearningEngine } from "./pages/LearningEngine";
import { NotFound } from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public landing page */}
        <Route path="/" element={<Landing />} />

        {/* Protected pages */}
        <Route
          path="/parent-dashboard"
          element={
            <ProtectedRoute>
              <ParentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/social-coach"
          element={
            <ProtectedRoute>
              <SocialCoach />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dyslexia-games"
          element={
            <ProtectedRoute>
              <DyslexiaGames />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/insights"
          element={
            <ProtectedRoute>
              <Insights />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learning-engine"
          element={
            <ProtectedRoute>
              <LearningEngine />
            </ProtectedRoute>
          }
        />

        {/* Catch-all unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;