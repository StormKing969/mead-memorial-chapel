import React from "react";
import HeroSection from "~/sections/home/HeroSection";
import AboutPreview from "~/sections/home/AboutPreview";
import LawsuitPreview from "~/sections/home/LawsuitPreview";
import LatestBlogPosts from "~/sections/home/LatestBlogPosts";
import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mead Memorial Chapel - Main Page" },
        { name: "description", content: "Mead Memorial Chapel - Main Page" },
    ];
}

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