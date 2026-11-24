import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence: a small everyday moment made strange and new.
const SENTENCE =
  "The escalator carries me uphill while I stand perfectly still, and for a moment walking is something the building does for me.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${SENTENCE.length}`);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SENTENCE, "utf8");
