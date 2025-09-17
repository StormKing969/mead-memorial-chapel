import React from "react";
import { Link } from "react-router";
import PreviewBlogComponent from "~/components/PreviewBlogComponent";

const LatestBlogPosts = () => {
  return (
    <section className="py-16 px-6 md:px-25 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((post) => (
          <PreviewBlogComponent post={post} />
        ))}
      </div>
    </section>
  );
};

export default LatestBlogPosts;