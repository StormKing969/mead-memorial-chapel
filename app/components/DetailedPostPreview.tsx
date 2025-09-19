import React from "react";
import type { Post } from "../../types/post";
import { Link } from "react-router";

const DetailedPostPreview = ({
  post: { id, title, content, authorName, createdAt, imageUrl, category },
}: {
  post: Post;
}) => {
  return (
    <article
      key={id}
      className={"bg-white shadow-md rounded-lg overflow-hidden flex flex-col"}
    >
      {/* Image */}

      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${title} thumbnail`}
          className={"h-48 w-full object-cover"}
          loading={"lazy"}
        />
      ) : (
        <img
          src={"/no-image-icon.png"}
          alt={`${title} thumbnail`}
          className={"h-48 w-full object-contain"}
          loading={"lazy"}
        />
      )}

      {/* Content */}
      <div className={"p-6 flex flex-col flex-1"}>
        {/* Meta */}
        <p className={"text-sm text-gray-500 mb-2"}>
          {createdAt} • {category}
        </p>

        {/* Title */}
        <h2 className={"text-xl font-semibold text-gray-900"}>{title}</h2>

        {/* Excerpt */}
        <p className={"text-gray-600 mt-2 line-clamp-3"}>
          {content.substring(0, 100)}....
        </p>

        {/* Read more */}
        <div className={"mt-4 flex flex-row items-center justify-between"}>
          <Link
            to={`/blog/${id}`}
            className={"text-blue-600 hover:underline font-medium"}
          >
            Read More →
          </Link>

          <span className={"text-sm text-gray-500"}>
            By {authorName || "Anonymous"}
          </span>
        </div>
      </div>
    </article>
  );
};

export default DetailedPostPreview;