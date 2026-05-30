# Full World Map Spec

## Purpose

This document gives a first full-treatment pass for all current locations on the world map.

For each location it defines:

- location role
- whether it is `Core` or `Bonus`
- levels
- sublevels
- rough unlock shape

This is still a planning document. It is detailed enough to drive later implementation and refinement, but not yet locked.

## Classification Rule

### Core Locations

Core locations are expected to carry major trip utility and should have deeper progression.

### Bonus Locations

Bonus locations are smaller, more situational, or more itinerary-specific. They should usually:

- have fewer levels
- be shorter to finish
- depend on core foundations or core locations
- feel like rewarding side branches rather than main progression gates

## Shared Sublevel Pattern

Unless there is a strong reason otherwise, levels should usually draw sublevels from this pattern:

1. `Words`
2. `Word Combinations`
3. `Basic Phrases`
4. `Pattern Building`
5. `Response Recognition`
6. `Simple Conversation`
7. `Clarification`
8. `Natural Conversation`

Core levels may use most of this pattern. Bonus levels can use a compressed version.

## 1. Airport

Type:

- `Core`

Purpose:

- survive both arrival and departure with low friction

Levels:

### `AIR-L1 Arrival Signs and Core Words`

Sublevels:

- `AIR-L1-S1 Airport Words`
- `AIR-L1-S2 Sign Categories`
- `AIR-L1-S3 Arrival Sign Recognition`
- `AIR-L1-S4 Asking Where to Go`

Unlocks:

- `AIR-L2`
- `Directions / Here, There, and Where?`

### `AIR-L2 Check-In and Passport Basics`

Sublevels:

- `AIR-L2-S1 Passport and Reservation Words`
- `AIR-L2-S2 Check-In Phrases`
- `AIR-L2-S3 Staff Request Recognition`
- `AIR-L2-S4 Basic Counter Exchange`

Unlocks:

- `AIR-L3`
- `Hotel / Reservation and Check-In Basics`

### `AIR-L3 Queueing, Gates, and Boarding`

Sublevels:

- `AIR-L3-S1 Queue and Gate Words`
- `AIR-L3-S2 Boarding Phrases`
- `AIR-L3-S3 Staff Instructions`
- `AIR-L3-S4 Guided Boarding Exchange`

Unlocks:

- `AIR-L4`

### `AIR-L4 Arrival Transit Out of the Airport`

Sublevels:

- `AIR-L4-S1 Airport Train and Bus Words`
- `AIR-L4-S2 Does This Go To ... ?`
- `AIR-L4-S3 Route Confirmation`
- `AIR-L4-S4 Arrival Transfer Mini-Scenario`

Unlocks:

- `Trains and Stations / Station Signs and Core Train Words`
- `Airport Return / Leaving for the Airport on Time`

### `AIR-L5 Departure Timing and Terminal Navigation`

Sublevels:

- `AIR-L5-S1 Departure Timing Words`
- `AIR-L5-S2 Terminal and Counter Navigation`
- `AIR-L5-S3 Which Terminal / Which Counter?`
- `AIR-L5-S4 Time Pressure Clarification`

Unlocks:

- `AIR-L6`

### `AIR-L6 Security, Gate, and Final Boarding`

Sublevels:

- `AIR-L6-S1 Security and Gate Words`
- `AIR-L6-S2 Final Instruction Recognition`
- `AIR-L6-S3 Boarding Recovery Phrases`
- `AIR-L6-S4 Full Departure Flow`

## 2. Hotel and Check-In

Type:

- `Core`

Levels:

### `HOT-L1 Reservation and Check-In Basics`

Sublevels:

- `HOT-L1-S1 Reservation Words`
- `HOT-L1-S2 I Have a Reservation`
- `HOT-L1-S3 Passport and Name Exchange`
- `HOT-L1-S4 Basic Check-In Conversation`

Unlocks:

- `HOT-L2`
- `Ryokan / Ryokan Check-In Basics`

### `HOT-L2 Room, Key, and Hotel Vocabulary`

