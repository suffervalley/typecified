import { promises as fs } from "fs";
import path from "path";

export interface RegistryBlock {
  name: string;
  type: string;
  description?: string;
  category: string;
}

async function findAllRegistryFiles(
  baseDir: string,
  relativePath: string = ""
): Promise<RegistryBlock[]> {
  const blocks: RegistryBlock[] = [];
  const entries = await fs.readdir(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(baseDir, entry.name);
    const newRelativePath = relativePath
      ? `${relativePath}/${entry.name}`
      : entry.name;

    if (entry.isDirectory()) {
      // Recursively search subdirectories
      const subBlocks = await findAllRegistryFiles(fullPath, newRelativePath);
      blocks.push(...subBlocks);
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      try {
        const fileContents = await fs.readFile(fullPath, "utf8");
        const data = JSON.parse(fileContents);

        if (data.name && data.type === "registry:block") {
          // Extract category from the path
          const pathParts = relativePath.split("/");
          const category = pathParts[0] || "general";

          blocks.push({
            name: data.name,
            type: data.type,
            description: data.description,
            category,
          });
        }
      } catch (error) {
        console.error(`Error reading ${fullPath}:`, error);
      }
    }
  }

  return blocks;
}

export async function getRegistryBlocks(): Promise<RegistryBlock[]> {
  const blocksDir = path.join(process.cwd(), "registry", "blocks");
  return await findAllRegistryFiles(blocksDir);
}

export function groupBlocksByCategory(
  blocks: RegistryBlock[]
): Record<string, RegistryBlock[]> {
  return blocks.reduce(
    (acc, block) => {
      if (!acc[block.category]) {
        acc[block.category] = [];
      }
      acc[block.category].push(block);
      return acc;
    },
    {} as Record<string, RegistryBlock[]>
  );
}
