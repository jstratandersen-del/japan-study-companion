# Core Prerequisite Matrix

## Purpose

This document converts the core curriculum backbone into explicit prerequisite rules.

It covers the six core locations:

- Airport
- Hotel and Check-In
- Convenience Store
- Trains and Stations
- Directions and Street Navigation
- Restaurant

The goal is to make progression implementable as data instead of prose.

## Rule Types

### Hard prerequisite

The target level should stay locked until the prerequisite is complete.

### Soft prerequisite

The target level may be visible earlier, but should be marked as not recommended or higher difficulty until the prerequisite is complete.

### Visibility rule

The target location or level can be shown on the world map before it is playable.

## Foundation IDs

- `F-01 Social Survival`
- `F-02 Core Structure`
- `F-03 Requests`
- `F-04 Numbers, Prices, and Time`
- `F-05 Location and Movement`
- `F-06 Clarification and Repair`

## Starting State

Immediately available:

- `F-01`
- `F-02`

Visible but locked locations:

- `Airport`
- `Directions and Street Navigation`
- `Hotel and Check-In`
- `Convenience Store`
- `Trains and Stations`
- `Restaurant`

Initially playable world-map level:

- `AIR-L1 Arrival Signs and Core Words`

Hard prerequisites:

- `AIR-L1` requires `F-01`

Soft prerequisites:

- `AIR-L1` benefits from `F-02`

## Airport Matrix

### `AIR-L1 Arrival Signs and Core Words`

Hard prerequisites:

- `F-01`

Unlocks:

- `DIR-L1`
- `AIR-L2`

### `AIR-L2 Check-In and Passport Basics`

Hard prerequisites:

- `AIR-L1`
- `F-02`

Unlocks:

- `HOT-L1`
- `AIR-L3`

### `AIR-L3 Queueing, Gates, and Boarding`

Hard prerequisites:

- `AIR-L2`

Soft prerequisites:

- `F-03`

Unlocks:

- `AIR-L4`

### `AIR-L4 Arrival Transit Out of the Airport`

Hard prerequisites:

- `AIR-L3`
- `F-05`

Unlocks:

- `TRN-L1`
- `RET-L1` visibility

### `AIR-L5 Departure Timing and Terminal Navigation`

Hard prerequisites:

- `TRN-L3`
- `F-04`

Visibility rule:

- visible after `AIR-L4`

Unlocks:

- `AIR-L6`

### `AIR-L6 Security, Gate, and Final Boarding`

Hard prerequisites:

- `AIR-L5`
- `F-06`

## Directions Matrix

### `DIR-L1 Here, There, and Where?`

Hard prerequisites:

- `AIR-L1`
- `F-02`

Unlocks:

- `DIR-L2`

### `DIR-L2 Right, Left, Straight, and Near`

Hard prerequisites:

- `DIR-L1`

Unlocks:

- `DIR-L3`
- `CVS-L5` visibility

### `DIR-L3 Finding a Place on Foot`

Hard prerequisites:

- `DIR-L2`
- `F-05`

Unlocks:

- `DIR-L4`

### `DIR-L4 Understanding Short Spoken Directions`

Hard prerequisites:

- `DIR-L3`
- `TRN-L1`

Soft prerequisites:

- `F-06`

Unlocks:

- `DIR-L5`

### `DIR-L5 Map Help and Route Confirmation`

Hard prerequisites:

- `DIR-L4`

Soft prerequisites:

- `TRN-L2`

## Hotel Matrix

### `HOT-L1 Reservation and Check-In Basics`

Hard prerequisites:

- `AIR-L2`
- `F-03`

Unlocks:

- `HOT-L2`
- `HOT-L3`
- `HOT-L5`

### `HOT-L2 Room, Key, and Hotel Vocabulary`

Hard prerequisites:

- `HOT-L1`

Unlocks:

- `HOT-L6` visibility

### `HOT-L3 Breakfast, Timing, and Hotel Services`

Hard prerequisites:

