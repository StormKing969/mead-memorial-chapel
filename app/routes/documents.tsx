import React from "react";
import Navbar from "~/components/Navbar";
import DocumentHeader from "~/sections/lawsuit/documents/DocumentHeader";
import DocumentContent from "~/sections/lawsuit/documents/DocumentContent";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mead Memorial Chapel - Legal Documents" },
        { name: "description", content: "Mead Memorial Chapel - Legal Documents" },
    ];
}

const Documents = () => {
  return (
    <main className={"font-serif min-h-[80vh] h-full bg-white"}>
      <Navbar user={null} />
      <DocumentHeader />
      <DocumentContent />
    </main>
  );
};

export default Documents;