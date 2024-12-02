import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/home.tsx";
import Portfolio from "./components/portfolio.tsx";
import Experience from "./components/experience.tsx";
import Contact_me from "./components/contact-me.tsx";
import MainLayout from "./MainLayout/mainlayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/contact-me" element={<Contact_me />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
