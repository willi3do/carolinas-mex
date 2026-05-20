import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import Reservations from "./pages/Reservations.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
