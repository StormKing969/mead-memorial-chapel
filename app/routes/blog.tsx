import React from 'react'
import type {Route} from "../../.react-router/types/app/routes/+types/home";
import BlogList from "~/sections/blog/BlogList";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mead Memorial Chapel Blog" },
        { name: "description", content: "Mead Memorial Chapel Blog" },
    ];
}

const Blog = () => {
    return (
        <main>
            <BlogList />
        </main>
    )
}

export default Blog