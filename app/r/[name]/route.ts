import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;

    // Resolve the registry file path
    const registryPath = path.join(
      process.cwd(),
      "registry",
      "blocks",
      `${name}.json`
    );

    // Read the registry file
    const fileContents = await fs.readFile(registryPath, "utf8");
    const data = JSON.parse(fileContents);

    // Return the JSON response
    return NextResponse.json(data, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Registry fetch error:", error);
    return NextResponse.json({ error: "Component not found" }, { status: 404 });
  }
}
