import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="md:px-25 relative bg-gray-900 text-white h-[65vh] flex flex-col justify-center items-start text-left">
      <div className="absolute inset-0 bg-[url('/home/chapel-hero.jpg')] bg-cover bg-no-repeat bg-center opacity-40"></div>

      <div className="relative z-10 max-w-1/2">
        <div className="text-4xl md:text-6xl font-bold mb-6 space-y-2">
          <h1>Preserving History.</h1>
          <h1>Seeking Justice.</h1>
        </div>

        <p className="max-w-2xl mb-12 text-lg">
          Dedicated to maintaining the legacy of Mead Memorial Chapel while
          ensuring transparency and justice through the legal proceedings.
        </p>

        <div className="space-x-4">
          <Link
            to="/about"
            className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
          >
            Learn More
          </Link>

          <Link
            to="/timeline"
            className="bg-gray-800 border border-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700"
          >
            View Timeline
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;