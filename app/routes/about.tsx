import React from "react";
import type { Route } from "../../.react-router/types/app/routes/+types/home";
import AboutHeroSection from "~/sections/about/AboutHeroSection";
import AboutContent from "~/sections/about/AboutContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - AboutPage" },
    { name: "description", content: "Mead Memorial Chapel - AboutPage Page" },
  ];
}

const About = () => {
  return (
    <main className={"bg-white"}>
      <AboutHeroSection />
      <AboutContent />
    </main>
  );
};

export default About;