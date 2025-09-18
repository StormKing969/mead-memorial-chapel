import React, { useEffect, useState } from "react";
import type { Post } from "../../../types/post";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "~/lib/firebase";
import DetailedPostPreview from "~/components/DetailedPostPreview";
import CreateBlogLinkCard from "~/components/CreateBlogLinkCard";

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

    return onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Post[],
      );
    });
  }, []);

  return (
    <section className={"md:px-25 mx-auto h-full py-16 bg-gray-50"}>
      <h1 className={"text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"}>
        Blog
      </h1>

      {posts.length === 0 && (
        <div className={"max-w-xl mx-auto text-center text-gray-600"}>
          No posts yet. Check back soon.
        </div>
      )}

      {/* Grid */}
      <div className={"grid gap-8 md:grid-cols-2 lg:grid-cols-3"}>
        {posts.map((post) => (
          <DetailedPostPreview key={post.id} post={post} />
        ))}

        <CreateBlogLinkCard />
      </div>
    </section>
  );
};

export default BlogPage;