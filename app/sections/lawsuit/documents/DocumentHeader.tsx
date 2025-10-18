import React from "react";

const DocumentHeader = () => {
  return (
    <section className={"bg-white py-10 px-6 md:px-25"}>
      <h1
        className={
          "text-3xl md:text-4xl font-bold mb-2 text-gray-900 tracking-tight"
        }
      >
        Legal Documents
      </h1>
      <p className={"text-lg text-gray-700 w-full"}>
        Explore all legal records related to the Mead Memorial Chapel case.
        Documents are carefully categorized to reflect the structure and claims
        of the ongoing lawsuit, making it easier to locate filings, exhibits,
        and correspondence by topic. Each file can be{" "}
        <b>viewed online or downloaded</b> for offline review.
      </p>
    </section>
  );
};

export default DocumentHeader;