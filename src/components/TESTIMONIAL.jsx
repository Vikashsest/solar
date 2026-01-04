import { useEffect, useState } from "react";

const data = [
  {
    text: "Excellent service, installation was quick and professional.",
    name: "Tushar, UP",
  },
  {
    text: "My electricity bill is almost zero now. Highly recommended!",
    name: "Ankit, Delhi",
  },
  {
    text: "Full subsidy support and transparent process.",
    name: "Ravi, Haryana",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setIndex((prev) => (prev + 1) % data.length),
      3000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <section className="bg-yellow-400 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[2px] flex-1 bg-black/30"></div>
          <h3 className="text-3xl font-bold text-black">Happy Customers</h3>
          <div className="h-[2px] flex-1 bg-black/30"></div>
        </div>

        {/* slider card */}
        <div className="bg-yellow-100 p-10 rounded-2xl shadow">
          ⭐⭐⭐⭐⭐
          <p className="mt-4 italic">
            "My electricity bill is almost zero now. Highly recommended!"
          </p>
          <p className="mt-3 font-semibold">– Ankit, Delhi</p>
        </div>
      </div>
    </section>
  );
}