Sublevels:

- `HOT-L2-S1 Room and Key Words`
- `HOT-L2-S2 Hotel Layout Words`
- `HOT-L2-S3 Here Is Your Key`
- `HOT-L2-S4 Finding Hotel Facilities`

### `HOT-L3 Breakfast, Timing, and Hotel Services`

Sublevels:

- `HOT-L3-S1 Breakfast Words`
- `HOT-L3-S2 What Time Is Breakfast?`
- `HOT-L3-S3 Wi-Fi and Service Questions`
- `HOT-L3-S4 Understanding Service Answers`

### `HOT-L4 Luggage Holding and Delivery`

Sublevels:

- `HOT-L4-S1 Luggage Words`
- `HOT-L4-S2 Please Hold My Luggage`
- `HOT-L4-S3 Delivery and Timing Questions`
- `HOT-L4-S4 Luggage Help Exchange`

Unlocks:

- `Hakone Transit / Luggage, Timings, and Route Confirmation`

### `HOT-L5 Asking the Front Desk for Help`

Sublevels:

- `HOT-L5-S1 Taxi and Restaurant Help Words`
- `HOT-L5-S2 Please Call a Taxi`
- `HOT-L5-S3 Recommendation Questions`
- `HOT-L5-S4 Short Help Conversation`

### `HOT-L6 Payment, Checkout, and Final Questions`

Sublevels:

- `HOT-L6-S1 Checkout Words`
- `HOT-L6-S2 Card and Payment Questions`
- `HOT-L6-S3 Checkout Instructions`
- `HOT-L6-S4 Full Checkout Flow`

## 3. Convenience Store

Type:

- `Core`

Levels:

### `CVS-L1 Store Words and Food Categories`

Sublevels:

- `CVS-L1-S1 Basic Store Words`
- `CVS-L1-S2 Food and Drink Categories`
- `CVS-L1-S3 Shelf and Section Recognition`
- `CVS-L1-S4 Finding an Item`

Unlocks:

- `CVS-L2`

### `CVS-L2 Choosing an Item and Paying`

Sublevels:

- `CVS-L2-S1 This One, Please`
- `CVS-L2-S2 One or Two Items`
- `CVS-L2-S3 Paying Basics`
- `CVS-L2-S4 Simple Checkout Flow`

Unlocks:

- `CVS-L3`
- `Restaurant / Paying and Finishing`

### `CVS-L3 Bag, Heating, and Checkout Questions`

Sublevels:

- `CVS-L3-S1 Bag and Heating Words`
- `CVS-L3-S2 Do You Need a Bag?`
- `CVS-L3-S3 Please Heat This`
- `CVS-L3-S4 Answering Checkout Questions`

### `CVS-L4 Drinks, Snacks, and Quick Purchases`

Sublevels:

- `CVS-L4-S1 Drink and Snack Words`
- `CVS-L4-S2 Quick Selection Recognition`
- `CVS-L4-S3 Fast Purchase Phrases`
- `CVS-L4-S4 Speed Checkout Scenario`

### `CVS-L5 Using the Restroom and Asking Where Things Are`

Sublevels:

- `CVS-L5-S1 Restroom and Section Words`
- `CVS-L5-S2 Where Is the Restroom?`
- `CVS-L5-S3 Where Is ... ?`
- `CVS-L5-S4 Very Short Help Exchange`

## 4. Trains and Stations

Type:

- `Core`

Levels:

### `TRN-L1 Station Signs and Core Train Words`

Sublevels:

- `TRN-L1-S1 Station Words`
- `TRN-L1-S2 Platform and Exit Words`
- `TRN-L1-S3 Sign Recognition`
- `TRN-L1-S4 Matching Words to Places`

Unlocks:

- `TRN-L2`
- `Directions / Here, There, and Where?`

### `TRN-L2 Platform, Exit, and Transfer Basics`

Sublevels:

- `TRN-L2-S1 Platform Numbers`
- `TRN-L2-S2 Exit and Transfer Words`
- `TRN-L2-S3 Please Transfer At ...`
- `TRN-L2-S4 Navigating a Simple Station`

