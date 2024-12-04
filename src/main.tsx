import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/home.tsx";
import Portfolio from "./components/portfolio.tsx";
import Experience from "./components/experience.tsx";
// import Contact_me from "./components/contact-me.tsx";
import MainLayout from "./MainLayout/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="#contact-me-id" element={<Contact_me />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
