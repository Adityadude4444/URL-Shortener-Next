import prisma from "@/lib/db";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string" || !/^https?:\/\/\S+$/.test(url)) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const shcode = nanoid(8);

    await prisma.url.create({
      data: {
        ogurl: url,
        shorten: shcode,
      },
    });

    return NextResponse.json({ shortcode: shcode });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
