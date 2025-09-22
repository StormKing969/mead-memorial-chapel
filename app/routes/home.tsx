import type { Route } from "./+types/home";
import HeroSection from "~/sections/home/HeroSection";
import AboutPreview from "~/sections/home/AboutPreview";
import LatestBlogPosts from "~/sections/home/LatestBlogPosts";
import LawsuitPreview from "~/sections/home/LawsuitPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel" },
    { name: "description", content: "Mead Memorial Chapel Homepage" },
  ];
}

export default function Home() {
  return (
    <main >
        <HeroSection />
        <AboutPreview />
        <LawsuitPreview />
        <LatestBlogPosts />
    </main>
  );
}