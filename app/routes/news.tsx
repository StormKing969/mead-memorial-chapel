import React from "react";
import type { Route } from "../+types/root";
import Navbar from "~/components/Navbar";
import { useAuth } from "~/lib/firebase";
import NewsPage from "~/sections/news/NewsPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - News" },
    { name: "description", content: "Mead Memorial Chapel - News" },
  ];
}

const News = () => {
  const { user } = useAuth();

  return (
    <main className={"font-serif"}>
      <Navbar user={user} />
      <NewsPage user={user} />
    </main>
  );
};

export default News;