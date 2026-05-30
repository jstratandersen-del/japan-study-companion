# World Map Structure

## Purpose

This document defines the game layout and progression hierarchy for the app.

## Hierarchy

The world map contains four visible progression layers:

1. `World Map`
2. `Cities`
3. `Categories`
4. `Subcategories`

Inside each sublevel, there is one non-visible instructional layer:

5. `Levels`
6. `Components`

## What Each Layer Means

### 1. World Map

The world map is the top-level navigation surface.

It contains:

- all locations
- all levels inside locations
- all sublevels inside levels

The world map is where unlocks become visible.

### 2. Cities

Cities are the equivalent of worlds in a platform game.

Examples:

- Tokyo
- Hakone
- Kyoto
- Hiroshima
- Nara
- Osaka

Cities are primarily navigation and trip grouping.

They are not the direct playable unit.

### 3. Categories

Categories sit inside cities.

Example:

- City: `Tokyo`
- Category: `Restaurant`

Categories are still mostly navigation and organization.

They represent a practical competency area.

Categories can unlock other categories in the same city or a different city.

Categories are non-linear once unlocked.

### 4. Subcategories

Subcategories sit inside categories.

Example:

- Category: `Restaurant`
- Subcategory: `Food Words`

Subcategories are not the smallest learning unit anymore.

Important rules:

- subcategories are the learner-facing competency lanes inside a category
- each subcategory can contain multiple internal levels
- the parent category is not complete until all required subcategories are complete

### 5. Levels

Levels live inside subcategories.

These are the actual lesson chunks the player plays.

Each level should:

- contain roughly `15-25` questions
- introduce a small amount of new language
- deliberately practice earlier material
- feel short enough to finish in one focused session

Example:

- Subcategory: `Food Words`
- Level 1: drinks and staples
- Level 2: proteins and sides
- Level 3: mixed menu items review

### 6. Components

Components live inside levels.

They are internal instructional groups, not player-facing map objects.

Examples:

- basic vocabulary group
- review group
- word combination group
- short phrase group
- flashcard group

Components should not need separate map markers or world-map presence.

## Unlock Rules

### Location Unlocks

Locations unlock based on progression.

A completed level may unlock:

- a new location
- a new level in an existing location
- multiple levels in multiple locations

### Category Unlocks

Categories unlock non-linearly.

Once unlocked:

- the user may choose them in any order
- completion of one category may unlock several other categories elsewhere

### Subcategory Unlocks

Subcategories should stay visible on the map and can unlock non-linearly as needed.

However, your current rule is:

- subcategories inside a category are not necessarily linear in overall world progression
- but inside a given subcategory, the internal levels are the set of required playable units for completion

Product implication:

- a subcategory should track completion across all its internal levels
- the subcategory is complete only when every required internal level is complete

## Gameplay Interface Model

When the user taps a subcategory, the app opens the game interface at the next appropriate internal level.

The game interface contains:

- the current subcategory
- the current level inside that subcategory
- the current component inside that level
- the current question or task inside that component

This is the actual learning runtime.

## Component Mastery Rule

Components exist to enforce understanding before progression.

Rule:

- if the user gets a question wrong inside a component, that question moves to the back of the component queue
- the user must eventually answer all items in the component correctly to clear the component
- the user must clear all required components to finish the sublevel

This means progression is mastery-based, not exposure-based.

## Completion Logic

### Component Complete

A component is complete when all of its items have been answered correctly.

### Level Complete

A level is complete when all required components are complete.

### Subcategory Complete

A subcategory is complete when all of its required levels are complete.

### Category Complete

A category is complete when all of its subcategories are complete.

### City Complete

A city is complete when all required categories in that city are complete.

## Why This Structure Matters

This solves several design problems:

- the map stays visually clean because cities, categories, and subcategories stay stable
- the learner gets non-linear strategic choice at the map layer
- the app still gets enough content density by stacking multiple levels under each subcategory
- content can be broken into smaller meaningful units without cluttering the main navigation

## Example

City:

- `Tokyo`

Category:

- `Restaurant`

Subcategory:

- `Food Words`

Levels inside `Food Words`:

- `Level 1`
- `Level 2`
- `Level 3`

Components inside `Food Words / Level 1`:

- menu vocabulary
- menu item recognition
- short menu phrases
- quick review

The player sees the city, the category, and the subcategory. The internal level and component structure is used to create enough repeated practice to actually learn the material.
