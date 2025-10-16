import React from "react";
import HeroSection from "~/sections/home/HeroSection";
import AboutPreview from "~/sections/home/AboutPreview";
import LawsuitPreview from "~/sections/home/LawsuitPreview";
import LatestBlogPosts from "~/sections/home/LatestBlogPosts";

const Main = () => {
  return (
    <main className={"font-serif"}>
      <HeroSection />
      <AboutPreview />
      {/*<MessageSection />*/}
      <LawsuitPreview />
      <LatestBlogPosts />
    </main>
  );
};

export default Main;