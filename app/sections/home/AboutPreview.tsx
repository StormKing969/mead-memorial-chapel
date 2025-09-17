import React from "react";
import {Link} from "react-router";

const AboutPreview = () => {
  return (
    <section className="py-16 px-6 md:px-25 grid md:grid-cols-2 gap-10 items-center">
      <img
        src="/home/chapel-aboutPreview.jpg"
        alt="Mead Memorial Chapel"
        className="rounded-lg shadow-lg h-[400px] w-full object-cover"
      />

      <div>
        <h2 className="text-3xl font-bold mb-4">About Mead Memorial Chapel</h2>
        <p className="text-gray-700 mb-6">
          The Mead Memorial Chapel has stood as a symbol of community and
          history for generations. Learn about its origins, its cultural
          significance, and the ongoing lawsuit that will shape its future.
        </p>

        <Link
          to="/about"
          className="bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-gray-700"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;