### `TRN-L3 Which Train Do I Take?`

Sublevels:

- `TRN-L3-S1 Destination Words`
- `TRN-L3-S2 Does This Train Go To ... ?`
- `TRN-L3-S3 Which Train Should I Take?`
- `TRN-L3-S4 Short Route Confirmation`

Unlocks:

- `Day Trip Navigation / Multi-Step Route Confirmation`

### `TRN-L4 Buying Tickets and Using Passes`

Sublevels:

- `TRN-L4-S1 Ticket and Pass Words`
- `TRN-L4-S2 Where Can I Buy a Ticket?`
- `TRN-L4-S3 Can I Use This Pass?`
- `TRN-L4-S4 Ticket Counter Exchange`

### `TRN-L5 Reserved Seats and Long-Distance Train Basics`

Sublevels:

- `TRN-L5-S1 Reserved Seat Words`
- `TRN-L5-S2 Reserved Seat Request`
- `TRN-L5-S3 Car and Seat Recognition`
- `TRN-L5-S4 Long-Distance Train Mini-Flow`

Unlocks:

- `Hakone Transit / Romancecar and Reserved Travel Basics`

### `TRN-L6 Delays, Wrong Platforms, and Recovery`

Sublevels:

- `TRN-L6-S1 Delay and Platform Problem Words`
- `TRN-L6-S2 The Train Is Delayed`
- `TRN-L6-S3 I’m on the Wrong Platform`
- `TRN-L6-S4 Recovery Conversation`

## 5. Directions and Street Navigation

Type:

- `Core`

Levels:

### `DIR-L1 Here, There, and Where?`

Sublevels:

- `DIR-L1-S1 Here and There Words`
- `DIR-L1-S2 Where Is ... ?`
- `DIR-L1-S3 Place Recognition`
- `DIR-L1-S4 Basic Location Question`

### `DIR-L2 Right, Left, Straight, and Near`

Sublevels:

- `DIR-L2-S1 Direction Words`
- `DIR-L2-S2 Direction Phrase Chunks`
- `DIR-L2-S3 Short Spoken Direction Recognition`
- `DIR-L2-S4 Follow a Tiny Route`

### `DIR-L3 Finding a Place on Foot`

Sublevels:

- `DIR-L3-S1 Walking Route Words`
- `DIR-L3-S2 Is It Near?`
- `DIR-L3-S3 Please Show Me on the Map`
- `DIR-L3-S4 Walking Navigation Exchange`

### `DIR-L4 Understanding Short Spoken Directions`

Sublevels:

- `DIR-L4-S1 Listen for Direction Words`
- `DIR-L4-S2 Multi-Step Direction Recognition`
- `DIR-L4-S3 Clarifying a Spoken Route`
- `DIR-L4-S4 Guided Route Recovery`

### `DIR-L5 Map Help and Route Confirmation`

Sublevels:

- `DIR-L5-S1 Map and Landmark Words`
- `DIR-L5-S2 Confirming the Route`
- `DIR-L5-S3 Distance and Time Recognition`
- `DIR-L5-S4 Full Find-the-Place Scenario`

## 6. Restaurant

Type:

- `Core`

Levels:

- `Menu Basics`
- `Ordering Basics`
- `Server Interaction`
- `Paying and Finishing`

Reference:

- use [restaurant-location-spec.md](/Users/jared/Projects/Japan/japanese-learning-app/docs/restaurant-location-spec.md) as the detailed source of truth

## 7. Cafe and Sweets

Type:

- `Core`

Levels:

### `CAF-L1 Drink and Dessert Words`

Sublevels:

- `CAF-L1-S1 Drink Words`
- `CAF-L1-S2 Dessert and Sweet Words`
- `CAF-L1-S3 Menu Recognition`
- `CAF-L1-S4 Picking an Item`

### `CAF-L2 Ordering One Drink or Sweet`

Sublevels:

