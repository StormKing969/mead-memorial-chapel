import React from "react";
import Navbar from "~/components/Navbar";
import DocumentHeader from "~/sections/lawsuit/documents/DocumentHeader";
import DocumentContent from "~/sections/lawsuit/documents/DocumentContent";

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