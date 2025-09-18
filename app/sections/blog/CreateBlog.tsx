import React, { useState } from "react";
import { auth, db, useAuth } from "~/lib/firebase";
import { addDoc, collection } from "@firebase/firestore";
import type { CategoryOptions } from "../../../types/post";
import { useNavigate } from "react-router";

const CreateBlog = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [category, setCategory] = useState<CategoryOptions>("General");
  const [imageName, setImageName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      navigate("/auth");
    }

    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US");

    await addDoc(collection(db, "posts"), {
      title,
      content,
      authorID: auth.currentUser?.uid || null,
      createdAt: formattedDate,
      authorName: userName || "Anonymous",
      imageUrl: `/blog/${category}/${imageName}` || "",
    })
      .then(() => {
        setTitle("");
        setContent("");
        setUserName("");
        setCategory("General");
        setImageName("");
      })
      .finally(() => {
        navigate("/blog");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={"max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"}
    >
      <h2 className={"text-2xl font-bold"}>Create Blog Post</h2>
      <input
        type="text"
        placeholder="Title"
        className={"border px-3 py-2 w-full"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        className={"border px-3 py-2 w-full"}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        className={"border px-3 py-2 w-full h-40"}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className={"bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700"}
      >
        Publish
      </button>
    </form>
  );
};

export default CreateBlog;