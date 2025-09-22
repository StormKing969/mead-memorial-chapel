import React from "react";
import { Link } from "react-router";
import { TimelineEvents } from "../../../constants/lawsuit";
import LawsuitTimelineCard from "~/components/LawsuitTimelineCard";

const LawsuitPreview = () => {
  return (
    <section className={"py-16 px-6 md:px-20 bg-gray-50"}>
      <h2 className={"text-3xl font-bold text-center mb-4"}>Lawsuit</h2>
      <p className={"text-center text-gray-600 mb-10"}>
        Follow the case in chronological order →
      </p>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
          <div className="mx-4 h-1 bg-slate-200 rounded" />
        </div>

        <div className="overflow-x-auto no-scrollbar h-[400px] flex items-center ">
          <ul className="flex items-center gap-6 px-6 py-6" role="list">
            {TimelineEvents.map((ev, i) => {
              const above = i % 2 === 0;
              return (
                <li
                  key={ev.date + i}
                  className="relative flex flex-col items-center"
                >
                  {/* connector node */}
                  <span
                    className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-4 border-indigo-600 rounded-full z-10"
                    aria-hidden="true"
                  />

                  {/* position card above or below */}
                  <div
                    className={`transform ${above ? "-translate-y-20 md:-translate-y-24" : "translate-y-20 md:translate-y-24"}`}
                  >
                    <LawsuitTimelineCard event={ev} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={"text-center mt-10"}>
        <Link
          to={"/lawsuit"}
          className={
            "bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700"
          }
        >
          View The Detailed Lawsuit
        </Link>
      </div>
    </section>
  );
};

export default LawsuitPreview;