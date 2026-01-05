import { useEffect, useState } from "react";

const data = [
  {
    text: "Excellent service, installation was quick and professional.",
    name: "Tushar, UP",
  },
  {
    text: "My electricity bill is almost zero now. Highly recommended!",
    name: "Ankit, Dhampur",
  },
  {
    text: "Full subsidy support and transparent process.",
    name: "Ravi, Haryana",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [pause]);

  return (
    <section className="bg-yellow-400 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* HEADING */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] flex-1 bg-black/30"></div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-black">
            Happy Customers
          </h3>
          <div className="h-[2px] flex-1 bg-black/30"></div>
        </div>

        {/* SLIDER */}
        <div
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
          className="relative overflow-hidden"
        >
          <div className="transition-all duration-700 ease-out" key={index}>
            <div className="bg-yellow-100 p-12 rounded-3xl shadow-xl animate-fade-in">
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

              <p className="text-xl italic text-gray-800 leading-relaxed">
                “{data[index].text}”
              </p>

              <p className="mt-6 font-bold text-lg text-gray-900">
                – {data[index].name}
              </p>
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-8">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition
                ${i === index ? "bg-black scale-125" : "bg-black/40"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
