import React from 'react'
import type {Route} from "../../.react-router/types/app/routes/+types/home";
import BlogPage from "~/sections/blog/BlogPage";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mead Memorial Chapel - Blog" },
        { name: "description", content: "Mead Memorial Chapel - Blog" },
    ];
}

const Blog = () => {
    return (
        <main>
            <BlogPage />
        </main>
    )
}

export default Blog