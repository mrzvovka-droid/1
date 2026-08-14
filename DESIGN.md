---
name: Автошкола «Вымпел»
description: Кремовая бумага, шеврон-дорога и оранжевый только там, где надо ехать или нажимать.
colors:
  paper: "#f2ede4"
  paper-2: "#e9e2d6"
  ink: "#17181b"
  ink-soft: "#55575e"
  orange: "#e4531b"
  orange-deep: "#c8440f"
  sand: "#d8c7a6"
  line: "#d5cdbf"
  error-edge: "#ff8a5c"
  error-text: "#ff9d75"
  flag-rust: "#a83a0b"
  flag-rust-deep: "#8f3208"
  flag-note-ink: "#4a4436"
typography:
  display:
    fontFamily: "Oswald, 'Golos Text', sans-serif"
    fontSize: "clamp(2.75rem, 9.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Oswald, 'Golos Text', sans-serif"
    fontSize: "clamp(1.75rem, 4.2vw, 3rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Oswald, 'Golos Text', sans-serif"
    fontSize: "clamp(1.5rem, 3.4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "'Golos Text', system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.6vw, 1.25rem)"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "normal"
  body:
    fontFamily: "'Golos Text', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Golos Text', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  action:
    fontFamily: "Oswald, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    letterSpacing: "0.02em"
  micro-caps:
    fontFamily: "Oswald, sans-serif"
    fontSize: "0.5625rem"
    fontWeight: 400
    letterSpacing: "0.34em"
rounded:
  hairline: "2px"
  control: "3px"
  slot: "4px"
  panel: "5px"
  pill: "99px"
spacing:
  rail: "40px"
  rail-sm: "28px"
  gutter: "clamp(1.25rem, 5vw, 5rem)"
  step: "clamp(4.5rem, 9vw, 8.5rem)"
  wrap: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "1rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.orange}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "1rem 1.75rem"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-sm:
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0.625rem 1.125rem"
    size: "0.875rem"
  input:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0.9375rem 1rem"
    width: "100%"
  form-panel:
    backgroundColor: "color-mix(in srgb, #f2ede4 7%, #17181b)"
    rounded: "{rounded.panel}"
    padding: "clamp(1.25rem, 3vw, 2rem)"
  stop-marker:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    height: "{spacing.rail}"
    width: "{spacing.rail}"
  stop-marker-reached:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
  slot-placeholder:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.slot}"
    padding: "1.5rem"
  cutout-field:
    backgroundColor: "{colors.sand}"
    rounded: "{rounded.slot}"
    padding: "0"
  chip-fact:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.5rem 0.875rem"
    size: "0.875rem"
---

# Design System: Автошкола «Вымпел»

## Overview

**Creative North Star: "The Road Itself"**

The page is built as a road, not as a page about a road. One chevron tile — a 40×30 SVG arrow — is the only piece of graphic vocabulary in the system, and it is never used as an ornament. It is drawn as a vertical band at the left edge, in sand where the road is not yet driven and in orange where it is, and it carries the reader from the hero down through six numbered stops to a finish line. Everything else is paper, ink and space. The system has no icon set, no card grid, no illustration layer, and nothing that decorates without also directing.

The ground is warm and printed rather than digital: cream paper (`paper`) under near-black ink, with a second, slightly deeper paper for shifted sections and a warm sand for the road's undriven state and for the ground people stand on. Density is low and the rhythm is long — sections breathe on a `clamp(4.5rem, 9vw, 8.5rem)` step and headings run tight, condensed and uppercase against generous body measure. Orange is scarce by construction: it belongs to the road and to the things you can act on, so its appearance anywhere on screen is a claim on the reader's attention rather than a mood.

The client's binding image constraints are honoured negatively as much as positively: no Soviet-driving-school register, no municipal-institution formality, no road-sign iconography as the page's visual identity, and no over-severe system. The chevron is a road marking, not a traffic sign; the type is condensed and modern rather than official; the tone of the surface is paper and warmth, not enamel and regulation.

