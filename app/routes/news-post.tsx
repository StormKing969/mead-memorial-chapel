import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPostById } from "~/lib/firebase";
import ArticlePage from "~/sections/article/ArticlePage";
import Navbar from "~/components/Navbar";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - News Post" },
    { name: "description", content: "Mead Memorial Chapel - News Post" },
  ];
}

const NewsPost = () => {
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
      <ArticlePage
        id={post.id}
        title={post.title}
        createdAt={post.createdAt}
        imageUrl={post.imageUrl}
        content={post.content}
        authorName={!(post.authorName.length === 0) ? post.authorName : "Anonymous"}
        category={post.category}
        authorID={post.authorID}
      />
    </main>
  );
};

export default NewsPost;