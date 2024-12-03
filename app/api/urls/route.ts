import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("API called at:", new Date().toISOString());
    const urls = await prisma.url.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    });
    console.log("Data fetched:", urls);
    return NextResponse.json(urls, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.log("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
