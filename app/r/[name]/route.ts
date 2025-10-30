import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Recursively search for a JSON file by name in the blocks directory
async function findRegistryFile(
  baseDir: string,
  targetName: string
): Promise<string | null> {
  const entries = await fs.readdir(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(baseDir, entry.name);

    if (entry.isDirectory()) {
      // Recursively search in subdirectories
      const found = await findRegistryFile(fullPath, targetName);
      if (found) return found;
    } else if (entry.isFile() && entry.name === `${targetName}.json`) {
      // Found the matching JSON file
      return fullPath;
    }
  }

  return null;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;

    // Search for the registry file recursively
    const blocksDir = path.join(process.cwd(), "registry", "blocks");
    const registryPath = await findRegistryFile(blocksDir, name);

    if (!registryPath) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 }
      );
    }

    // Read the registry file
    const fileContents = await fs.readFile(registryPath, "utf8");
    const data = JSON.parse(fileContents);

    // Get the directory containing the registry JSON file
    const registryDir = path.dirname(registryPath);

    // Read the actual component files and add their content
    if (data.files && Array.isArray(data.files)) {
      const filesWithContent = await Promise.all(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.files.map(async (file: any) => {
          try {
            // Resolve the component file path relative to the registry JSON location
            const componentPath = path.join(registryDir, file.path);

            // Read the component content
            const content = await fs.readFile(componentPath, "utf8");

            return {
              ...file,
              content,
            };
          } catch (error) {
            console.error(`Error reading file ${file.path}:`, error);
            return file;
          }
        })
      );

      data.files = filesWithContent;
    }

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
