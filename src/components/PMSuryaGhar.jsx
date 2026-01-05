import React from "react";
import { Link } from "react-router-dom";

export default function PMSuryaGhar() {
  const blogCards = [
    {
      title: "Key Benefits of PM Surya Ghar Yojana",
      img: "/benefits.jpg",
    },
    {
      title: "Documents Required",
      img: "/documents.jpg",
    },
    {
      title: "Why Choose Prem & Brothers",
      img: "/why-us.jpg",
    },
    {
      title: "Step-by-Step Registration Process",
      img: "/process.jpg",
    },
  ];

  return (
    <section className="bg-yellow-400 pb-24">
      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Solar Subsidy in Uttar Pradesh (UP) for Residential Users
          </h1>

          <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg text-sm md:text-base">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-3">Monthly Units</th>
                <th className="p-3">Plant Capacity</th>
                <th className="p-3">Subsidy</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-yellow-100">
                <td className="p-3">0–150</td>
                <td>1–2 kW</td>
                <td>₹45,000 – ₹90,000</td>
              </tr>
              <tr className="text-center hover:bg-yellow-100">
                <td className="p-3">150–300</td>
                <td>2–3 kW</td>
                <td>₹90,000 – ₹1,08,000</td>
              </tr>
              <tr className="text-center hover:bg-yellow-100">
                <td className="p-3">300+</td>
                <td>Above 3 kW</td>
                <td>₹1,08,000</td>
              </tr>
            </tbody>
          </table>

          <Link to="/contact">
            <button className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition">
              Get a Quote
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center animate-fade-in">
          <img
            src="/contact.png"
            alt="PM Surya Ghar"
            className="w-full max-w-md rounded-3xl shadow-xl"
          />
        </div>
      </div>

      {/* ================= INFO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-16 items-start">
        {/* TEXT */}
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            PM Surya Ghar Muft Bijli Yojana
          </h2>

          <p className="text-gray-800 mb-6 leading-relaxed">
            <strong>PM सूर्य घर: मुफ्त बिजली योजना</strong> भारत सरकार की एक
            महत्वाकांक्षी योजना है, जिसका उद्देश्य <strong>1 करोड़ घरों</strong>{" "}
            को सौर ऊर्जा से जोड़कर उन्हें आत्मनिर्भर बनाना है।
          </p>

          {/* BENEFITS */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">1️⃣ बिजली बिल से मुक्ति</h3>
              <ul className="list-disc ml-6 space-y-1 text-gray-800">
                <li>300 यूनिट तक मुफ्त बिजली हर महीने</li>
                <li>सालाना बचत ₹15,000 – ₹18,000</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">2️⃣ भारी सब्सिडी</h3>
              <ul className="list-disc ml-6 space-y-1 text-gray-800">
                <li>1 kW – ₹30,000</li>
                <li>2 kW – ₹60,000</li>
                <li>3 kW या अधिक – ₹78,000 तक</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">3️⃣ अतिरिक्त आय</h3>
              <p className="text-gray-800">
                अतिरिक्त बिजली DISCOM को बेचकर कमाई।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">4️⃣ आसान लोन</h3>
              <p className="text-gray-800">
                लगभग 7% ब्याज दर पर बिना गारंटी लोन।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">5️⃣ पर्यावरण संरक्षण</h3>
              <p className="text-gray-800">
                स्वच्छ ऊर्जा और आत्मनिर्भर भारत की दिशा में कदम।
              </p>
            </div>
          </div>

          {/* SUMMARY TABLE */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-center">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-3">विवरण</th>
                  <th className="p-3">लाभ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-yellow-100">
                  <td className="p-3">मुफ्त बिजली</td>
                  <td className="p-3">300 यूनिट / माह</td>
                </tr>
                <tr className="hover:bg-yellow-100">
                  <td className="p-3">अधिकतम सब्सिडी</td>
                  <td className="p-3">₹78,000</td>
                </tr>
                <tr className="hover:bg-yellow-100">
                  <td className="p-3">लक्ष्य</td>
                  <td className="p-3">1 करोड़ घर</td>
                </tr>
                <tr className="hover:bg-yellow-100">
                  <td className="p-3">लोन सुविधा</td>
                  <td className="p-3">उपलब्ध</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link to="/contact">
            <button className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition">
              Get a Quote
            </button>
          </Link>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center animate-fade-in">
          <img
            src="/save.png"
            alt="Solar Saving"
            className="w-full max-w-md rounded-3xl shadow-xl"
          />
        </div>
      </div>

      {/* ================= BLOG / INFO CARDS ================= */}
      {/* <div className="max-w-7xl mx-auto px-6 mt-28 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {blogCards.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden group animate-fade-up"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">Updated · 2024</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
