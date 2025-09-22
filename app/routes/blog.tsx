import React from "react";
import type { Route } from "../../.react-router/types/app/routes/+types/home";
import BlogPage from "~/sections/blog/BlogPage";
import Navbar from "~/components/Navbar";
import { useAuth } from "~/lib/firebase";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - Blog" },
    { name: "description", content: "Mead Memorial Chapel - Blog" },
  ];
}

const Blog = () => {
  const { user } = useAuth();

  return (
    <main className={"font-serif"}>
      <Navbar user={user} />
      <BlogPage user={user} />
    </main>
  );
};

export default Blog;