- `HOT-L1`
- `F-04`

Unlocks:

- `HOT-L4`

### `HOT-L4 Luggage Holding and Delivery`

Hard prerequisites:

- `HOT-L3`
- `F-05`

Unlocks:

- `HAK-L4` visibility

### `HOT-L5 Asking the Front Desk for Help`

Hard prerequisites:

- `HOT-L1`
- `F-06`

Unlocks:

- `RYO-L1` soft readiness

### `HOT-L6 Payment, Checkout, and Final Questions`

Hard prerequisites:

- `HOT-L2`
- `HOT-L3`
- `F-04`

## Convenience Store Matrix

### `CVS-L1 Store Words and Food Categories`

Hard prerequisites:

- `F-03`

Soft prerequisites:

- `DIR-L1`

Unlocks:

- `CVS-L2`

### `CVS-L2 Choosing an Item and Paying`

Hard prerequisites:

- `CVS-L1`
- `F-04`

Unlocks:

- `CVS-L3`
- `R-L4` soft readiness

### `CVS-L3 Bag, Heating, and Checkout Questions`

Hard prerequisites:

- `CVS-L2`

Unlocks:

- `CVS-L4`

### `CVS-L4 Drinks, Snacks, and Quick Purchases`

Hard prerequisites:

- `CVS-L3`

Unlocks:

- `CVS-L5`

### `CVS-L5 Using the Restroom and Asking Where Things Are`

Hard prerequisites:

- `DIR-L2`

Soft prerequisites:

- `CVS-L1`

## Trains and Stations Matrix

### `TRN-L1 Station Signs and Core Train Words`

Hard prerequisites:

- `AIR-L4`
- `F-05`

Unlocks:

- `TRN-L2`

### `TRN-L2 Platform, Exit, and Transfer Basics`

Hard prerequisites:

- `TRN-L1`

Unlocks:

- `TRN-L3`
- `TRN-L4`

### `TRN-L3 Which Train Do I Take?`

Hard prerequisites:

- `TRN-L2`
- `DIR-L3`

Unlocks:

- `TRN-L5`
- `DAY-L2`

### `TRN-L4 Buying Tickets and Using Passes`

Hard prerequisites:

- `TRN-L2`
- `F-04`

Unlocks:

- `TRN-L5`

### `TRN-L5 Reserved Seats and Long-Distance Train Basics`

Hard prerequisites:

- `TRN-L3`
- `TRN-L4`

Unlocks:

- `HAK-L1`
- `DAY-L1`
- `RET-L2` visibility

### `TRN-L6 Delays, Wrong Platforms, and Recovery`

Hard prerequisites:

- `TRN-L3`
- `F-06`

Soft prerequisites:

- `DAY-L4`

## Restaurant Matrix

### `R-L1 Menu Basics`

Hard prerequisites:

- `F-03`

Soft prerequisites:

- `F-02`

Unlocks:

- `R-L2`
- `MKT-L1` visibility

### `R-L2 Ordering Basics`

Hard prerequisites:

- `R-L1`
- `F-03`

Soft prerequisites:

- `F-04`

Unlocks:

- `R-L3`
- `CAF-L1`

### `R-L3 Server Interaction`

Hard prerequisites:

- `R-L2`
- `F-06`

Unlocks:

- `R-L4`
- `MKT-L2`

### `R-L4 Paying and Finishing`

Hard prerequisites:

- `R-L3`
- `F-04`

Unlocks:

- `CVS-L3` reinforcement
- `CAF-L5`

## Minimum Viable Early Graph

The smallest useful graph to ship first is:

1. `F-01`
2. `AIR-L1`
3. branch to:
   - `AIR-L2`
   - `DIR-L1`
4. then:
   - `HOT-L1`
   - `F-03`
5. then branch to:
   - `CVS-L1`
   - `R-L1`
6. then:
   - `AIR-L4`
   - `TRN-L1`

If that graph works, the rest of the core map can scale off it.
