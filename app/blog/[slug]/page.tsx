import "@/styles/global.css";
import "@/styles/blog.css";

import FooterSection from "@/components/FooterSection";
import { personalInfo } from "@/data/portfolio";
import type {
  PostSummary,
  PostDetail,
  PostDetailResponse,
  PostListResponse,
} from "@/types/vine";

const apiBaseUrl =
  process.env.VINE_API_URL ?? "https://vinecms.tech/api/public/v1";

const apiKey = process.env.VINE_API_KEY;

function getCoverImage(post: any): string {
  if (!post || typeof post !== "object") return "";

  const candidates = [
    post.coverImage,
    post.cover_image,
    post.image,
    post.thumbnail,
    post.thumbnail_url,
    post.featured_image,
    post.hero_image,
  ];

  const found = candidates.find((item) => typeof item === "string");
  return typeof found === "string" ? found : "";
}

async function getPost(slug: string): Promise<PostDetail | null> {
  if (!apiKey) return null;

  try {
    const response = await fetch(`${apiBaseUrl}/${apiKey}/posts/${slug}`, {
      next: { revalidate: 60 }, // ISR
    });

    if (!response.ok) return null;

    const data = (await response.json()) as PostDetailResponse;
    return data?.post ?? null;
  } catch {
    return null;
  }
}

// 🔹 Replaces getStaticPaths
export async function generateStaticParams() {
  if (!apiKey) return [];

  try {
    const response = await fetch(`${apiBaseUrl}/${apiKey}/posts`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) return [];

    const data = (await response.json()) as PostListResponse;
    const blogs: PostSummary[] = Array.isArray(data?.posts) ? data.posts : [];

    return blogs.map((post) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="blog-page">
        <main className="blog-main">
          <div className="blog-empty">
            <a className="blog-back" href="/blog">
              ← All posts
            </a>
            <h2>Post not found.</h2>
            <p>Double-check the URL or head back to the blog list.</p>
          </div>
        </main>
        <FooterSection personalInfo={personalInfo} />
      </div>
    );
  }

  const cover = getCoverImage(post);

  return (
    <div className="blog-page">
      <main className="blog-main">
        <article className="blog-post">
          <a className="blog-back" href="/blog">
            ← All posts
          </a>

          <header className="blog-post-header">
            <div className="blog-kicker-row">
              <p className="blog-kicker">{post.category?.name || "Blog"}</p>
              <span className="blog-kicker-date">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })
                  : "New"}
              </span>
            </div>

            <h1>{post.title}</h1>

            <div className="blog-meta">
              <span>{post?.author?.name}</span>
            </div>
          </header>

          {cover && (
            <div className="blog-post-media">
              <img src={cover} alt={post.title} loading="lazy" />
            </div>
          )}

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: post.contentHtml || "",
            }}
          />
        </article>
      </main>

      <FooterSection personalInfo={personalInfo} />
    </div>
  );
}
