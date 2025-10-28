import React from "react";

const AboutHeroSection = () => {
  return (
    <section className={"relative h-100 bg-gray-900"}>
      <img
        src={"/about/chapel-hero.jpg"}
        alt={"Mead Memorial Chapel"}
        className={"absolute inset-0 w-full h-full object-cover opacity-70"}
      />
      <div className={"relative z-10 flex items-center justify-center h-full"}>
        <h1 className={"text-4xl md:text-5xl font-bold text-white sm:text-left text-center"}>
          About Mead Memorial Chapel
        </h1>
      </div>
    </section>
  );
};

export default AboutHeroSection;