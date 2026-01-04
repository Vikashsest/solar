import React, { useState, useEffect } from "react";
export default function HeroSlider() {
  const slides = ["/solar1.jpg", "/solar2.jpg", "/solar3.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {slides.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Switch to Solar Conserve Energy Save Cash
        </h1>
        {/* <p className="text-white text-lg md:text-xl mb-6">
          Conserve Energy • Save Cash • Go Green
        </p> */}
        <button className="bg-yellow-400 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Get Free Consultation
        </button>
      </div>
    </section>
  );
}
