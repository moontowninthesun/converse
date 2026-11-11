# TPOP device-level predictions, draft v0.1 (NOT FROZEN)

Drafted 2026-11-11 for Eric's review. Once he approves, the file is renamed `predictions_v1.0.md`,
its SHA-256 is recorded in `FREEZE.md`, and it is committed **before any test passage is chosen**.
Changes after that point are logged as revisions and do not count for the test.

## What is predicted

For each of Converse's 60 devices, the prediction says whether applying it to one sentence changes the
writer's **undertaking**: what the text commits to, on whose authority, with what scope, and what it
still owes. The headline has three values:

- **CHANGE**: readers should judge that the variant commits to, or owes, something the original does not.
- **NO**: readers should judge it the same claim with the same commitments (a paraphrase).
- **IF ...**: the prediction depends on a stated feature of the sentence. The condition is checked for
  each generated pair and recorded **before readers see it**, so every pair ends with a CHANGE or NO.

The fields say *where* TPOP expects the change: **Op** (the operation performed, in the Prologue's
grammar), **Who** (who vouches or acts), **Status** (asserted, provisional, attributed, figurative,
evidential), **Scope** (what range the claim covers), **Support** (a ground, contrast or consequence
relation), and **Owes** (an obligation or question left open). Readers answer four matching questions:
same claim? who vouches? same scope? does the variant ask or owe anything new?

The last column gives Converse's own flag: **S** means it is one of Converse's 7 "stance" devices.
Rows where TPOP's headline is CHANGE (or IF) but Converse has no flag are the cases that can show
whether TPOP adds anything over the cheap rule.

Anchors cite the integrated edition: Prologue table of operations (P-ops) and of small phrases
(P-phrases); Ch. 8 *Adjacency Is Not Entailment*; Ch. 12 *The Obligation Ledger*; Ch. 32
*Commitment and Entitlement*; Chs. 41-43 on reliance; the Mill chapters on who governs; Introduction
on "it follows that".

## A: Action

| Device | What it does | TPOP headline | Where | Anchor | Converse |
|---|---|---|---|---|---|
| A+activate | passive made active; agent was already named | NO | | Mill: agent stays assigned | |
| A+event | gerund operation restated as an event | IF the gerund was generic and the event form is tensed, CHANGE | Scope (kind to episode) | P-ops: predication | |
| A+postpose | fronted phrase moved behind the clause | NO | | | |
| A+then | inserts "then" | IF the passage argues (prior sentence is a premise), CHANGE; in narration, NO | Support: "then" reads as inference, not sequence | Ch. 8 | |
| A+steps | "First, ... Second, ..." | IF the sentences are not already parallel steps of one argument, CHANGE | Support: a ground, contrast or example recast as a coordinate step; Scope: enumeration implies a complete list | P-phrases: "in the first place establishes an argumentative order" | |
| A+front | first act moved to the head of its paragraph | IF the moved sentence relies on an earlier one (anaphora or a ground), CHANGE | Support | Chs. 8, 41-43 | |
| A-passive | active made passive; agent stays named | NO | | | |
| A-nominal | act stated as a fact ("there was a meeting of") | NO | | | |
| A-setting | time or place put first | NO | | | |
| A-outcome | "as it turned out", "in the event" | CHANGE | Status: a reported act becomes a retrospective finding, implying earlier uncertainty | retrospective reading must not overwrite the earlier state | S |
| A-lead | a relation sentence moved to the head of its paragraph | IF the moved sentence is a conclusion from preceding premises, CHANGE | Support: inference recast as thesis-then-support | "the two sequences need not produce the same commitments" | |
| A+uncleft | undoes a cleft ("it is in London that ...") | IF the cleft's focus is contrastive in context, CHANGE | Scope: exclusivity lost | P-phrases: "it is precisely here that" | |
| A-cleft | adds a cleft on time or place | CHANGE | Scope: adds exclusivity ("at noon, not otherwise") | P-phrases: "it is precisely here that" | |
| A-there | act presented as a scene | NO | | | |

## C: Detail

