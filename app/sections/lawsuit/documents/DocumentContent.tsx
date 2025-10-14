import React, { useEffect, useState } from "react";
import {
  DocumentCategories,
  Files,
} from "../../../../constants/lawsuit/documents";
import FilePreview from "~/components/FilePreview";
import type { DocumentObj, DocumentTypes } from "../../../../types/documents";

const DocumentContent = () => {
  const [currentCategory, setCurrentCategory] = useState<DocumentTypes>(
    "Pleadings & Motions",
  );
  const [documents, setDocuments] = useState<DocumentObj[]>();

  useEffect(() => {
    const getCategorizedDocuments = Files.filter(
      (ele) => ele.category.toLowerCase() === currentCategory.toLowerCase(),
    );
    setDocuments(getCategorizedDocuments);
  }, [currentCategory]);

  return (
    <div className={"bg-white px-6 md:px-25 flex flex-row gap-8 pb-10"}>
      <div
        className={
          "sticky top-32 flex flex-col h-fit min-w-[200px] w-full max-w-[300px] md:border-r border-gray-100"
        }
      >
        {DocumentCategories.map((category) => (
          <button
            key={category}
            className={`${
              category === currentCategory ? "text-blue-600 shadow-md" : ""
            } cursor-pointer border-gray-300 w-full mb-4 last:mb-0 hover:shadow-md hover:text-blue-600 px-4 py-2 text-left rounded-lg`}
            onClick={() => setCurrentCategory(category as DocumentTypes)}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        <h2 className={"text-2xl font-bold text-gray-900 mb-8"}>
          {currentCategory}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents?.map((ele, i) => (
            <FilePreview
              key={i}
              documents={ele}
              currentCategory={currentCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentContent;