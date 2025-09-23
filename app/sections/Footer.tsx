import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "#155dfc", size: "2em" }}>
      <div
        className={"flex flex-col items-center justify-center bg-gray-50 py-6"}
      >
        <div className={"flex flex-col items-center text-center px-5 md:flex-row md:justify-evenly md:text-left gap-10 w-full"}>
          <img src={"/logo.svg"} alt={"logo"} className={"max-h-[200px]"} />

          <div>
            <h3 className={"font-bold text-xl mb-4"}>Quick Links</h3>
            <ul className={"space-y-1"}>
              <li>
                <Link
                  to={"/"}
                  className={"text-blue-600 hover:text-blue-800"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className={"text-blue-600 hover:text-blue-800"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/lawsuit"}
                  className={"text-blue-600 hover:text-blue-800"}
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  to={"/blog"}
                  className={"text-blue-600 hover:text-blue-800"}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className={"text-blue-600 hover:text-blue-800"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={"font-bold text-xl mb-4"}>Contact Info</h3>
            <ul>
              <li>
                <p className={"font-semibold"}>
                  Address:{" "}
                  <span className={"font-normal"}>
                    75 Hepburn Road, Middlebury, VT 05753
                  </span>
                </p>
              </li>
              <li>
                <p className={"font-semibold"}>
                  Email: <span className={"font-normal"}>xxx@gmail.com</span>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={"font-bold text-xl mb-4"}>Follow Us</h3>

            <div
              className={
                "flex flex-row items-center justify-center gap-5 w-full"
              }
            >
              <Link to={"/contact"}>
                <FaTwitter />
              </Link>

              <Link to={"/contact"}>
                <FaInstagram />
              </Link>

              <Link to={"/contact"}>
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>

        <p className={"text-sm text-gray-400 mt-5 text-center p-5 md:mt-3 sm:p-0 sm:text-left"}>
          © 2025 Mead Memorial Chapel | Designed & Built by{" "}
          <a
            href={"https://sajana-wijesinghe-portfolio-v4.netlify.app/"}
            className={"underline text-blue-600 hover:text-blue-800"}
          >
            Sajana Wijesinghe
          </a>
        </p>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;