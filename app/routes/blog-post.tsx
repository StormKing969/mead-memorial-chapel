import React, { useEffect, useState } from "react";
import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { useParams } from "react-router";
import { getPostById } from "~/lib/firebase";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - Create Post" },
    { name: "description", content: "Mead Memorial Chapel - Create Post" },
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

  console.log(post);

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} className="mb-4 rounded" />
      <p className="text-gray-600 mb-2">
        By {post.authorName} • {post.createdAt}
      </p>
      <div className="prose">{post.content}</div>
    </article>
  );
};

export default BlogPost;