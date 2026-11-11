// Generate one-device minimal pairs from Converse for the TPOP wording test.
// Usage: node tpop/generate_pairs.js <passages.json> <out.json> [seed]
//   passages.json: [{ "id": "...", "text": "...", "attribution": "..." }]
//   With "--samples" in place of passages.json, uses the page's built-in samples.
// Each control is pushed to one extreme at a time from the passage's measured
// profile; every device application Converse logs is one before/after pair.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
(async () => {
  const [inp, outFile, seedArg] = process.argv.slice(2);
  if (!inp || !outFile) { console.error('usage: generate_pairs.js <passages.json|--samples> <out.json> [seed]'); process.exit(2); }
  const passages = inp === '--samples' ? null : JSON.parse(fs.readFileSync(inp, 'utf8'));
  const seed = Number(seedArg) || 1;
  const page = path.resolve(__dirname, '..', 'index.html');
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + page); await p.waitForFunction(() => typeof __req === 'function' && window.__CONVERSE_DATA);
  const out = await p.evaluate(({ passages, seed }) => {
    const { analyse } = __req('app/engine/analyse.js'); const R = __req('app/engine/render.js');
    const list = passages || window.__CONVERSE_DATA.samples.samples;
    const KEYS = ['A', 'C', 'P', 'R', 'F', 'T', 'J'];
    return list.map(s => {
      const doc = analyse(s.text); R.instancesOf(doc);
      const seen = new Set(); const pairs = [];
      for (let k = 0; k < 7; k++) for (const v of [0, 1]) {
        const t = [...doc.values]; t[k] = v;
        const r = R.render(doc, t, { seed });
        for (const a of r.applied || []) {
          const key = a.id + '|' + a.before + '|' + a.after; if (seen.has(key)) continue; seen.add(key);
          pairs.push({ pair: `${s.id}-${String(pairs.length + 1).padStart(3, '0')}`, control: KEYS[k], to: v, device: a.id, converse_stance: !!a.stance, converse_fields: a.fields, slot: a.slot, before: a.before, after: a.after, converse_note: a.note });
        }
      }
      return { id: s.id, attribution: s.attribution || '', text: s.text, profile: doc.values, pairs };
    });
  }, { passages, seed });
  fs.writeFileSync(outFile, JSON.stringify({ generated: new Date().toISOString(), seed, passages: out }, null, 1));
  for (const x of out) console.log(x.id, x.pairs.length, 'pairs,', new Set(x.pairs.map(y => y.device)).size, 'devices,', x.pairs.filter(y => y.converse_stance).length, 'stance-flagged');
  await b.close();
})();
