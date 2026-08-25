import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  published: boolean;
  content: string;
}

export interface Partner {
  slug: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  order: number;
  content: string;
}

export function getAllPosts(): Post[] {
  const postsDir = path.join(contentDir, "posts");
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        date: data.date || "",
        category: data.category || "",
        published: data.published ?? false,
        content,
      };
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(contentDir, "posts", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    category: data.category || "",
    published: data.published ?? false,
    content,
  };
}

export function getAllPartners(): Partner[] {
  const partnersDir = path.join(contentDir, "partners");
  if (!fs.existsSync(partnersDir)) return [];

  return fs
    .readdirSync(partnersDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(partnersDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        name: data.name || "",
        logo: data.logo || "",
        description: data.description || "",
        website: data.website || "",
        order: data.order || 99,
        content,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getPartnerBySlug(slug: string): Partner | null {
  const filePath = path.join(contentDir, "partners", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    name: data.name || "",
    logo: data.logo || "",
    description: data.description || "",
    website: data.website || "",
    order: data.order || 99,
    content,
  };
}

export function writePost(slug: string, data: Record<string, unknown>, content: string): void {
  const postsDir = path.join(contentDir, "posts");
  if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir, { recursive: true });
  const fileContent = `---\n${Object.entries(data)
    .map(([k, v]) => `${k}: ${typeof v === "string" ? (v.includes(":") || v.includes("#") ? `"${v}"` : v) : v}`)
    .join("\n")}\n---\n\n${content}`;
  fs.writeFileSync(path.join(postsDir, `${slug}.md`), fileContent, "utf-8");
}

export function deletePost(slug: string): boolean {
  const filePath = path.join(contentDir, "posts", `${slug}.md`);
  if (!fs.existsSync(filePath)) return false;
  fs.unlinkSync(filePath);
  return true;
}

export function writePartner(slug: string, data: Record<string, unknown>, content: string): void {
  const partnersDir = path.join(contentDir, "partners");
  if (!fs.existsSync(partnersDir)) fs.mkdirSync(partnersDir, { recursive: true });
  const fileContent = `---\n${Object.entries(data)
    .map(([k, v]) => `${k}: ${typeof v === "string" ? (v.includes(":") || v.includes("#") ? `"${v}"` : v) : v}`)
    .join("\n")}\n---\n\n${content}`;
  fs.writeFileSync(path.join(partnersDir, `${slug}.md`), fileContent, "utf-8");
}

export function deletePartner(slug: string): boolean {
  const filePath = path.join(contentDir, "partners", `${slug}.md`);
  if (!fs.existsSync(filePath)) return false;
  fs.unlinkSync(filePath);
  return true;
}
