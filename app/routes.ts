import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/auth", "routes/auth.tsx"),
  route("/blog", "routes/blog.tsx"),
  route("/blog/:id", "routes/blog-post.tsx"),
  route("/create-blog-post", "routes/create-blog-post.tsx"),
  route("/lawsuit", "routes/lawsuit.tsx"),
  route("/lawsuit/documents", "routes/documents.tsx"),
  route("/petition", "routes/petition.tsx"),
] satisfies RouteConfig;