import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "projects");

export function getProjectsData() {
  const fileNames = fs
    .readdirSync(projectsDir)
    .filter((fileName) => !fileName.startsWith("."));
  const allProjectData = fileNames.map((fileName) => {
    // extract id
    const id = fileName.replace(/\.md$/, "");
    // read markdown
    const fullPath = path.join(projectsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // parse metadata
    const matterResult = matter(fileContents);
    return { id, ...matterResult.data };
  });
  return allProjectData;
}