**Key Characteristics:**
- One graphic element (the chevron tile) doing structural work, reused at three scales
- Cream paper and near-black ink; orange strictly rationed to road and action
- Condensed uppercase display (Oswald) against a warm humanist body face (Golos Text)
- Completely flat: no shadow anywhere in the stylesheet; depth is tonal and hairline
- One entrance animation, one axis, gated behind reduced-motion
- Unfinished content ships as a visibly marked placeholder, never as invention

## Colors

A warm printed palette — two papers, one ink, one sand — with a single high-energy orange that is spent only on movement and action.

### Primary
- **Signal Orange** (`orange`): the road's driven fill, the primary button, the reached stop-marker, the finish square and finish line, the focus ring, the text caret, the selection background, the scrollbar thumb on hover, the input's focused border, and the hairline flagging every unresolved placeholder note. It is also the fill of the logo's three chevrons, which is the same mark as the road. This is the whole of its licence.
- **Deep Orange** (`orange-deep`): a single darker step, used only for the heading of the final stop (`Экзамен и права`), so the route's last title reads as arrival rather than as another stop.

### Neutral
- **Cream Paper** (`paper`): the page ground, and the text colour on every ink surface (footer links, form input text, signup contact links).
- **Deep Cream** (`paper-2`): the shifted ground for the reviews band, the placeholder slot's fill, and the scrollbar track. It is the only tonal step available for "this section is a different surface".
- **Ink** (`ink`): body text, the unreached stop-markers, the signup and footer surfaces, the skip-link, and the hover ground of both buttons.
- **Soft Ink** (`ink-soft`): secondary prose, nav links at rest, field labels, scale captions, and every `[data-placeholder]` string. It is the system's only text de-emphasis; there is no third grey.
- **Sand** (`sand`): the road's undriven chevrons, the field a cut-out person stands on, the scrollbar thumb, the placeholder's dashed border, the day-bar's bars, and all body text on the ink surfaces (signup and footer). Sand is the ink-surface text colour, which is where its warmth is actually doing work.
- **Hairline** (`line`): every rule and divider on paper — the stuck nav's bottom edge, the facts table's rows, the inline-fact chips' borders, the tick after "Старт маршрута".

### Support
- **Error Edge / Error Text** (`error-edge`, `error-text`): the only failure colours in the build. They exist because form errors appear exclusively on the ink surface, where orange on near-black is too dim to carry an alarm; these are lifted, desaturated oranges that survive that ground.
- **Placeholder Flags** (`flag-rust`, `flag-rust-deep`, `flag-note-ink`): the "Заглушка" tag and its note, in two ground-specific variants — rust on deep cream, a darker rust plus a warm brown note on the sand cut-out field. These are the only colours in the stylesheet hard-coded outside the `:root` token block; the build states them as literals at the point of use.

**No dark mode.** The direction contract reserved sand as the dark-mode ground, but the build ships no `prefers-color-scheme` block and no theme switch. What actually landed is a light page with two permanently dark surfaces — the signup band and the footer — where sand is the body-text colour. If a dark mode is ever built, those two surfaces are the precedent that already exists; do not read the contract's line as though a dark theme is present.

### Named Rules
**The Road-and-Action Rule.** Orange belongs to the road and to what the reader can act on. Anything else that wants to be orange is asking for attention it has not earned; the third permitted use — the hairline on a placeholder note — is orange because an unresolved fact is an outstanding action.

**The Contrast-Pair Rule.** Orange never carries pale text. The primary button is ink on orange and inverts to orange on ink on hover; the reached marker is ink on orange. Cream on orange does not appear anywhere in the build and should not be introduced.

**The Marked Placeholder Rule.** Content the client has not supplied is shown as a visibly marked slot — dashed sand border, a rust "Заглушка" tag, and a note naming exactly what is missing and where to put it. Fabricated reviews, stock photography and invented numbers are not substitutes. Unverified claims (the 100% statistic) ship with their verification note attached in the same orange-hairlined block.

## Typography

**Display Font:** Oswald (500, 700; fallback Golos Text, sans-serif)
**Body Font:** Golos Text (400, 500, 600; fallback system-ui, sans-serif)

