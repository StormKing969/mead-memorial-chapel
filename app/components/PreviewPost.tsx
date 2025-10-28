import React from "react";
import { Link } from "react-router";
import type { Post } from "../../types/post";

const PreviewPost = ({
  post: { id, title, content, imageUrl },
}: {
  post: Post;
}) => {
  return (
    <div className={"bg-gray-50 rounded-lg shadow-md overflow-hidden"}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${title} thumbnail`}
          className={"h-48 w-full object-cover"}
        />
      ) : (
        <img
          src={"/no-image-icon.png"}
          alt={`${title} thumbnail`}
          className={"h-48 w-full object-contain"}
        />
      )}

      <div className={"p-6"}>
        <h3 className={"text-xl font-semibold mb-2 capitalize"}>{title}</h3>
        <p className={"text-gray-600 mb-4"}>{content.substring(0, 100)}....</p>

        <Link to={`/news/${id}`} className={"text-blue-600 font-medium hover:text-blue-800 hover:underline"}>
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default PreviewPost;