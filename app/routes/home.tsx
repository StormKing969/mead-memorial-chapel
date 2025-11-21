import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mead Memorial Chapel" },
    { name: "description", content: "Mead Memorial Chapel" },
  ];
}

export default function Home() {
  return (
    <main className={"container"}>
      <h1>Welcome to React Router!</h1>
    </main>
  );
}