import React, { useEffect, useState } from "react";
import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { useParams } from "react-router";
import { getPostById } from "~/lib/firebase";
import ArticlePage from "~/sections/article/ArticlePage";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - News Post" },
    { name: "description", content: "Mead Memorial Chapel - News Post" },
  ];
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    getPostById(id).then((res) => {
      setPost(res);
    });
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <main className={"font-serif"}>
        <Navbar user={null} />
        <ArticlePage post={post} />
    </main>
  );
};

export default BlogPost;