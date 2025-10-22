import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const email = "meadmemorialchapel01@gmail.com";
  const subject = encodeURIComponent("Inquiry about Mead Memorial Chapel");
  const body = encodeURIComponent("Hi,\n\nI’d like to ask about...");
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <IconContext.Provider value={{ color: "#155dfc", size: "2em" }}>
      <div
        className={
          "flex flex-col items-center justify-center bg-gray-50 py-6 shadow"
        }
      >
        <div
          className={
            "flex flex-col text-center px-5 md:flex-row md:justify-around md:text-left gap-10 w-full"
          }
        >
          <img src={"/logo.svg"} alt={"logo"} className={"max-h-[200px]"} />

          <div>
            <h3 className={"font-bold text-xl mb-4"}>Quick Links</h3>
            <ul className={"space-y-1"}>
              <li>
                <Link
                  to={"/"}
                  className={
                    "text-blue-600 hover:text-blue-800 hover:font-bold transition-all"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className={
                    "text-blue-600 hover:text-blue-800 hover:font-bold transition-all"
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/lawsuit"}
                  className={
                    "text-blue-600 hover:text-blue-800 hover:font-bold transition-all"
                  }
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  to={"/blog"}
                  className={
                    "text-blue-600 hover:text-blue-800 hover:font-bold transition-all"
                  }
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className={
                    "text-blue-600 hover:text-blue-800 hover:font-bold transition-all"
                  }
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={"https://meadmemorialchapel.com/"}
                  className={
                    "text-blue-600 hover:text-blue-800 hover:font-bold transition-all"
                  }
                >
                  Original Site
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={"font-bold text-xl mb-4"}>Contact Info</h3>
            <a
              href={mailto}
              aria-label={`Email ${email}`}
              className={
                "underline text-blue-600 hover:text-blue-800 hover:font-bold transition-all"
              }
            >
              {email}
            </a>
          </div>

          <div>
            <h3 className={"font-bold text-xl mb-4"}>Follow Us</h3>

            <div
              className={
                "flex flex-row items-center justify-center gap-5 w-full"
              }
            >
              <Link to={"https://x.com/MeadChapelVT"}>
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

        <p
          className={
            "text-sm text-gray-400 mt-5 text-center p-5 md:mt-3 sm:p-0 sm:text-left"
          }
        >
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