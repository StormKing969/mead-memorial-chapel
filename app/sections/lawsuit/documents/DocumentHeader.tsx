import React from "react";

const DocumentHeader = () => {
  return (
    <section className={"my-10 px-6 md:px-25"}>
      <h1
        className={
          "text-3xl md:text-4xl font-bold mb-2 text-gray-900 tracking-tight"
        }
      >
        Legal Documents
      </h1>
      <p className={"text-lg text-gray-700 max-w-2xl"}>
        Explore all legal records related to the Mead Memorial Chapel case.
        Documents are grouped by category for convenience. Each file can be {" "}
        <b>viewed online or downloaded</b> for offline review.
      </p>
    </section>
  );
};

export default DocumentHeader;