import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CHANGELOG_DIR = path.join(process.cwd(), "content", "changelog");

export type ChangelogCategory = "Release" | "Improvement" | "Fix" | "New";

export interface ChangelogFrontmatter {
  title: string;
  date: string;
  category: ChangelogCategory;
}

export interface ChangelogMeta extends ChangelogFrontmatter {
  slug: string;
}

export interface ChangelogEntry extends ChangelogMeta {
  content: string;
}

export function getAllChangelog(): ChangelogMeta[] {
  if (!fs.existsSync(CHANGELOG_DIR)) return [];

  const files = fs.readdirSync(CHANGELOG_DIR).filter((f) => f.endsWith(".mdx"));

  const entries: ChangelogMeta[] = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CHANGELOG_DIR, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      ...(data as ChangelogFrontmatter),
    };
  });

  return entries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getChangelogBySlug(slug: string): ChangelogEntry | null {
  const filePath = path.join(CHANGELOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    ...(data as ChangelogFrontmatter),
    content,
  };
}
