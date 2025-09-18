import React from "react";
import { useAuth } from "~/lib/firebase";
import { Link } from "react-router";

const CreateBlogLinkCard = () => {
  const { user } = useAuth();
  const target = user ? "/create-blog-post" : "/auth";

  return (
    <Link
      to={target}
      className={
        "flex items-center justify-center md:py-15 bg-white shadow-md rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
      }
    >
      <img
        src={"/blog/plus-icon.png"}
        alt={"plus icon"}
        className={"object-contain size-2/5"}
      />
    </Link>
  );
};

export default CreateBlogLinkCard;