import React from "react";

const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Top Banner - Background Video */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/a2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Text on Video (Optional) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          {/* <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wider">
            About us
          </h1> */}
        </div>
      </div>

      {/* Main Intro Section (Yellow Background) */}
      <section className="bg-yellow-400 py-16 px-6 md:px-20 lg:px-40">
        <div className="max-w-6xl mx-auto text-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Get to know About Us
          </h2>

          <div className="space-y-6 text-lg leading-relaxed font-medium">
            <p>
              GreenTach Solar, based in Moradabad, is a name synonymous with
              trust and reliability in the power backup and solar energy sector.
              With over 30 years of experience, we have been consistently
              delivering high-quality power solutions to homes, businesses, and
              institutions across the region.
            </p>
            <p>
              We are proud to be an Authorised Dealer of Luminous and Sukam –
              two of the most trusted brands in inverters, solar systems, and
              batteries.
            </p>
            <p>
              In addition, GreenTach Solar is an Authorised Vendor for the PM
              Surya Ghar Muft Bijli Yojana, a prestigious government initiative
              aimed at providing free electricity to households through rooftop
              solar installations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="flex flex-col md:flex-row min-h-[500px]">
        {/* Mission */}
        <div className="flex-1 bg-white p-12 md:p-20 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-700">Our mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At GreenTach Solar, our mission is to empower homes and businesses
            with reliable, efficient, and eco-friendly power solutions. We are
            committed to providing high-quality systems while supporting
            national initiatives like the PM Surya Ghar Muft Bijli Yojana.
          </p>
        </div>

        {/* Vision (Yahan bhi aap video ya image rakh sakte hain) */}
        <div className="relative flex-1 p-12 md:p-20 flex flex-col justify-center text-white overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Our vision</h2>
            <p className="text-lg leading-relaxed opacity-90">
              Our vision is to be the leading power backup and solar energy
              solution provider in Moradabad and beyond, recognized for our
              integrity, innovation, and 100% customer satisfaction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
