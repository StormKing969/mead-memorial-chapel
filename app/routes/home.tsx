import type { Route } from "./+types/home";
import { Link } from "react-router";
import React from "react";
import { getPetitionListCount } from "~/lib/firebase";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel" },
    { name: "description", content: "Mead Memorial Chapel Homepage" },
  ];
}

export default function Home() {
  const count = getPetitionListCount();

  return (
    <main className={"font-serif"}>
      <section
        className={
          "md:px-25 px-5 relative bg-gray-900 text-white h-[50vh] flex flex-col justify-center items-start text-left"
        }
      >
        <div
          className={
            "absolute inset-0 bg-[url('/home/chapel-hero.jpg')] bg-cover bg-no-repeat bg-center opacity-40"
          }
        ></div>

        <div
          className={
            "relative z-10 flex flex-col items-center justify-center text-center"
          }
        >
          <div className={"text-4xl md:text-6xl font-bold mb-6 space-y-2"}>
            <h1>Restore the Mead Name to Mead Memorial Chapel</h1>
          </div>

          <div className={"mb-8 text-lg"}>
            <p>Ensure respect for due process and intellectual diversity</p>
          </div>

          <div className={"text-center"}>
            <p>
                <span className={"font-bold text-2xl"}>{count} signatures</span> in support.{" "}
                <Link
                    to={"/petition"}
                    className={
                        "font-semibold underline hover:text-blue-400 transition-colors"
                    }
                >
                    Add yours to the petition
                </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        className={
          "md:px-25 px-5 py-15 bg-gray-100 flex flex-col justify-center"
        }
      >
        <article>
          <h1 className={"text-center text-4xl font-bold"}>
            A Message from the Family
          </h1>
          <br />
          <p>
            In the fall of 2021, Middlebury College abruptly removed the Mead
            family name from the Memorial Chapel that Governor John Mead built
            to honor his ancestors. Many of us have been quite upset ever since.
            It’s wrong on many fronts: the Governor conditioned his gift on
            using the name, the College has reaped enormous benefits from the
            Chapel for more than a century and the cancel culture that led to
            this act needs to be challenged. Erasure of Governor Mead’s legacy,
            based on some remarks in a 1912 speech, is directly contrary to the
            College’s policy on free expression and its professed tolerance for
            views that are controversial. Indeed, it conflicts with the very
            purpose of an institution of higher learning, which is to seek
            knowledge and pursue the truth.
          </p>
          <br />
          <p>
            Accordingly, the Governor’s estate has filed a complaint in Superior
            Court seeking justice from the College. The family has graciously
            asked me to serve as Administrator for this matter and I am honored
            to assume that responsibility. I’m confident that a jury, upon
            examining all the evidence, will recognize the unfairness of what
            has happened. I’ll sleep better knowing that I’ve done what I can to
            restore the good name of a generous alumnus and dedicated public
            servant.
          </p>
          <br />
          <p>
            We look forward to sharing information on this website as it becomes
            available. We hope that you'll let the College's Trustees and the
            media know how you feel.
          </p>
          <br />
          <p>Jim Douglas</p>
          <p>Special Administrator</p>
          <p>Estate of Governor John Mead</p>
        </article>

        <Button
          className={
            "m-auto mt-8 px-6 py-3 font-semibold bg-gray-800 hover:bg-gray-700"
          }
        >
          <Link to={"/main"}>Learn More</Link>
        </Button>
      </section>
    </main>
  );
}