import type { Route } from "./+types/home";
import HeroSection from "~/sections/home/HeroSection";
import AboutPreview from "~/sections/home/AboutPreview";
import LatestBlogPosts from "~/sections/home/LatestBlogPosts";
import TimelinePreview from "~/sections/home/TimelinePreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel" },
    { name: "description", content: "Mead Memorial Chapel located in Vermont" },
  ];
}

export default function Home() {
  return (
    <main >
        <HeroSection />
        <AboutPreview />
        <TimelinePreview />
        <LatestBlogPosts />
    </main>
  );
}