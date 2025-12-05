import React, { useState } from "react";
import type { Post } from "../../types/post";
import { Link } from "react-router";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../audio.css";
import { getGoogleLink } from "~/lib/firebase";

const DetailedPostPreview = async ({
  post: { id, title, content, authorName, createdAt, imageUrl, category },
}: {
  post: Post;
}) => {
  const [trueLink, setTrueLink] = useState<string>(imageUrl);

  if (imageUrl.endsWith(".mp3")) {
    const url = await getGoogleLink(
      imageUrl.substring(imageUrl.lastIndexOf("/") + 1),
    );

    if (url) {
      setTrueLink(url);
    }
  }

  return (
    <article
      key={id}
      className={"bg-white shadow-md rounded-lg overflow-hidden flex flex-col"}
    >
      {imageUrl ? (
        imageUrl.endsWith(".mp3") ? (
          <div className={"w-full"}>
            <AudioPlayer autoPlay={false} src={trueLink} />
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={`${title} thumbnail`}
            className={"h-48 w-full object-cover"}
            loading={"lazy"}
          />
        )
      ) : (
        <img
          src={"/no-image-icon.png"}
          alt={`${title} thumbnail`}
          className={"h-48 w-full object-contain"}
          loading={"lazy"}
        />
      )}

      <div className={"p-6 flex flex-col flex-1"}>
        <p className={"text-sm text-gray-500 mb-2"}>
          {createdAt} • {category}
        </p>
        <h2 className={"text-xl font-semibold text-gray-900"}>{title}</h2>
        <p className={"text-gray-600 mt-2 line-clamp-3"}>
          {content.substring(0, 100)}....
        </p>
      </div>

      <div className={"px-2 mb-2 flex flex-row items-center justify-between"}>
        <Link
          to={`/news/${id}`}
          className={
            "text-blue-600 hover:underline hover:text-blue-800 font-medium"
          }
        >
          Read More →
        </Link>

        <span className={"text-sm text-gray-500"}>
          By {authorName || "Anonymous"}
        </span>
      </div>
    </article>
  );
};

export default DetailedPostPreview;