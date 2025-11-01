import React, { useState } from "react";
import type { EugenicsPost } from "../../types/post";
import type { User } from "@firebase/auth";
import { deletePostById, updatePostById } from "~/lib/firebase";

const DetailedEugenicsArticle = ({
  post: { id, title, content, createdAt, documentUrl },
  user,
}: {
  post: EugenicsPost;
  user: User | null;
}) => {
  // Display states
  const [displayTitle, setDisplayTitle] = useState<string>(title);
  const [displayContent, setDisplayContent] = useState<string>(content);
  const [displayDocumentUrl, setDisplayDocumentUrl] =
    useState<string>(documentUrl);
  const [displayCreatedAt, setDisplayCreatedAt] = useState<string>(createdAt);

  // Edit mode states
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formTitle, setFormTitle] = useState<string>(displayTitle);
  const [formContent, setFormContent] = useState<string>(displayContent);
  const [formDocumentInput, setFormDocumentInput] =
    useState<string>(displayDocumentUrl);

  const onSave = async () => {
    const success = await updatePostById(id, "eugenics", {
      title: formTitle,
      content: formContent,
      documentUrl: formDocumentInput,
    });

    if (success) {
      const newDate = new Date().toLocaleDateString("en-US");
      setDisplayTitle(formTitle);
      setDisplayContent(formContent);
      setDisplayDocumentUrl(formDocumentInput);
      setDisplayCreatedAt(newDate);
      setIsEditing(false);
    } else {
      alert("Failed to update the article. Please try again.");
    }
  };

  return (
    <article
      key={id}
      className={
        "bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-3"
      }
    >
      {user && (
        <div className={"flex gap-2 items-center justify-end m-3"}>
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
              deletePostById(id, "eugenics");
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

      {!isEditing ? (
        <div className={"h-full flex flex-col justify-center"}>
          <h1 className={"text-3xl font-bold mb-4"}>{displayTitle}</h1>

          <div className={"my-6 whitespace-pre-line"}>{displayContent}</div>

          <div
            className={
              "text-gray-600 mb-2 flex flex-row justify-between items-center"
            }
          >
            <a href={`${documentUrl}`} className={"underline text-blue-600"} target="_blank" rel="noopener noreferrer">
              Read More
            </a>

            <p>{displayCreatedAt}</p>
          </div>
        </div>
      ) : (
        <div className={"space-y-4"}>
          <input
            type="text"
            className={"border px-3 py-2 w-full"}
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            placeholder="Title"
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
            value={formDocumentInput}
            onChange={(e) => setFormDocumentInput(e.target.value)}
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

export default DetailedEugenicsArticle;