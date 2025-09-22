import React from "react";
import type { TimelineCard } from "../../types/timelinecard";

const LawsuitTimelineCard = ({ event }: { event: TimelineCard }) => {
  return (
    <div className={"bg-white border border-slate-100 rounded-lg p-3 shadow-sm w-64 h-40 min-w-[16rem] my-4 flex flex-col justify-center items-start space-y-2"}>
      <div className={"text-xs font-semibold text-indigo-600"}>{event.date}</div>
      <div className={"mt-1 font-medium text-slate-900 text-sm text-center"}>
        {event.title}
      </div>
      <p className={"mt-2 text-xs text-slate-600 line-clamp-3"}>{event.desc}</p>
    </div>
  );
};

export default LawsuitTimelineCard;