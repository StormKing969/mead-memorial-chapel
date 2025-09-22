import React from "react";
import Navbar from "~/components/Navbar";
import LawsuitHeader from "~/sections/lawsuit/LawsuitHeader";
import LawsuitContent from "~/sections/lawsuit/LawsuitContent";
import Temp from "~/sections/lawsuit/Temp";

const Lawsuit = () => {
  return (
    <main>
      <Navbar user={null} />
      <LawsuitHeader />
      <LawsuitContent />
        <Temp />
    </main>
  );
};

export default Lawsuit;