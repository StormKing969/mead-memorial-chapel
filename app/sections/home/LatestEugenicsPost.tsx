import React from "react";
import { getCurrentEugenicsPosts } from "~/lib/firebase";
import type { EugenicsPost } from "../../../types/post";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import PreviewEugenicsPost from "~/components/PreviewEugenicsPost";

const LatestEugenicsPost = () => {
  const posts = getCurrentEugenicsPosts();

  return (
    <section className={"py-16 px-6 md:px-25 bg-gray-50"}>
      <h2 className={"text-3xl font-bold mb-8 text-center"}>
        Latest Middlebury & Eugenics Articles
      </h2>

      {posts.length === 0 && (
        <div className={"max-w-xl mx-auto text-center text-gray-600"}>
          No eugenics posts yet. Check back soon.
        </div>
      )}

      <div className={"grid md:grid-cols-3 gap-8"}>
        {posts
          .slice(0, 6)
          .sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          )
          .map((post: EugenicsPost) => (
            <PreviewEugenicsPost key={post.id} post={post} />
          ))}
      </div>

      <div className={"text-center mt-10"}>
        <Button
          disabled={posts.length === 0}
          className={`bg-gray-900 px-6 py-3 rounded-md hover:bg-gray-700 ${posts.length === 0 ? "cursor-none" : ""}`}
        >
          <Link to={"/eugenics"} className={"text-white"}>
            See All Middlebury & Eugenics Articles
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LatestEugenicsPost;