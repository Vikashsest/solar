import React from "react";

export default function WhyUs() {
  const items = [
    "Govt Approved Vendor",
    "Experienced Team",
    "Transparent Pricing",
    "Premium Solar Panels",
    "Fast Installation",
  ];

  return (
    <section className="bg-yellow-400 py-16 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Prem & Brothers?</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
