import React, { useState } from "react";
import { serverTimestamp } from "@firebase/database";
import { auth, db } from "~/lib/firebase";
import { addDoc, collection } from "@firebase/firestore";

const CreateBlog = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert("You must be logged in to create a post.");
      return;
    }

    await addDoc(collection(db, "posts"), {
      title,
      content,
      author: auth.currentUser.email,
      createdAt: serverTimestamp(),
    });

    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold">Create Blog Post</h2>
      <input
        type="text"
        placeholder="Title"
        className="border px-3 py-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        className="border px-3 py-2 w-full h-40"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700"
      >
        Publish
      </button>
    </form>
  );
};

export default CreateBlog;