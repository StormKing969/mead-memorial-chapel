import React from "react";
import { Link, useLocation } from "react-router";

const CreateNewsLinkCard = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Link
      to={`${currentPath === "/eugenics" ? "/create-eugenics-article" : "/create-news-post"}`}
      className={
        "flex items-center justify-center md:py-15 bg-white shadow-md rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
      }
    >
      <img
        src={"/news/plus-icon.png"}
        alt={"plus icon"}
        className={"object-contain size-2/5"}
      />
    </Link>
  );
};

export default CreateNewsLinkCard;