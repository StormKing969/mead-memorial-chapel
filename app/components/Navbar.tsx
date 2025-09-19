import React from "react";
import type { User } from "@firebase/auth";
import {Link, useLocation, useParams} from "react-router";
import { authFunctions } from "~/lib/firebase";

const Navbar = ({ user }: { user: User | null }) => {
  const { logoutFunction } = authFunctions();
  const { id } = useParams<{ id: string }>();
  const currentUrl = useLocation();

  return (
    <section
      className={
        "w-full bg-gray-50 shadow-md flex items-center justify-between py-4 px-8"
      }
    >
      <Link to={"/"} className={"flex flex-row items-center gap-4"}>
        <img src={"/logo.svg"} alt={"logo"} className={"size-1/12"} />
        <h3 className={"text-xl font-bold text-blue-400"}>
          Mead Memorial Chapel
        </h3>
      </Link>

      <div className={`${user ? "visible" : "hidden"} flex flex-row gap-5`}>
        <Link
          to={"/create-blog-post"}
          className={
            "bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
          }
        >
          Create Post
        </Link>

        <button
          onClick={() => logoutFunction()}
          className={
            "bg-gray-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700 focus:outline-none"
          }
        >
          Logout
        </button>
      </div>

      <div className={`${id || !currentUrl.pathname.startsWith("/blog") ? "visible" : "hidden"} flex flex-row gap-5`}>
          <Link
              to={"/blog"}
              className={
                  "bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700"
              }
          >
              Blog
          </Link>

          <Link
              to={"/lawsuit"}
              className={
                  "bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700"
              }
          >
              Lawsuit
          </Link>
      </div>
    </section>
  );
};

export default Navbar;