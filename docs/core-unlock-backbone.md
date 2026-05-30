# Core Unlock Backbone

## Purpose

This document defines the first real backbone of the world map.

It answers:

- which core locations open first
- which levels should unlock which other levels
- where cross-location branching starts
- what the minimum viable map spine looks like

This is the backbone for the six highest-priority core locations:

1. Airport
2. Hotel and Check-In
3. Convenience Store
4. Trains and Stations
5. Directions and Street Navigation
6. Restaurant

## Backbone Design Principles

- The player should have a clear starting route.
- Cross-location branching should begin early, but not before the learner has enough structure to make useful choices.
- Early unlocks should feel practical, not thematic.
- The map should open gradually from a survival path into a flexible travel path.

## Foundation Assumptions

This backbone assumes these foundation clusters exist and can unlock map content:

- `F-01 Social Survival`
- `F-02 Core Structure`
- `F-03 Requests`
- `F-04 Numbers, Prices, and Time`
- `F-05 Location and Movement`
- `F-06 Clarification and Repair`

## Recommended Starting State

At the very start, the player should have access to:

- `F-01 Social Survival`
- `F-02 Core Structure`

World map should initially show:

- `Airport`
- `Directions and Street Navigation` as locked but visible
- `Hotel and Check-In` as locked but visible
- `Convenience Store` as locked but visible
- `Trains and Stations` as locked but visible
- `Restaurant` as locked but visible

This makes the world map feel present from the beginning without creating too much choice too early.

## Phase 1: Arrival Survival Spine

This phase teaches the minimum needed to land, move, and check in.

### Step 1

Complete:

- `F-01 Social Survival`

Unlock:

- `AIR-L1 Arrival Signs and Core Words`

### Step 2

Complete:

- `AIR-L1 Arrival Signs and Core Words`

Unlock:

- `DIR-L1 Here, There, and Where?`
- `AIR-L2 Check-In and Passport Basics`

Reason:

- once the player can read simple arrival words and ask where to go, the next useful split is:
  - getting through check-in
  - handling minimal navigation language

### Step 3

Complete:

- `F-02 Core Structure`

Strengthen:

- `AIR-L2`
- `DIR-L1`

### Step 4

Complete:

- `AIR-L2 Check-In and Passport Basics`

Unlock:

- `HOT-L1 Reservation and Check-In Basics`
- `AIR-L3 Queueing, Gates, and Boarding`

Reason:

- airport counter interaction and hotel counter interaction are closely related

### Step 5

Complete:

- `DIR-L1 Here, There, and Where?`

Unlock:

- `DIR-L2 Right, Left, Straight, and Near`
- `CVS-L5 Using the Restroom and Asking Where Things Are`

Reason:

- this creates the first true functional branch from navigation into a practical low-stakes store interaction

## Phase 2: First City Survival

This phase opens the first practical Tokyo-day skills.

### Step 6

Complete:

- `HOT-L1 Reservation and Check-In Basics`

Unlock:

- `HOT-L2 Room, Key, and Hotel Vocabulary`
- `HOT-L3 Breakfast, Timing, and Hotel Services`
- `HOT-L5 Asking the Front Desk for Help`

### Step 7

Complete:

- `F-03 Requests`

Unlock:

- `CVS-L1 Store Words and Food Categories`
- `R-L1 Menu Basics`

Reason:

- requests are the real entry point for both stores and restaurants

### Step 8

Complete:

- `AIR-L4 Arrival Transit Out of the Airport`

Unlock:

- `TRN-L1 Station Signs and Core Train Words`

Reason:

- this makes train content feel earned from the real arrival flow

### Step 9

Complete:

- `DIR-L2 Right, Left, Straight, and Near`

Unlock:

- `DIR-L3 Finding a Place on Foot`
- improve access to `TRN-L1`

## Phase 3: First Major Branching

This is where the map should start feeling meaningfully non-linear.

### Branch A: Convenience Store

Complete:

- `CVS-L1 Store Words and Food Categories`

