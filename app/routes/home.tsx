import type { Route } from "./+types/home";
import HeroSection from "~/sections/home/HeroSection";
import AboutPreview from "~/sections/home/AboutPreview";
import LatestBlogPosts from "~/sections/home/LatestBlogPosts";
import TimelinePreview from "~/sections/home/TimelinePreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main >
        <HeroSection />
        <AboutPreview />
        <LatestBlogPosts />
        <TimelinePreview />
    </main>
  );
}