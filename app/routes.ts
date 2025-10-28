import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/auth", "routes/auth.tsx"),
  route("/news", "routes/news.tsx"),
  route("/news/:id", "routes/news-post.tsx"),
  route("/create-news-post", "routes/create-news-post.tsx"),
  route("/lawsuit", "routes/lawsuit.tsx"),
  route("/lawsuit/documents", "routes/documents.tsx"),
  route("/main", "routes/main.tsx"),
  route("/petition", "routes/petition.tsx"),
] satisfies RouteConfig;