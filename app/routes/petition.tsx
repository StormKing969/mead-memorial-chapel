import React from 'react'
import type {Route} from "../../.react-router/types/app/routes/+types/home";
import PetitionHeader from "~/sections/petition/PetitionHeader";
import PetitionContent from "~/sections/petition/PetitionContent";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mead Memorial Chapel - Petition" },
        { name: "description", content: "Mead Memorial Chapel - Petition" },
    ];
}

const Petition = () => {
    return (
        <main>
            <Navbar user={null} />
            <PetitionHeader />
            <PetitionContent />
        </main>
    )
}

export default Petition