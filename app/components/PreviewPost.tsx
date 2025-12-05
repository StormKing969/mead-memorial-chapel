import React, { useState } from "react";
import { Link } from "react-router";
import type { Post } from "../../types/post";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../audio.css";
import { getGoogleLink } from "~/lib/firebase";

const PreviewPost = async ({
  post: { id, title, content, imageUrl },
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
    <div className={"relative bg-gray-50 rounded-lg shadow-md overflow-hidden"}>
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
          className={"h-48 w-full object-contain overflow-hidden"}
          loading={"lazy"}
        />
      )}

      <div className={"p-6"}>
        <h3 className={"text-xl font-semibold mb-2 capitalize"}>{title}</h3>
        <p className={"text-gray-600 mb-4"}>{content.substring(0, 100)}....</p>
      </div>

      <Link
        to={`/news/${id}`}
        className={
          "text-blue-600 font-medium hover:text-blue-800 hover:underline absolute bottom-2 left-3"
        }
      >
        Read More →
      </Link>
    </div>
  );
};

export default PreviewPost;