- `CAF-L2-S1 One Drink Please`
- `CAF-L2-S2 One Sweet Please`
- `CAF-L2-S3 Hot or Cold`
- `CAF-L2-S4 Short Order Flow`

### `CAF-L3 Takeout or Here`

Sublevels:

- `CAF-L3-S1 Here or To Go Words`
- `CAF-L3-S2 Which One Did They Ask?`
- `CAF-L3-S3 Choosing the Right Response`
- `CAF-L3-S4 Counter Exchange`

### `CAF-L4 Cafe Questions and Simple Changes`

Sublevels:

- `CAF-L4-S1 Spoon, Fork, and Napkin`
- `CAF-L4-S2 English Menu or Recommendation`
- `CAF-L4-S3 Simple Change Requests`
- `CAF-L4-S4 Clarification`

### `CAF-L5 Fast Casual Ordering Flow`

Sublevels:

- `CAF-L5-S1 Reading a Small Menu`
- `CAF-L5-S2 Quick Order Assembly`
- `CAF-L5-S3 Staff Prompt Recognition`
- `CAF-L5-S4 Full Cafe Scenario`

## 8. Market and Street Food

Type:

- `Core`

Levels:

### `MKT-L1 Stall Food Words and Categories`

Sublevels:

- `MKT-L1-S1 Stall Food Words`
- `MKT-L1-S2 Food Type Recognition`
- `MKT-L1-S3 Menu Board Recognition`
- `MKT-L1-S4 Spot the Popular Item`

### `MKT-L2 What Is This?`

Sublevels:

- `MKT-L2-S1 What Is This?`
- `MKT-L2-S2 Recommendation Questions`
- `MKT-L2-S3 Hearing the Answer`
- `MKT-L2-S4 Tiny Question Exchange`

### `MKT-L3 Ordering One Item Quickly`

Sublevels:

- `MKT-L3-S1 One Item Order`
- `MKT-L3-S2 Quantity Variations`
- `MKT-L3-S3 Quick Vendor Phrases`
- `MKT-L3-S4 Fast Counter Flow`

### `MKT-L4 Recommendation and Popular Item Questions`

Sublevels:

- `MKT-L4-S1 Recommendation Words`
- `MKT-L4-S2 What Do You Recommend?`
- `MKT-L4-S3 Understanding the Recommendation`
- `MKT-L4-S4 Follow-Up Order`

### `MKT-L5 Cash Only, Eat Here, and Street Etiquette`

Sublevels:

- `MKT-L5-S1 Cash Only`
- `MKT-L5-S2 Eat Here or Take Away`
- `MKT-L5-S3 Street Etiquette Signs`
- `MKT-L5-S4 Rule Recognition`

### `MKT-L6 Short Fast Vendor Interactions`

Sublevels:

- `MKT-L6-S1 Listen for Fast Prompts`
- `MKT-L6-S2 Answer Without Full Script Support`
- `MKT-L6-S3 Clarification in a Fast Context`
- `MKT-L6-S4 Full Vendor Scenario`

## 9. Shopping and Souvenirs

Type:

- `Core`

Levels:

### `SHP-L1 Store Words, Item Types, and Basic Browsing`

Sublevels:

- `SHP-L1-S1 Store and Item Words`
- `SHP-L1-S2 Shelf and Department Recognition`
- `SHP-L1-S3 Looking for a Product`
- `SHP-L1-S4 Browse Without Buying`

### `SHP-L2 Do You Have This?`

Sublevels:

- `SHP-L2-S1 This Item Question`
- `SHP-L2-S2 Another Version Question`
- `SHP-L2-S3 Yes / No Stock Answers`
- `SHP-L2-S4 Product Search Exchange`

### `SHP-L3 Size, Color, and Different Version Questions`

Sublevels:

- `SHP-L3-S1 Size Words`
- `SHP-L3-S2 Color Words`
- `SHP-L3-S3 Bigger / Smaller / Another Color`
- `SHP-L3-S4 Variant Question Exchange`

### `SHP-L4 Trying Something On`

