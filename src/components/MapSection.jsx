import React, { useEffect, useRef, useState } from "react";
import { FiMapPin } from "react-icons/fi";

export default function MapSection() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-gray-50 py-24">
      <div
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        `}
      >
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            Our Branch Locations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Visit our head office or nearby sub-branch for direct support
          </p>
        </div>

        {/* BRANCH CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* HEAD BRANCH */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-l-8 border-blue-500 hover:scale-[1.02] transition">
            <div className="flex items-center gap-4 mb-4">
              <FiMapPin className="text-3xl text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-700">Head Branch</h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Near S.B.I Bank, <br />
              Kalagarh Road, Dhampur, <br />
              Dist-Bijnor, UP – 246761
            </p>
          </div>

          {/* SUB BRANCH */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-l-8 border-blue-500 hover:scale-[1.02] transition delay-100">
            <div className="flex items-center gap-4 mb-4">
              <FiMapPin className="text-3xl text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-700">Sub Branch</h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Near Chandni Marriage Hall, <br />
              Kotdwar Road, Najibabad, <br />
              Dist-Bijnor, UP – 246763
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
