import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/auth", "routes/auth.tsx"),
  route("/blog", "routes/blog.tsx"),
  route("/create-blog-post", "routes/create-blog-post.tsx"),
] satisfies RouteConfig;