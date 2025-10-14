import React, { useEffect, useMemo, useState } from "react";
import type { DocumentObj, DocumentTypes } from "../../types/documents";

const categoryToSlug: Record<DocumentTypes, string> = {
  "Docket & Case Index": "docket-case-index",
  "Pleadings & Motions": "pleadings-motions",
  "Briefs, Appendices & Legal Memoranda": "briefs-appendices-legal-memoranda",
  "Evidence & Discovery": "evidence-discovery",
  "Transcripts, Hearings & Notices": "transcripts-hearings-notices",
  "Administrative, Press & Public Materials":
    "administrative-press-public-materials",
};

const FilePreview = ({
  documents: { title, date, fileName, videoLink },
  currentCategory,
}: {
  documents: DocumentObj;
  currentCategory: DocumentTypes;
}) => {
  const [fileUrl, setFileUrl] = useState<string>("");

  const basePath = useMemo(() => {
    // Default to documents root if category not matched
    const slug = categoryToSlug[currentCategory] ?? "";
    return slug ? `/lawsuit/documents/${slug}` : "/lawsuit/documents";
  }, [currentCategory]);

  useEffect(() => {
    if (!fileName) {
      setFileUrl(videoLink ?? "");
    } else {
      setFileUrl(basePath);
    }
  }, [fileName, videoLink, basePath]);

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
            {videoLink && (
              <a
                href={`${videoLink}`}
                className={
                  "text-indigo-600 hover:underline text-sm font-medium"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                View Video
              </a>
            )}
          </>
        ) : (
          <>
            <a
              href={`${fileUrl}/${fileName}`}
              className={"text-indigo-600 hover:underline text-sm font-medium"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              View
            </a>

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