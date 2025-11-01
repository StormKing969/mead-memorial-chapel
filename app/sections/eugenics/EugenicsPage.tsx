import React from "react";
import type { User } from "@firebase/auth";
import { getCurrentEugenicsPosts } from "~/lib/firebase";
import CreateNewsLinkCard from "~/components/CreateNewsLinkCard";
import type { EugenicsPost } from "../../../types/post";
import DetailedEugenicsArticle from "~/components/DetailedEugenicsArticle";

const EugenicsPage = ({ user }: { user: User | null }) => {
  const posts = getCurrentEugenicsPosts();

  return (
    <section className={"md:px-25 px-6 mx-auto h-full py-16 bg-white"}>
      <h1
        className={
          "text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        }
      >
        Latest Middlebury & Eugenics Articles
      </h1>

      {posts.length === 0 && (
        <div className={"max-w-xl mx-auto text-center text-gray-600"}>
          No eugenics articles yet. Check back soon.
        </div>
      )}

      <div className={"grid gap-8 md:grid-cols-2 lg:grid-cols-3"}>
        {posts
          .sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          )
          .map((post: EugenicsPost) => (
            <DetailedEugenicsArticle key={post.id} post={post} user={user} />
          ))}

        {user && <CreateNewsLinkCard />}
      </div>
    </section>
  );
};

export default EugenicsPage;