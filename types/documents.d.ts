/**
 * Lawsuit Documents Type Declarations.
 *
 * This module centralizes the allowed document categories and the shape of a
 * document record used by constants, routes, and UI components. Keeping the
 * types here ensures consistent data across the app and helps prevent drift
 * between the constants and the UI.
 *
 * See also:
 * - constants/lawsuit/documents/index.ts for the concrete data and category
 *   folder mappings.
 */

/**
 * Enumerates the known document categories supported by the application.
 *
 * Maintenance:
 * - When adding a new category, update this union AND keep it in sync with
 *   `DocumentCategories` and `BaseFilePath` in constants/lawsuit/documents.
 * - Use `null` when a document does not belong to any category or when
 *   category information is intentionally omitted.
 */
export type DocumentTypes =
  | "Appeal to Vermont Supreme Court"
  | "Motion for Amicus Brief"
  | "Amicus Brief Motion Granted"
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
   * The category this document belongs to.
   *
   * Guidance:
   * - Use one of the literal strings from `DocumentTypes` to keep categories
   *   consistent across the site and in sync with `BaseFilePath`.
   * - The field remains `string`-typed to avoid ripple changes, but values
   *   should align with `DocumentTypes` at runtime.
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