Sublevels:

- `SHP-L4-S1 Fitting Room Words`
- `SHP-L4-S2 Can I Try This On?`
- `SHP-L4-S3 Staff Guidance Recognition`
- `SHP-L4-S4 Fitting Room Mini-Scenario`

### `SHP-L5 Tax-Free and Payment Questions`

Sublevels:

- `SHP-L5-S1 Tax-Free Words`
- `SHP-L5-S2 Does This Qualify?`
- `SHP-L5-S3 Card, Cash, and Checkout Questions`
- `SHP-L5-S4 Shopping Checkout Flow`

### `SHP-L6 Souvenir Shopping and Recommendation Questions`

Sublevels:

- `SHP-L6-S1 Souvenir Words`
- `SHP-L6-S2 Is This Made in Japan?`
- `SHP-L6-S3 What Do You Recommend?`
- `SHP-L6-S4 Choosing a Gift Scenario`

## 10. Shrine and Temple

Type:

- `Core`

Levels:

### `TMP-L1 Shrine and Temple Core Words`

Sublevels:

- `TMP-L1-S1 Place Words`
- `TMP-L1-S2 Worship and Site Vocabulary`
- `TMP-L1-S3 Sign Recognition`
- `TMP-L1-S4 Place Matching`

### `TMP-L2 Quiet, Shoes, and Restricted Areas`

Sublevels:

- `TMP-L2-S1 Quiet and Restriction Words`
- `TMP-L2-S2 Shoes Off`
- `TMP-L2-S3 Do Not Enter / No Photos`
- `TMP-L2-S4 Etiquette Sign Recognition`

### `TMP-L3 Photo Permission and Entry Questions`

Sublevels:

- `TMP-L3-S1 Can I Enter?`
- `TMP-L3-S2 Can I Take Photos?`
- `TMP-L3-S3 Understanding the Answer`
- `TMP-L3-S4 Respectful Question Exchange`

### `TMP-L4 Omamori, Goshuin, and Souvenir Basics`

Sublevels:

- `TMP-L4-S1 Omamori and Goshuin Words`
- `TMP-L4-S2 Where Are the Charms?`
- `TMP-L4-S3 Do You Offer Goshuin?`
- `TMP-L4-S4 Small Purchase Interaction`

### `TMP-L5 Respectful Behavior and Sign Understanding`

Sublevels:

- `TMP-L5-S1 Behavior Rule Recognition`
- `TMP-L5-S2 Quiet Context Clarification`
- `TMP-L5-S3 Understanding Respectful Instructions`
- `TMP-L5-S4 Full Temple Etiquette Scenario`

## 11. Attraction and Ticketing

Type:

- `Core`

Levels:

### `ATK-L1 Ticket and Entry Words`

Sublevels:

- `ATK-L1-S1 Ticket Words`
- `ATK-L1-S2 Reservation Words`
- `ATK-L1-S3 Entry Sign Recognition`
- `ATK-L1-S4 Counter Basics`

### `ATK-L2 Time Slot and Reservation Confirmation`

Sublevels:

- `ATK-L2-S1 Time Slot Words`
- `ATK-L2-S2 Reservation Confirmation`
- `ATK-L2-S3 What Time Is My Entry?`
- `ATK-L2-S4 Booking Check Exchange`

### `ATK-L3 Where Do I Enter?`

Sublevels:

- `ATK-L3-S1 Entry Gate Words`
- `ATK-L3-S2 Which Entrance?`
- `ATK-L3-S3 Follow Staff Guidance`
- `ATK-L3-S4 Find the Correct Entry`

### `ATK-L4 Photo, Rules, and Staff Guidance`

Sublevels:

- `ATK-L4-S1 Rule Words`
- `ATK-L4-S2 Photo Permission`
- `ATK-L4-S3 Staff Instruction Recognition`
- `ATK-L4-S4 Rule-Based Scenario`

### `ATK-L5 Activity Check-In and Start Instructions`

Sublevels:

