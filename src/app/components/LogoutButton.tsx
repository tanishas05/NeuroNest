import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login flag
    navigate("/", { replace: true }); // Redirect to Landing page
  };

  return (
    <Button
      size="sm"
      className="bg-red-500 text-white hover:bg-red-600"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}