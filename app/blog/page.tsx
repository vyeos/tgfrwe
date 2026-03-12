import type { Metadata } from "next";
import "@/styles/global.css";
import "@/styles/blog.css";
import type { PostSummary, PostListResponse } from "@/types/vine";
import { personalInfo, siteMetadata } from "@/data/portfolio";
import FooterSection from "@/components/FooterSection";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: `Blog | ${siteMetadata.title}`,
  description: `Blog — ${siteMetadata.description}`,
};

const apiBaseUrl =
  process.env.VINE_API_URL ?? "https://vinecms.tech/api/public/v1";

const apiKey = process.env.VINE_API_KEY;

async function getPosts(): Promise<PostSummary[]> {
  if (!apiKey) return [];

  try {
    const response = await fetch(`${apiBaseUrl}/${apiKey}/posts`, {
      next: { revalidate: 60 }, // ISR (cache 60s)
    });

    if (!response.ok) return [];

    const data = (await response.json()) as PostListResponse;

    return Array.isArray(data?.posts) ? data.posts : [];
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="blog-page">
      <section className="blog-main">
        <BlogList initialPosts={posts} />
      </section>

      <FooterSection personalInfo={personalInfo} variant="minimal" />
    </main>
  );
}
