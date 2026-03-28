import { ReactNode } from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[]; // Roles allowed to access this route
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("role");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role!)) {
    // Redirect to home if role is not allowed
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
