import fs from "fs";
import path from "path";

export default async function getProps() {
  const folders = fs.readdirSync(path.join("posts"));

  const files = folders.filter((folder) => folder.endsWith(".md"));
  const paths = await Promise.all(
    files.map((fileName: any) => {
      // slug = fileName.replace(".md", "");

      // return;
      return {
        // params: { slug },
        params: { slug: fileName.replace(".md", "") },
      };
    })
  );
  return {
    paths,
    fallback: false,
  };
}
