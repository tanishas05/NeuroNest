// src/app/pages/Landing.tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

export function Landing() {
  const [isLoggedInWithGoogle, setIsLoggedInWithGoogle] = useState(false);
  const [roleSelected, setRoleSelected] = useState<"parent" | "child" | null>(null);
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      setIsLoggedInWithGoogle(true);
      localStorage.setItem("googleCredential", credentialResponse.credential);
    }
  };

  const handleLogin = () => {
    if (!roleSelected) return;

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", roleSelected);

    if (roleSelected === "parent") navigate("/parent-dashboard");
    else navigate("/social-coach");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 via-blue-200 to-pink-200 p-8">

      <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
        Welcome to NeuroKids
      </h1>

      <p className="text-xl text-gray-600 mb-8 text-center max-w-xl">
        Empowering children with ADHD, Autism, and Dyslexia through personalized learning
      </p>

      {!isLoggedInWithGoogle ? (
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log("Login Failed")}
          />
        </div>
      ) : (
        <Card className="p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg flex flex-col items-center gap-6">

          <h2 className="text-2xl font-semibold text-gray-800">
            Select your role to continue
          </h2>

          <div className="flex gap-4">
            <Button
              variant={roleSelected === "parent" ? "default" : "outline"}
              className={roleSelected === "parent" ? "bg-purple-500 hover:bg-purple-600" : ""}
              onClick={() => setRoleSelected("parent")}
            >
              Parent
            </Button>

            <Button
              variant={roleSelected === "child" ? "default" : "outline"}
              className={roleSelected === "child" ? "bg-blue-500 hover:bg-blue-600" : ""}
              onClick={() => setRoleSelected("child")}
            >
              Child
            </Button>
          </div>

          <Button
            className="mt-4 w-full bg-purple-500 hover:bg-purple-600"
            onClick={handleLogin}
            disabled={!roleSelected}
          >
            Continue
          </Button>

        </Card>
      )}
    </div>
  );
}