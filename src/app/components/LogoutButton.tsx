// src/components/LogoutButton.tsx
import { useNavigate } from "react-router";
import { Button } from "./ui/button";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    navigate("/", { replace: true });
  };

  return (
    <Button onClick={handleLogout} variant="outline" className="text-red-600">
      Logout
    </Button>
  );
}