# Progression System

## Purpose

This document defines the non-linear progression model for the Japanese learning app.

## Core Idea

The progression system should behave like a skill graph rather than a straight course.

There are five major concepts:

- `foundations`: reusable language building blocks
- `cities`: top-level trip groupings on the world map
- `categories`: competency groupings inside cities
- `subcategories`: learner-facing lanes inside categories
- `levels`: short playable lesson chunks inside subcategories
- `components`: internal mastery groups inside sublevels

Unlocking depends on prerequisites, not only position in a list.

## Why Non-Linear Progression Matters

A strictly linear course creates two problems:

- it delays high-value travel scenarios behind unrelated content
- it hides the fact that many useful situations share the same language building blocks

Non-linear progression lets the learner:

- build core fundamentals once
- reuse them across multiple areas
- choose between relevant next steps
- feel agency without losing structure

## Progression Layers

### Foundations Layer

Foundations are the most reusable language skills and should unlock broadly across the app.

Example foundation clusters:

- greetings and politeness
- introducing yourself
- yes/no and acknowledgment
- question words
- copula and simple sentence patterns
- requesting and asking permission
- numbers, prices, and counters
- location and existence
- time, dates, and schedules
- common travel verbs
- food basics

### Cities Layer

Cities are the top-level trip domains on the world map.

Example city clusters:

- Tokyo
- Hakone
- Kyoto
- Hiroshima
- Nara
- Osaka

### Categories Layer

Categories are practical situation clusters inside each city.

Example category clusters:

- arrival
- restaurant
- city systems
- shopping
- transit
- temples

### Subcategories Layer

Subcategories sit inside categories and represent a specific subject lane.

Example:

- `Restaurant -> Food Words`
- `Restaurant -> Menu Categories`
- `Restaurant -> Asking What Something Is`

### Levels Layer

Levels sit inside subcategories and organize a single short lesson chunk.

Each level should:

- represent one meaningful chunk of `15-25` questions
- introduce a small amount of new material
- deliberately review earlier material from the same subcategory
- be complete only when all required components are complete

### Components Layer

Components are internal instructional groups inside a level.

Each component should:

- group a small set of material
- enforce mastery before progress
- retry missed items by moving them to the back of the queue

## Dependency Model

Each playable progression object should support:

- `id`
- `type` (`foundation`, `city`, `category`, `subcategory`, or `level`)
- `cityId` if applicable
- `categoryId` if applicable
- `subcategoryId` if applicable
- `title`
- `objective`
- `prerequisiteIds`
- `recommendedNextIds`
- `difficulty`
- `estimatedMinutes`
- `stage`

Dependency rules:

- a city, category, subcategory, or level unlocks only when all required prerequisites are completed
- a foundation item may have zero prerequisites if it is an entry-point foundation
- a completed unit may unlock content in multiple cities
- optional recommended links can suggest next lessons without requiring them

Completion rules:

- a component is complete when all of its items have been answered correctly
- a level is complete when all required components are complete
- a subcategory is complete when all required levels are complete
- a category is complete when all required subcategories are complete
- a city is complete when all required categories are complete

## Area Progression Ladder

Each subcategory should follow a ladder, but not a rigid fixed length.

Anchor stages:

- `Words`
- `Phrases`
- `Simple Conversation`
- `Natural Conversation`

Important constraints:

- these are milestone stages, not the only levels in an area
- levels, not subcategories, are the actual playable lesson chunks

For a true beginner, there must usually be multiple build levels between these stages.

Example build-out for one subcategory:

- `Level 1`: first 15-20 questions with initial words
- `Level 2`: more words plus cumulative review
- `Level 3`: stronger mixed review plus slightly wider vocabulary
- `Level 4`: first phrase work
- `Level 5`: short response recognition
- `Level 6`: simple conversation

This avoids the false jump from "I know a few words" to "I can hold a conversation."

## Recommended Progression Shape

Use a hybrid model:

- hard prerequisites for necessary concepts
- soft recommendations for efficient sequencing

This avoids making the graph feel too rigid while still protecting comprehension.

## Example Unlock Pattern

Example foundational levels:

- `F-01`: Greetings and Politeness
- `F-02`: Basic Questions
- `F-03`: Polite Requests
- `F-04`: Numbers and Prices

Example area levels:

- `R-01`: Restaurant Ordering Basics
- `R-02`: Asking About Ingredients
- `S-01`: Shopping Item Requests
- `S-02`: Dressing Room Requests

Example dependencies:

- `R-01` requires `F-01` and `F-03`
- `R-02` requires `R-01` and `F-02`
- `S-01` requires `F-01` and `F-03`
- `S-02` requires `S-01`

This structure lets one foundational lesson support multiple real-world contexts.

Example category-to-subcategory-to-level progression:

- `Tokyo / Restaurant / Food Words / Level 1`: drinks and staples
- `Tokyo / Restaurant / Food Words / Level 2`: proteins and sides
- `Tokyo / Restaurant / Food Words / Level 3`: mixed menu items review
- `Tokyo / Restaurant / Menu Categories / Level 1`: basic headings
- `Tokyo / Restaurant / Menu Categories / Level 2`: savory headings

Possible dependencies:

- `AIR-01` requires `F-01`
- `AIR-02` requires `AIR-01`
- `AIR-03` requires `AIR-02` and `F-02`
- `AIR-04` requires `AIR-03` and `F-03`
- `AIR-05` requires `AIR-04`
- `AIR-06` requires `AIR-05` and `F-04`

## Unlocking Philosophy

The app should avoid both extremes:

- too open, where the learner is overwhelmed
- too locked down, where the learner feels trapped

The learner should usually have:

- one clearly recommended next sublevel or level
- two to four alternate unlocked options elsewhere on the map
- visible explanation for why something is locked

## UX Implications

The progression system should make dependencies understandable.

Recommended UI concepts:

- world map view
- city clusters connected by unlock paths
- categories visible as navigation nodes
- subcategories visible as selectable map items
- levels handled inside the lesson runtime or subcategory progression state
- lock states that explain missing prerequisites
- "Because you completed X, you unlocked Y" moments
- clear distinction between required and recommended next steps

## Review and Mastery

Completion should not mean permanent mastery.

The system should track:

- completed
- needs review
- strong

This can support later spaced repetition without altering the core unlock graph.

At runtime, mastery is enforced first at the component level:

- wrong answers return to the back of the current component queue
- the player must clear the full component before advancing

## Design Risks

- too many dependencies could feel complicated
- overly abstract foundations may feel disconnected from real travel use
- area levels could accidentally duplicate one another
- unlocking logic may become hard to maintain without a clear content schema

## Planning Guidance

When creating new levels and sublevels:

- start with the real-world scenario
- define which anchor stage each sublevel belongs to
- identify the minimum language concepts needed
- connect it to existing foundations whenever possible
- only create new foundations when reuse justifies them
- keep each level's objective narrow
- add intermediate build levels whenever the next stage would otherwise feel like a leap
- break sublevels into internal components that can enforce mastery cleanly

## Open Decisions

- whether areas should visually resemble neighborhoods on a map
- how many entry-point foundations should exist at launch
- whether some area levels should be skippable if the user already knows the prerequisite concepts
- how much freedom the learner should have to jump ahead
