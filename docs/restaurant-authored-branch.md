# Restaurant Authored Branch

## Purpose

This document marks the point where the `Restaurant` location stops being only a concept and becomes an authored curriculum branch.

The goal is not to fully finish the whole location in one pass.

The goal is to define a complete, teachable early branch that can serve as the template for the rest of the game.

## Current Authored Scope

The current authored branch now covers the full first pass of the `Restaurant` location:

1. `R-L1-S1 Food Words`
2. `R-L1-S2 Menu Categories`
3. `R-L1-S3 Reading a Simple Menu`
4. `R-L1-S4 Asking What Something Is`
5. `R-L2-S1 Pointing and Ordering One Item`
6. `R-L2-S2 Ordering a Drink`
7. `R-L3-S1 Understanding the First Server Question`
8. `R-L3-S2 Simple Modifications`
9. `R-L3-S3 Extra Requests`
10. `R-L3-S4 Short Guided Exchange`
11. `R-L4-S1 Asking for the Check`
12. `R-L4-S2 Cash or Card`
13. `R-L4-S3 One Bill`
14. `R-L4-S4 Thank You and Leaving`

This is enough to define the first full gold-standard location for the game.

## Structural Update

The branch now uses a deeper hierarchy:

1. `City`
2. `Category`
3. `Subcategory`
4. `Level`
5. `Component`

For `Restaurant`, that means:

- `Tokyo`
- `Restaurant`
- `Food Words`
- `Level 1`, `Level 2`, `Level 3`

This change exists because one learner-facing subcategory is not enough by itself to actually teach the material. Each subcategory now needs multiple internal levels of roughly `15-25` questions so the app can introduce new language and still review earlier language properly.

## Pedagogical Shape

The branch is intentionally staged like this:

1. nouns
2. menu grouping
3. simple menu reading
4. simple question frames
5. one stable ordering frame
6. one noun-substitution ordering frame

This avoids the common beginner mistake of making the learner produce full polite phrases before they know the actual restaurant words inside them.

## Authored Sequence

### `R-L1-S1 Food Words`

This subcategory now expands into multiple internal levels instead of one tiny lesson.

Current internal levels:

- `Level 1`: tea, water, rice, soup, bread
- `Level 2`: meat, fish, chicken, egg, vegetables
- `Level 3`: ramen, udon, salad, dessert, coffee

Outcome:

- Can recognize and recall a much broader beginner restaurant vocabulary set with repeated review

### `R-L1-S2 Menu Categories`

This subcategory now expands into multiple internal levels instead of one thin pass.

Current internal levels:

- `Level 1`: drinks, rice dishes, noodle dishes, soup, dessert
- `Level 2`: meat dishes, fish dishes, vegetable dishes, egg dishes

Outcome:

- Can connect familiar items to multiple realistic menu headings

### `R-L1-S3 Reading a Simple Menu`

Target skill:

- reading a minimal menu layout with familiar items and simple prices

Outcome:

- Can find a familiar item and connect it to a visible price

### `R-L1-S4 Asking What Something Is`

Target frames:

- `これは何ですか`
- `おすすめは何ですか`

Outcome:

- Can ask what an item is
- Can ask what is recommended

### `R-L2-S1 Pointing and Ordering One Item`

Target frame:

- `これをお願いします`

Outcome:

- Can point to one item and ask for it politely

### `R-L2-S2 Ordering a Drink`

Target examples:

- `お茶をお願いします`
- `水をお願いします`

Outcome:

- Can reuse a known order frame with a small set of drinks

## Why This Branch Works

This branch works because every step depends on an actual linguistic need:

- knowing restaurant nouns
- understanding menu grouping
- reading a bounded menu
- asking about an unfamiliar item
- pointing and asking for one item
- substituting a known noun into a known phrase frame
- understanding the server's opening move
- handling one polite decline or small modification
- making one extra request
- asking for the check
- understanding a very small payment exchange
- ending the interaction naturally

The dependency chain is linguistic, not thematic.

## Runtime Status

The authored branch is now backed by runtime-ready JSON bundles for:

1. `R-L1 Menu Basics`
2. `R-L2 Ordering Basics`
3. `R-L3 Server Interaction`
4. `R-L4 Paying and Finishing`

The remaining gap is no longer curriculum authoring. The remaining gap is runtime implementation:

- component-specific runtime states
- true intro/matching/assembly views
- item resurfacing based on weakness
- cross-sublevel review scheduling

## Next Curriculum Moves

The next curriculum work should happen in one of two directions:

1. deepen `Restaurant` with optional side sublevels like quantity, same-as-that, or dessert ordering
2. use `Restaurant` as the gold-standard template for `Convenience Store`

The better next move is `Convenience Store`, because it can reuse much of the same request, payment, and checkout language while proving that the authoring model generalizes beyond one location.