| Device | What it does | TPOP headline | Where | Anchor | Converse |
|---|---|---|---|---|---|
| C+foreground | the thing leads; agent stays named | NO | | | |
| C+resolve | names the thing again in place of "it" | IF "it" had more than one candidate referent, CHANGE | Scope: the rewrite chooses a referent | | |
| C+that | "the X" becomes "that X" | IF the noun phrase was generic (a kind), CHANGE | Scope: a claim about a kind becomes a claim about one instance | P-ops: predication | |
| C+gloss | adds the dictionary's sense of a thing | IF the argument turns on the term, CHANGE | Op: definition the author did not make | P-ops: definition; P-phrases: "properly speaking" | |
| C+echo | holds up a thing alone ("That door.") | NO | | | |
| C-adjective | drops a descriptive adjective | IF the adjective restricts the class ("a broken promise"), CHANGE | Scope widened | P-ops: qualification, limitation | |
| C-manner | drops a manner adverb | IF the adverb states a condition or method of the claim ("patiently accumulating"), CHANGE | Scope | P-ops: qualification | |
| C-pronoun | a pronoun carries a repeated thing | IF the new pronoun has two candidate antecedents, CHANGE | Scope | | |
| C-place | drops a closing place phrase | IF the sentence is a claim limited by the place, CHANGE | Scope widened | P-ops: limitation | |
| C-word | a broader word for the thing, act or quality | CHANGE | Scope widened | P-ops: limitation | |
| C+predicate | "it was a dark night" becomes "the night was dark" | NO | | | |

## P: Participation

| Device | What it does | TPOP headline | Where | Anchor | Converse |
|---|---|---|---|---|---|
| P+frame | "we hold / judge / find / record that ..." | CHANGE | Who: an impersonal assertion becomes the narrator's; Status: "find/record" adds an evidential claim, "hold/judge" a reported judgment | Ch. 32 | S |
| P+tag | ", we judge" / ", so far as we can tell" | CHANGE | Who; Scope where the tag hedges | Ch. 32 | S |
| P+account | closes with "That is our judgment" | CHANGE | Who: preceding claims are retroactively attributed; Owes: "where our account stops, for now" leaves an obligation | Chs. 12, 32 | S |
| P-agentless | first-person agent removed by a passive | IF the verb is an act of judgment, inference or supposition ("we conclude", "I suppose"), CHANGE | Who: the commitment loses its holder | Ch. 32 | |

## R: Rhythm

| Device | What it does | TPOP headline | Where | Anchor | Converse |
|---|---|---|---|---|---|
| R+split | splits a sentence at a joint; the connective stays | NO | | Ch. 8 | |
| R+verbs | each act of one subject gets its own sentence | IF a condition, negation or modal governed both verbs, CHANGE | Scope | P-ops: conditionalization | |
| R+dash | sets an aside apart with dashes | NO | | | |
| R+aside | a parenthesis becomes its own sentence | IF the parenthesis carries an evaluative or explanatory claim, CHANGE | Status: backgrounded content becomes a main assertion | | |
| R-join | joins two short sentences with a semicolon | NO | Ch. 8 predicts adjacency adds no relation; readers who infer one count against this row | Ch. 8 | |
| R-undash | dashes become commas and semicolons | NO | | | |
| R-unparen | folds a parenthesis into the sentence | NO | | | |
| R+word | a shorter word for the same sense | NO (paraphrase control) | if readers judge a change, check for a dictionary error first | | |
| R+genitive | "the flame of the lamps" becomes "the lamps' flame" | NO | | | |
| R+reduce | a clause compressed ("the lamps struggling") | NO | | | |

## F: Figurative agency

| Device | What it does | TPOP headline | Where | Anchor | Converse |
|---|---|---|---|---|---|
| F+ergative | the thing undergoes the act by itself ("the office closed") | IF the original named the agent, CHANGE | Who acts: responsibility removed | Mill: distribution of power | |
| F+figure | the thing goes through the act as on a journey; who did it is stated | NO | | | |
| F+meet | "met with rejection" | IF the agent is dropped, CHANGE | Who acts | | |
| F+witness | a time or place "looks on" | NO | tests over-detection: personification no reader takes literally | | |
| F+named | marks a figure as a figure ("so to speak") | IF the marked words could be read literally, CHANGE | Status: literal commitment withdrawn | | |
| F-literal | gives an act back to its means | NO | | | |

