import React from "react";
import type { Route } from "../../.react-router/types/app/+types/root";
import CreateEugenicsArticlePost from "~/sections/eugenics/CreateEugenicsArticlePost";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - Create Eugenics Article" },
    {
      name: "description",
      content: "Mead Memorial Chapel - Create Eugenics Article",
    },
  ];
}

const CreateEugenicsArticle = () => {
  return (
    <main className={"font-serif"}>
      <CreateEugenicsArticlePost />
    </main>
  );
};

export default CreateEugenicsArticle;