- `ATK-L5-S1 Check-In Words`
- `ATK-L5-S2 Start-Time Guidance`
- `ATK-L5-S3 Wait Here / Go There`
- `ATK-L5-S4 Activity Start Flow`

## 12. Ryokan and Onsen

Type:

- `Core`

Levels:

### `RYO-L1 Ryokan Check-In Basics`

Sublevels:

- `RYO-L1-S1 Ryokan Words`
- `RYO-L1-S2 Reservation and Arrival Phrases`
- `RYO-L1-S3 Staff Guidance Recognition`
- `RYO-L1-S4 Basic Check-In Flow`

### `RYO-L2 Meal Time, Room, and Yukata Vocabulary`

Sublevels:

- `RYO-L2-S1 Meal and Room Words`
- `RYO-L2-S2 Yukata and Facility Words`
- `RYO-L2-S3 What Time Is the Meal?`
- `RYO-L2-S4 Understanding the Room Explanation`

### `RYO-L3 Bath Timing and Onsen Rules`

Sublevels:

- `RYO-L3-S1 Bath and Time Words`
- `RYO-L3-S2 Until What Time Is the Bath Open?`
- `RYO-L3-S3 Rule Sign Recognition`
- `RYO-L3-S4 Bath Timing Exchange`

### `RYO-L4 Private or Shared Bath Questions`

Sublevels:

- `RYO-L4-S1 Private and Shared Bath Words`
- `RYO-L4-S2 Reservation or Availability Questions`
- `RYO-L4-S3 Understanding the Answer`
- `RYO-L4-S4 Bath Booking Mini-Scenario`

### `RYO-L5 Understanding Onsen Etiquette and Instructions`

Sublevels:

- `RYO-L5-S1 Wash First and Etiquette Words`
- `RYO-L5-S2 Follow the Instruction`
- `RYO-L5-S3 Clarifying a Rule`
- `RYO-L5-S4 Full Onsen Guidance Scenario`

## 13. Kyoto Cultural Etiquette

Type:

- `Bonus`

Purpose:

- smaller side branch for quiet, more formal contexts

Levels:

### `KYO-L1 Polite Quiet-Context Language`

Sublevels:

- `KYO-L1-S1 Quiet and Polite Words`
- `KYO-L1-S2 Soft Requests and Thanks`
- `KYO-L1-S3 Recognition of Formal Tone`

### `KYO-L2 Respectful Questions in Cultural Sites`

Sublevels:

- `KYO-L2-S1 Respectful Entry Questions`
- `KYO-L2-S2 Photo and Behavior Questions`
- `KYO-L2-S3 Guided Cultural-Site Exchange`

### `KYO-L3 Formal Dining and Performance Etiquette`

Sublevels:

- `KYO-L3-S1 Formal Context Words`
- `KYO-L3-S2 Appreciation and Courtesy`
- `KYO-L3-S3 Formal Dinner Mini-Scenario`

### `KYO-L4 Simple Appreciation and Thanks in Formal Settings`

Sublevels:

- `KYO-L4-S1 Appreciation Phrases`
- `KYO-L4-S2 Hear the Polite Response`
- `KYO-L4-S3 End-of-Event Interaction`

## 14. Day Trip Navigation

Type:

- `Core`

Levels:

### `DAY-L1 Early Departure and Timing Language`

Sublevels:

- `DAY-L1-S1 Early Travel Words`
- `DAY-L1-S2 Departure Time Questions`
- `DAY-L1-S3 Time Pressure Recognition`
- `DAY-L1-S4 Early Start Mini-Flow`

### `DAY-L2 Multi-Step Route Confirmation`

Sublevels:

- `DAY-L2-S1 Route Sequence Words`
- `DAY-L2-S2 Does This Route Work?`
- `DAY-L2-S3 Multi-Step Answer Recognition`
- `DAY-L2-S4 Route Confirmation Exchange`

### `DAY-L3 How Long Does It Take?`

Sublevels:

- `DAY-L3-S1 Duration Words`
- `DAY-L3-S2 How Long Does It Take?`
- `DAY-L3-S3 Hearing the Time Answer`
- `DAY-L3-S4 Compare Route Durations`

