import React from "react";
import { getCurrentBlogPosts } from "~/lib/firebase";
import DetailedPostPreview from "~/components/DetailedPostPreview";
import CreateBlogLinkCard from "~/components/CreateBlogLinkCard";
import type { User } from "@firebase/auth";

const BlogPage = ({ user }: { user: User | null }) => {
  const posts = getCurrentBlogPosts();

  return (
    <section className={"md:px-25 mx-auto h-full py-16 bg-white"}>
      <h1
        className={
          "text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        }
      >
        Latest News
      </h1>

      {posts.length === 0 && (
        <div className={"max-w-xl mx-auto text-center text-gray-600"}>
          No news posts yet. Check back soon.
        </div>
      )}

      <div className={"grid gap-8 md:grid-cols-2 lg:grid-cols-3"}>
        {posts.map((post) => (
          <DetailedPostPreview key={post.id} post={post} />
        ))}

        {user && <CreateBlogLinkCard />}
      </div>
    </section>
  );
};

export default BlogPage;