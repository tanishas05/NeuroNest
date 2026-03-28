import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';

export default function GoogleLoginButton() {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (response) => {
      // Save login state
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to dashboard
      navigate("/parent-dashboard");
    },
    onError: (error) => {
      console.error("Login failed", error);
    }
  });

  return (
    <button
      onClick={() => login()}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
    >
      Sign in with Google
    </button>
  );
}