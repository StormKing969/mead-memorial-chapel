import React from "react";
import Navbar from "~/components/Navbar";
import LawsuitHeader from "~/sections/lawsuit/LawsuitHeader";
import LawsuitContent from "~/sections/lawsuit/LawsuitContent";

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