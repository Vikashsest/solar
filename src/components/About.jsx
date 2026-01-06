import React from "react";

const About = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* --- Top Hero Section --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/a2.mp4" type="video/mp4" />
        </video>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            About <span className="text-yellow-400">GreenTach</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mt-4 rounded-full"></div>
        </div>
      </div>

      {/* --- Main Intro Section --- */}
      <section className="relative -mt-20 z-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side: Text */}
          <div className="p-8 md:p-16 flex-1 border-r border-gray-100">
            {/* <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-4 block">
              30+ Years of Excellence
            </span> */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Leading the Solar Revolution in{" "}
              <span className="text-blue-600">Bijnor</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900">GreenTach Solar</strong> is
                built on trust. we provide cutting-edge solar and power
                solutions tailored for modern needs.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 italic text-blue-800">
                Authorized Dealer of <strong></strong>{" "}
                <strong>Vipin Gurd </strong>.
              </div>
            </div>
          </div>

          {/* Right Side: PM Yojana Highlight */}
          <div className="bg-yellow-400 p-8 md:p-16 flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Govt. Authorized Vendor
            </h3>
            <p className="text-gray-800 text-lg mb-6">
              We are proud to be an official partner for the
              <span className="font-bold">
                {" "}
                PM Surya Ghar Muft Bijli Yojana
              </span>
              .
            </p>
            <ul className="space-y-3">
              {[
                "Free Electricity",
                "Govt. Subsidy Support",
                "Rooftop Installation",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center font-semibold text-gray-900"
                >
                  <span className="mr-2 text-green-700">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Mission & Vision Section --- */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mission Card */}
          <div className="group p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-blue-700">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Empowering homes with eco-friendly and reliable power. We aim to
              make clean energy accessible to every household while supporting
              national sustainability goals.
            </p>
          </div>

          {/* Vision Card with Video Background */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            >
              <source src="/about.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-blue-900/60 flex flex-col justify-center p-10 text-white">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <span className="mr-3">👁️</span> Our Vision
              </h2>
              <p className="text-lg opacity-90">
                To be the most trusted name in solar energy, known for
                integrity, innovation, and 100% customer satisfaction in
                Moradabad and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
