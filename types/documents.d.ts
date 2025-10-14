export type DocumentTypes =
  | "Docket & Case Index"
  | "Pleadings & Motions"
  | "Briefs, Appendices & Legal Memoranda"
  | "Evidence & Discovery"
  | "Transcripts, Hearings & Notices"
  | "Administrative, Press & Public Materials";

export interface DocumentObj {
  title: string;
  category: string;
  date: string;
  fileName: string | null;
  videoLink: string | null;
}