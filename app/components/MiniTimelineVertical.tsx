import React from "react";

const MiniTimelineVertical = ({
  year,
  description,
}: {
  year: string;
  description: string;
}) => {
  return (
    <div>
      <div className={"absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] mt-1.5"}></div>
      <time className={"font-semibold"}>{year}</time>
      <p className={"text-gray-700"}>{description}</p>
    </div>
  );
};

export default MiniTimelineVertical;