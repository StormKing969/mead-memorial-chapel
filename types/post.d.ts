export interface Post {
    id: string;
    title: string;
    content: string;
    authorName: string;
    authorID: string;
    createdAt?: Date;
    imageUrl: string;
    links?: string[];
}