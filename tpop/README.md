# TPOP wording test: Converse as instrument

This folder holds the harness for testing *The Phraseology of Philosophy* (TPOP) with Converse.
Converse makes one logged, content-preserving wording change at a time; each change is a
minimal pair. The test asks whether TPOP predicts, better than Converse's own "stance" flag
and a style-only null, which pairs readers judge to change the writer's commitment, scope or
obligation.

- `generate_pairs.js`: runs the page headless (Playwright) and writes every one-device pair.
  `node tpop/generate_pairs.js <passages.json|--samples> <out.json> [seed]`
- `shakedown_pairs_samples.json`: a shakedown run on the page's 7 built-in samples (110 pairs).
  These samples are instrument checks only and must not be used as test passages.

- `predictions_draft_v0.1.md`: TPOP's draft prediction for each of the 60 devices, for review before freezing.

Status: design draft. No TPOP predictions are frozen, no test passages are selected, and no
reader has seen any pair.