Both are self-hosted in `site/fonts/` with `font-display: swap`; the page makes no external font request. Two as-built facts about the shipped files: only Oswald 500 and 700 are hosted, yet three rules ask for Oswald at the default 400 (`.logo__sup`, the nav links, the footer tagline) and are therefore rendered by the browser at 500 — the design intent for those three is the 500 weight, and specifying it would make the build honest rather than change it. And the Oswald `@font-face` set carries a Vietnamese subset alongside the Cyrillic and Latin ones it needs; it is unreferenced weight in the fonts directory, not a design decision.

**Character:** A narrow, upright, slightly official condensed face set tight and in caps, against a warm, open, unmistakably Russian-designed humanist sans. The pairing is deliberately unbalanced: display shouts in a small footprint, body speaks at conversational size with a long measure, and there is no third voice between them.

### Hierarchy
- **Display** (Oswald 700, `clamp(2.75rem, 9.2vw, 6rem)`, line-height .88, tracking -0.028em, caps): the hero headline only. Set in three hard-broken lines and pulled left over the road.
- **Headline** (Oswald 700, `clamp(1.75rem, 4.2vw, 3rem)`, line-height .96, tracking -0.02em, caps): the two load-bearing section titles — the route's opening and the signup's invitation.
- **Title** (Oswald 700, `clamp(1.5rem, 3.4vw, 2.25rem)`, caps): every stop heading and the quieter section titles (facts, reviews). The final stop's heading breaks this tier upward to `clamp(1.875rem, 5vw, 3.5rem)` in deep orange — the one authored exception, and it marks arrival.
- **Lead** (Golos Text 500, `clamp(1.0625rem, 1.6vw, 1.25rem)`, ink): the one-sentence promise under each stop heading. The hero's lead is the same size but 400-weight in soft ink, one step quieter.
- **Body** (Golos Text 400, 1.0625rem, line-height 1.6, max 68ch): all running prose. Narrower measures are set where the column demands: 46ch in the hero lead, 52ch on placeholder notes, 30ch inside a slot.
- **Label** (Golos Text 400, .8125rem, soft ink or sand): field labels, contact labels, legal text, the route-start caption, and every staging note.
- **Action** (Oswald 500, 1rem, tracking .02em, caps): button text. The small nav button drops to .875rem.
- **Micro-caps** (Oswald, .5625rem, tracking .34em, caps): `.logo__sup` — the word "Автошкола" above the wordmark. This is the entire tracked-caps layer.

### Named Rules
**The Oswald-Is-Uppercase Rule.** Setting something in Oswald is what makes it uppercase; the two decisions are not separable in this system. Display headings, stop titles, buttons, nav links, the facts terms, the claim, the footer tagline and the logo are all Oswald and all caps. The one exception in the build is the footer's column headings, which are Oswald at 500 with uppercase and tracking explicitly removed so they read as labels, not as headings. Body copy is never uppercased.

**The Single Tracked Caps Rule.** The tracked-out micro-caps layer — kickers, eyebrows, section numbers, over-labels — was cut from this build. `.logo__sup` at .34em is the only surviving instance and it is part of the logo lockup, not a typographic tier. Do not reintroduce tracked caps as a way to label a section.

**The Tightening Rule.** Display type tightens as it grows: -0.028em at hero size, -0.02em at heading size, -0.01em on the wordmark and the facts terms. Nothing in Oswald tracks positive except the two caps that are labels by function (buttons at .02em, footer tagline at .04em) and the logo's supralabel.

## Layout

A single 1200px measure (`wrap`) centred inside a fluid gutter (`clamp(1.25rem, 5vw, 5rem)`), with one structural offset that defines the whole page: every section on the route axis is indented by the rail plus a fluid gap — `calc(rail + clamp(1.25rem, 3vw, 2.5rem))` — leaving a 40px column at the left edge that belongs to the road and to nothing else. The stop markers are pulled back into that column by exactly the negative of that offset, so they sit on the road rather than beside it.

