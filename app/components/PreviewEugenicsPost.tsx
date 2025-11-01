import React from "react";
import type { EugenicsPost } from "../../types/post";
import { Link } from "react-router";

const PreviewEugenicsPost = ({
  post: { title, content, documentUrl },
}: {
  post: EugenicsPost;
}) => {
  return (
    <div className={"relative bg-gray-50 rounded-lg shadow-md overflow-hidden"}>
      <div className={"p-6"}>
        <h3 className={"text-xl font-semibold mb-2 capitalize"}>{title}</h3>
        <p className={"text-gray-600 mb-4"}>{content.substring(0, 100)}....</p>
      </div>

      <Link
        to={`${documentUrl}`}
        className={
          "text-blue-600 font-medium hover:text-blue-800 hover:underline absolute bottom-2 left-3"
        }
      >
        Read More →
      </Link>
    </div>
  );
};

export default PreviewEugenicsPost;