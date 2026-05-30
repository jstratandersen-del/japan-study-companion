# Restaurant Curriculum Development

## Purpose

This document starts the actual curriculum development work for the `Restaurant` location.

The main correction is simple:

- the interface is already engaging
- the curriculum underneath it was still too demo-like
- this pass rewrites the early restaurant content as a real zero-experience beginner flow

## Curriculum Design Decision

The first playable restaurant experience should not start with:

- full polite phrases
- kanji-heavy production
- sentence recall before word recognition

It should start with:

1. a very small set of high-value nouns
2. repeated recognition in Japanese
3. meaning checks
4. supported recall
5. only then phrase-building in the next sublevel

## Restaurant Early-Game Ladder

The first restaurant ladder should build like this:

1. `R-L1-S1 Food Words`
2. `R-L1-S2 Menu Categories`
3. `R-L1-S3 Reading a Simple Menu`
4. `R-L1-S4 Asking What Something Is`
5. `R-L2-S1 Pointing and Ordering One Item`

This means the player first learns what common items are, then how menus group them, then how to ask about them, and only after that how to order one.

## First True Beginner Target

The first real sublevel should be `R-L1-S1 Food Words`.

### Player Outcome

- Can recognize and recall 5 very common restaurant words:
  - `お茶`
  - `水`
  - `ご飯`
  - `肉`
  - `魚`

### Why These Items

These work well because they are:

- common in real menus
- useful on the trip
- concrete enough for beginners
- short enough to repeat heavily
- a manageable first memory set

## Learning Ladder Inside `R-L1-S1`

`R-L1-S1` should use the following component order:

1. `vocabulary_intro`
2. `recognition`
3. `matching`
4. `guided_recall`
5. `review`

### Component 1: Vocabulary Intro

Goal:

- first exposure to the 5 target words

What the learner does:

- sees the Japanese
- sees the English
- sees romaji support
- taps through one by one

Pass condition:

- completes all 5 cards once

### Component 2: Recognition

Goal:

- identify the correct Japanese word from a small set

What the learner does:

- sees an English prompt like `Tea`
- chooses the correct Japanese answer

Pass condition:

- gets all items correct
- missed items return to the back of the component queue

### Component 3: Matching

Goal:

- connect Japanese forms and English meanings more quickly

What the learner does:

- sees Japanese and matches to meaning
- or sees meaning and matches to Japanese

Pass condition:

- clears all pairings correctly

### Component 4: Guided Recall

Goal:

- begin producing the Japanese with heavy support still visible

What the learner does:

- sees `Tea`
- sees four Japanese options
- fills or selects the correct answer

This is the closest match to the current web prototype.

### Component 5: Review

Goal:

- prove the learner can still distinguish the 5 words after repetition

What the learner does:

- mixed prompts
- no new language
- one short final loop

## Difficulty Rules for the First Restaurant Sublevel

For `R-L1-S1`:

- no full phrases
- no particles
- no quantities
- no server questions
- no conversation repair
- no more than 5 brand-new lexical items

The sublevel is successful if it creates durable familiarity, not if it makes the learner feel impressive.

## What Comes Immediately After

The next logical progression is:

### `R-L1-S2 Menu Categories`

Introduce:

- `飲み物`
- `ご飯もの`
- `魚`
- `肉`

Goal:

- understand which kinds of items belong in which menu areas

### `R-L2-S1 Pointing and Ordering One Item`

Introduce exactly one new frame:

- `これをお願いします`

Then reuse the `R-L1-S1` nouns inside that frame later.

Example progression:

- `これ`
- `これを`
- `これをお願いします`
- point + item recognition
- short order selection

## Implication for the Web Slice

The current web slice should temporarily behave like a `guided_recall` component inside `R-L1-S1`, not like a broad sample of random restaurant content.

That means the live question set should focus on:

- `Tea`
- `Water`
- `Rice`
- `Meat`
- `Fish`

Only after that should the slice move toward:

- `What is this?`
- `This one, please.`
- `Tea, please.`

## Next Authoring Priority

After `R-L1-S1` is complete, the next files to author should be:

1. `R-L1-S2 Menu Categories`
2. `R-L2-S1 Pointing and Ordering One Item`
3. `R-L1-S4 Asking What Something Is`

That order keeps the build from nouns to phrase use coherent.
