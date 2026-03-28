// src/components/Navbar.tsx
import { Link, useNavigate } from "react-router";
import { Button } from "./ui/button";

export default function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-gray-800">
        NeuroKids
      </Link>

      <div className="flex gap-4 items-center">
        {role === "parent" ? (
          <>
            <Link to="/parent-dashboard">
              <Button variant="ghost">Parent Dashboard</Button>
            </Link>
            <Link to="/connect-child">
              <Button variant="ghost">Connect Child</Button>
            </Link>
          </>
        ) : role === "child" ? (
          <>
            <Link to="/social-coach">
              <Button variant="ghost">Social Coach</Button>
            </Link>
            <Link to="/learning">
              <Button variant="ghost">Learning Engine</Button>
            </Link>
            <Link to="/dyslexia-games">
              <Button variant="ghost">Dyslexia Games</Button>
            </Link>
          </>
        ) : null}

        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </nav>
  );
}