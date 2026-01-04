export default function Projects() {
  return (
    <section className="bg-yellow-400 pt-6 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION LABEL */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] flex-1 bg-black/30"></div>
          <h2 className="text-3xl font-bold text-black">Our Installations</h2>
          <div className="h-[2px] flex-1 bg-black/30"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-yellow-100 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="h-48 bg-gray-300" />
              <div className="p-5">
                <h4 className="font-bold">Residential Solar</h4>
                <p className="text-sm text-gray-700">
                  Rooftop installation project
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
