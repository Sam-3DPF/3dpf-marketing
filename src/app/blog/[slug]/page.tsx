import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

const SITE_URL = "https://www.3dprintforce.com";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | 3D PrintForce Blog`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "3D PrintForce",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: canonicalUrl,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${SITE_URL}/sam`,
    },
    publisher: {
      "@type": "Organization",
      name: "3D PrintForce",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-[#57606D] hover:text-[#FF7A28] transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-black text-[#111827] mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-[#57606D] mb-10 pb-8 border-b border-[#E3E6EB]">
          <span>{post.author}</span>
          <span>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        {/* MDX Content */}
        <article className="prose prose-gray max-w-none">
          <MDXRemote source={post.content} />
        </article>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-[#E3E6EB]">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-[#57606D] hover:text-[#FF7A28] transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
