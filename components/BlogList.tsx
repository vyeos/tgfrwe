"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  FileText,
} from "lucide-react";
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
            <Search size={18} strokeWidth={2} />
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
            <span className="blog-filter-label">CATEGORY</span>
            <div className="blog-category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`blog-category-pill ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-sort-group">
            <span className="blog-filter-label">SORT BY</span>
            <div className="blog-sort-controls">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortField)}
                className="blog-sort-select"
              >
                <option value="DATE">DATE</option>
                <option value="NAME">NAME</option>
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
                  <ChevronUp size={18} strokeWidth={2} />
                ) : (
                  <ChevronDown size={18} strokeWidth={2} />
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
                    <ArrowRight className="arrow" size={14} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="blog-empty">
            <div className="blog-empty-icon">
              <FileText size={48} strokeWidth={1.5} opacity={0.5} />
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
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