The hero shares the road's x-position but not its width. Its band is `road-w` — `clamp(96px, 13vw, 190px)` — against the route's 40px rail, and the chevrons scale with it (`background-size: 100% auto`), so the hero's arrows are drawn several times larger than the route's. The two are one road seen at two distances: wide where the reader stands, narrow where it runs ahead into the route. The hero's own offset follows its band, `calc(road-w + clamp(1.25rem, 3vw, 2.5rem))`, and the hero headline is pulled back over the road by exactly the negative of that offset — so at hero width the road passes behind whole words of display type, not just a stem. The band starts at 8% of the hero height and is masked to fade in over its first 26%, so the road arrives from off-screen rather than beginning at a hard edge.

Only the display headline is allowed to cross the road. The hero lead and both buttons sit clear of it, because soft ink over orange measures 1.9:1 — the display face is heavy enough to hold the crossing, running text is not.

Vertical rhythm along the route is a single token: stops are separated by `step` (`clamp(4.5rem, 9vw, 8.5rem)`). Section padding, however, is not tokenized and varies by section: the route opens at `clamp(3rem, 8vw, 6rem)` and closes at `clamp(4rem, 10vw, 8rem)`, facts and reviews sit at `clamp(3.5rem, 8vw, 6rem)`, and signup at `clamp(3.5rem, 9vw, 7rem)`. These are close but not identical — the system has one rhythm token and a set of hand-set section paddings around it.

**Breakpoints.** Two, plus their boundary partner: 900px (max-width) collapses the hero to a single column, drops the headline's negative pull, gives the hero cut-out an explicit 4/5 ratio, and stacks signup, footer and facts rows; 901px (min-width) is where alternating stops open into two columns; 640px (max-width) narrows the rail to 28px, wraps the nav onto two rows with its links on a ruled second line, tightens the route offset to `rail + 1rem`, makes hero buttons full-width, and drops the hero road to `clamp(56px, 16vw, 84px)` starting at 62% — below the buttons, since at mobile width the road is wider than the text offset and would otherwise run under them.

**Split stops.** Above 901px, stops 02, 03 and 05 open a second column — a three-row grid where the prose stays in column one and the stop's evidence (a cut-out photo, the day bar, the claim) spans all three rows in column two. This is what keeps a six-item vertical list from reading as a narrow ribbon down the left edge.

### Named Rules
**The One Road Rule.** The hero road and the route rail share an x-position and a chevron, and are read as a single continuous road seen at two distances — the width difference carries perspective, not inconsistency. Any new full-bleed section on the route axis adopts the same left offset, `calc(rail + gap)` on the route and `calc(road-w + gap)` in the hero, or it does not sit on the road at all.

**The Rail Belongs to the Road Rule.** The left `rail`-wide column carries the chevrons, the stop markers and the finish square. No text, no image and no button is placed in it.

## Elevation & Depth

The system is flat by construction: the stylesheet contains no `box-shadow` at all, at any state, on any element. Depth is achieved three ways and only three ways — tonal grounds (cream paper, deep cream, sand, ink; four surfaces, no more), 1px hairlines in `line` on paper and in a sand-tinted mix on ink, and a 10px backdrop blur behind the sticky nav so content dissolves under it rather than colliding with it. The nav's own edge is a state, not a fixture: its bottom hairline appears only after the page has scrolled 8px.

The single physical gesture in the whole build is a 2px upward translate on button hover. It is a lift without a shadow — the button moves, the page does not pretend to have a light source.

### Named Rules
**The No-Shadow Rule.** This system has no shadow vocabulary and does not want one. If a surface needs to separate, change its ground tone or give it a hairline. Drop shadows, glows and hard offset shadows are all out.

**The Four Grounds Rule.** Cream paper, deep cream, sand and ink are the complete set of surfaces. A fifth tone is a new decision, not a variation.

## Shapes

Corners are almost square. The prevailing radius is 3px (`control`) on buttons, inputs, stop markers, the finish square, inline-fact chips and the success message; placeholder and cut-out fields use 4px, the form panel 5px, and the focus ring rounds at 2px. The scrollbar thumb is the only fully rounded object in the build (99px). This is a five-value radius set rather than a scale, and the differences between 3, 4 and 5 are small enough to read as one intent: nearly-sharp.

