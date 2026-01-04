import React from "react";

const MapSection = () => {
  // Is array mein top aur left ko image ke hisaab se set kiya gaya hai
  const locations = [
    { name: "Delhi", top: "26%", left: "46%" },
    { name: "Moradabad", top: "27%", left: "54%" },
    { name: "Mumbai", top: "68%", left: "37%" },
    { name: "Hyderabad", top: "72%", left: "55%" },
    { name: "Kolkata", top: "58%", left: "82%" },
    { name: "Bangalore", top: "85%", left: "48%" },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
            Support Center
          </h2>
          <p className="text-gray-600 text-lg">
            Our GreenTach Solar support centers are strategically placed in
            major Indian cities.
          </p>
          <ul className="space-y-4">
            {[
              "Assistance through Telephone.",
              "Assistance through E-mail.",
              "Assistance through online help/Chat.",
              "Assistance through direct visit.",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-800 font-medium"
              >
                <span className="text-blue-600 font-bold">✓</span> {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Map Container */}
        <div className="flex-1 w-full max-w-[600px] border-2 border-purple-100 rounded-3xl p-6 bg-purple-50/20 shadow-sm">
          {/* Important: Ye relative hona chahiye taaki pins iske upar baithein */}
          <div className="relative w-full h-full">
            {/* India Map Image */}
            <img
              src="https://smartedtech.in/map.webp"
              alt="India Map"
              className="w-full h-auto opacity-30 select-none pointer-events-none"
            />

            {/* Dynamic Pins - Map ke upar layout */}
            {locations.map((loc, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ top: loc.top, left: loc.left }}
              >
                {/* Red Dot with Animation */}
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 border border-white"></span>
                </div>

                {/* City Name Label */}
                <div className="mt-1">
                  <span className="bg-white text-[10px] md:text-[12px] font-bold px-2 py-0.5 rounded-md shadow-md border border-gray-100 text-gray-800 whitespace-nowrap">
                    {loc.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
