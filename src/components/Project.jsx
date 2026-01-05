export default function Projects() {
  const images = [
    "/project1.jpeg",
    "/project2.jpeg",
    "/project3.jpeg",
    "/project4.jpeg",
    "/project5.jpeg",
    "/project6.jpeg",
  ];

  return (
    <section className="bg-yellow-400 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 animate-fade-up">
        {/* TITLE */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] flex-1 bg-black/30"></div>
          <h2 className="text-3xl font-bold text-black">Our Projects</h2>
          <div className="h-[2px] flex-1 bg-black/30"></div>
        </div>

        {/* SLIDER */}
        <div className="group overflow-hidden">
          <div className="flex gap-10 animate-projects-slide-fast group-hover:[animation-play-state:paused]">
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="min-w-[380px] h-[260px] rounded-2xl overflow-hidden shadow-xl bg-white"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover image-hover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
