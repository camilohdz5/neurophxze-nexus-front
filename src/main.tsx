// Vendors
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router";

// Main CSS Files
import "./index.css";

// Theme
import { theme } from "./utils/theme.ts";

// Pages
import App from "./App.tsx";
import Dashboard from "./pages/Dashboard/index.tsx";
import Home from "./pages/Home/index.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
