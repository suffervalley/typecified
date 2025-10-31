import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filePath = searchParams.get("path");

  if (!filePath) {
    return NextResponse.json(
      { error: "File path is required" },
      { status: 400 }
    );
  }

  try {
    // Security: Only allow reading from registry directory
    if (!filePath.startsWith("registry/")) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    // Resolve the full path
    const fullPath = path.join(process.cwd(), filePath);

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Read the file
    const content = fs.readFileSync(fullPath, "utf-8");

    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to read file" }, { status: 500 });
  }
}
