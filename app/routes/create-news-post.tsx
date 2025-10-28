import React from "react";
import type { Route } from "../+types/root";
import CreateArticle from "~/sections/news/CreateArticle";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - Create News Post" },
    { name: "description", content: "Mead Memorial Chapel - Create News Post" },
  ];
}

const CreateNewsPost = () => {
  return (
    <main className={"font-serif"}>
      <CreateArticle />
    </main>
  );
};

export default CreateNewsPost;