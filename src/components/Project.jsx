import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Projects() {
  const images = [
    "/project1.jpeg",
    "/project2.jpeg",
    "/project3.jpeg",
    "/project4.jpeg",
    "/project5.jpeg",
    "/project6.jpeg",
  ];

  const allImages = [...images, ...images]; // duplicate for seamless loop
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const speed = 7; // smaller = faster

  return (
    <section className="bg-yellow-400 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] flex-1 bg-black/30"></div>
          <h2 className="text-3xl font-bold text-black">Our Projects</h2>
          <div className="h-[2px] flex-1 bg-black/30"></div>
        </div>

        {/* SLIDER */}
        <div
          className="overflow-hidden relative cursor-grab"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-10"
            animate={isPaused ? { x: 0 } : { x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: speed,
              ease: "linear",
            }}
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            dragElastic={0.05}
            whileTap={{ cursor: "grabbing" }}
          >
            {allImages.map((img, i) => (
              <motion.div
                key={i}
                className="min-w-[380px] h-[260px] rounded-2xl overflow-hidden shadow-xl bg-white flex-shrink-0"
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={img}
                  alt={`project ${i}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