The system's actual form language is the chevron. One 40×30 SVG arrow is defined twice as a data-URI custom property — identical geometry, sand and orange — and painted as `background-size: 100% auto; repeat-y` at the rail's width, so the tile scales with the rail rather than tiling at a fixed size. The same arrow, three times over, is the logo mark. Nothing else in the system has a silhouette.

Photography is treated as shape, not as image. People are cut out and stand on a sand field with a 2px orange baseline drawn under them — the ground line is part of the object, and the client's real photographic backgrounds are discarded rather than framed. The hero deliberately removes the field entirely: no sand, no baseline, no border, `overflow: visible`, so the figure stands directly on the paper. That contrast — figure on field in the route, figure on paper in the hero — is the point of cutting the background away.

### Named Rules
**The Whole-Tile Rule.** The road's orange fill is snapped to whole chevrons: its height is floored to a multiple of the tile height, computed as the rail's rendered width × 0.75 (the tile's 30/40 aspect). The driven edge always lands on a finished arrow, never mid-shape.

**The Nearly-Sharp Rule.** Radii stay at or under 5px on every rectangle. Pills and fully-rounded shapes belong to the browser's scrollbar, not to this system's components.

## Components

### Buttons
- **Shape:** near-square (3px), inline-flex, `1rem 1.75rem` padding; the small variant drops to `.625rem 1.125rem` / .875rem for the nav.
- **Primary:** ink on orange. Hover inverts the pair — orange text on an ink ground — and lifts 2px. The inversion is the whole hover; nothing dims or glows.
- **Ghost:** transparent with a 1px ink border and ink text. Hover fills to ink with cream text and lifts 2px.
- **Transitions:** background-colour, colour and transform, all at .28s on the house easing `cubic-bezier(.16, .84, .3, 1)`.
- **Focus:** the global 2px orange ring at 3px offset. Buttons do not define their own focus treatment.
- **Disabled:** 50% opacity, no lift, `not-allowed`.
- **Block:** full width, used once — the form's submit.

### Inputs / Fields
- **Style:** on the ink surface only. Ink ground, cream text, a 1px sand-tinted border at 34% opacity, 3px radius, `.9375rem 1rem` padding, inheriting the body face at 1rem.
- **Hover:** the border warms to 55% sand. **Focus:** the border goes solid orange (plus the global orange ring). The caret is orange everywhere on the page.
- **Error:** the border shifts to the lifted `error-edge`, `aria-invalid="true"` is set, and a .8125rem message in `error-text` appears below the field, wired to the input by `aria-describedby`. Errors are written as instructions in the second person ("Не хватает цифр: нужен номер из 10 или 11 цифр"), never as codes or bare "invalid".
- **Validation timing:** on blur first; after a field has been marked invalid it re-checks on every keystroke, so a corrected field clears itself immediately. Submit validates all fields, shows all messages, and focuses the first bad one.

### Navigation
- Sticky, with an 88%-opaque paper ground and a 10px backdrop blur. The logo lockup sits left (supralabel, wordmark, three orange chevrons), links push right in Oswald caps at .9375rem in soft ink, darkening to ink on hover, and a small primary button closes the row.
- The bottom hairline is added only once `scrollY > 8`, so the bar has no edge while the page is at rest.
- Below 640px the bar wraps: logo and button on row one, the link row full-width beneath a hairline, links tracked flat at .8125rem and spread edge to edge.

### Cards / Containers
There is no card. Grouped content is expressed as ruled rows (the facts list is a definition list with 1px rules top and bottom — a table, not tiles), as bordered chips (inline facts, 1px `line`, 3px radius), or as a change of ground (the reviews band on deep cream; the form panel on a 7%-paper-in-ink mix with a sand-tinted border at 5px radius). Nothing floats.

### The Road (signature component)
The route's spine and the system's defining object.
- **Track:** a `rail`-wide absolute band, sand chevrons repeating down the full height of the route.
- **Fill:** the same band in orange, height driven by scroll, snapped to whole tiles. Progress is measured against a driver's eye line at 58% of the viewport height, clamped 0–1 against the road's box.
- **Markers:** `rail`×`rail` squares in the rail column, Oswald 700 numerals, ink on cream at rest, flipping to ink-on-orange with a .4s colour transition when their top crosses the eye line. They un-flip on scroll back up — the road is a position readout, not a checklist.
- **Finish:** an orange square in the rail column with a 2px orange line running right across the content column, so the route ends on a finish line rather than trailing off with the last list item.
- All of it is `aria-hidden` decoration over an ordered list; the numerals in the markers are decorative duplicates of the semantic order.

### Marked Placeholder Slot (signature component)
Deep cream ground, 1px dashed sand border, 4px radius, centred: a rust "Заглушка" tag at .75rem/600 above a .875rem soft-ink note naming the missing asset and its destination path. The cut-out variant swaps the ground for sand, drops the border, adds the 2px orange baseline and darkens the tag and note for that warmer field. A slot carrying an optional image swaps itself the moment the file actually loads — the image is revealed, the notice and the dashed border disappear — so the same markup ships to staging and to production without edits.

### Day Bar (signature component)
Seven labelled rows of .625rem sand bars under a four-stop time scale, rendered as one `role="img"` with a text alternative. Weekend rows are tinted 55% orange into sand — the only place in the system where orange is mixed rather than used at full strength, and it is doing data work: it marks that the open window does not stop on Saturday.

### Motion
One authored entrance and nothing else. `pull-in`: .68s on the house easing, from `opacity: 0, translateX(-22px)` — the content arrives from the road's side, on the road's axis. It fires once per stop via IntersectionObserver at 15% visibility with a -12% bottom margin, and it is wrapped in `prefers-reduced-motion: no-preference` so the animation is never authored for a reader who has opted out. Elements ship visible in CSS; JS only adds the flag that plays the animation, so nothing is hidden waiting for a script. State transitions elsewhere are .2–.4s on the same easing. Under `prefers-reduced-motion: reduce` all durations collapse to .001ms and smooth scrolling is turned off.

### Browser Surfaces
The system themes what most builds leave to the browser: selection is cream on orange, the caret is orange, the focus ring is a 2px orange outline at 3px offset with a 2px radius, and the scrollbar is an 11px sand thumb inset 3px into a deep-cream track, going orange on hover. These are part of the design, not defaults.

## Do's and Don'ts

### Do:
- **Do** put the chevron to work as structure — a road, a rail, a mark — at the width of the element it belongs to. It scales with `background-size: 100% auto`, so it fits any rail width.
- **Do** keep every section on the route axis at the same `calc(rail + gap)` left offset, so the road stays one road.
- **Do** pair orange with ink in both directions (ink on orange at rest, orange on ink on hover). Both directions are legible; cream on orange is not.
- **Do** separate surfaces with a ground change or a 1px `line` hairline.
- **Do** ship unresolved content as a marked slot that names what is missing and where it goes, and attach a verification note to any claim not yet documented.
- **Do** cut people out and stand them on the sand field with its orange baseline — or, in a hero, on the paper itself with no field at all.
- **Do** gate any motion behind `prefers-reduced-motion` and give the reduced path a real, complete, static state.
- **Do** write field errors as second-person instructions that say what to fix.

### Don't:
- **Don't** add a shadow. There are none in the build and the flatness is the material.
- **Don't** spend orange on decoration, mood, backgrounds or large fills. Road and action only.
- **Don't** reintroduce tracked-out caps as kickers, eyebrows or section labels; `.logo__sup` is the only instance and it belongs to the logo.
- **Don't** uppercase body copy, or set body copy in Oswald.
- **Don't** turn the route into an icon-and-tile grid of "преимущества" — the page exists specifically to refuse that layout.
- **Don't** use road signs, official insignia or municipal-institution styling as the page's visual identity; the chevron is a road marking and that is the extent of the traffic vocabulary.
- **Don't** frame a photograph in a box. The client's backgrounds are the weak part of the footage; the cut-out is the treatment.
- **Don't** place anything but the road, its markers and its finish square in the left rail column.
- **Don't** invent reviews, numbers, names or photographs to fill a slot.
