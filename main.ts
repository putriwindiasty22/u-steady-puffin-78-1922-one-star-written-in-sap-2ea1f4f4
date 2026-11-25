// One Star, Written in Sap — make.fun program/v1 entry
// Writes a single one-line 1-star review, in the voice of a houseplant
// reviewing its human owner, to /output/entry.txt (gate: 1–279 chars).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. My owner waters me like he's apologising to a stranger, then parks me in a corner to photosynthesise my feelings. I have seen the sun twice since March.";

// The gate requires 1–279 characters of non-whitespace UTF-8 text.
// Guard the write so a future edit can never silently emit an invalid entry.
if ([...LINE].length < 1 || [...LINE].length > 279 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${[...LINE].length} chars, outside the 1–279 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
