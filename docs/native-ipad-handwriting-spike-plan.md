# Native iPad Handwriting Spike Plan

## Purpose

This document defines the native spike that should validate handwriting-heavy gameplay on iPad.

It is intentionally narrow. Its job is not to build the whole app. Its job is to answer the highest-risk implementation questions with the least surface area.

## Spike Goal

Prove whether this interaction works well enough on iPad:

1. read a Japanese prompt
2. wait through the `10 second` romaji lockout
3. write the answer using touch or Apple Pencil
4. submit the answer
5. validate it locally

## What The Spike Must Prove

### 1. Input viability

Can a large native text entry surface work well enough with Scribble-style handwriting for Japanese answers?

### 2. Recognition reliability

Is the recognized Japanese text accurate enough for strict deterministic checking in beginner content?

### 3. UI comfort

Does the character-led split layout feel good on iPad when writing by hand?

### 4. Product pacing

Does the hidden-romaji timer create useful effort rather than frustration?

## Scope

### Included

- single restaurant slice screen
- 3 sample questions
- countdown ring
- delayed romaji reveal
- static answer pills
- large writable answer field
- exact answer checking
- clear / submit actions

### Excluded

- world map
- persistent progress
- custom ink recognition
- stroke order analysis
- network services

## Technical Path

### First implementation

Use:

- `SwiftUI`
- large native text editor
- local exact answer comparison
- Apple Pencil and Scribble as the first handwriting-entry path

Why:

- fastest way to validate the real user interaction
- no API cost
- no infrastructure complexity

### Second implementation only if needed

Explore:

- custom drawing surface
- PencilKit-style ink capture
- recognition handoff from ink to text

That should only happen if the text-entry-based spike proves the core interaction is worth preserving.

## Current Scaffold

Source scaffold added here:

- [apps/ipad-spike/JapaneseHandwritingSpike/README.md](/Users/jared/Projects/Japan/japanese-learning-app/apps/ipad-spike/JapaneseHandwritingSpike/README.md)
- [JapaneseHandwritingSpikeApp.swift](/Users/jared/Projects/Japan/japanese-learning-app/apps/ipad-spike/JapaneseHandwritingSpike/JapaneseHandwritingSpikeApp.swift)
- [LessonModels.swift](/Users/jared/Projects/Japan/japanese-learning-app/apps/ipad-spike/JapaneseHandwritingSpike/LessonModels.swift)
- [ContentView.swift](/Users/jared/Projects/Japan/japanese-learning-app/apps/ipad-spike/JapaneseHandwritingSpike/ContentView.swift)

## Success Criteria

The spike is successful if:

- Japanese answers can be entered comfortably
- the recognition is good enough for a handful of beginner prompts
- the prompt / timer / reveal loop feels good
- the writing-first mechanic still feels like a game, not like a form

## Failure Conditions

The spike fails if:

- handwriting entry is too unreliable
- the iPad text-entry flow fights the interface
- the writing interaction is too slow for normal lesson pacing

If that happens, the next decision is not to abandon the app. The next decision is to test a more controlled native ink pipeline.
