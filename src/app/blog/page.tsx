import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE_URL = "https://www.3dprintforce.com";

export const metadata: Metadata = {
  title: "Blog | 3D PrintForce",
  description:
    "3D printing business tips, platform updates, and pricing guides from Sam Erickson, founder of 3D PrintForce.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog | 3D PrintForce",
    description:
      "3D printing business tips, platform updates, and pricing guides from Sam Erickson, founder of 3D PrintForce.",
    url: `${SITE_URL}/blog`,
    siteName: "3D PrintForce",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | 3D PrintForce",
    description:
      "3D printing business tips, platform updates, and pricing guides from Sam Erickson, founder of 3D PrintForce.",
  },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "3D PrintForce Blog",
    url: `${SITE_URL}/blog`,
    description:
      "3D printing business tips, platform updates, and pricing guides from Sam Erickson.",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: post.author,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="3D PrintForce" className="h-8 w-auto" />
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="/#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </Link>
            <Link href="/blog" className="text-sm text-[#FF7A28] font-semibold hover:text-orange-600 transition-colors">
              Blog
            </Link>
          </div>
          <Link
            href="https://app.3dprintforce.com/login?v=signup"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-3">Blog</h1>
        <p className="text-[#57606D] text-lg">
          3D printing business tips, platform updates, and industry insights.
        </p>
      </section>

      {/* POST LIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        {posts.length === 0 ? (
          <p className="text-[#57606D]">No posts yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-[#E3E6EB] rounded-lg p-5 hover:shadow-sm transition-shadow"
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-xl font-bold text-[#111827] group-hover:text-[#FF7A28] transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-[#57606D] text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#57606D]">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
