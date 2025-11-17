import React, { useEffect, useRef, useState } from "react";
import {
  DocumentCategories,
  Files,
} from "../../../../constants/lawsuit/documents";
import FilePreview from "~/components/FilePreview";
import type { DocumentObj, DocumentTypes } from "../../../../types/documents";

const DocumentContent = () => {
  const [currentCategory, setCurrentCategory] = useState<DocumentTypes>(null);
  const [documents, setDocuments] = useState<DocumentObj[]>();
  const sectionRef = useRef(null);

  const handleOnClick = ({
    targetRef,
    category,
  }: {
    targetRef: any;
    category: string | null;
  }) => {
    const top = targetRef.current?.offsetTop - 150;
    window.scrollTo({ top, behavior: "smooth" });
    setCurrentCategory(category as DocumentTypes);
  };

  useEffect(() => {
    if (currentCategory !== null) {
      const getCategorizedDocuments = Files.filter(
        (ele) => ele.category.toLowerCase() === currentCategory.toLowerCase(),
      ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      setDocuments(getCategorizedDocuments);
    }
  }, [currentCategory]);

  return (
    <div
      className={"bg-white px-6 md:px-25 flex flex-row gap-8 pb-10"}
      ref={sectionRef}
    >
      <div
        className={
          "sticky top-32 flex flex-col h-full max-h-[550px] min-w-[200px] w-full max-w-[300px] md:border-r-2 border-gray-200 p-4"
        }
      >
        <h2 className={"text-2xl font-bold text-gray-900 mb-8"}>
          Document Categories sorted by submission date
        </h2>
        {DocumentCategories.map((category) => (
          <button
            key={category.id}
            className={`${
              category.title === currentCategory
                ? "text-blue-600 shadow-md"
                : ""
            } cursor-pointer border-gray-300 w-full mb-4 last:mb-0 hover:shadow-md hover:text-blue-600 px-4 py-2 text-left rounded-lg`}
            onClick={() =>
              handleOnClick({ targetRef: sectionRef, category: category.title })
            }
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className={"w-full"}>
        {currentCategory ? (
          <>
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
          </>
        ) : (
          <h3
            className={
              "text-2xl font-bold text-gray-900 mb-8 text-center cursor-none"
            }
          >
            Select a category
          </h3>
        )}
      </div>
    </div>
  );
};

export default DocumentContent;