## T: Inquiry

| Device | What it does | TPOP headline | Where | Anchor | Converse |
|---|---|---|---|---|---|
| T+close | adds a closing question ("What follows from this, and on what ground?") | CHANGE | Op: interrogation; Owes: a continuation; with "on what ground", Status: the preceding support is put in doubt | Ch. 12; P-ops: interrogation | |
| T+remains | "What remains to be ...?" | CHANGE | Owes | P-phrases: "it remains to be shown registers an outstanding obligation" | |
| T+test | "What evidence would settle whether ...?" | CHANGE | Owes; Support: a criterion for settling is proposed | Ch. 12 | |
| T+ask | asks about an act the text states ("On what ground does the promise create an obligation?") | CHANGE | Op: objection when the text already gave the ground; Status: the text appears to doubt its own premise | P-ops: objection; Ch. 16 | |
| T+sofar | "So far," / "For now," | CHANGE | Status: settled to provisional; Scope: limited in time | P-phrases: "not yet" | S |

## J: Judgment

| Device | What it does | TPOP headline | Where | Anchor | Converse |
|---|---|---|---|---|---|
| J+relation | names the relation a connective gives ("It follows that", "The reason is that", "By contrast") | IF the relation is a consequence restated as "it follows that", or a causal "because" restated as "the reason is", CHANGE; a contrast restated, NO | Support: loose consequence promoted to entailment; cause read as justification | Introduction: "it follows that announces an inference whose validity remains to be examined" | |
| J+contrast | states a contrast the text left to juxtaposition | CHANGE | Support: an opposition relation is added | Ch. 8; P-ops: opposition | S |
| J+point | "Note that", "The point is that" | IF the statement is not already the paragraph's conclusion, CHANGE | Support: a premise or background is promoted to the decisive claim | P-phrases: "it is precisely here that" | |
| J+for | "for" becomes "because" / "the reason being that" | NO (paraphrase control) | | | |
| J+evident | "evidently X" becomes "The evidence was that X" | CHANGE | Status: an appearance noted in an aside is promoted to a claim that evidence exists | Introduction: unsupported promotion | S |
| J+concept | adds the dictionary's sense of a term | IF the argument turns on the term, CHANGE | Op: definition | P-ops: definition | |
| J-intensifier | drops precisely, exactly, strictly, entirely, wholly, absolutely, quite, really, utterly | IF the word is strictly, precisely, exactly, entirely or wholly and qualifies the claim's criterion or extent, CHANGE | Scope | P-phrases: "properly speaking introduces a stricter criterion" | |
| J-word | a plainer word for the same sense | NO (paraphrase control) | | | |
| J+word | a more exact word for the same sense | IF the new word is narrower (a hyponym), CHANGE | Scope narrowed | | |
| J+most | "obscurest" becomes "most obscure" | NO (paraphrase control) | | | |

## Summary

- 60 devices: 13 unconditional CHANGE, 23 unconditional NO, 24 conditional.
- All 7 of Converse's stance devices are CHANGE here, so TPOP and the stance flag agree on them.
- TPOP predicts CHANGE, outright or under a condition, for 30 devices Converse does not flag
  (6 outright: A-cleft, C-word, T+close, T+remains, T+test, T+ask). Those 30 are where the test can
  separate TPOP from the cheap rule.
- 4 devices are paraphrase controls (R+word, J-word, J+for, J+most), and R-join tests Chapter 8's
  claim that adjacency adds no relation. TPOP fails on them if readers report changes that are not dictionary errors, or if readers infer
  relations from a semicolon join.

## Open questions for review

1. The conditional rows are where TPOP's context-dependence lives, and where it is easiest to fit
   after the fact. Should each condition be applied by someone other than Claude, from this sheet,
   before readers see the pairs?
2. Should a pair count as a TPOP hit when readers agree on CHANGE but locate it in a different field
   (for example, Scope where TPOP said Support)? Draft rule: the headline is scored on its own, and
   fields are reported separately and not scored.
3. Is "undertaking changed" the right single question, or should the four reader questions be scored
   separately against the four field groups?
