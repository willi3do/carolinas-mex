import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MenuPage from "./components/MenuPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuPage />
  </StrictMode>,
);
