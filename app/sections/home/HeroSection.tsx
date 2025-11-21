import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section
      className={
        "md:px-25 px-5 p-8 relative bg-gray-900 text-white h-full flex flex-col justify-center items-start text-left"
      }
    >
      <div
        className={
          "absolute inset-0 bg-[url('/home/chapel-hero.jpg')] bg-cover bg-no-repeat bg-center opacity-40"
        }
      ></div>

      <div className={"relative z-10 lg:max-w-1/2"}>
        <div className={"text-4xl md:text-6xl font-bold mb-6 space-y-2"}>
          <h1>Preserving History.</h1>
          <h1>Seeking Justice.</h1>
        </div>

        <div className={"max-w-2xl mb-12 text-lg"}>
          <p>
            This site is dedicated to preserving the legacy of Mead Memorial
            Chapel while promoting transparency and justice throughout the
            ongoing legal proceedings. It serves as the updated iteration of the
            original website, created to support the case currently before the
            Vermont Supreme Court.
          </p>
          <br />
          <p>
            You can view the original site{" "}
            <a
              href={"https://meadmemorialchapel.com/"}
              className={
                "underline font-bold hover:text-blue-400 transition-colors"
              }
            >
              here
            </a>
            , which documents the early efforts and background leading up to
            this new phase.
          </p>
        </div>

        <div className={"flex flex-col text-center w-fit gap-8"}>
          <div className={"space-x-4"}>
            <Link
              to={"/about"}
              className={
                "bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
              }
            >
              Learn More
            </Link>

            <Link
              to={"/lawsuit"}
              className={
                "bg-gray-800 border border-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700"
              }
            >
              View Lawsuit
            </Link>
          </div>

          <Link
            to={"/petition"}
            className={
              "bg-gray-800 border border-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700"
            }
          >
            Support the Cause
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;