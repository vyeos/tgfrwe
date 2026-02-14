import type { Metadata } from "next";
import "@/styles/global.css";
import "@/styles/blog.css";

import Link from "next/link";

import type { PostSummary, PostListResponse } from "@/types/hive";
import { siteMetadata } from "@/data/portfolio";
import Masthead from "@/components/Masthead";
import Footer from "@/components/FooterSection";

export const metadata: Metadata = {
  title: `Blog | ${siteMetadata.title}`,
  description: `Blog — ${siteMetadata.description}`,
};

const apiBaseUrl =
  process.env.HIVE_API_URL ?? "https://api.hivecms.online/api/public/v1";

const apiKey = process.env.HIVE_API_KEY;

async function getPosts(): Promise<PostSummary[]> {
  if (!apiKey) return [];

  try {
    const listUrl = new URL(`${apiBaseUrl}/${apiKey}/posts`);
    listUrl.searchParams.set("limit", "50");

    const response = await fetch(listUrl.toString(), {
      next: { revalidate: 60 }, // ISR (cache 60s)
    });

    if (!response.ok) return [];

    const data = (await response.json()) as PostListResponse;

    return Array.isArray(data?.data) ? data.data : [];
  } catch {
    return [];
  }
}

function getCoverImage(post: unknown): string {
  if (!post || typeof post !== "object") return "";

  const record = post as Record<string, unknown>;

  const candidates = [
    record.coverImage,
    record.cover_image,
    record.image,
    record.thumbnail,
    record.thumbnail_url,
    record.featured_image,
    record.hero_image,
  ];

  const found = candidates.find((item) => typeof item === "string");

  return typeof found === "string" ? found : "";
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="blog-page">
      <Masthead />

      <section className="blog-main">
        <div className="blog-list">
          {posts.length ? (
            posts.map((post) => {
              const slug = post.slug;
              const cover = getCoverImage(post);

              return (
                <Link key={slug} href={`/blog/${slug}`} className="blog-card">
                  {cover && (
                    <div className="blog-card-media">
                      <img src={cover} alt={post.title} loading="lazy" />
                    </div>
                  )}

                  <div className="blog-card-body">
                    <div className="blog-card-header">
                      <span className="blog-tag">
                        {post.category?.name || "Article"}
                      </span>

                      <span className="blog-date">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                              },
                            )
                          : "New"}
                      </span>
                    </div>

                    <h2>{post.title}</h2>
                    <p>{post.excerpt || "Read the full post for details."}</p>
                  </div>

                  <div className="blog-card-footer">
                    <span className="blog-card-link">
                      Read more
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14" />
                        <path d="M13 5l6 7-6 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="blog-empty">
              <div className="blog-empty-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>

              <h2>Nothing here yet</h2>

              <p>
                Posts will appear here once published. Check back soon for fresh
                content on systems, interfaces, and shipping great products.
              </p>

              <div className="blog-empty-decoration">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer variant="minimal" personalInfo={{} as any} />
    </main>
  );
}
