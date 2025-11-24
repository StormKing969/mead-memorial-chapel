import React, { useState } from "react";
import type { Post } from "../../../types/post";
import { deletePostById, updatePostById, useAuth } from "~/lib/firebase";
import { useNavigate } from "react-router";
import Linkify from "linkify-react";

const ArticlePage = ({
  post: { id, title, createdAt, imageUrl, content, authorName, category },
}: {
  post: Post;
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Display states
  const [displayTitle, setDisplayTitle] = useState<string>(title);
  const [displayContent, setDisplayContent] = useState<string>(content);
  const [displayAuthorName, setDisplayAuthorName] =
    useState<string>(authorName);
  const [displayImageUrl, setDisplayImageUrl] = useState<string>(imageUrl);
  const [displayCreatedAt, setDisplayCreatedAt] = useState<string | undefined>(
    createdAt,
  );

  // Edit mode states
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formTitle, setFormTitle] = useState<string>(displayTitle);
  const [formContent, setFormContent] = useState<string>(displayContent);
  const [formAuthorName, setFormAuthorName] =
    useState<string>(displayAuthorName);
  const [formImageInput, setFormImageInput] = useState<string>(displayImageUrl);

  const computeImageUrl = (input: string) => {
    if (!input || input.length === 0) return "";
    if (input.startsWith("https://")) return input;
    return "/news/" + category.toLowerCase() + "/" + input;
  };

  const validateImageInput = (input: string) => {
    if (!input || input.length === 0) return true;
    if (input.startsWith("https://")) return true;
    return (
      input.endsWith(".jpg") || input.endsWith(".png") || input.endsWith(".svg")
    );
  };

  const onSave = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }

    if (!validateImageInput(formImageInput)) {
      alert("Image name must end with .jpg, .png, or .svg");
      return;
    }

    const finalImageUrl = computeImageUrl(formImageInput || "");

    const success = await updatePostById(id, {
      title: formTitle,
      content: formContent,
      authorName: formAuthorName,
      imageUrl: finalImageUrl,
    });

    if (success) {
      const newDate = new Date().toLocaleDateString("en-US");
      setDisplayTitle(formTitle);
      setDisplayContent(formContent);
      setDisplayAuthorName(formAuthorName);
      setDisplayImageUrl(finalImageUrl);
      setDisplayCreatedAt(newDate);
      setIsEditing(false);
    } else {
      alert("Failed to update the article. Please try again.");
    }
  };

  const linkifyOptions = {
    className: "text-sky-500 hover:text-sky-700 transition-colors",
    target: "_blank",
    rel: "noopener noreferrer",
  };

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

        {user && (
          <div className={"flex gap-2 items-center"}>
            <button
              className={
                "border-2 border-gray-500 bg-neutral-300 rounded-sm px-2 py-1 hover:cursor-pointer hover:scale-110 transition duration-200"
              }
              onClick={() => setIsEditing((prev) => !prev)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>

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
        )}
      </div>

      {!isEditing ? (
        <>
          <h1 className={"text-3xl font-bold"}>{displayTitle}</h1>
          <p className={"text-gray-600 mb-4 mt-2"}>
            Published on {displayCreatedAt}
          </p>
          <div className={"flex flex-col justify-center items-center"}>
            {displayImageUrl ? (
              <img
                src={displayImageUrl}
                alt={`${displayTitle} image`}
                className={"object-contain w-full h-full rounded max-w-[650px]"}
              />
            ) : (
              <img
                src={"/no-image-icon.png"}
                alt={`${displayTitle} thumbnail`}
                className={
                  "object-contain w-full h-full rounded max-w-[650px] max-h-[500px]}"
                }
              />
            )}
          </div>

          <Linkify options={linkifyOptions}>
            <div className={"my-6 whitespace-pre-line break-words text-pretty"}>
              {displayContent}
            </div>
          </Linkify>

          <p
            className={
              "text-gray-600 mb-2 flex flex-row justify-end items-center"
            }
          >
            By {displayAuthorName}
          </p>
        </>
      ) : (
        <div className={"space-y-4"}>
          <input
            type="text"
            className={"border px-3 py-2 w-full"}
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            className={"border px-3 py-2 w-full"}
            value={formAuthorName}
            onChange={(e) => setFormAuthorName(e.target.value)}
            placeholder="Author name"
          />
          <textarea
            className={"border px-3 py-2 w-full h-40"}
            value={formContent}
            onChange={(e) => setFormContent(e.target.value)}
            placeholder="Content"
          />
          <input
            type="text"
            className={"border px-3 py-2 w-full"}
            value={formImageInput}
            onChange={(e) => setFormImageInput(e.target.value)}
            placeholder="Image URL or filename (with extension)"
          />

          <div className={"flex gap-3"}>
            <button
              className={
                "bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700"
              }
              onClick={onSave}
            >
              Save
            </button>
            <button
              className={"border px-6 py-2 rounded hover:bg-gray-100"}
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default ArticlePage;