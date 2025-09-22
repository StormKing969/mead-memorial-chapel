import React from "react";
import {
  LawsuitPageBackgroundContent,
  TimelineEvents,
} from "../../../constants/lawsuit";
import LawsuitTimelineCard from "~/components/LawsuitTimelineCard";

const LawsuitContent = () => {
  return (
    <section className={"flex max-w-7xl mx-auto mt-8 mb-20 px-4 gap-8"}>
      <aside
        className={
          "w-72 min-w-60 max-w-xs bg-white border border-gray-100 rounded-lg py-8 px-4 mr-4 self-start sticky top-32 shadow-sm hidden md:block"
        }
      >
        <nav className={"space-y-6"}>
          <a
            href="#background"
            className="block px-2 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition font-medium text-lg"
          >
            Context
          </a>
          <a
            href="#timeline"
            className="block px-2 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition font-medium text-lg"
          >
            Legal Timeline
          </a>
          <a
            href="#parties"
            className="block px-2 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition font-medium text-lg"
          >
            Key Parties Involved
          </a>
          <a
            href="#allegations"
            className="block px-2 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition font-medium text-lg"
          >
            Allegations
          </a>
          <a
            href="#defense"
            className="block px-2 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition font-medium text-lg"
          >
            Defense
          </a>
          <a
            href="#outcome"
            className="block px-2 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition font-medium text-lg"
          >
            Outcome
          </a>
        </nav>
      </aside>

      <main className="flex-1 min-w-0">
        <section
          id="background"
          className="bg-white rounded-xl shadow-md px-8 py-10 mb-12 border border-gray-100"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Background
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            {LawsuitPageBackgroundContent}
          </p>
        </section>

        <section
          id="timeline"
          className="bg-gray-50 rounded-xl shadow-sm px-8 py-10 mb-12 border border-gray-100"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Legal Timeline
          </h2>
          <div className={"relative"}>
            <div
              className={"pointer-events-none absolute top-0 bottom-0 left-1/2"}
            >
              <div className={"py-4 w-1 h-full bg-slate-200 rounded"} />
            </div>

            <div
              className={
                "overflow-y-auto no-scrollbar h-[400px] flex items-center"
              }
            >
              <ul className={"flex flex-col items-center gap-6"} role="list">
                {TimelineEvents.map((ev, i) => {
                  const above = i % 2 === 0;
                  return (
                    <li
                      key={ev.date + i}
                      className={"relative flex flex-col items-center"}
                    >
                      {/* connector node */}
                      <span
                        className={
                          "absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-4 border-indigo-600 rounded-full z-10"
                        }
                        aria-hidden="true"
                      />

                      {/* position card above or below */}
                      <div
                        className={`transform ${above ? "-translate-y-20 md:-translate-y-24" : "translate-y-20 md:translate-y-24"}`}
                      >
                        <LawsuitTimelineCard event={ev} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="parties"
          className="bg-white rounded-xl shadow-md px-8 py-10 mb-12 border border-gray-100"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Key Parties Involved
          </h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3">
              <span className="font-bold">Plaintiff:</span>
              John Mead Estate, represented by Jim Douglas (Administrator and
              former Vermont Governor)
            </li>
            <li className="py-3">
              <span className="font-bold">Defendant:</span>
              Middlebury College, through its Board of Trustees and officers
            </li>
            <li className="py-3">
              <span className="font-bold">Counsel for Plaintiff:</span>
              [Name of Law Firm / Principal Attorney]
            </li>
            <li className="py-3">
              <span className="font-bold">Counsel for Defendant:</span>
              [Name of Law Firm / Principal Attorney]
            </li>
            <li className="py-3">
              <span className="font-bold">Other Stakeholders:</span>
              Vermont Supreme Court; Mead family descendants; public supporters;
              media outlets covering the dispute
            </li>
          </ul>
        </section>

        <section
          id="allegations"
          className="bg-gray-50 rounded-xl shadow-sm px-8 py-10 mb-12 border border-gray-100"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Allegations
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-800">
            <li>
              Middlebury College violated the conditions of Governor Mead's
              donation by unilaterally removing the family name from the chapel,
              despite explicit deed language requiring perpetual naming.
            </li>
            <li>
              The college’s action constitutes a breach of the covenant of good
              faith and fair dealing inherent in the original agreement.
            </li>
            <li>
              The removal constitutes reputational harm to the Mead family,
              diminishing their philanthropic intent and legacy.
            </li>
            <li>
              The college’s decision was made without transparent process or
              adequate opportunity for stakeholder input, reflecting broader
              issues of “cancel culture” and institutional overreach.
            </li>
          </ul>
        </section>

        <section
          id="defense"
          className="bg-white rounded-xl shadow-md px-8 py-10 mb-12 border border-gray-100"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Defense
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-800">
            <li>
              Middlebury College contends it has the right, under institutional
              policy and contemporary ethical standards, to reconsider naming
              decisions, particularly when historic benefactors are found to
              have made statements or taken actions contrary to academic values
              or social justice.
            </li>
            <li>
              The college asserts that the deed language is not binding in
              perpetuity, arguing either ambiguity or public policy limitations
              on such covenants.
            </li>
            <li>
              The decision was in line with contemporary moves among higher
              education institutions to reassess historical symbols and
              legacies, aligning with values of inclusion and critique of
              problematic histories.
            </li>
            <li>
              The removal did not constitute a specific breach and no
              compensable harm has been suffered, as the building, use, and
              mission remain unchanged.
            </li>
          </ul>
        </section>

        <section
          id="outcome"
          className="bg-gray-50 rounded-xl shadow-sm px-8 py-10 border border-gray-100 mb-8"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Outcome
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            As of late 2025, the legal process remains ongoing. Motions for
            summary judgment have resolved some issues in the estate’s favor at
            the Superior Court level, including acknowledgment of certain
            restrictive covenants, but the question of final remedy and standing
            is under appeal to the Vermont Supreme Court. The outcome will
            determine the future of the Mead name and establish precedent for
            donor intent in the context of evolving institutional ethics.
            Updates will be posted here as the court process continues.
          </p>
        </section>
      </main>
    </section>
  );
};

export default LawsuitContent;