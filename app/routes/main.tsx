import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mead Memorial Chapel" },
        { name: "description", content: "Mead Memorial Chapel" },
    ];
}

export default function Main() {
    return (
        <main className={"container"}>35
            <h1>Welcome to React Router!</h1>
        </main>
    );
}