# Product Requirements Document

## Product Name

Japan Study Companion

## Summary

Japan Study Companion is a private, mobile-first Japanese learning app for one traveler preparing for a summer trip to Japan. The app is designed for `iPhone` and `iPad` and focuses on practical, real-world Japanese tied to the user's actual itinerary rather than a generic academic curriculum.

The product combines:

- foundational language building blocks
- place- and situation-based learning areas
- lightweight gamification inspired by progression systems like Duolingo
- a non-linear dependency model so content unlocks based on needed language concepts rather than a strict one-path course

## Problem

Most Japanese learning tools are either:

- too broad and academic for short-term travel prep
- too phrasebook-like to build real understanding
- too linear, forcing the learner through irrelevant units before reaching high-value travel situations

For this trip, the user needs an app that teaches:

- useful Japanese for likely real encounters
- enough structure to adapt phrases instead of memorizing scripts
- location- and activity-relevant vocabulary
- confidence-building repetition in a format that is motivating to use daily

## Vision

Build a personal study app that helps the user become functionally capable in the specific situations most likely to happen during the Japan trip, while still learning enough core Japanese structure to generalize across contexts.

## Product Principles

- Practical before comprehensive: prioritize phrases and patterns that are likely to be used on the trip.
- Itinerary-driven: organize higher-level content around real places, activities, and interactions from the trip.
- Mobile-first: optimize for short study sessions on `iPhone` and more comfortable review/planning on `iPad`.
- Learn patterns, not just scripts: teach reusable sentence building blocks, not only fixed phrases.
- Non-linear progression: unlock content based on concept readiness, not only sequence position.
- Personal by default: no need for multi-user, social, monetization, or marketplace features.

## Goals

- Help the user build useful travel Japanese before departure.
- Make study feel motivating through gamified progress and clear unlocks.
- Organize learning into both foundational tracks and situational areas.
- Support quick daily practice in short sessions.
- Tailor learning to the known trip plan for September 17-26, 2026.

## Non-Goals

- Selling or publishing the app
- Supporting multiple users
- Building a generalized Japanese curriculum for all learners
- Teaching advanced reading/writing as the primary goal
- Replacing a full textbook or formal language program

## Target User

Primary user:

- one traveler preparing for a summer trip to Japan
- motivated by practical outcomes over theory
- studying on personal Apple devices
- willing to learn fundamentals if clearly connected to real-world use

## Platforms

Primary platforms:

- `iPhone`: support device for study and review
- `iPad`: primary target for richer in-game interaction and handwriting input

Platform assumptions:

- touch-first navigation
- offline-friendly learning is desirable
- short-session usability matters more than dense screen complexity
- handwriting-heavy gameplay may require native iPad capabilities

## User Needs

- "Teach me what I am actually likely to hear and say."
- "Help me build confidence for specific places and interactions."
- "Make the path feel rewarding without forcing irrelevant lessons."
- "Let me revisit weak areas and see visible progress."
- "Teach enough grammar and structure that I can adapt phrases."

## Core Product Concept

The app has two overlapping progression systems:

### 1. Foundations

Foundations teach core building blocks such as:

- greetings and politeness
- sentence structure basics
- question forms
- numbers and counters
- common verbs
- requests
- existence and location
- time and scheduling
- food and ordering basics

These act as prerequisites for situational learning.

### 2. Locations

Locations represent real places or situations, such as:

- airport
- train station
- hotel
- convenience store
- restaurant
- shopping mall
- shrine or temple
- pharmacy
- asking for directions

Each location contains scenario-based levels using the foundation concepts required for that situation.

Locations should not be forced to have a fixed number of levels. Each level inside a location can contain as many sublevels as necessary to support believable progression from zero experience upward.

### 3. World Map Structure

The app should use a game-like hierarchy:

- `World Map`
- `Locations`
- `Levels`
- `Sublevels`

Only sublevels should launch the actual game interface.

Locations and levels are primarily for:

- visual navigation
- thematic organization
- unlock feedback

Inside each sublevel, the instructional runtime is further divided into internal `components` that are not represented as map objects.

### 4. Itinerary View

The app should also support an itinerary-shaped view of the curriculum, where areas can be grouped under real trip segments such as:

- Tokyo arrival
- Asakusa and Tsukiji
- Shibuya, Harajuku, and Akihabara
- Hakone transit and ryokan
- Kyoto shrines, markets, and shopping
- Nara and Osaka day trips
- Tokyo departure and Haneda return

This is not a separate learning system, but a personalized lens over the same underlying content graph.

## Key Product Differentiator

The app's uniqueness comes from combining:

- itinerary-specific learning themes
- scenario-focused practice
- non-linear unlocks based on concept dependencies

Instead of a flat phrasebook or a strict linear course, the app behaves more like a skill graph.

## Progression Model

The app should use a directed progression graph, not a single sequence.

Structure:

- `locations` are grouped by context or place
- `levels` are competency groupings inside locations
- `sublevels` are the actual playable units
- `prerequisites` determine unlocks across the map
- completed items can unlock levels in the same or different locations

