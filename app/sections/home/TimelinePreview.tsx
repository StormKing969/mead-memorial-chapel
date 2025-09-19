import React from "react";
import { TimelineEvent } from "../../../constants/lawsuit";
import { Link } from "react-router";

const TimelinePreview = () => {
  return (
    <section className={"py-16 px-6 md:px-20 bg-gray-50"}>
      <h2 className={"text-3xl font-bold text-center mb-4"}>
        Lawsuit Timeline
      </h2>
      <p className={"text-center text-gray-600 mb-10"}>
        Follow the case in chronological order →
      </p>

      <div
        className={
          "flex flex-col md:flex-row justify-center items-start md:items-stretch gap-8 relative"
        }
      >
        {TimelineEvent.map((event, idx) => (
          <div
            key={idx}
            className={
              "bg-white shadow-md rounded-lg p-6 w-full md:w-64 text-center relative"
            }
          >
            <p className={"text-sm text-gray-500"}>{event.date}</p>
            <span
              className={
                "inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs mt-2"
              }
            >
              {event.category}
            </span>
            <h3 className={"font-semibold text-lg mt-3"}>{event.title}</h3>
            <Link
              to={event.link}
              className={"text-blue-600 hover:underline text-sm mt-3 block"}
            >
              {event.linkLabel}
            </Link>
          </div>
        ))}
      </div>

      <div className={"text-center mt-10"}>
        <Link
          to={"/lawsuit"}
          className={
            "bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700"
          }
        >
          View Full Timeline
        </Link>
      </div>
    </section>
  );
};

export default TimelinePreview;