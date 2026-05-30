# In-Game Interface and Input Strategy

## Purpose

This document defines the target in-game lesson interface and the recommended strategy for handwriting input.

It is based on the current prototype and the requirement that handwriting recognition should avoid paid AI APIs.

## Prototype Direction

The current prototype points to a strong interface direction:

- one scene-specific guide character per place
- large central prompt area
- static multiple-choice answer pills used as visual scaffolding
- hidden romaji that appears after a delay
- handwriting input as the actual response mechanism
- visible timer pressure before romaji assist appears

This is a coherent interaction model. It is more interesting than a normal flashcard UI and it fits the game framing.

## Core UI Layout

The gameplay screen should be built around five zones.

### 1. Header

Contains:

- location name
- level or sublevel name
- possibly progress within the sublevel

### 2. Main Prompt Stage

Contains:

- the active word, phrase, or question
- large typography
- Japanese text first when relevant
- romaji beneath only when required by the question type

Prompt examples:

- English prompt: `Tea`
- English prompt: `How do you say "tea"?`
- Japanese prompt: `元気です`
- Japanese prompt with support: `元気です` with `genki desu` beneath

### 3. Character Panel

Contains:

- location-specific guide character art
- optional speech line or reaction
- visual identity for the place

This should remain a strong visual reward, not just decoration.

### 4. Answer Reference Zone

Contains:

- four static pill options
- Japanese answer text visible immediately
- romaji initially hidden at `0%` opacity

Behavior:

- the pills are not buttons
- they exist as reference and reading support
- the learner answers by handwriting, not tapping

### 5. Writing and Submission Zone

Contains:

- handwriting area
- clear active writing surface
- submit button hidden until ink exists
- optional clear / erase control

## Timer Behavior

The romaji reveal mechanic is good and should stay.

Recommended behavior:

- start a `10 second` timer when the prompt appears
- show a circular countdown indicator
- keep romaji hidden during the countdown
- after `10 seconds`, animate romaji from `0%` to `100%` opacity over `1 second`

Why this works:

- it nudges Japanese-first reading
- it still provides relief for beginners
- it creates light pressure without punishing the learner

## Recommended Input Model

The handwriting requirement changes the architecture decision.

### Recommendation

Prefer a native `iPad` app, or at minimum a wrapper that can use native Apple handwriting features.

Reason:

- the operating system already supports on-device handwriting-to-text behavior with Apple Pencil through Scribble in text fields
- handwriting conversion happens on-device, which avoids API cost and privacy issues
- the mechanic is much harder to make reliable in a browser-only setup

## Technical Recommendation

### Best practical option

Use:

- a handwriting canvas for visual input
- a hidden or controlled native text input path for handwriting recognition
- Apple Pencil / Scribble behavior on supported iPads

This gives the best chance of:

- no per-request API cost
- acceptable recognition quality
- low latency
- device-native feel

## Important Constraint

There is a real implementation risk here:

- Apple provides strong user-facing handwriting conversion behavior
- but that does not automatically mean the exact recognition pipeline you want is exposed in the perfect programmable form for a custom game canvas

So the product decision should be:

- design the game around native input first
- validate the exact handwriting-capture approach with a technical prototype before committing the entire app architecture

## Architecture Recommendation

### Preferred

`SwiftUI` or UIKit-based native iPad app

Why:

- best path to Apple Pencil support
- best path to Scribble-compatible text entry behavior
- best path to low-latency drawing and recognition

### Acceptable fallback

Hybrid shell with native input surface for the handwriting zone

Why:

- preserves some cross-platform flexibility
- still gives access to native handwriting behavior where it matters

### Not recommended as primary path

Pure browser-only app for the handwriting mechanic

Why:

- handwriting recognition becomes the hardest part of the system
- matching Japanese handwritten input reliably without OS-native help becomes much more fragile
- likely pushes you toward third-party recognition or AI services later

## Answer Validation Strategy

The cleanest first-pass validation approach is:

1. capture handwriting
2. convert it to recognized text locally on device
3. normalize the result
4. compare against accepted answers

Normalization should account for:

- whitespace
- full-width vs half-width characters where relevant
- accepted kana or kanji variants if you choose to allow them
- exact expected politeness form

## Acceptance Policy

The curriculum needs a clear rule for what counts as correct.

Recommended first-pass rule:

- accept the exact expected answer
- optionally accept one or two explicitly defined alternate forms
- do not try to infer "close enough" with fuzzy matching at launch

Reason:

- fuzzy matching becomes hard to reason about
- handwriting recognition already introduces uncertainty
- keep correctness deterministic at first

## Suggested Question Modes

This interface can support several modes cleanly.

### Mode A: English to Japanese Recall

Prompt:

- `Tea`

Expected output:

- learner writes the Japanese answer

### Mode B: Japanese Reading Recognition

Prompt:

- Japanese text shown large

Reference pills:

- candidate readings or meanings

Expected output:

- learner writes the reading or translation depending on the lesson goal

### Mode C: Phrase Completion

Prompt:

- short English or Japanese phrase

Expected output:

- learner writes the missing Japanese chunk

### Mode D: Guided Character Practice

Prompt:

- show the target answer and ask the learner to reproduce it

Expected output:

- handwriting used more for memorization and motor familiarity than recall

This mode is useful very early, before full recall is realistic.

## Usability Recommendations

- keep the writing area large
- allow easy erase and retry
- do not force handwriting on every single question
- mix handwriting questions with recognition questions
- use handwriting primarily for high-value recall checks, not for every repetition

This matters because full handwriting input is cognitively heavier than tapping.

## Product Risk

The biggest risk is not UI design. The biggest risk is handwriting recognition reliability for Japanese input in a custom experience.

So the correct sequence is:

1. keep the interface direction
2. commit to native-first input strategy
3. prototype the handwriting recognition path early
4. only then lock implementation stack choices

## Recommendation

For this product, the right answer is:

- keep this interface direction
- plan around an `iPad-first native build`
- prototype the handwriting recognition mechanic before broader app implementation
- use the static pills and delayed romaji reveal exactly as training scaffolding, not as tap answers

## Source Notes

Relevant official references reviewed while shaping this recommendation:

- Apple Support says Scribble lets you write with Apple Pencil in text fields and converts handwriting to typed text on iPad, on-device and privately.
- Apple Developer documentation for `VNRecognizeTextRequest` indicates the Vision framework supports text recognition features, which is relevant if image-based fallback recognition is explored later.

Links:

- [Enter text with Scribble on iPad](https://support.apple.com/guide/ipad/enter-text-with-scribble-ipad355ab2a7/ipados)
- [Do more with Apple Pencil](https://support.apple.com/en-us/HT211774)
- [VNRecognizeTextRequest](https://developer.apple.com/documentation/vision/vnrecognizetextrequest?language=objc)
