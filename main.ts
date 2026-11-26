import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello, batch, orders, slot: the first revision tunes this tiny preamble.
// A dog files its orders in one slot, then packs the batch away.
const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const line = "I didn't eat the homework. I stored it somewhere safer: inside me.";
const size = Buffer.byteLength(line, 'utf8');

writeFileSync(join(outputDir, 'entry.txt'), line, 'utf8');
console.log(size);
