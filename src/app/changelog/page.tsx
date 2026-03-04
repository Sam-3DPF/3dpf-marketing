import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllChangelog, getChangelogBySlug, type ChangelogCategory } from "@/lib/changelog";

const SITE_URL = "https://www.3dprintforce.com";
const CTA_URL = "https://app.3dprintforce.com/login?v=signup";

export const metadata: Metadata = {
  title: "Changelog | 3D PrintForce",
  description:
    "What's new in 3D PrintForce. Follow along as we ship new features, improvements, and fixes for 3D print sellers.",
  alternates: {
    canonical: `${SITE_URL}/changelog`,
  },
  openGraph: {
    title: "Changelog | 3D PrintForce",
    description:
      "What's new in 3D PrintForce. Follow along as we ship new features, improvements, and fixes for 3D print sellers.",
    url: `${SITE_URL}/changelog`,
    siteName: "3D PrintForce",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog | 3D PrintForce",
    description:
      "What's new in 3D PrintForce. Follow along as we ship new features, improvements, and fixes for 3D print sellers.",
  },
};

const CATEGORY_STYLES: Record<ChangelogCategory, { bg: string; text: string }> = {
  Release:     { bg: "#FFF5EE", text: "#FF7A28" },
  Improvement: { bg: "#EFF6FF", text: "#2563EB" },
  Fix:         { bg: "#F0FDF4", text: "#16A34A" },
  New:         { bg: "#F5F3FF", text: "#7C3AED" },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatMonthYear(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

function entryId(slug: string): string {
  return `entry-${slug}`;
}

export default async function ChangelogPage() {
  const metas = getAllChangelog();

  // Load full content for each entry
  const entries = metas
    .map((m) => getChangelogBySlug(m.slug))
    .filter((e): e is NonNullable<typeof e> => e !== null);

  // Group slugs by month/year for sidebar
  const groups: { label: string; entries: typeof entries }[] = [];
  for (const entry of entries) {
    const label = formatMonthYear(entry.date);
    const existing = groups.find((g) => g.label === label);
    if (existing) {
      existing.entries.push(entry);
    } else {
      groups.push({ label, entries: [entry] });
    }
  }

  const changelogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "3D PrintForce Changelog",
    url: `${SITE_URL}/changelog`,
    itemListElement: entries.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.title,
      url: `${SITE_URL}/changelog#${entryId(entry.slug)}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(changelogSchema) }}
      />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="3D PrintForce" className="h-8 w-auto" />
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
            <Link href="/#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link href="/#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</Link>
            <Link href="/changelog" className="text-sm text-[#FF7A28] font-semibold hover:text-orange-600 transition-colors">Changelog</Link>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
          </div>
          <Link
            href={CTA_URL}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <h1 className="text-4xl sm:text-5xl font-black text-[#111827] mb-3">Changelog</h1>
        <p className="text-[#57606D] text-lg">What&apos;s new in 3D PrintForce.</p>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 flex gap-12 items-start">

        {/* LEFT SIDEBAR — hidden on mobile */}
        <aside className="hidden lg:block w-48 shrink-0 sticky top-24 self-start">
          <nav aria-label="Changelog timeline">
            {groups.map((group) => (
              <div key={group.label} className="mb-6">
                <p className="text-xs font-semibold text-[#57606D] uppercase tracking-wider mb-3">
                  {group.label}
                </p>
                <ul className="space-y-2">
                  {group.entries.map((entry) => (
                    <li key={entry.slug} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E3E6EB] shrink-0" />
                      <a
                        href={`#${entryId(entry.slug)}`}
                        className="text-sm text-[#57606D] hover:text-[#111827] transition-colors leading-snug"
                      >
                        {entry.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* RIGHT COLUMN — entries */}
        <div className="flex-1 min-w-0">
          {entries.map((entry, i) => {
            const catStyle = CATEGORY_STYLES[entry.category] ?? { bg: "#F3F4F6", text: "#374151" };
            return (
              <div key={entry.slug}>
                <section
                  id={entryId(entry.slug)}
                  className="scroll-mt-24 bg-white border border-[#E3E6EB] rounded-lg p-5"
                >
                  {/* Date */}
                  <time
                    dateTime={entry.date}
                    className="block text-sm text-[#57606D] mb-3"
                  >
                    {formatDate(entry.date)}
                  </time>

                  {/* Category pill + Title */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: catStyle.bg, color: catStyle.text }}
                    >
                      {entry.category}
                    </span>
                    <h2 className="text-xl font-bold text-[#111827]">{entry.title}</h2>
                  </div>

                  {/* MDX content */}
                  <article className="prose prose-gray max-w-none prose-sm">
                    <MDXRemote source={entry.content} />
                  </article>
                </section>

                {/* Divider between entries */}
                {i < entries.length - 1 && (
                  <div className="my-6 border-t border-[#E3E6EB]" />
                )}
              </div>
            );
          })}

          {entries.length === 0 && (
            <p className="text-[#57606D]">No changelog entries yet.</p>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="3D PrintForce" className="h-8 w-auto mb-4 opacity-90" />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The business OS for 3D print sellers.
              </p>
              <p className="text-gray-600 text-xs">© 2025 3D PrintForce LLC</p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {[
                  { label: "Features", href: "/#features" },
                  { label: "Pricing", href: "/#pricing" },
                  { label: "Changelog", href: "/changelog" },
                  { label: "Blog", href: "/blog" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {[
                  { label: "About", href: "/sam" },
                  { label: "FAQ", href: "/#faq" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">Get Started</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Start your free 14-day trial today.
              </p>
              <Link
                href={CTA_URL}
                className="inline-block bg-[#FF7A28] hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