### `DAY-L4 Wrong Train, Delay, and Recovery`

Sublevels:

- `DAY-L4-S1 Delay and Error Words`
- `DAY-L4-S2 I Took the Wrong Train`
- `DAY-L4-S3 Recovery Advice Recognition`
- `DAY-L4-S4 Recovery Conversation`

### `DAY-L5 Return Timing and Last-Train Awareness`

Sublevels:

- `DAY-L5-S1 Return Time Words`
- `DAY-L5-S2 Last Train Recognition`
- `DAY-L5-S3 When Do I Need to Leave?`
- `DAY-L5-S4 Return Planning Scenario`

## 15. Hakone Transit

Type:

- `Bonus`

Levels:

### `HAK-L1 Romancecar and Reserved Travel Basics`

Sublevels:

- `HAK-L1-S1 Romancecar Words`
- `HAK-L1-S2 Reserved Travel Recognition`
- `HAK-L1-S3 Seat and Car Confirmation`

### `HAK-L2 Cable Car, Ropeway, and Transfer Vocabulary`

Sublevels:

- `HAK-L2-S1 Transfer Type Words`
- `HAK-L2-S2 Which Ride Is Next?`
- `HAK-L2-S3 Follow the Scenic Route`

### `HAK-L3 Lake Ashi and Scenic Route Questions`

Sublevels:

- `HAK-L3-S1 Lake and Boat Words`
- `HAK-L3-S2 Scenic Route Questions`
- `HAK-L3-S3 Short Hakone Exchange`

### `HAK-L4 Luggage, Timings, and Route Confirmation`

Sublevels:

- `HAK-L4-S1 Luggage and Timing Review`
- `HAK-L4-S2 Confirm the Route`
- `HAK-L4-S3 Hakone Day Mini-Scenario`

## 16. Airport Return and Departure

Type:

- `Bonus`

Levels:

### `RET-L1 Leaving for the Airport on Time`

Sublevels:

- `RET-L1-S1 Time Pressure Words`
- `RET-L1-S2 Leave Now or Later?`
- `RET-L1-S3 Route Timing Recognition`

### `RET-L2 Confirming the Best Route to Haneda`

Sublevels:

- `RET-L2-S1 Haneda Route Words`
- `RET-L2-S2 Which Route Is Best?`
- `RET-L2-S3 Return Route Exchange`

### `RET-L3 Terminal, Check-In, and Bag Drop`

Sublevels:

- `RET-L3-S1 Bag Drop Words`
- `RET-L3-S2 Counter Guidance`
- `RET-L3-S3 Departure Counter Flow`

### `RET-L4 Security, Gate, and Final Boarding`

Sublevels:

- `RET-L4-S1 Security Review`
- `RET-L4-S2 Final Gate Recognition`
- `RET-L4-S3 Final Departure Scenario`

## 17. Pharmacy and Help

Type:

- `Core`

Levels:

### `MED-L1 Body and Symptom Basics`

Sublevels:

- `MED-L1-S1 Body Words`
- `MED-L1-S2 Pain and Symptom Words`
- `MED-L1-S3 Match Symptom to Phrase`
- `MED-L1-S4 Simple Problem Statement`

### `MED-L2 Asking for Medicine`

Sublevels:

- `MED-L2-S1 Medicine Words`
- `MED-L2-S2 Do You Have Medicine?`
- `MED-L2-S3 Describe the Problem`
- `MED-L2-S4 Pharmacy Counter Exchange`

### `MED-L3 Understanding Dosage and Simple Instructions`

Sublevels:

- `MED-L3-S1 Dosage Words`
- `MED-L3-S2 After Food / Times Per Day`
- `MED-L3-S3 Instruction Recognition`
- `MED-L3-S4 Follow the Instruction`

### `MED-L4 Basic Trouble and Help Questions`

Sublevels:

