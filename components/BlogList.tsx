"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { PostSummary } from "@/types/hive";

interface BlogListProps {
  initialPosts: PostSummary[];
}

type SortField = "DATE" | "NAME";
type SortOrder = "ASC" | "DESC";

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

export default function BlogList({ initialPosts }: BlogListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<SortField>("DATE");
  const [sortOrder, setSortOrder] = useState<SortOrder>("DESC");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialPosts.forEach((post) => {
      if (post.category?.name) {
        cats.add(post.category.name);
      }
    });
    return ["ALL", ...Array.from(cats)].sort();
  }, [initialPosts]);

  const filteredAndSortedPosts = useMemo(() => {
    return initialPosts
      .filter((post) => {
        const matchesSearch = post.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "ALL" ||
          post.category?.name === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        let comparison = 0;
        if (sortBy === "DATE") {
          const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
          const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
          comparison = dateA - dateB;
        } else {
          comparison = a.title.localeCompare(b.title);
        }
        return sortOrder === "ASC" ? comparison : -comparison;
      });
  }, [initialPosts, searchTerm, selectedCategory, sortBy, sortOrder]);

  return (
    <div className="blog-container">
      <div className="blog-controls">
        <div className="blog-search-wrapper">
          <div className="blog-search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="blog-search-input"
          />
        </div>

        <div className="blog-filters">
          <div className="blog-filter-group">
            <span className="blog-filter-label">Category</span>
            <div className="blog-category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`blog-category-pill ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-sort-group">
            <span className="blog-filter-label">Sort by</span>
            <div className="blog-sort-controls">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortField)}
                className="blog-sort-select"
              >
                <option value="date">Date</option>
                <option value="name">Name</option>
              </select>
              <button
                onClick={() =>
                  setSortOrder(sortOrder === "ASC" ? "DESC" : "ASC")
                }
                className="blog-sort-order-btn"
                title={
                  sortOrder === "ASC" ? "Sort Descending" : "Sort Ascending"
                }
              >
                {sortOrder === "ASC" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m19 12-7 7-7-7" />
                    <path d="M12 5v14" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-list">
        {filteredAndSortedPosts.length ? (
          filteredAndSortedPosts.map((post) => {
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

            <h2>No matches found</h2>

            <p>
              We couldn't find any posts matching your current filters. Try
              adjusting your search or category selection.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("ALL");
              }}
              className="blog-reset-btn"
            >
              Clear ALL filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
