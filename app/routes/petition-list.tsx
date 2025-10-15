import React from 'react'
import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mead Memorial Chapel - Petition List" },
        { name: "description", content: "Mead Memorial Chapel - Petition List" },
    ];
}

const PetitionList = () => {
    return (
        <div>PetitionList</div>
    )
}

export default PetitionList