- `MED-L4-S1 Help Words`
- `MED-L4-S2 Please Help Me`
- `MED-L4-S3 Basic Help Response Recognition`
- `MED-L4-S4 Trouble Scenario`

## 18. Group Coordination and Social Navigation

Type:

- `Bonus`

Levels:

### `SOC-L1 Where Are You?`

Sublevels:

- `SOC-L1-S1 Location Words`
- `SOC-L1-S2 Where Are You?`
- `SOC-L1-S3 I’m Here / I’m Near ...`

### `SOC-L2 Let's Meet Here`

Sublevels:

- `SOC-L2-S1 Meeting Words`
- `SOC-L2-S2 Let’s Meet Here`
- `SOC-L2-S3 Confirm the Meeting Spot`

### `SOC-L3 I’m Late / I’m Here / Wait a Moment`

Sublevels:

- `SOC-L3-S1 Delay Words`
- `SOC-L3-S2 Wait a Moment`
- `SOC-L3-S3 Short Coordination Exchange`

### `SOC-L4 Checking the Plan and Timing`

Sublevels:

- `SOC-L4-S1 Plan Words`
- `SOC-L4-S2 What’s the Plan?`
- `SOC-L4-S3 Timing Confirmation`

## 19. Akihabara and Hobby Shopping

Type:

- `Bonus`

Levels:

### `AKI-L1 Electronics, Games, and Character Goods Words`

Sublevels:

- `AKI-L1-S1 Hobby Item Words`
- `AKI-L1-S2 Character Goods Recognition`
- `AKI-L1-S3 Section and Floor Vocabulary`

### `AKI-L2 Which Floor / Which Section?`

Sublevels:

- `AKI-L2-S1 Floor Words`
- `AKI-L2-S2 Which Floor Is It On?`
- `AKI-L2-S3 Follow Store Guidance`

### `AKI-L3 Do You Have This Character or Item?`

Sublevels:

- `AKI-L3-S1 Character or Series Names`
- `AKI-L3-S2 Do You Have This?`
- `AKI-L3-S3 Stock Answer Recognition`

### `AKI-L4 Browsing Without Buying Pressure`

Sublevels:

- `AKI-L4-S1 Browsing Words`
- `AKI-L4-S2 Just Looking`
- `AKI-L4-S3 End the Interaction Politely`

## 20. Don Quijote and Big-Store Browsing

Type:

- `Bonus`

Levels:

### `DON-L1 Store Layout and Section Words`

Sublevels:

- `DON-L1-S1 Layout Words`
- `DON-L1-S2 Multi-Floor Recognition`
- `DON-L1-S3 Department Signs`

### `DON-L2 Finding a Product Fast`

Sublevels:

- `DON-L2-S1 Product Search Words`
- `DON-L2-S2 Where Is This Product?`
- `DON-L2-S3 Staff Guidance Recognition`

### `DON-L3 Asking Staff Where Something Is`

Sublevels:

- `DON-L3-S1 Ask for the Section`
- `DON-L3-S2 Understand a Fast Answer`
- `DON-L3-S3 Confirm the Floor`

### `DON-L4 Tax-Free and Checkout Flow`

Sublevels:

- `DON-L4-S1 Tax-Free Review`
- `DON-L4-S2 Checkout Words`
- `DON-L4-S3 Don Quijote Checkout Scenario`

## Recommended Build Order

If we want to fully specify and later implement with the least rework, the best sequence is:

1. Airport
2. Hotel and Check-In
3. Convenience Store
4. Trains and Stations
5. Directions and Street Navigation
6. Restaurant
7. Market and Street Food
8. Shopping and Souvenirs
9. Shrine and Temple
10. Ryokan and Onsen

Then:

11. Cafe and Sweets
12. Attraction and Ticketing
13. Day Trip Navigation
14. Pharmacy and Help

Then the bonus branches:

15. Kyoto Cultural Etiquette
16. Hakone Transit
17. Airport Return and Departure
18. Group Coordination and Social Navigation
19. Akihabara and Hobby Shopping
20. Don Quijote and Big-Store Browsing
