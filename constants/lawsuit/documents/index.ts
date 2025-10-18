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
 * The set of selectable document categories displayed to users.
 *
 * When adding a new category, consider updating `DocumentTypes` too to keep
 * categories consistent across the application.
 *
 * @type {DocumentTypes[]}
 */
export const DocumentCategories: DocumentTypes[] = [
  "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
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
  {
    title: "Printed Case Vol V — Plaintiff MSJ Exhibits 50-71",
    category: "Evidence & Discovery",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol V - P's MSJ Exhibits 50-71 Filed.pdf",
    videoLink: null,
  },

  {
    title: "Printed Case Volumes — Table of Contents",
    category: "Pleadings & Motions",
    date: "2025-09-19",
    fileName: "Printed Case Volumes - Table of Contents Filed.pdf",
    videoLink: null,
  },
  {
    title: "Appellant's Brief — Estate of John Abner Mead",
    category: "Briefs, Appendices & Legal Memoranda",
    date: "2025-09-19",
    fileName: "Appellant's Brief Filed.pdf",
    videoLink: null,
  },
  {
    title:
      "Certificate of Compliance (V.R.A.P. 32(a)(7)(D)) — Appellant's Brief",
    category: "Administrative, Press & Public Materials",
    date: "2025-09-22",
    fileName: "Cert of Compliance Filed.pdf",
    videoLink: null,
  },
  {
    title: "Printed Case Vol I — Pleadings Filed",
    category: "Pleadings & Motions",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol I - Pleadings Filed.pdf",
    videoLink: null,
  },
  {
    title: "Printed Case Vol II — Plaintiff Complaint Exhibits (Exs. 1-8)",
    category: "Evidence & Discovery",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol II - Complaint Exhibits Filed.pdf",
    videoLink: null,
  },
  {
    title:
      "Printed Case Vol III — Defendant MSJ Exhibits (MSJ #1 Exs. A–GG; MSJ #2 Exs. A–N)",
    category: "Evidence & Discovery",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol III - D's MSJ Exhibits Filed.pdf",
    videoLink: null,
  },
  {
    title: "Printed Case Vol IV — Plaintiff MSJ Exhibits 1-49",
    category: "Evidence & Discovery",
    date: "2025-09-19",
    fileName: "PRINTED CASE Vol IV - P's MSJ Exhibits 1-49 Filed.pdf",
    videoLink: null,
  },
  {
    title:
      "Certificate of Service — Motions, Pro Hac Vice Admissions, Notice of Appearance (Langrock Sperry & Wool)",
    category:
      "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName:
      "Hemenway - COS for Motions PHV _ NOA _ Motion for Permission to File Brief 10-10-25(2615316.1).pdf",
    videoLink: null,
  },
  {
    title:
      "Motion for Leave to File Amicus Brief — Proposed Amici Curiae Colleges",
    category:
      "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Motion for Permission to File Amicus Brief 10-10-25.pdf",
    videoLink: null,
  },
  {
    title: "Pro Hac Vice Licensing Card — M. Bradford Bedingfield (Exhibit A)",
    category:
      "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-08-26",
    fileName:
      "Exh. A Licensing Card - Pro Hac Vice - Bedingfield(2591939.1).pdf",
    videoLink: null,
  },
  {
    title: "Pro Hac Vice Licensing Card — Jennifer Miller (Exhibit A)",
    category:
      "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-08-26",
    fileName: "Exh. A Licensing Card - Pro Hac Vice - Miller(2591938.1).pdf",
    videoLink: null,
  },
  {
    title: "Pro Hac Vice Licensing Card — Stephen Kidder (Exhibit A)",
    category:
      "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-08-26",
    fileName: "Exh. A Licensing Card - Pro Hac Vice - Kidder(2591937.1).pdf",
    videoLink: null,
  },
  {
    title:
      "Motion for Admission Pro Hac Vice — Stephen W. Kidder (Amici Curiae Colleges)",
    category:
      "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Hemenway - Motion PHV S. Kidder 10-10-25.pdf",
    videoLink: null,
  },
  {
    title:
      "Motion for Admission Pro Hac Vice — Marvin Bradford Bedingfield (Amici Curiae Colleges)",
    category:
      "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Hemenway - Motion PHV M. Bedingfield 10-10-25.pdf",
    videoLink: null,
  },
  {
    title: "Notice of Attorney Appearance — Erin Miller Heins (NOA)",
    category:
      "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Hemenway - NOA 10-10-25.pdf",
    videoLink: null,
  },
  {
    title:
      "Motion for Admission Pro Hac Vice — Jennifer Grace Miller (Amici Curiae Colleges)",
    category:
      "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision",
    date: "2025-10-10",
    fileName: "Hemenway - Motion PHV J. Miller 10-10-25.pdf",
    videoLink: null,
  },
];