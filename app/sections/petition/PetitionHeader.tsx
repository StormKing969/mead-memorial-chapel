import React from "react";

const PetitionHeader = () => {
  return (
    <section className={"relative h-100 bg-gray-900"}>
      <img
        src={"/about/chapel-hero.jpg"}
        alt={"Mead Memorial Chapel"}
        className={"absolute inset-0 w-full h-full object-cover opacity-50"}
      />
      <div
        className={
          "relative z-10 flex flex-col gap-5 items-center justify-center h-full text-center"
        }
      >
        <h1 className={"text-4xl md:text-5xl font-bold text-white"}>
          Petition to Intervene
        </h1>
        <p className={"font-bold text-white md:max-w-[700px]"}>
          Add your support by signing the petition to intervene in the lawsuit
          to preserve Mead Memorial Chapel.
        </p>
      </div>
    </section>
  );
};

export default PetitionHeader;