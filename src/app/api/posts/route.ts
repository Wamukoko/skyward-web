import { NextResponse } from "next/server";
import { getAllPosts, writePost } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = getAllPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { slug, title, excerpt, date, category, published, content } = body;

  if (!slug || !title) {
    return NextResponse.json({ error: "Slug and title are required" }, { status: 400 });
  }

  writePost(slug, { title, excerpt, date, category, published }, content || "");
  return NextResponse.json({ success: true });
}
