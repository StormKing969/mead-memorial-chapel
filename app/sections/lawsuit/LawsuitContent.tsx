import React from "react";
import {
  AllegationList,
  CurrentOutcome,
  DefenseList,
  InvolvedParties,
  LawsuitPageBackgroundContent,
  LawsuitSection,
  TimelineEvents,
} from "../../../constants/lawsuit";
import LawsuitTimelineCard from "~/components/LawsuitTimelineCard";
import { Link } from "react-router";

const LawsuitContent = () => {
  return (
    <section className={"flex max-w-7xl mx-auto mt-8 mb-20 px-4 gap-8"}>
      <aside
        className={
          "w-72 min-w-60 max-w-xs bg-white border border-gray-100 rounded-lg py-8 px-4 mr-4 self-start sticky top-32 shadow-sm hidden md:block"
        }
      >
        <nav className={"space-y-6"}>
          {LawsuitSection.map((section, i) => (
            <Link
              key={i}
              to={`${section.link}`}
              className={
                "block px-2 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition font-medium text-lg"
              }
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </aside>

      <main className={"flex-1 min-w-0"}>
        <section
          id={"context"}
          className={
            "bg-white rounded-xl shadow-md px-8 py-10 mb-12 border border-gray-100"
          }
        >
          <h2 className={"text-3xl font-extrabold mb-4 text-gray-900"}>
            Context
          </h2>
          <p className={"text-lg text-gray-800 leading-relaxed"}>
            {LawsuitPageBackgroundContent}
          </p>
        </section>

        <section
          id={"timeline"}
          className={
            "bg-gray-50 rounded-xl shadow-sm px-8 py-10 mb-12 border border-gray-100"
          }
        >
          <h2 className={"text-3xl font-extrabold mb-4 text-gray-900"}>
            Legal Timeline
          </h2>
          <div className={"relative"}>
            <div
              className={"pointer-events-none absolute top-0 bottom-0 left-1/2"}
            >
              <div className={"py-4 w-1 h-full bg-slate-200 rounded"} />
            </div>

            <div className={"no-scrollbar flex items-start overflow-y-auto"}>
              <ul
                className={
                  "flex flex-col items-center gap-6 w-full max-h-[450px] relative"
                }
              >
                {TimelineEvents.map((ev, i) => {
                  const left = i % 2 === 0;
                  return (
                    <li
                      key={ev.date + i}
                      className={
                        "relative flex flex-col items-center justify-start"
                      }
                    >
                      <span
                        className={
                          "absolute left-[51%] -translate-x-1/2 top-1/2 w-4 h-4 bg-white border-4 border-indigo-600 rounded-full z-10"
                        }
                        aria-hidden="true"
                      />
                      <div
                        className={`transform ${left ? "-translate-x-50 md:-translate-x-50" : "translate-x-50 md:translate-x-50"}`}
                      >
                        <LawsuitTimelineCard event={ev} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section
          id={"parties"}
          className={
            "bg-white rounded-xl shadow-md px-8 py-10 mb-12 border border-gray-100"
          }
        >
          <h2 className={"text-3xl font-extrabold mb-4 text-gray-900"}>
            Key Parties Involved
          </h2>

          <table>
            <tbody className={"divide-y divide-gray-200"}>
              {InvolvedParties.map((ev, i) => (
                <tr key={i} className={"h-[75px]"}>
                  <td className={"font-bold"}>{ev.title}</td>
                  <td>{ev.people}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section
          id={"allegations"}
          className={
            "bg-gray-50 rounded-xl shadow-sm px-8 py-10 mb-12 border border-gray-100"
          }
        >
          <h2 className={"text-3xl font-extrabold mb-4 text-gray-900"}>
            Allegations
          </h2>
          <ul className={"list-disc pl-6 space-y-2 text-lg text-gray-800"}>
            {AllegationList.map((ev, i) => (
              <li key={i}>{ev}</li>
            ))}
          </ul>
        </section>

        <section
          id={"defense"}
          className={
            "bg-white rounded-xl shadow-md px-8 py-10 mb-12 border border-gray-100"
          }
        >
          <h2 className={"text-3xl font-extrabold mb-4 text-gray-900"}>
            Defense
          </h2>
          <ul className={"list-disc pl-6 space-y-2 text-lg text-gray-800"}>
            {DefenseList.map((ev, i) => (
              <li key={i}>{ev}</li>
            ))}
          </ul>
        </section>

        <section
          id={"outcome"}
          className={
            "bg-gray-50 rounded-xl shadow-sm px-8 py-10 border border-gray-100 mb-8"
          }
        >
          <h2 className={"text-3xl font-extrabold mb-4 text-gray-900"}>
            Outcome
          </h2>
          <p className={"text-lg text-gray-800 leading-relaxed"}>
            {CurrentOutcome}
          </p>
        </section>

        <section></section>
      </main>
    </section>
  );
};

export default LawsuitContent;