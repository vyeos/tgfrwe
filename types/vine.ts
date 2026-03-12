export type Tag = { name: string; slug: string };

export type Category = { name: string; slug: string };

export type Author = {
  id: string;
  name: string;
  about?: string;
  socialLinks?: Record<string, unknown>;
};

export type PostSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  readingTimeMinutes: number;
  publishedAt: string | null;
  updatedAt: string;
  category: Category | null;
  tags: Tag[];
  author: { id: string; name: string } | null;
};

export type PostDetail = PostSummary & {
  contentHtml: string;
};

export type PostListResponse = {
  ok: boolean;
  posts: PostSummary[];
};

export type PostDetailResponse = {
  ok: boolean;
  post: PostDetail;
};

export type ErrorResponse = {
  ok?: false;
  error?: string;
  message?: string;
};
