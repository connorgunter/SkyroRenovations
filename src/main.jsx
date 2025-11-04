// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Services from "./pages/Services/Services.jsx";
import Kitchen from "./pages/Kitchen/Kitchen.jsx";
import Outdoor from "./pages/Outdoor/Outdoor.jsx";
import Flooring from "./pages/Flooring/Flooring.jsx";
import CommercialConstruction from "./pages/Construction/Construction.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/flooring" element={<Flooring />} />
        <Route path="/commercial-construction" element={<CommercialConstruction />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
