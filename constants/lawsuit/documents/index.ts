/**
 * Lawsuit Documents constants.
 *
 * This module provides the list of available document categories and the full
 * collection of document records used by the Documents section of the site.
 *
 * Use the exported constants to populate navigation, filter documents by
 * category, and render document cards. See types in `types/documents.d.ts` for
 * the shape and constraints of these objects.
 */

import type { DocumentObj, DocumentTypes } from "../../../types/documents";

/**
 * Maps each document category to the folder slug used under
 * `public/lawsuit/documents` for file storage.
 *
 * Notes:
 * - The `null` key maps to an empty string and represents the documents root.
 *   It is used when a document is not associated with a specific category or
 *   when the item links only to a video (no file on disk).
 * - Keep this mapping in sync with `DocumentCategories` and the literal
 *   strings in `DocumentTypes`.
 */
export const BaseFilePath = {
  "Appeal to Vermont Supreme Court": "appeal-to-vermont-supreme-court",
  "Motion for Amicus Brief": "motion-for-amicus-brief",
  "Amicus Brief Motion Granted": "amicus-brief-motion-granted",
  "Opposition to Amicus Brief Motion": "opposition-to-amicus-brief-motion",
  "Supreme Court Entry Order": "supreme-court-entry-order",
  "Amicus Brief Update": "amicus-brief-update",
  "Appellate Printed Case Materials": "appellate-printed-case-materials",
  "Opposition to Motion for Reconsideration":
    "opposition-to-motion-for-reconsideration",
  "Reply Brief": "reply-brief",
  "Corrected Brief Filings": "corrected-brief-filings",
  null: "",
};

/**
 * The set of selectable document categories displayed to users.
 *
 * When adding a new category, consider updating `DocumentTypes` too to keep
 * categories consistent across the application.
 *
 * @type {{ id: string; title: DocumentTypes }[]}
 */
export const DocumentCategories: { id: string; title: DocumentTypes }[] = [
  { id: "01", title: "Appeal to Vermont Supreme Court" },
  { id: "02", title: "Opposition to Motion for Reconsideration" },
  { id: "03", title: "Motion for Amicus Brief" },
  { id: "04", title: "Amicus Brief Motion Granted" },
  { id: "05", title: "Opposition to Amicus Brief Motion" },
  { id: "06", title: "Supreme Court Entry Order" },
  { id: "07", title: "Amicus Brief Update" },
  { id: "08", title: "Appellate Printed Case Materials" },
  { id: "09", title: "Reply Brief" },
  { id: "10", title: "Corrected Brief Filings" },
];

/**
 * Master list of all documents available for browsing in the Documents
 * section. Each entry conforms to the DocumentObj interface.
 *
 * Conventions:
 * - date: Use ISO-8601 "YYYY-MM-DD" format to ensure correct sorting.
 * - fileName: Use the exact filename found in the public documents store;
 *   set to null if the item only links to a video.
 * - videoLink: Provide a full URL if a video exists; otherwise, null.
 *
 * @type {DocumentObj[]}
 */
