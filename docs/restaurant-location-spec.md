# Restaurant Location Spec

## Purpose

This document is the first concrete implementation example of the world-map model.

It defines `Restaurant` as a playable location with:

- world-map placement intent
- levels
- sublevels
- internal components
- unlock dependencies
- completion rules

The goal is to test whether the abstract structure is usable before defining the rest of the app this way.

## Location Definition

### Location

- `Restaurant`

### Location Goal

Help the learner:

- understand a simple menu
- place a basic order
- handle common server questions
- make one or two simple modifications
- finish the interaction and pay

### Why This Location Matters Early

Restaurant interaction is:

- high frequency on the actual trip
- strongly motivating
- broad enough to teach reusable patterns
- narrow enough to scope into clean game content

## Location Entry Requirements

`Restaurant` should not be the very first location on the map.

Recommended foundational prerequisites:

- `F-01 Social Survival`
- `F-02 Core Structure`
- `F-03 Requests`

Recommended but not strictly required before some later restaurant content:

- `F-04 Numbers, Prices, and Time`
- `F-06 Clarification and Repair`

## Location Structure

The `Restaurant` location is broken into four levels.

1. `R-L1 Menu Basics`
2. `R-L2 Ordering Basics`
3. `R-L3 Server Interaction`
4. `R-L4 Paying and Finishing`

These levels are visible on the map.

Sublevels inside them are the actual playable entries.

## Map-Level Unlock Shape

Recommended initial unlock logic:

- `R-L1 Menu Basics` unlocks first
- finishing `R-L1 Menu Basics` unlocks:
  - `R-L2 Ordering Basics`
  - `Market and Street Food / Basic Ordering`
- finishing `R-L2 Ordering Basics` unlocks:
  - `R-L3 Server Interaction`
  - `Convenience Store / Checkout Basics`
- finishing `R-L3 Server Interaction` unlocks:
  - `R-L4 Paying and Finishing`
  - `Hotel / Asking for Help`
- finishing `R-L4 Paying and Finishing` can unlock:
  - `Cafe / Casual Ordering`
  - `Ryokan / Meal Timing and Questions`

This creates useful crossover without forcing the entire app through one branch.

## Level 1: Menu Basics

### Level Goal

Teach the learner to recognize simple menu language and identify what they might want.

### Sublevels

1. `R-L1-S1 Food Words`
2. `R-L1-S2 Menu Categories`
3. `R-L1-S3 Reading a Simple Menu`
4. `R-L1-S4 Asking What Something Is`

### Recommended Sublevel Dependency Shape

- `R-L1-S1` unlocks `R-L1-S2`
- `R-L1-S2` unlocks `R-L1-S3`
- `R-L1-S3` unlocks `R-L1-S4`

This first level should be mostly linear because the learner has no base yet.

### Sublevel Specs

#### `R-L1-S1 Food Words`

Goal:

- learn core food and drink nouns

Example target items:

- water
- tea
- rice
- meat
- fish
- chicken
- pork
- vegetable
- menu
- drink

Components:

1. vocabulary introduction
2. picture-word matching
3. audio or reading recognition
4. short review loop

#### `R-L1-S2 Menu Categories`

Goal:

- recognize sections like drinks, rice dishes, noodles, desserts

Components:

1. category vocabulary
2. category-to-item matching
3. "find the item under the right heading"
4. review

#### `R-L1-S3 Reading a Simple Menu`

Goal:

- interpret a minimal menu layout

Components:

1. menu layout recognition
2. item-price pairing
3. choose the correct item from a prompt
4. review

#### `R-L1-S4 Asking What Something Is`

Goal:

- use and understand:
  - `Kore wa nan desu ka?`
  - `Osusume wa nan desu ka?`

Components:

1. phrase introduction
2. phrase-piece assembly
3. choose the correct question for the situation
4. short guided exchange
5. review

## Level 2: Ordering Basics

### Level Goal

Teach the learner to place a simple order successfully.

### Sublevels

1. `R-L2-S1 Pointing and Ordering One Item`
2. `R-L2-S2 Ordering a Drink`
3. `R-L2-S3 Quantity and "Same as That"`
4. `R-L2-S4 Putting Together a Basic Order`

### Suggested Dependencies

- `R-L2-S1` requires completion of `R-L1`
- `R-L2-S2` requires `R-L2-S1`
- `R-L2-S3` requires `R-L2-S1` and `F-04`
- `R-L2-S4` requires `R-L2-S2` and `R-L2-S3`

### Sublevel Specs

#### `R-L2-S1 Pointing and Ordering One Item`

Key phrases:

- `Kore o onegaishimasu.`
- `Kore o kudasai.`

Components:

1. phrase vocabulary
2. this/that recognition
3. phrase assembly
4. ordering prompt selection
5. mastery review

#### `R-L2-S2 Ordering a Drink`

Key phrases:

- `Nomimono wa ... onegaishimasu.`
- `Mizu o onegaishimasu.`

Components:

