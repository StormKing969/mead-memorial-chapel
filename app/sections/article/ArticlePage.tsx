import React from "react";
import type { Post } from "../../../types/post";

const ArticlePage = ({
  post: { title, createdAt, imageUrl, content, authorName },
}: {
  post: Post;
}) => {
  return (
    <article
      className={"max-w-3xl mx-6 md:mx-auto p-6 my-16 bg-white shadow-lg rounded-lg"}
    >
      <h1 className={"text-3xl font-bold"}>{title}</h1>
      <p className={"text-gray-600 mb-4 mt-2"}>Published on {createdAt}</p>
      <div className={"flex flex-col justify-center items-center"}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} image`}
            className={"object-contain w-full h-full rounded max-w-[650px]"}
          />
        ) : (
          <img
            src={"/no-image-icon.png"}
            alt={`${title} thumbnail`}
            className={"object-contain w-full h-full rounded max-w-[650px] max-h-[500px]}"}
          />
        )}
      </div>

      <div className={"my-6 whitespace-pre-line"}>{content}</div>

      <p
        className={"text-gray-600 mb-2 flex flex-row justify-end items-center"}
      >
        By {authorName}
      </p>
    </article>
  );
};

export default ArticlePage;