Unlock:

- `CVS-L2 Choosing an Item and Paying`

Complete:

- `CVS-L2 Choosing an Item and Paying`

Unlock:

- `CVS-L3 Bag, Heating, and Checkout Questions`
- `R-L4 Paying and Finishing` as visible later dependency support

### Branch B: Restaurant

Complete:

- `R-L1 Menu Basics`

Unlock:

- `R-L2 Ordering Basics`
- `MKT-L1 Stall Food Words and Categories` later, once Market is enabled

Complete:

- `R-L2 Ordering Basics`

Unlock:

- `R-L3 Server Interaction`
- `CVS-L2 Choosing an Item and Paying` if not already completed

### Branch C: Trains

Complete:

- `TRN-L1 Station Signs and Core Train Words`

Unlock:

- `TRN-L2 Platform, Exit, and Transfer Basics`
- `DIR-L4 Understanding Short Spoken Directions`

Complete:

- `TRN-L2 Platform, Exit, and Transfer Basics`

Unlock:

- `TRN-L3 Which Train Do I Take?`
- `TRN-L4 Buying Tickets and Using Passes`

## Phase 4: Reinforcement Backbone

This phase makes the major systems connect to each other instead of staying isolated.

### Numbers and Payment Reinforcement

Complete:

- `F-04 Numbers, Prices, and Time`

Unlock or strengthen:

- `R-L2-S3 Quantity and "Same as That"`
- `CVS-L2-S2 One or Two Items`
- `TRN-L4 Buying Tickets and Using Passes`
- `HOT-L3 Breakfast, Timing, and Hotel Services`

### Movement Reinforcement

Complete:

- `F-05 Location and Movement`

Unlock or strengthen:

- `TRN-L3 Which Train Do I Take?`
- `DIR-L3 Finding a Place on Foot`
- `AIR-L4 Arrival Transit Out of the Airport`

### Clarification Reinforcement

Complete:

- `F-06 Clarification and Repair`

Unlock or strengthen:

- `R-L3-S4 Clarification and Repair`
- `TRN-L6 Delays, Wrong Platforms, and Recovery`
- `HOT-L5 Asking the Front Desk for Help`

## Recommended Core Location Unlock Summary

### Airport

Starts first.

Unlock role:

- opens Directions
- opens Hotel
- opens Trains

### Hotel and Check-In

Starts shortly after Airport basics.

Unlock role:

- opens practical hotel support
- later supports Ryokan and some help-oriented branches

### Convenience Store

Starts after Requests.

Unlock role:

- gives low-pressure purchasing confidence
- reinforces payment language for Restaurant and Shopping

### Trains and Stations

Starts after Airport transit.

Unlock role:

- becomes one of the biggest backbone branches in the game
- supports Day Trip Navigation, Hakone, and return travel

### Directions and Street Navigation

Starts very early after arrival basics.

Unlock role:

- supports movement confidence
- unlocks better performance in Trains, Stores, and Attractions

### Restaurant

Starts after Requests and core structure.

Unlock role:

- supports Market and Street Food
- supports Cafe and Sweets
- reinforces payment and clarification loops

## Minimum Viable Non-Linear Shape

If we compress this to the most important early branches, the first meaningful non-linear map should look like this:

1. `F-01 Social Survival`
2. `AIR-L1 Arrival Signs and Core Words`
3. branch to:
   - `AIR-L2 Check-In and Passport Basics`
   - `DIR-L1 Here, There, and Where?`
4. branch further to:
   - `HOT-L1 Reservation and Check-In Basics`
   - `CVS-L1 Store Words and Food Categories`
   - `TRN-L1 Station Signs and Core Train Words`
   - `R-L1 Menu Basics`

That is the first point where the map becomes meaningfully open without becoming confusing.

## Recommended Next Tightening Pass

After this backbone, the best next refinement is:

1. add exact level-to-level prerequisite IDs to the six core locations
2. define which core levels are visible-but-locked at the very start
3. define what counts as "completed enough" to show a new location on the map
