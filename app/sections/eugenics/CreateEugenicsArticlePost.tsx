import React, { useState } from "react";
import { db, useAuth } from "~/lib/firebase";
import { addDoc, collection, doc } from "@firebase/firestore";
import { useNavigate } from "react-router";

const CreateEugenicsArticlePost = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [documentUrl, setDocumentUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      navigate("/auth");
    }

    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US");

    const newId = doc(collection(db, "posts")).id;

    await addDoc(collection(db, "eugenics"), {
      id: newId,
      title,
      content,
      createdAt: formattedDate,
      documentUrl: documentUrl,
    })
      .then(() => {
        setTitle("");
        setContent("");
        setDocumentUrl("");
      })
      .finally(() => {
        navigate("/eugenics");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "max-w-[750px] mx-auto my-16 bg-white shadow-md rounded-lg px-24 py-16"
      }
    >
      <h2 className={"text-2xl font-bold mb-8"}>Create Eugenics Article</h2>

      <div className={"space-y-4 flex flex-col"}>
        <input
          type="text"
          placeholder="Title"
          className={"border px-3 py-2 w-full"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Content"
          className={"border px-3 py-2 w-full h-40"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Document Link"
          className={"border p-3 w-full h-full"}
          value={documentUrl}
          onChange={(e) => setDocumentUrl(e.target.value)}
          required
        />

        <button
          type="submit"
          className={
            "bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700"
          }
        >
          Publish
        </button>
      </div>
    </form>
  );
};

export default CreateEugenicsArticlePost;