import React from "react";
import AboutHeroSection from "~/sections/about/AboutHeroSection";
import AboutContent from "~/sections/about/AboutContent";
import Navbar from "~/components/Navbar";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - AboutPage" },
    { name: "description", content: "Mead Memorial Chapel - AboutPage Page" },
  ];
}

const About = () => {
  return (
    <main className={"bg-white font-serif"}>
      <Navbar user={null} />
      <AboutHeroSection />
      <AboutContent />
    </main>
  );
};

export default About;