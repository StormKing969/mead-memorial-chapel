import React from "react";
import type { Route } from "../+types/root";
import Authentication from "~/sections/authentication/Authentication";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel - Authentication" },
    { name: "description", content: "Mead Memorial Chapel - Authentication" },
  ];
}

const Auth = () => {
  return (
    <main className={"font-serif"}>
      <Authentication />
    </main>
  );
};

export default Auth;