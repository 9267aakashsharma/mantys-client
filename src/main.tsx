import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";
import Success from "./Success.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <main className="dark text-foreground bg-background min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </main>
    </HeroUIProvider>
  </StrictMode>
);
