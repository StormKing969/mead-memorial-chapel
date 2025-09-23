import React, { useEffect, useState } from "react";
import {
  DocumentCategories,
  Files,
} from "../../../../constants/lawsuit/documents";
import FilePreview from "~/components/FilePreview";
import type { DocumentObj, DocumentTypes } from "../../../../types/documents";

const DocumentContent = () => {
  const [currentCategory, setCurrentCategory] =
    useState<DocumentTypes>("Court Filings");
  const [documents, setDocuments] = useState<DocumentObj[]>();

  useEffect(() => {
    const getCategorizedDocuments = Files.filter((ele) => {
      if (
        ele.category.toLowerCase().startsWith(currentCategory.toLowerCase())
      ) {
        return ele;
      }
    });
    setDocuments(getCategorizedDocuments);
  }, [currentCategory]);

  return (
    <div className={"px-6 md:px-25 flex flex-row gap-8 mb-10"}>
      <ul
        className={
          "self-start sticky top-32 min-w-[200px] gap-2 border-b md:border-b-0 md:border-r border-gray-300"
        }
      >
        {DocumentCategories.map((category, i) => (
          <li
            key={i}
            className={`${category.startsWith(currentCategory) ? "text-blue-600 shadow-md" : ""} cursor-pointer border-b-2 border-gray-300 w-full last:border-none hover:shadow-md hover:text-blue-600`}
            onClick={() => setCurrentCategory(category)}
          >
            <button
              className={"py-4 px-4 text-lg font-semibold cursor-pointer"}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

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