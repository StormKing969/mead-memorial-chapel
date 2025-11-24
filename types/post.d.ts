export interface Post {
  id: string;
  title: string;
  content: string;
  authorName: string;
  authorID: string;
  createdAt: string;
  imageUrl: string;
  category: CategoryOptionsType;
}

export type CategoryOptionsType =
  | "Lawsuit"
  | "General"
  | "Events"
  | "Announcements"
  | "Community";