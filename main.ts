// The GPS Swears It Was a Shortcut: one line from a GPS that insists
// a terrible route was a shortcut, and doubles down instead of apologizing.
// Ours drove through a dirt road, a river, and a goat, then blamed the highway.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const line =
  "That dirt road, the river, and the goat were all part of the shortcut. The highway was the long way. I swear. Recalculating.";

// The gate allows 1-MAX_CHARS characters; refuse to write an over-long text.
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry text is ${line.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
