import React from "react";
import type { Route } from "../+types/root";
import Navbar from "~/components/Navbar";
import LawsuitHeader from "~/sections/lawsuit/LawsuitHeader";
import LawsuitContent from "~/sections/lawsuit/LawsuitContent";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mead Memorial Chapel - Lawsuit Page" },
        { name: "description", content: "Mead Memorial Chapel - Lawsuit Page" },
    ];
}

const Lawsuit = () => {
  return (
    <main className={"font-serif"}>
      <Navbar user={null} />
      <LawsuitHeader />
      <LawsuitContent />
    </main>
  );
};

export default Lawsuit;