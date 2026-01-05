import React, { useEffect, useRef, useState } from "react";

export default function Subsidy() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-yellow-400 py-24 overflow-hidden">
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center
        transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        `}
      >
        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Subsidy Upto ₹1.08 Lakhs
          </h2>

          <p className="mb-8 text-lg md:text-xl text-gray-800">
            At <span className="font-semibold">GreenTach Solar</span>, we
            provide innovative solar power solutions for homes & businesses.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white text-base rounded-xl overflow-hidden shadow-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">kW</th>
                  <th className="p-3">Central</th>
                  <th className="p-3">State</th>
                  <th className="p-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "30k", "15k", "45k"],
                  ["2", "60k", "30k", "90k"],
                  ["3", "78k", "30k", "1.08L"],
                ].map((r, i) => (
                  <tr
                    key={i}
                    className="text-center hover:bg-yellow-100 transition"
                  >
                    {r.map((c, j) => (
                      <td key={j} className="p-3 font-semibold">
                        ₹{c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`flex justify-center md:justify-end transition-all duration-1000 delay-200
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
          `}
        >
          <img
            src="/modi.png"
            alt="PM Modi"
            className="w-full max-w-lg rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
