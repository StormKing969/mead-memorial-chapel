export interface Post {
  id: string;
  title: string;
  content: string;
  authorName: string;
  authorID: string;
  createdAt: string;
  imageUrl: string;
  category: CategoryOptions;
}

export interface EugenicsPost {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    documentUrl: string;
}

export type CategoryOptions =
  | "Lawsuit"
  | "General"
  | "Events"
  | "Announcements"
  | "Community";