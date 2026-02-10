export type Tag = { name: string; slug: string };

export type Category = { name: string; slug: string };

export type Author = {
  id: string;
  name: string;
  about?: string;
  socialLinks?: Record<string, unknown>;
};

export type PostSummary = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string | null;
  updatedAt: string | null;
  category: Category | null;
  tags: Tag[];
  author: { id: string; name: string } | null;
};

export type PostDetail = PostSummary & { htmlContent: string };

export type PostListResponse = {
  data: PostSummary[];
  total: number;
  offset: number;
  limit: number;
};

export type ErrorResponse = {
  message: string;
};
