import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export function getCardData(cardType) {
  const dataDir = path.join(process.cwd(), cardType);
  // list normal files
  const fileNames = fs
    .readdirSync(dataDir)
    .filter((fileName) => !fileName.startsWith("."));
  const allData = fileNames.map((fileName) => {
    // extract id
    const id = fileName.replace(/\.md$/, "");
    // read markdown metadata
    const fullPath = path.join(dataDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // parse metadata
    const matterResult = matter(fileContents);
    return { id, ...matterResult.data };
  });
  // sort favorites first
  allData.sort((a, b) => (a.favorite ? -1 : 1));
  return allData;
}

function getIDs(cardType) {
  const dataDir = path.join(process.cwd(), cardType);
  const fileNames = fs
    .readdirSync(dataDir)
    .filter((fileName) => !fileName.startsWith("."));
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getProjectIDs() {
  return getIDs("projects");
}

async function getEntryData(id, cardType) {
  const dataDir = path.join(process.cwd(), cardType);
  const fullPath = path.join(dataDir, `${id}.md`);
  // read markdown metadata
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  // read markdown data
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHTML = processedContent.toString();
  return {
    id,
    contentHTML,
    ...matterResult.data,
  };
}

export async function getProjectData(id) {
  return getEntryData(id, "projects");
}
