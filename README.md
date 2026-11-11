# Converse

A prose engine with no language model. Put a paragraph in the box and drag the target through a cube of seven style controls (action, detail, participation, rhythm, figurative agency, inquiry, judgment). The text below rewrites itself into the personality at that point: 128 personalities, one for every combination of high and low, and a blend everywhere in between.

**Open it:** the live page is `index.html`, served by GitHub Pages. It is one self-contained file: all code and data are inside it, and nothing you type is sent anywhere.

## How it rewrites without a model

The text is analysed once, with a rule-based parser. Moving the target switches on rewriting devices one at a time: sentence moves, phrase-level rephrasings ("it was a dark and stormy night" ↔ "the night was dark and stormy"; "the flame of the lamps" → "the lamps' flame"), and words from the dictionary for the same sense ("evidently" → "plainly"; "scanty" → "meager"). A word is exchanged only when the surrounding text settles which sense is meant. Every inserted word comes from the text itself, the dictionary, or a small declared vocabulary of frame words, and the "changes" view marks which. No event, motive or particular is invented.

## Credits and licences

- **Parser:** [compromise](https://github.com/spencermountain/compromise) 14.14.0 by Spencer Kelly, MIT License. Its licence notice is included in the page source.
- **Dictionary:** [Open English WordNet](https://github.com/globalwordnet/english-wordnet) 2024, CC BY 4.0. Pruned to single-word lemmas, with glosses shortened.
- **Sample texts:** the openings of public-domain works from [Project Gutenberg](https://www.gutenberg.org/), two short texts written for this demonstration, and a model paragraph from the project.
