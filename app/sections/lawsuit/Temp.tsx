import React from "react";
import {TimelineEvents} from "../../../constants/lawsuit";
import LawsuitTimelineCard from "~/components/LawsuitTimelineCard";

const Temp = () => {
  return (
    <>
      <div className="px-4 md:px-0 max-w-4xl mx-auto mt-12 mb-24">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Lawsuit Documents
        </h2>
        <p className="font-serif text-lg text-slate-700 mb-8">
          Explore official court documents, exhibits, legal correspondence, and
          public communications related to the Mead Memorial Chapel lawsuit.
          Browse by category, preview files, read online, or download directly.
        </p>

        <div className="mb-6 border-b border-slate-200">
          <nav
            className="flex space-x-2 md:space-x-8"
            role="tablist"
            aria-label="Document Categories"
          >
            <button
              className="tab-button active"
              role="tab"
              aria-selected="true"
            >
              Court Filings
            </button>
            <button className="tab-button" role="tab">
              Exhibits
            </button>
            <button className="tab-button" role="tab">
              Correspondence
            </button>
            <button className="tab-button" role="tab">
              Press Releases
            </button>
            <button className="tab-button" role="tab">
              Public Notices
            </button>
          </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="doc-card group flex flex-col bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg overflow-hidden transition">
            <div className="relative h-40 bg-slate-50 flex items-center justify-center">
              <img
                src="/pdf-thumbs/filing_Jan2025-001.png"
                className="w-auto h-32 object-contain mx-auto rounded"
                alt="Preview of Doe v. Chapel Jan 2025 Motion.pdf"
              />

              <span className="absolute bottom-2 left-2 bg-white/70 rounded p-1.5">
                {/*<svg className="w-6 h-6 text-rose-600" ...><!-- PDF icon SVG --></svg>*/}
              </span>
            </div>

            <div className="flex-1 flex flex-col px-4 pt-3 pb-4">
              <h3 className="font-serif text-lg font-semibold text-slate-800 truncate">
                Motion to Dismiss (Jan 2025)
              </h3>
              <p className="text-slate-600 text-sm mt-2 truncate">
                Filed by defense on Jan 3, 2025. 9 pages.
              </p>

              <div className="flex items-center mt-auto gap-2 pt-3">
                <a
                  href="/docs/lawsuit/filing_Jan2025-001.pdf"
                  className="inline-flex items-center rounded border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 transition focus:outline-none"
                  aria-label="Download PDF"
                  download
                >
                  {/*<svg className="mr-1.5 h-4 w-4 text-slate-600" ...></svg>*/}
                  Download
                </a>
                <button
                  className="inline-flex items-center rounded px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition focus:outline-none"
                  aria-label="Preview PDF"
                  data-preview="/docs/lawsuit/filing_Jan2025-001.pdf"
                >
                  {/*<svg className="mr-1.5 h-4 w-4 text-blue-700" ...></svg>*/}
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="pdf-modal"
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center hidden"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl w-full h-[80vh] relative flex flex-col">
            <button
              className="absolute top-2 right-2 bg-slate-100 rounded-full p-2 hover:bg-slate-200"
              aria-label="Close PDF Preview"
            >
              {/*<svg className="h-5 w-5 text-slate-600" ...></svg>*/}
            </button>
            <div className="flex-1 flex items-center justify-center bg-slate-50">
              <object
                data="/docs/lawsuit/filing_Jan2025-001.pdf"
                type="application/pdf"
                className="w-full h-full min-h-[500px]"
                aria-label="PDF Preview"
              ></object>
              <p className="text-center text-slate-500">
                PDF preview not supported.{" "}
                <a
                  href="/docs/lawsuit/filing_Jan2025-001.pdf"
                  target="_blank"
                  rel="noopener"
                  className="underline text-blue-700"
                >
                  Download file
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Temp;