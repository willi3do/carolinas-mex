import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import Reservations from "./pages/Reservations.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
