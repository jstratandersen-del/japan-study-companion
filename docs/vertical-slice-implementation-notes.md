# Vertical Slice Implementation Notes

## Purpose

This note explains the first implementation choices used in the prototype slice.

## Current Technical Choice

The current vertical-slice prototype uses:

- a large handwriting-friendly text area
- exact local answer comparison
- static reference answer pills
- delayed romaji reveal after `10 seconds`
- circular countdown timer

## Why This Choice Was Made

The handwriting-recognition problem is the highest-risk part of the product.

For the first working slice, the most practical approach is:

- let iPad users rely on native Scribble behavior in a writable text field
- keep answer validation deterministic and local
- prove the pacing and interface before building a custom ink-recognition path

This gives us a real writable Japanese-answer loop now, while still preserving the broader native handwriting direction for a later spike.

## What This Prototype Proves

- prompt pacing
- romaji reveal behavior
- static-answer scaffolding
- answer submission flow
- correctness feedback
- question-to-question progression

## What It Does Not Yet Prove

- custom freehand ink recognition from a canvas
- stroke-level kanji or kana recognition
- Apple Pencil-specific custom handwriting capture

Those should be handled as a dedicated native-input prototype after the vertical slice UI feels correct.
