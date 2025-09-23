import React from "react";
import type { User } from "@firebase/auth";
import { Link, useLocation, useParams } from "react-router";
import { authFunctions } from "~/lib/firebase";

const Navbar = ({ user }: { user: User | null }) => {
  const { logoutFunction } = authFunctions();
  const { id } = useParams<{ id: string }>();
  const currentUrl = useLocation();

  return (
    <nav
      className={
        "w-full bg-gray-50 shadow-md border-b border-gray-200 flex items-center justify-between py-4 px-8"
      }
    >
      <Link to={"/"} className={"flex flex-row items-center gap-4"}>
        <img src={"/logo.svg"} alt={"logo"} className={"w-fit h-20"} />
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

      <div className={"flex flex-row gap-5"}>
        <div
          className={`${id || !currentUrl.pathname.startsWith("/about") ? "visible" : "hidden"}`}
        >
          <Link
            to={"/about"}
            className={
              "bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700"
            }
          >
            About
          </Link>
        </div>

        <div
          className={`${id || !currentUrl.pathname.startsWith("/blog") ? "visible" : "hidden"}`}
        >
          <Link
            to={"/blog"}
            className={
              "bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700"
            }
          >
            Blog
          </Link>
        </div>

        <div
          className={`${id || !currentUrl.pathname.startsWith("/lawsuit") || currentUrl.pathname.endsWith("documents") ? "visible" : "hidden"}`}
        >
          <Link
            to={"/lawsuit"}
            className={
              "bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700"
            }
          >
            Lawsuit
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;