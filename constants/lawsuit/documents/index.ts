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
  null: "",
};

/**
 * The set of selectable document categories displayed to users.
 *
 * When adding a new category, consider updating `DocumentTypes` too to keep
 * categories consistent across the application.
 *
 * @type {DocumentTypes[]}
 */
export const DocumentCategories: DocumentTypes[] = [
  "Appeal to Vermont Supreme Court",
  "Motion for Amicus Brief",
  "Amicus Brief Motion Granted",
  "Opposition to Amicus Brief Motion",
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
];