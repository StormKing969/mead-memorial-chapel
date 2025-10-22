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
  "Appeal to Vermont Supreme Court",
  "Motion for Amicus Brief",
  "Amicus Brief Motion Granted",
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

];