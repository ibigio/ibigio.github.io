import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getCardData(cardType) {
  const dataDir = path.join(process.cwd(), cardType);
  const fileNames = fs
    .readdirSync(dataDir)
    .filter((fileName) => !fileName.startsWith("."));
  const allData = fileNames.map((fileName) => {
    // extract id
    const id = fileName.replace(/\.md$/, "");
    // read markdown
    const fullPath = path.join(dataDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // parse metadata
    const matterResult = matter(fileContents);
    return { id, ...matterResult.data };
  });
  return allData;
}

// const projectsDir = path.join(process.cwd(), "projects");

// export function getProjectsData() {
//   const fileNames = fs
//     .readdirSync(projectsDir)
//     .filter((fileName) => !fileName.startsWith("."));
//   const allProjectData = fileNames.map((fileName) => {
//     // extract id
//     const id = fileName.replace(/\.md$/, "");
//     // read markdown
//     const fullPath = path.join(projectsDir, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     // parse metadata
//     const matterResult = matter(fileContents);
//     return { id, ...matterResult.data };
//   });
//   return allProjectData;
// }
