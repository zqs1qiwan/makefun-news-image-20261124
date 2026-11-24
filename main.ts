// make.fun bounty news-image-20261124 — "Sum up 24 November's world news in one image".
// The entry image is the front-page infographic in entry.png (1024x1024 PNG, under 1 MiB):
// Tuesday 24 November 2026 — Nvidia reinstates Jensen Huang as CEO after Trump's push,
// Ukraine sinks a Russian warship off Libya, Moscow warns Estonia, jets scrambled over
// the Korean peninsula, and the 2031 Women's World Cup hosts are announced.
// The program copies it to the output directory. It runs with no network, Node 22,
// standard library only, and both runs write byte-identical output (a plain copy).
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
