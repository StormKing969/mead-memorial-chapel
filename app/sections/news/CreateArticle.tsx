import React, { useState } from "react";
import { auth, db, useAuth } from "~/lib/firebase";
import { addDoc, collection, doc } from "@firebase/firestore";
import type { CategoryOptionsType } from "../../../types/post";
import { useNavigate } from "react-router";

export const CategoriesOptions = [
  "Lawsuit",
  "General",
  "Events",
  "Announcements",
  "Community",
];

const CreateArticle = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [category, setCategory] = useState<CategoryOptionsType>("General");
  const [imageName, setImageName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      navigate("/auth");
    }

    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US");

    if (
      imageName.length !== 0 &&
      !imageName.endsWith(".jpg") &&
      !imageName.endsWith(".png") &&
      !imageName.endsWith(".svg")
    ) {
      alert("Image name must end with .jpg, .png, or .svg");
      return;
    }

    let imgUrl: string;
    if (imageName.length === 0) {
      imgUrl = "";
    } else if (imageName.startsWith("https://")) {
      imgUrl = imageName;
    } else {
      imgUrl = "/news/" + category.toLowerCase() + "/" + imageName;
    }

    if (userName.length === 0) {
      setUserName("Anonymous");
    }

    const newId = doc(collection(db, "posts")).id;

    await addDoc(collection(db, "posts"), {
      id: newId,
      title,
      content,
      authorID: auth.currentUser?.uid || null,
      createdAt: formattedDate,
      authorName: userName,
      category: category,
      imageUrl: imgUrl,
    })
      .then(() => {
        setTitle("");
        setContent("");
        setUserName("");
        setCategory("General");
        setImageName("");
      })
      .finally(() => {
        navigate("/news");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "max-w-[750px] mx-auto my-16 bg-white shadow-md rounded-lg px-24 py-16"
      }
    >
      <h2 className={"text-2xl font-bold mb-8"}>Create News Post</h2>

      <div className={"space-y-4 flex flex-col"}>
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
          placeholder="Written By Name"
          className={"border px-3 py-2 w-full"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <textarea
          placeholder="Content"
          className={"border px-3 py-2 w-full h-40"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <div className={"flex flex-row items-center justify-between gap-5"}>
          <select
            className={"w-fit bg-gray-50 p-3 border"}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value as CategoryOptionsType);
            }}
            required
          >
            {CategoriesOptions.map((ele, index) => (
              <option key={index} value={ele}>
                {ele}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Image Name (with extension)"
            className={"border p-3 w-fit h-full"}
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
          />
        </div>

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

export default CreateArticle;