# Content Authoring Standard

## Purpose

This document defines the minimum standard for authoring locations, levels, sublevels, components, and questions.

Without this, the curriculum will drift into inconsistent difficulty, redundant content, and arbitrary unlocks.

## Authoring Order

Always author in this order:

1. define the real-world outcome
2. define the level
3. define the sublevels
4. define the component sequence
5. define the exact target language
6. define the prerequisite links
7. define the mastery checks

Do not start by writing random questions.

## Level Standard

Each level must have:

- `id`
- `locationId`
- `title`
- `oneSentenceGoal`
- `whyItExists`
- `hardPrerequisiteIds`
- `softPrerequisiteIds`
- `unlockTargets`

Each level should correspond to one practical competency, not a loose theme.

Bad example:

- `Tokyo Food Stuff`

Good example:

- `Ordering Basics`

## Sublevel Standard

Each sublevel must have:

- `id`
- `levelId`
- `title`
- `stage`
- `playerOutcome`
- `estimatedMinutes`
- `componentIds`
- `hardPrerequisiteIds`

The `playerOutcome` should be written as a can-do statement.

Examples:

- `Can recognize 8 common drink and food words`
- `Can ask for one item by pointing`
- `Can understand the server asking what drink they want`

## Component Standard

Each component must have:

- `id`
- `sublevelId`
- `componentType`
- `goal`
- `itemCount`
- `masteryRule`
- `retryBehavior`

Allowed default component types:

- `vocabulary_intro`
- `recognition`
- `matching`
- `assembly`
- `substitution`
- `response_recognition`
- `guided_dialogue`
- `review`
- `scenario_check`

Default mastery rule:

- all items must be answered correctly

Default retry behavior:

- missed items go to the back of the current component queue

## Question Standard

Each question must have:

- `id`
- `componentId`
- `promptType`
- `targetSkill`
- `content`
- `correctAnswer`
- `distractors` when relevant
- `feedback`

Allowed prompt types:

- multiple choice
- tap order
- match pair
- audio recognition
- image recognition
- phrase assembly
- scenario response

## Difficulty Control Rules

To keep the curriculum coherent:

- do not introduce more than one new grammar frame per early sublevel
- do not introduce more than 8 to 12 brand-new lexical items in a single beginner sublevel
- do not introduce conversation until the relevant nouns, phrase frames, and likely responses have already been seen
- do not require production before recognition has been practiced

## Prerequisite Rules

Use hard prerequisites only when comprehension truly depends on prior mastery.

Use soft prerequisites when:

- a prior skill helps but is not mandatory
- a level should be visible earlier for motivation
- the learner can still succeed with more difficulty

Bad hard prerequisite:

- locking every food-related level behind unrelated hotel content

Good hard prerequisite:

- locking `Ordering Basics` behind `Requests`

## Compression Rules for Bonus Areas

Bonus areas should be shorter by design.

Allowed compression tactics:

- combine `Words` and `Word Combinations`
- combine `Response Recognition` and `Simple Conversation`
- end with a short bounded scenario instead of a full natural-conversation sequence

Bonus areas should not become mandatory blockers for core progression.

## Anti-Patterns

Avoid:

- synonym-heavy vocabulary dumps
- grammar-first lessons with no travel use
- multiple sublevels that test the same skill with different labels
- full conversations before response recognition
- unlocks based only on theme instead of actual linguistic dependency

## Minimum Review Standard

Every sublevel should include at least one review component.

Every level should reuse at least one earlier phrase frame in a new context.

Every core location should reinforce at least one foundation block:

- requests
- numbers and time
- movement
- clarification

## Definition of Done

A level is ready only when:

- the real-world outcome is clear
- every sublevel has a distinct function
- every component has a mastery rule
- prerequisites are defensible
- the final sublevel actually proves the intended competency
