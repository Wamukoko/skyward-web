import { NextResponse } from "next/server";
import { getAllPartners, writePartner } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const partners = getAllPartners();
  return NextResponse.json(partners);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { slug, name, logo, description, website, order } = body;

  if (!slug || !name) {
    return NextResponse.json({ error: "Slug and name are required" }, { status: 400 });
  }

  writePartner(slug, { name, logo, description, website, order }, "");
  return NextResponse.json({ success: true });
}
