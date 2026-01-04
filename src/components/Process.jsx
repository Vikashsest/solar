import React, { useState, useEffect } from "react";

export default function Process() {
  const steps = [
    "Site Survey",
    "Govt Approval",
    "Installation",
    "Net Metering",
    "Zero Bill",
  ];
  return (
    <section className="bg-yellow-400 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">Installation Process</h3>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition"
            >
              <div className="text-2xl font-bold mb-2">{i + 1}</div>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
