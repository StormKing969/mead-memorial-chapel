import React from "react";
import {Link} from "react-router";

const TimelinePreview = () => {
  return (
    <section className="py-16 px-6 md:px-25">
      <h2 className="text-3xl font-bold mb-8 text-center">Lawsuit Timeline</h2>

      <div className="space-y-6">
        <div className="border-l-4 border-gray-900 pl-4">
          <p className="text-sm text-gray-500">Jan 20, 2023</p>
          <h3 className="font-semibold">Lawsuit Filed</h3>
          <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">
            Filing
          </span>
        </div>

        <div className="border-l-4 border-gray-900 pl-4">
          <p className="text-sm text-gray-500">Apr 10, 2023</p>
          <h3 className="font-semibold">Court Hearing</h3>
          <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">
            Hearing
          </span>
        </div>

        <div className="border-l-4 border-gray-900 pl-4">
          <p className="text-sm text-gray-500">Jun 15, 2023</p>
          <h3 className="font-semibold">Appeal Filed</h3>
          <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">
            Appeal
          </span>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/timeline"
          className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700"
        >
          View Full Timeline
        </Link>
      </div>
    </section>
  );
};

export default TimelinePreview;