import React from "react";

const LawsuitHeader = () => {
  return (
    <section className={"bg-gray-50 py-14 px-4 text-center border-b border-gray-200 relative"}>
      <div
        className={
          "absolute inset-0 bg-[url('/home/chapel-hero.jpg')] bg-cover bg-no-repeat bg-center opacity-30"
        }
      ></div>

      <h1 className={"text-5xl font-bold text-gray-800 mb-4 tracking-tight drop-shadow-sm"}>
        Legal Case: Mead Memorial Chapel
      </h1>
      <p className={"text-xl text-gray-700 mt-2 max-w-2xl mx-auto"}>
        Overview of the ongoing litigation over the Mead Memorial Chapel name,
        preserving the legacy and intentions of Governor John Mead amid recent
        institutional actions.
      </p>
    </section>
  );
};

export default LawsuitHeader;