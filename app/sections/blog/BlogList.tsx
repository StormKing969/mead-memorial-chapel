import React, {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "@firebase/firestore";
import {db} from "~/lib/firebase";
import type {Post} from "../../../types/post";

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

    return onSnapshot(q, (snapshot) => {
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Post[],
        );
    });
  }, []);

  return (
    <section className="grid md:grid-cols-3 gap-6 mt-10">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-gray-600 mt-2">
            {post.content.substring(0, 100)}...
          </p>
          <p className="text-sm text-gray-500 mt-4">By {post.authorID}</p>
        </div>
      ))}
    </section>
  );
};

export default BlogList;