# Japanese Handwriting Spike

This folder contains the first native iPad handwriting spike scaffold.

## Goal

Prove the hardest product risk in isolation:

- timer-based romaji reveal
- static Japanese reference choices
- large writable answer field
- exact local answer validation
- Apple Pencil / Scribble-friendly input path

## Current Approach

The spike intentionally uses a large native text editor instead of a custom ink-recognition canvas.

That is the correct first test because it answers:

- can the interface feel right on iPad
- can Scribble-style handwriting text entry be usable enough
- can local deterministic answer checking work for Japanese answers

## Files

- `JapaneseHandwritingSpikeApp.swift`
- `ContentView.swift`
- `LessonModels.swift`

## Next Native Step

If this spike feels promising, the next prototype should test:

- custom drawing canvas
- native ink capture
- recognition handoff from freehand writing to text validation

That should be a separate experiment from the first UI spike.
