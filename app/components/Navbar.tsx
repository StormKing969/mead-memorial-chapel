import React from "react";
import type { User } from "@firebase/auth";
import { Link, useNavigate } from "react-router";
import { authFunctions } from "~/lib/firebase";
import { NavbarLinks } from "../../constants/navbar";

const Navbar = ({ user }: { user: User | null }) => {
  const navigate = useNavigate();
  const { logoutFunction } = authFunctions();

    return (
        <nav
      className={
        "w-full bg-gray-50 shadow-md border-b border-gray-200 flex items-center justify-between py-4 px-8 sticky top-0 z-50"
      }
    >
      <Link to={"/"} className={"flex flex-row items-center gap-4"}>
        <img src={"/logo.svg"} alt={"logo"} className={"w-fit h-20"} />
        <h3 className={"text-xl font-bold text-blue-400"}>
          Mead Memorial Chapel
        </h3>
      </Link>

      <div className={"hidden md:flex md:flex-row items-center gap-4"}>
        {NavbarLinks.map((ele, i) => (
          <div key={i}>
            <Link
              to={ele.url}
              className={
                "text-lg font-semibold text-blue-400 hover:text-blue-700"
              }
            >
              {ele.title}
            </Link>
          </div>
        ))}

        <div className={`${user ? "visible" : "hidden"}`}>
          <button
            className={
              "bg-blue-400 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 focus:outline-none mr-4"
            }
            onClick={() => {
              navigate("/create-blog-post");
            }}
          >
            Create Post
          </button>

          <button
            onClick={() => logoutFunction()}
            className={
              "bg-blue-400 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 focus:outline-none"
            }
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;