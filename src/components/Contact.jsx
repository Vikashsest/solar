import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-yellow-400 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-800 text-lg md:text-xl">
            Have questions about solar installation or subsidy? Our team is here
            to help you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 rounded-2xl   p-8 md:p-12 items-center">
          {/* LEFT INFO / IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/contact.png"
              alt="Contact Illustration"
              className="rounded-xl w-full md:w-auto"
            />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-4 bg-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-4  bg-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none transition"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-4 bg-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-4 bg-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white w-full py-4  rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
