export type DocumentTypes =
  | "Court Filings"
  | "Exhibits"
  | "Correspondence"
  | "Press Releases"
  | "Other Documents";

export interface DocumentObj {
  title: string;
  category: string;
  date: string;
  fileName: string;
}