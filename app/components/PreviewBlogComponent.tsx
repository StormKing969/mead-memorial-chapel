import React from "react";
import { Link } from "react-router";

const PreviewBlogComponent = ({ post }: { post: number }) => {
  return (
    <div key={post} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={`/blog-${post}.jpg`}
        alt="Blog thumbnail"
        className="h-48 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Blog Post Title {post}</h3>
        <p className="text-gray-600 mb-4">
          A short snippet of the blog post goes here to give readers a preview
          of the content.
        </p>

        <Link to={`/blog/${post}`} className="text-blue-600 font-medium">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default PreviewBlogComponent;