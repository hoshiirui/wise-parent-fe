import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParentingGuide from "./pages/ParentingGuide.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ArticleDetails from "./pages/ArticleDetails.tsx";
import AboutUs from "./pages/AboutUs.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/parenting" element={<ParentingGuide />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/parenting/article/:slug" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
