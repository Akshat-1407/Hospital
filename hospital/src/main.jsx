import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ import HelmetProvider

createRoot(document.getElementById("root")).render(
  <HelmetProvider> {/* ✅ Wrap everything inside HelmetProvider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