Example:

- `Polite Requests 1` may unlock:
  - `Restaurant: Ordering Basics`
  - `Shopping: Asking to See an Item`
  - `Mall: Dressing Room Requests`
- `Numbers and Counters` may unlock:
  - `Shopping: Sizes and Quantities`
  - `Restaurant: Counting Items`
  - `Transit: Platform Numbers`

Important completion rule:

- a level is not complete until all of its sublevels are complete

## Gamification

The app should include light but meaningful gamification.

Desired elements:

- locations and levels shown on a world map
- sublevels as the playable entry points
- visible completion at location, level, and sublevel granularity
- XP or progress points
- streak tracking
- unlockable lessons based on dependencies
- badges or milestones for area mastery
- progress feedback tied to readiness for real-world scenarios

Gamification should encourage consistency without making the product feel childish or distracting.

## Learning Design

Each sublevel should focus on one practical outcome and one small set of language concepts.

A typical sublevel may include:

- internal components for staged mastery
- vocabulary in context
- review and reinforcement
- phrase-building practice
- scenario-based recognition or production
- short completion check

Sublevels should avoid overloading the learner with too many concepts at once.

Component behavior should enforce mastery:

- wrong answers return to the back of the current component queue
- every item in the component must eventually be answered correctly
- the user cannot advance to the next component until the current one is cleared

The app must explicitly assume zero Japanese experience at the start. That means:

- very early levels should teach single words and short combinations before full phrases
- conversation levels should only appear after enough structured build-up
- "natural conversation" should be treated as late early-stage fluency inside a topic, not true open-ended fluency

## Content Model

Each content unit should eventually support:

- location
- title
- level
- sublevel
- scenario
- learning objective
- target phrases
- vocabulary list
- grammar/building blocks
- prerequisite IDs
- follow-up unlock IDs
- difficulty estimate
- expected session length

Sublevel-level metadata should also support:

- `stage` such as `words`, `phrases`, `build`, `simple_conversation`, or `natural_conversation`
- `entryLevel` boolean for the first level in a location
- `conversationDepth` to distinguish scripted exchange from flexible exchange

Component-level metadata should support:

- `componentType`
- `items`
- `masteryRule`
- `retryBehavior`

## Primary Use Cases

- Study for 5 to 10 minutes during a normal day.
- Review a specific topic like ordering food or shopping.
- Practice phrases relevant to a place on the itinerary.
- Unlock the next useful scenario by completing prerequisite fundamentals.
- Revisit weak concepts before the trip.

## Information Architecture

Primary app sections:

- Home
- Progress Map
- Locations
- Review
- Profile or Stats

Suggested behavior:

- `Home`: next recommended lesson, streak, quick resume
- `Progress Map`: non-linear view of foundations and area unlocks
- `Locations`: browse by place or topic
- `Review`: spaced repetition or weak-skill refresh
- `Profile/Stats`: progress, completed levels, milestones

## Functional Requirements

### Must Have for V1

- mobile-first interface for `iPhone` and `iPad`
- in-game interaction that works well on `iPad` with touch and handwriting
- foundations and areas as separate but connected structures
- non-linear lesson unlocking via prerequisites
- lesson metadata model that supports dependencies
- progress tracking by level and area
- basic XP or completion feedback
- review flow for completed content
- content structure ready for itinerary-based customization

### Nice to Have Later

- audio pronunciation support
- speech practice
- offline mode
- pre-trip countdown or trip mode
- itinerary calendar tie-ins
- phrase packs for specific cities or venues

## Interaction Direction

The lesson interface should support:

- location-specific guide characters
- a large central prompt
- handwriting-based answer entry for selected question types
- static visual multiple-choice scaffolding
- delayed romaji reveal after a visible countdown

Because handwriting recognition is a core mechanic, the product should be planned around native-capable iPad interaction rather than a browser-only assumption.

## Content Strategy

Content will be developed in phases:

### Phase 1

Create universal travel foundations and a starter set of common area templates.

### Phase 2

Map the known itinerary into custom city and activity subtracks.

### Phase 3

Refine recommendations, reviews, and weak-skill repetition based on usage.

## Success Criteria

Because this is a private app, success should be measured by usefulness rather than business metrics.

Primary success signals:

- the user can study consistently in short sessions
- the user feels increasing confidence for likely travel interactions
- the user can reach relevant travel scenarios early without waiting on irrelevant content
- the dependency system feels coherent rather than confusing
- the user can identify upcoming-day lessons that match the trip plan

## Open Questions

- Which activities from the current itinerary are true personal priorities versus optional extras?
- How much emphasis should there be on reading kana versus romanized support early on?
- Should speaking practice be part of V1 planning or deferred?
- Should the progression map feel more like a geographic map, a skill tree, or a hybrid?

## Immediate Next Planning Steps

- define the lesson graph model in more detail
- define the area taxonomy and foundation taxonomy
- convert the itinerary content map into an initial set of concrete levels
- decide the fidelity of gamification for V1
- prioritize which itinerary subtracks appear first in the product
