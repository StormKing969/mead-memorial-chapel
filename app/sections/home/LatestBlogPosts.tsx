import React from "react";
import PreviewPost from "~/components/PreviewPost";
import { Link } from "react-router";
import {getCurrentBlogPosts} from "~/lib/firebase";

const LatestBlogPosts = () => {
    const posts = getCurrentBlogPosts();

  return (
    <section className={"py-16 px-6 md:px-25 bg-gray-50"}>
      <h2 className={"text-3xl font-bold mb-8 text-center"}>
        Latest Blog Posts
      </h2>

      <div className={"grid md:grid-cols-3 gap-8"}>
        {posts.map((post) => (
          <PreviewPost key={post.id} post={post} />
        ))}
      </div>

      <div className={"text-center mt-10"}>
        <Link
          to={"/blog"}
          className={
            "bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700"
          }
        >
          See All Posts
        </Link>
      </div>
    </section>
  );
};

export default LatestBlogPosts;