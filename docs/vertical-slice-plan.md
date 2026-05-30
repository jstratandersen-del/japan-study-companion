# Vertical Slice Plan

## Purpose

This document defines the first vertical slice that should be built for the app.

The vertical slice should prove that the product works across all of its critical layers:

- curriculum structure
- in-game interface
- progression and completion
- handwriting answer flow
- character-driven scene identity

## Recommended First Slice

Build the first vertical slice around:

- `Restaurant`
- specifically `R-L1 Menu Basics`
- and `R-L2 Ordering Basics`

This is the right first slice because it gives us:

- practical vocabulary
- Japanese reading
- phrase-building
- one early guided interaction
- a strong visual character identity

It also avoids some of the highest technical ambiguity of trains and airport routing while still being representative of the game.

## Vertical Slice Goal

The slice is successful if a user can:

1. enter the map
2. open the `Restaurant` location
3. open a sublevel
4. see the guide character and prompt interface
5. wait for the romaji timer behavior if needed
6. handwrite a Japanese answer
7. submit the answer
8. get deterministic correctness feedback
9. complete components and finish a sublevel

## Scope

### Included

- one location: `Restaurant`
- two levels:
  - `R-L1 Menu Basics`
  - `R-L2 Ordering Basics`
- six sublevels total for the slice:
  - `R-L1-S1 Food Words`
  - `R-L1-S2 Menu Categories`
  - `R-L1-S3 Reading a Simple Menu`
  - `R-L1-S4 Asking What Something Is`
  - `R-L2-S1 Pointing and Ordering One Item`
  - `R-L2-S2 Ordering a Drink`

### Optional if time allows

- `R-L2-S3 Quantity and "Same as That"`
- `R-L2-S4 Putting Together a Basic Order`

### Excluded from first slice

- full world map polish
- bonus locations
- advanced natural conversation
- fuzzy answer matching
- generalized content authoring tools

## Product Questions This Slice Must Answer

### 1. Interface Question

Does the prototype-style screen actually feel good in real use?

### 2. Handwriting Question

Can we get reliable enough Japanese handwriting recognition on iPad without a paid AI API?

### 3. Curriculum Question

Does the component loop make the learner feel they are genuinely building up to meaning, not just answering random prompts?

### 4. Pacing Question

Does the hidden-romaji delay create productive effort or just friction?

## Required Systems

The vertical slice needs the following systems to be real:

- question runtime
- component queue and retry behavior
- countdown timer
- romaji fade-in
- handwriting capture
- local answer validation
- completion state for components and sublevels

## Slice UX Standard

For the first slice:

- use one strong guide character image for `Restaurant`
- show the large central prompt
- show four static answer pills
- hide romaji at first
- reveal romaji after `10 seconds`
- show a visible circular countdown
- show handwriting area only as the real answer input
- reveal submit only after stroke input exists

## Answer Validation Standard

For the first slice, keep validation strict and predictable:

- exact expected answer
- optional explicitly whitelisted alternate form
- no semantic fuzzy matching
- no AI interpretation layer

## Asset Needs

The first slice needs:

- one restaurant guide character
- one or two background variants if needed later
- one clean UI reference board
- prompt content for the included sublevels

## Output of This Planning Phase

This planning phase should produce:

- a slice-ready content pack
- a character art prompt manifest
- a folder structure for art and slice content

Those outputs are now being created alongside this document.
