import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./app/App";
import "./styles/index.css";
createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="257710187449-j8beucf2969o7ji40kf12n3eemh05p36.apps.googleusercontent.com">
      <App />
  </GoogleOAuthProvider>
);