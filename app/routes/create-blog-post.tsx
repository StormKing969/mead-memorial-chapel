import React from "react";
import type { Route } from "../../.react-router/types/app/routes/+types/home";
import CreateBlog from "~/sections/blog/CreateBlog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - Create Post" },
    { name: "description", content: "Mead Memorial Chapel - Create Post" },
  ];
}

const CreateBlogPost = () => {
  return <CreateBlog />;
};

export default CreateBlogPost;