/**
 * Document type declarations for the lawsuit documents section.
 *
 * These declarations describe the allowed document categories and the
 * shape of a document record used throughout the application (constants,
 * routes, and UI components). Use these types to ensure consistent data
 * across the app.
 */

/**
 * Enumerates the known document categories supported by the application.
 *
 * Add new literal strings here when introducing additional categories.
 * Use `null` when a document does not belong to any category or when
 * category information is intentionally omitted.
 */
export type DocumentTypes =
  | "Ten Universities Join Brief Supporting Middlebury’s Chapel Decision"
  | null;

/**
 * Represents a single document entry shown in the Documents section.
 */
export interface DocumentObj {
  /**
   * Human‑readable title of the document as displayed in the UI.
   */
  title: string;

  /**
   * The category this document belongs to. Prefer a value from
   * `DocumentTypes` to keep categories consistent across the site.
   */
  category: string;

  /**
   * ISO‑8601 date string (YYYY-MM-DD) representing the document's date
   * (e.g., filing or publication date).
   */
  date: string;

  /**
   * The file name stored under the public documents repository, or null
   * when the document is not a downloadable file (e.g., video‑only).
   */
  fileName: string | null;

  /**
   * A URL to an external video (e.g., YouTube/Vimeo) related to the document,
   * or null when no video is associated.
   */
  videoLink: string | null;
}