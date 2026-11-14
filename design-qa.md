# Design QA — Nolan / Villeneuve comparison placement

- Source visual truth: `/Users/endohiroyuki/Desktop/スクリーンショット 2026-11-12 21.45.23.png`
- Source pixels: `2058 × 1922`
- Implementation: `http://127.0.0.1:8766/timeline.html?d1=nolan&d2=villeneuve`
- Implementation screenshot: Codex in-app Browser capture attached to the 2026-11-12 implementation turn; no filesystem path was exposed by the browser capture API.
- Browser viewport: `1029 × 961` CSS pixels for desktop comparison; `390 × 844` CSS pixels for responsive verification.
- Density normalization: the source is visually treated as a 2× layout reference (`1029 × 961` CSS target).
- State: page top, Nolan on the left and Villeneuve on the right.

## Full-view comparison evidence

- The reference and implementation use the same `290px / 140px / 290px` inner grid.
- Both director cards render at exactly `290 × 217px` on desktop.
- The comparison heading is fixed to two centered lines.
- The center timeline begins at the director-card top edge and continues through the year rows.
- The outer content surface is light, rounded, and centered on the gray page background.
- The reference uses illustrative sample years and titles; the implementation intentionally preserves the real registered timeline data.

## Focused region comparison evidence

- Director cards: gradient height, card dimensions, left-aligned names, and subtle elevation match the selected card region in the reference.
- Timeline: the center track remains `140px`; year labels use the L heading token and work titles use the M heading token.
- Responsive capture: both cards remain side by side at `390px`; long titles wrap without truncation; document horizontal overflow is absent.

## Findings

- No actionable P0, P1, or P2 mismatch remains in the requested placement scope.
- P3: minor antialiasing and exact outer-surface color may vary between the design tool and browser rendering.

## Comparison history

1. Initial capture: the content surface began behind the fixed header and director cards had insufficient separation from the surface.
2. Fix: offset the desktop surface below the header, fixed cards to `290 × 217px`, added subtle card elevation, started the center axis at card-top level, and set rows to a `200px` rhythm.
3. Post-fix capture: placement matches the source proportions, no horizontal overflow is present, and other comparison pages retain their existing layout.

## Final result

final result: passed

---

# Design QA — Directors card layout for all decades (latest)

- Source visual truth: `/Users/endohiroyuki/Desktop/スクリーンショット 2026-11-13 20.02.18.png`
- Implementation: `http://127.0.0.1:8767/directors.html#directors-2020`
- Browser checks: default desktop viewport and `390 × 844` mobile viewport.
- Scope: all eight decade groups from the 2020s through the 1950s.

## Full-view comparison evidence

- Every decade uses equal `290 × 217px` cards, arranged in three columns on desktop.
- Each card uses a `134px` gradient panel, white surface, left-aligned English and Japanese names, and subtle shadow.
- Registered director colors are reused; directors without a defined color use the requested neutral gray placeholder gradient.
- The `2000` heading and card rhythm follow the supplied reference while preserving the existing page header and selection controls.

## Responsive and interaction evidence

- At `390px`, cards form two equal columns; each card is `165.5 × 176px` with no clipped director names.
- No document-level horizontal overflow was detected on desktop or mobile.
- The existing selection interaction was verified with James Gunn; the selected state and comparison action updated correctly.
- All 72 registered directors use the shared card markup across eight decade groups.
- Browser console check returned no warnings or errors.

## Findings

- No actionable P0, P1, or P2 mismatch remains in the requested trial scope.
- P3: exact gradient colors remain intentionally provisional for directors whose palette has not been defined.

## Final result

final result: passed

---

# Design QA — Typography system revision (latest)

- Source visual truth: `/Users/endohiroyuki/Desktop/スクリーンショット 2026-11-13 10.56.54.png` and `/Users/endohiroyuki/Desktop/スクリーンショット 2026-11-13 11.02.35.png`
- Source pixels: `810 × 1350` and `1258 × 1000`
- Implementation: `http://127.0.0.1:8766/design-system.html`
- Implementation screenshot: Codex in-app Browser desktop and mobile captures from this implementation turn; the browser capture API did not expose a filesystem path.
- Browser viewport: `1280 × 900` desktop and `375 × 844` mobile CSS pixels.
- Density normalization: source references were used as information and hierarchy references; the implementation was checked at native browser scale.
- State: Typography section in view.

## Full-view comparison evidence

- The former component-specific typography directions are no longer rendered.
- The replacement table contains only the supplied Heading, Body, and Alphanumeric scales.
- Gen Interface JP is the sole font family in the typography tokens, including numeric text.
- The desktop table stays within its content width; the mobile table stays within the viewport.

## Focused region comparison evidence

- All 17 supplied styles are present: eight Heading, six Body, and three Alphanumeric rows.
- Each row shows the supplied pixel size and `150%` line height.
- No old Roboto, usage mapping, weight, or letter-spacing instruction remains in the rendered Typography section.

## Findings

- No actionable P0, P1, or P2 mismatch remains in the requested documentation scope.
- The supplied second image is a visual specimen board, while the implementation remains a compact documentation table by design; its information is preserved without adding unsupported rules.

## Comparison history

1. Initial implementation contained per-component Site Title, Page Title, Section, Number, Body, Meta, and usage examples that conflicted with the new source.
2. Fix: removed those instructions, added the 17 supplied scale rows, unified the font family, and added the three Alphanumeric CSS tokens.
3. Post-fix browser checks found no horizontal overflow or console errors at desktop and mobile widths.

## Final result

final result: passed
