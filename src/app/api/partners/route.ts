import { NextResponse } from "next/server";
import { getAllPartners } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const partners = getAllPartners();
  return NextResponse.json(partners);
}