export const Files: DocumentObj[] = [
  //################## Amicus Brief Motion Granted ##################
  {
    title: "Order Granting Amicus Brief",
    category: "Amicus Brief Motion Granted",
    date: "2025-10-15",
    fileName: "Amicus Brief Motion Granted.pdf",
    videoLink: null,
  },
  //################## Amicus Brief Motion Granted ##################

  //################## Opposition to Motion for Reconsideration ##################
  {
    title: "Opposition to Motion for Reconsideration",
    category: "Opposition to Motion for Reconsideration",
    date: "2025-10-31",
    fileName:
      "Opposition to Motion for Reconsideration 10-31-25(2625108.1) (002).pdf",
    videoLink: null,
  },
  //################## Opposition to Motion for Reconsideration ##################

  //################## Motion for Amicus Brief ##################
  {
    title: "Exhibit A — Pro Hac Vice Licensing Card: Bedingfield",
    category: "Motion for Amicus Brief",
    date: "2025-08-26",
    fileName:
      "Exh. A Licensing Card - Pro Hac Vice - Bedingfield(2591939.1).pdf",
    videoLink: null,
  },
  {
    title: "Exhibit A — Pro Hac Vice Licensing Card: Kidder",
    category: "Motion for Amicus Brief",
    date: "2025-08-26",
    fileName: "Exh. A Licensing Card - Pro Hac Vice - Kidder(2591937.1).pdf",
    videoLink: null,
  },
  {
    title: "Exhibit A — Pro Hac Vice Licensing Card: Miller",
    category: "Motion for Amicus Brief",
    date: "2025-08-26",
    fileName: "Exh. A Licensing Card - Pro Hac Vice - Miller(2591938.1).pdf",
    videoLink: null,
  },
  {
    title:
      "Certificate of Service and Motion for Permission to File Amicus Brief — Hemenway",
    category: "Motion for Amicus Brief",
    date: "2025-10-10",
    fileName:
      "Hemenway - COS for Motions PHV _ NOA _ Motion for Permission to File Brief 10-10-25(2615316.1).pdf",
    videoLink: null,
  },
  {
    title: "Motion for Pro Hac Vice Admission — J. Miller (Hemenway)",
    category: "Motion for Amicus Brief",
    date: "2025-10-10",
    fileName: "Hemenway - Motion PHV J. Miller 10-10-25.pdf",
    videoLink: null,
  },
  {
    title: "Motion for Pro Hac Vice Admission — M. Bedingfield (Hemenway)",
    category: "Motion for Amicus Brief",
    date: "2025-10-10",
    fileName: "Hemenway - Motion PHV M. Bedingfield 10-10-25.pdf",
    videoLink: null,
  },
  {
    title: "Motion for Pro Hac Vice Admission — S. Kidder (Hemenway)",
    category: "Motion for Amicus Brief",
    date: "2025-10-10",
    fileName: "Hemenway - Motion PHV S. Kidder 10-10-25.pdf",
    videoLink: null,
  },
  {
    title: "Notice of Appearance — Hemenway",
    category: "Motion for Amicus Brief",
    date: "2025-10-10",
    fileName: "Hemenway - NOA 10-10-25.pdf",
    videoLink: null,
  },
  {
    title: "Motion for Permission to File Amicus Brief",
    category: "Motion for Amicus Brief",
    date: "2025-10-10",
    fileName: "Motion for Permission to File Amicus Brief 10-10-25.pdf",
    videoLink: null,
  },
  //################## Motion for Amicus Brief ##################

  //################## Appeal to Vermont Supreme Court ##################
  {
    title: "Appellant’s Brief",
    category: "Appeal to Vermont Supreme Court",
    date: "2025-09-22",
    fileName: "Appellant's Brief Filed.pdf",
    videoLink: null,
  },
  {
    title: "Certificate of Compliance",
    category: "Appeal to Vermont Supreme Court",
    date: "2025-09-22",
    fileName: "Cert of Compliance Filed.pdf",
    videoLink: null,
  },
  {
    title: "Printed Record Vol. I — Pleadings",
    category: "Appeal to Vermont Supreme Court",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol I - Pleadings Filed.pdf",
    videoLink: null,
  },
  {
    title: "Printed Record Vol. II — Complaint Exhibits",
    category: "Appeal to Vermont Supreme Court",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol II - Complaint Exhibits Filed.pdf",
    videoLink: null,
  },
  {
    title: "Printed Record Vol. III — Defendant MSJ Exhibits",
    category: "Appeal to Vermont Supreme Court",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol III - D's MSJ Exhibits Filed.pdf",
    videoLink: null,
  },
  {
    title: "Printed Record Vol. IV — Plaintiff MSJ Exhibits 1–49",
    category: "Appeal to Vermont Supreme Court",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol IV - P's MSJ Exhibits 1-49 Filed.pdf",
    videoLink: null,
  },
  {
    title: "Printed Record — Table of Contents",
    category: "Appeal to Vermont Supreme Court",
    date: "2025-09-19",
    fileName: "Printed Case Volumes - Table of Contents Filed.pdf",
    videoLink: null,
  },
  {
    title: "Printed Record Vol. V — Plaintiff MSJ Exhibits 50–71",
    category: "Appeal to Vermont Supreme Court",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol V - P's MSJ Exhibits 50-71 Filed.pdf",
    videoLink: null,
  },
  //################## Appeal to Vermont Supreme Court ##################

  //################## Opposition to Amicus Brief Motion ##################
  {
    title:
      "Plaintiff's Opposition to Colleges' Motion for Leave to File Amicus Brief and Request for Reconsideration",
    category: "Opposition to Amicus Brief Motion",
    date: "2025-10-24",
    fileName: "Plaintiff's Opposition to Motion to File Amicus Brief.pdf",
    videoLink: null,
  },
  //################## Opposition to Amicus Brief Motion ##################

  //################## Supreme Court Entry Order ##################
  {
    title:
      "Vermont Supreme Court Entry Order Denying Plaintiff's Motion for Reconsideration of Amicus Brief Participation",
    category: "Supreme Court Entry Order",
    date: "2025-11-05",
    fileName:
      "VT Supreme Court Entry Order - Reconsideration of Amicus Brief.pdf",
    videoLink: null,
  },
  //################## Supreme Court Entry Order ##################

  //################## Amicus Brief Update ##################
  {
    title: "Brief of Amici Curiae",
    category: "Amicus Brief Update",
    date: "2025-11-21",
    fileName: "Brief of Amici Curiae.pdf",
    videoLink: null,
  },
  //################## Amicus Brief Update ##################

  //################## Appellate Printed Case Materials ##################
  {
    title: "Appellee Middlebury College's Brief",
    category: "Appellate Printed Case Materials",
    date: "2025-11-21",
    fileName: "Appellee Middlebury College's Brief.pdf",
    videoLink: null,
  },
  {
    title: "PRINTED CASE VOLUMES TABLE OF CONTENTS",
    category: "Appellate Printed Case Materials",
    date: "2025-09-19",
    fileName: "Printed Case Volumes - Table of Contents Filed.pdf",
    videoLink: null,
  },
  {
    title: "V.R.A.P. 32(a)(7)(D) Certificate of Compliance",
    category: "Appellate Printed Case Materials",
    date: "2025-09-22",
    fileName: "Cert of Compliance Filed.pdf",
    videoLink: null,
  },
  {
    title: "PRINTED CASE Vol I - Pleadings Filed",
    category: "Appellate Printed Case Materials",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol I - Pleadings Filed.pdf",
    videoLink: null,
  },
  {
    title: "PRINTED CASE Vol II - Complaint Exhibits Filed",
    category: "Appellate Printed Case Materials",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol II - Complaint Exhibits Filed.pdf",
    videoLink: null,
  },
  {
    title: "PRINTED CASE Vol III - D's MSJ Exhibits Filed",
    category: "Appellate Printed Case Materials",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol III - D's MSJ Exhibits Filed.pdf",
    videoLink: null,
  },
  {
    title: "PRINTED CASE Vol IV - P's MSJ Exhibits 1-49 Filed",
    category: "Appellate Printed Case Materials",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol IV - P's MSJ Exhibits 1-49 Filed.pdf",
    videoLink: null,
  },
  {
    title: "PRINTED CASE Vol V - P's MSJ Exhibits 50-71 Filed",
    category: "Appellate Printed Case Materials",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol V - P's MSJ Exhibits 50-71 Filed.pdf",
    videoLink: null,
  },
  //################## Appellate Printed Case Materials ##################

  //################## Reply Brief ##################
  {
    title: "Appellant's Reply Brief",
    category: "Reply Brief",
    date: "2025-01-01",
    fileName: "Appellant's Reply Brief.pdf",
    videoLink: null,
  },
  //################## Reply Brief ##################

  //################## Amicus Brief Motion Granted ##################
  {
    title: "Appellant's Corrected Brief",
    category: "Corrected Brief Filings",
    date: "2026-01-02",
    fileName: "Appellant's Corrected Brief - for filing.pdf",
    videoLink: null,
  },
  {
    title: "Appellant's Corrected Brief (Redline/Strikeout)",
    category: "Corrected Brief Filings",
    date: "2026-01-02",
    fileName: "Appellant's Corrected Brief - Redline-Strikeout.pdf",
    videoLink: null,
  },
  {
    title: "Motion for Leave to Correct Brief",
    category: "Corrected Brief Filings",
    date: "2026-01-02",
    fileName: "Motion for Leave to Correct Brief.pdf",
    videoLink: null,
  },
  //################## Amicus Brief Motion Granted ##################
];