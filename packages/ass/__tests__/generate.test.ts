import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { generateASS } from "../src/index.ts";
// import { it } from "vitest";

const __dirname = dirname(fileURLToPath(import.meta.url));

Deno.test("generate ass from xml", () => {
  const filename = "898651903.xml";
  const xmlPath = path.join(__dirname, filename);
  const xmlText = fs.readFileSync(xmlPath, "utf-8");
  const assText = generateASS(xmlText, { filename, title: "我的忏悔" });
  fs.writeFileSync(path.join(__dirname, `${filename}.ass`), assText, "utf-8");
});
