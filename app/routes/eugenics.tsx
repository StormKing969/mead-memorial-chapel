import React from "react";
import type { Route } from "../../.react-router/types/app/+types/root";
import { useAuth } from "~/lib/firebase";
import Navbar from "~/components/Navbar";
import EugenicsPage from "~/sections/eugenics/EugenicsPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - Eugenics" },
    { name: "description", content: "Mead Memorial Chapel - Eugenics" },
  ];
}

const Eugenics = () => {
  const { user } = useAuth();

  return (
    <main className={"font-serif"}>
      <Navbar user={user} />
      <EugenicsPage user={user} />
    </main>
  );
};

export default Eugenics;