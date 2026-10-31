# Open action verification

2026-10-31. TypeScript checks and production build passed. Focused tests (openLocalPath, cardMenu, i18nCoverage): 200 passed. Full suite: 888 passed, 18 failed. Comparing against the original tracked files produced the same 18 failures and no new failures. The five new opening tests also ran during this comparison.

Existing failures (suite: test):

- actionPills: every hover/quick-action container gets the same surface from one rule
- fileIconOpening: papers move in whole --open-u steps; the pocket tips on its bottom edge
- fileIconOpening: cheap to show and move: pre-rastered layers, no filter or transform on the wrapper
- fileIconOpening: hover buttons stay a horizontal pill, docked off the opening folder
- fileStacks: hovering a textured card never repaints its texture
- fileStacks: reduced motion turns the stack and hero motion off
- horizontalSettings: Appearance lists the Copy Indicator toggle first, then the Indicator Style flyout trigger (both docks)
- horizontalSettings: One definition serves both docks; side-dock-only rows are left out of the top dock
- horizontalSettings: After the settings come two cards: Community & Support, then About Edge-Drop
- previewFlyout: stays mounted exactly as long as the exit animations run
- previewFlyout: reduced motion is a plain fade
- previewFlyout: the inline style does not hide the stylesheet rim
- stackItems: side dock: names get two lines; an odd photo count lets the first photo span the row
- stackItems: 7+ photos use three columns and the grid always ends flush
- storePackaging: Settings hides the in-app updater on Store builds
- textPill: docks at the bottom right in both docks, on shelf cards only (not the preview flyout)
- textPill: side dock: room for the pill in the bottom row, without changing card height on hover
- wakeSlider: settings does not double the ticks while dragging, and keeps the 1% position on release

The native shell boundary is mocked in unit tests; opening Windows applications through the running UI still needs manual verification. No installer was produced or installed.
