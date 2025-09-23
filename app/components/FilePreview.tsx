import React, { useEffect, useState } from "react";
import type { DocumentObj, DocumentTypes } from "../../types/documents";
import { Link } from "react-router";

const FilePreview = ({
  documents: { title, date, fileName, videoLink },
  currentCategory,
}: {
  documents: DocumentObj;
  currentCategory: DocumentTypes;
}) => {
  const [fileUrl, setFileUrl] = useState<string>("");

  useEffect(() => {
    if (!fileName) {
      setFileUrl(videoLink);
    } else if (currentCategory.startsWith("Court Filings")) {
      setFileUrl("/lawsuit/filings");
    } else if (currentCategory.startsWith("Exhibits")) {
      setFileUrl("/lawsuit/exhibits");
    } else if (currentCategory.startsWith("Correspondence")) {
      setFileUrl("/lawsuit/correspondence");
    } else if (currentCategory.startsWith("Press Releases")) {
      setFileUrl("/lawsuit/press");
    } else {
      setFileUrl("/lawsuit/other");
    }
  }, []);

  return (
    <div
      className={
        "border border-gray-200 rounded-lg p-5 bg-white shadow flex flex-col justify-between"
      }
    >
      <h3 className={"text-xl font-semibold mb-1"}>{title}</h3>
      <p className={"text-sm text-gray-500 mb-2"}>{date}</p>
      <div className={"mt-4 flex gap-3"}>
        {!fileName ? (
          <>
            <a
              href={`${videoLink}`}
              className={"text-indigo-600 hover:underline text-sm font-medium"}
              target={"_blank"}
            >
              View Video
            </a>
          </>
        ) : (
          <>
            <Link
              to={`${fileUrl}/${fileName}`}
              className={"text-indigo-600 hover:underline text-sm font-medium"}
              target={"_blank"}
              rel={"noopener"}
            >
              View
            </Link>

            <a
              href={`${fileUrl}/${fileName}`}
              className="text-indigo-600 hover:underline text-sm font-medium"
              download={fileName}
              rel="noopener noreferrer"
            >
              Download
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default FilePreview;