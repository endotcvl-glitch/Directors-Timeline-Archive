# Timeline mobile design QA

- Source visual truth: `/Users/endohiroyuki/Desktop/exec-cd80e4ab-28b0-4e0f-b4e6-a005a7c717f4.png` (single-director reference) and `/Users/endohiroyuki/Desktop/exec-30fffe14-9b24-4605-be4a-991d77022374.png` (comparison reference)
- Implementation screenshots: `/Users/endohiroyuki/Documents/GitHub/Directors-Timeline-Archive/timeline-mobile-single.png` and `/Users/endohiroyuki/Documents/GitHub/Directors-Timeline-Archive/timeline-mobile-comparison.png`
- Viewport: 390 × 844 CSS px
- Source pixels: 852 × 1848 px; implementation pixels: 390 × 844 px
- Density normalization: the references were reviewed at their native aspect ratio and the implementation was captured at the requested CSS viewport. Layout proportions and the 1998–2003 crop were compared rather than raw pixel coordinates.
- State: Nolan single-director timeline and Nolan/Villeneuve comparison timeline, beginning at 1998.

## Full-view comparison evidence

The implementation preserves the dark header, gold DTA mark, decade navigation, light-gray canvas, three-column timeline, and centered gold axis. At 390 px the first six years use 104 px rows, matching the requested 1998–2003 information density. The single-director layout uses the left works / center year / right year-list action structure from the reference. The comparison layout keeps works on both sides and does not add horizontal year separators.

## Focused region comparison evidence

- Header and labels: director labels remain centered in their columns; the contemporary label is split over two lines as in the source.
- Center axis: year labels use an opaque page-color backing so the gold line ends cleanly at the number; single-mode years are 21 px and semibold/bold.
- Work cards: FILM pills, title weight, and two-line wrapping were checked at 390 px. Titles are not font-scaled to fit.
- Year-list action: compact copy/count/caret layout, 44 px minimum target, no outer border, and a 2 px `#57545B` underline positioned below the text.
- Bottom sheet: heading, total count, title/director rows, internal scrolling, close control, backdrop, focus return, focus trap, Escape handler, and downward-swipe handler are present. The empty-list state is also implemented.

## Findings

No actionable P0, P1, or P2 visual differences remain. Film counts and titles intentionally follow the current project data rather than the illustrative values in the reference images.

## Comparison history

1. Initial pass: mobile titles and years were too small and the existing single-director view exposed every contemporary title inline.
2. Fixes: increased mobile typography, established 104 px rows and a 64 px center column, replaced mobile inline contemporary works with the compact year action, and added the accessible bottom sheet.
3. Post-fix evidence: `timeline-mobile-single.png` and `timeline-mobile-comparison.png` show the corrected 390 × 844 layouts. Desktop inspection at 1280 × 720 confirms the trigger remains hidden and the existing full contemporary list remains visible.
4. Centering refinement: aligned each comparison-side work card to the horizontal center of its own column, following `exec-2218a2b8-3278-40c3-82a4-e188d0a6438e.png`. At 390 px, sampled title-center offsets are 0 px and no title intersects the center-axis column.

## Verification

- Primary interactions tested: decade navigation rendering, mobile year-list control keyboard focus, modal open/close logic, Escape handling, and desktop link/list preservation.
- Console: no errors originating from the timeline implementation. The in-app browser reported a pre-existing MutationObserver warning from its injected page layer; no matching observer exists in the project scripts.
- Syntax/layout checks: JavaScript syntax, HTML parsing, and whitespace validation passed.

## Follow-up polish

None required for this pass.

final result: passed
