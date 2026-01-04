import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/Heroslider";
import Subsidy from "./components/SUBSIDY";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import Testimonials from "./components/TESTIMONIAL";
import About from "./components/About"; // Naya component
import MapSection from "./components/MapSection";

// Home Page Component (Saare sections yahan aayenge)
const Home = () => {
  return (
    <>
      <HeroSlider />
      <Subsidy />
      {/* <Process /> */}
      {/* <WhyUs /> */}
      <Projects />
      <MapSection />
      <Testimonials />
    </>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Us Route */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
