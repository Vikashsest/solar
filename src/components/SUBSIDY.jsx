import React from "react";

export default function Subsidy() {
  return (
    <>
      <section className="bg-yellow-400 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
              Subsidy Upto <br /> ₹1.08 Lakhs
            </h2>

            <p className="mb-8 text-lg md:text-xl text-gray-800">
              At <span className="font-semibold">GreenTach Solar</span>, we
              specialize in innovative solar power solutions for homes and
              businesses.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white text-base rounded-xl overflow-hidden shadow">
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
                    <tr key={i} className="text-center hover:bg-yellow-100">
                      {r.map((c, j) => (
                        <td key={j} className="p-3 font-medium">
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
          <div className="flex justify-center md:justify-end">
            <img
              src="/modi.png"
              className="w-full max-w-lg rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 👇 SECTION DIVIDER */}
      <div className="bg-yellow-400">
        <div className="h-5 bg-gradient-to-b from-yellow-400" />
      </div>
    </>
  );
}