1. drink vocabulary
2. noun substitution
3. phrase construction
4. short order recognition
5. review

#### `R-L2-S3 Quantity and "Same as That"`

Key phrases:

- `Hitotsu onegaishimasu.`
- `Futatsu onegaishimasu.`
- `Ano hito to onaji no o kudasai.`

Components:

1. quantity review
2. quantity + item combinations
3. same-as-that phrase build
4. choose correct phrase by scenario
5. review

#### `R-L2-S4 Putting Together a Basic Order`

Goal:

- combine item, quantity, and politeness into short order turns

Components:

1. mixed phrase assembly
2. choose correct order from mini-menu
3. hear or read server prompt and answer
4. short guided order exchange
5. review

## Level 3: Server Interaction

### Level Goal

Teach the learner to understand and respond to the most common things a server says.

### Sublevels

1. `R-L3-S1 Understanding the Server's First Question`
2. `R-L3-S2 English Menu and Recommendation Questions`
3. `R-L3-S3 Simple Modifications`
4. `R-L3-S4 Clarification and Repair`

### Suggested Dependencies

- `R-L3-S1` requires `R-L2`
- `R-L3-S2` requires `R-L3-S1`
- `R-L3-S3` requires `R-L3-S1` and `F-03`
- `R-L3-S4` requires `R-L3-S2` and `F-06`

### Sublevel Specs

#### `R-L3-S1 Understanding the Server's First Question`

Likely phrases to understand:

- `Go-chuumon wa?`
- `Nomimono wa?`

Components:

1. audio/text recognition of server prompts
2. prompt-to-meaning matching
3. select correct answer
4. short guided exchange
5. review

#### `R-L3-S2 English Menu and Recommendation Questions`

Key phrases:

- `Eigo no menyuu wa arimasu ka?`
- `Osusume wa nan desu ka?`

Components:

1. phrase introduction
2. phrase-piece review
3. choose question by scenario
4. short response interpretation
5. review

#### `R-L3-S3 Simple Modifications`

Key phrases:

- `... nuki de onegaishimasu.`
- `Suupuun / fooku o kudasai.`

Components:

1. removal or utensil vocabulary
2. substitution patterns
3. phrase building
4. scenario choice
5. review

#### `R-L3-S4 Clarification and Repair`

Key phrases:

- `Mou ichido onegaishimasu.`
- `Yukkuri onegaishimasu.`
- `Daijoubu desu.`

Components:

1. repair phrase recognition
2. choose the right repair phrase
3. mixed guided exchange
4. mastery review

## Level 4: Paying and Finishing

### Level Goal

Teach the learner to close the interaction cleanly.

### Sublevels

1. `R-L4-S1 Asking for the Check`
2. `R-L4-S2 Paying Here or at the Register`
3. `R-L4-S3 Card, Cash, and Change`
4. `R-L4-S4 Full Restaurant Flow`

### Suggested Dependencies

- `R-L4-S1` requires `R-L3`
- `R-L4-S2` requires `R-L4-S1`
- `R-L4-S3` requires `R-L4-S2` and `F-04`
- `R-L4-S4` requires all previous sublevels in `R-L4`

### Sublevel Specs

#### `R-L4-S1 Asking for the Check`

Key phrase:

- `Okaikei onegaishimasu.`

Components:

1. phrase introduction
2. phrase recall
3. identify the right moment to use it
4. review

#### `R-L4-S2 Paying Here or at the Register`

Need to understand:

- `Okaikei wa kochira desu.`

Components:

1. phrase recognition
2. meaning matching
3. choose correct response
4. review

#### `R-L4-S3 Card, Cash, and Change`

Key language:

- `Kaado wa tsukaemasu ka?`
- `Genkin nomi desu.`
- `Otsuri desu.`

Components:

1. payment vocabulary
2. payment phrase build
3. understanding payment response
4. review

#### `R-L4-S4 Full Restaurant Flow`

Goal:

- complete a bounded restaurant interaction from menu to payment

Components:

1. choose from a menu
2. place a simple order
3. respond to one server question
4. ask for the check
5. handle payment

This is the first restaurant sublevel that should feel like a real mini-scenario.

## Completion Rules

### Component Rule

Inside every component:

- missed questions return to the back of the queue
- the learner must answer all items correctly before the component clears

### Sublevel Rule

A restaurant sublevel is complete only after all its components are complete.

### Level Rule

A restaurant level is complete only after all its sublevels are complete.

### Location Rule

The `Restaurant` location is complete only after `R-L1` through `R-L4` are complete.

## Why This Layout Works

This location works because it respects the actual learning gradient:

- vocabulary first
- phrase formation second
- predictable question-response third
- flexible interaction last

It also creates reusable crossover:

- `ordering` supports market and street food
- `payment` supports convenience store
- `clarification` supports every other location

## Recommended Follow-Up

If this structure looks right, the next location specs should be:

1. `Convenience Store`
2. `Trains and Stations`
3. `Hotel and Check-In`

Those three will pressure-test whether the model generalizes well across non-restaurant contexts.
