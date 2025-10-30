import React from "react";
import type { Post } from "../../../types/post";
import { deletePostById } from "~/lib/firebase";
import { useNavigate } from "react-router";

const ArticlePage = ({
  post: { id, title, createdAt, imageUrl, content, authorName },
}: {
  post: Post;
}) => {
  const navigate = useNavigate();

  console.log(id);

  return (
    <article
      className={
        "max-w-3xl mx-6 md:mx-auto p-6 my-16 bg-white shadow-lg rounded-lg"
      }
    >
      <div className={"flex justify-between items-center mb-5"}>
        <div
          className={
            "border-2 border-gray-500 bg-neutral-300 rounded-sm p-1 hover:cursor-pointer hover:scale-110 transition duration-200"
          }
          onClick={() => navigate("/news")}
        >
          <img
            src={"/back-arrow.png"}
            alt={"back-arrow"}
            className={"w-5 h-5 object-contain"}
          />
        </div>

        <div
          className={
            "border-2 border-gray-500 bg-neutral-300 rounded-sm p-1 hover:cursor-pointer hover:scale-110 transition duration-200"
          }
          onClick={() => {
            deletePostById(id).finally(() => {
              navigate("/news");
            });
          }}
        >
          <img
            src={"/delete.png"}
            alt={"delete icon"}
            className={"w-5 h-5 object-contain"}
          />
        </div>
      </div>

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
            className={
              "object-contain w-full h-full rounded max-w-[650px] max-h-[500px]}"
            }
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