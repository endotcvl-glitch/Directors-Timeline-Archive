# Directors' Timeline Archive

## Director Portrait Style Guide

**Version:** 1.4  
**Status:** Master Style Guide  
**Primary output:** 180 × 180 px portrait icon  
**Last updated:** 2026-08-11

---

## 1. Purpose

This guide defines the shared visual language for director portraits used in **Directors' Timeline Archive**.

Its purpose is to:

- maintain a recognizable, consistent portrait series as the archive grows;
- keep every director individually identifiable without losing the shared art direction;
- ensure portraits align cleanly when displayed side by side;
- provide a reusable master prompt for future image generation;
- make each image read clearly at the final 180 × 180 px icon size.

This document is the source of truth for the series. Director-specific traits and poses may change, but the palette, scale, framing logic, background, and overall finish should remain consistent.

---

## 2. Visual Concept

> A modern reinterpretation of a 1970s film-culture magazine portrait: restrained, cinematic, tactile, and unmistakably illustrated.

Each portrait must feel like an original editorial painting of a filmmaker—not a substitute for a photograph and not a photograph with a painting filter. The series presents directors as artists with distinct creative identities while retaining the atmosphere of a single curated archive.

### Keywords

- Cinematic
- Editorial
- Archival
- Monochrome
- Painterly
- Graphic
- Intellectual
- Timeless
- Restrained
- Filmic

---

## 3. Art Style

- Monochrome, painterly editorial portrait.
- Approximately **50–55% realistic**, with deliberate simplification and clearly visible stylization.
- Clearly recognizable as a hand-painted illustration at first glance, including at thumbnail size.
- Influenced by painted film posters, graphic novels, and mid-to-late twentieth-century film magazines.
- Strong, readable silhouette with facial features constructed from simplified, interlocking light-and-shadow planes.
- A balance of oil-paint character and graphic clarity.
- Favor a convincing likeness expressed through large shapes; do not pursue photographic accuracy through tiny details.
- Do not render pores, eyelashes one by one, individual beard hairs, smooth skin gradients, or optically precise reflections.
- The brushwork must describe the form. A uniform canvas or paint texture placed over a realistic portrait does not satisfy this guide.
- Preserve the director's recognizable facial structure without copying a particular photograph or existing artwork.

### Mandatory master style references

Two approved references control the rendering system:

`outputs/dta-portrait-style-master-reference.png`

Use this as the **series structure reference** for monochrome tonal balance, editorial atmosphere, facial readability, background restraint, and overall cohesion.

`assets/portraits/ari-aster.png`

Use this as the **primary brushwork and finish reference**. Its fewer, larger interlocking value blocks, visibly rough oil strokes, dry-brush breaks, blunt stroke endings, selective lost edges, simplified facial planes, and broadly painted clothing define the standard finish from v1.3 onward.

Whenever the image-generation workflow supports reference images, attach **both files**. Give `assets/portraits/ari-aster.png` priority for paint handling and finish, and give the series structure image priority for tonal cohesion. Use a separate photograph only as an **identity reference** when a closer likeness is required.

The master reference controls:

- size and visibility of brushstrokes, primarily controlled by the Ari Aster brushwork reference;
- simplification of facial planes;
- balance between likeness and painterly interpretation, with painterly construction slightly favored;
- grouped treatment of hair, beard, and clothing;
- restrained monochrome tonal range;
- the point at which the portrait must stop becoming more realistic.

### Ari Aster touch profile — observed production standard

The following characteristics describe the visible paint handling in `assets/portraits/ari-aster.png` and must be translated to each new subject without copying Ari Aster's identity or accessories.

- **Plane-first construction:** The face is assembled from interlocking polygonal and block-like value planes. The forehead, temples, cheeks, bridge and sides of the nose, jaw, and neck read as joined pieces of paint rather than smoothly modeled skin.
- **Broad directional marks:** Most strokes are short-to-medium, flat, and decisively directional. Adjacent marks change angle to describe the turn of form. Stroke direction carries the anatomy; a uniform texture overlay is not acceptable.
- **Visible bristle body:** Individual marks retain blunt ends, slight ridges, dry-brush skips, and irregular borders. The paint appears tactile but controlled, with no thick sculptural palette-knife buildup.
- **Compressed grayscale:** The portrait uses a restrained ladder of near-black, charcoal, muted mid-gray, and soft off-white. Highlights are grouped into broad patches and rarely become pure white; shadows connect into large dark masses.
- **Hard/soft edge rhythm:** Important features—eyes, glasses, nostrils, and mouth—receive firmer edges, while selected hair, cheek, jaw, neck, and jacket contours dissolve into neighboring dark values. Not every contour is equally described.
- **Selective precision:** The eyes, mouth, nostrils, and glasses carry the smallest and sharpest marks. The surrounding skin remains simplified, ensuring that likeness is concentrated rather than evenly detailed.
- **Grouped hair and facial hair:** Hair is designed as a limited set of broad directional masses with a restrained second layer of medium-width locks. Beard and mustache are connected shadow-and-light shapes, not collections of hairs.
- **Quiet clothing treatment:** Jacket, shirt, collar, and tie are subordinated to the face and reduced to broad, low-contrast dark shapes. Seams and folds appear only when needed to explain the silhouette.
- **Painted, not filtered:** Variation comes from the size, direction, overlap, and edge quality of the actual marks. Do not begin with photographic rendering and add canvas grain, noise, or a paint filter afterward.

At approximately 360 × 360 px, the large facial planes and directional stroke groups must still be clearly visible. If they collapse into smooth tonal modeling, the portrait is too photographic and must be repainted.

### Optional variant: Monumental Faceted Planes

This is a controlled experimental variant derived from the exaggerated planar Ridley Scott study. It is **not the default series finish** and must be used only when explicitly requested. The standard Ari Aster touch profile remains the production default.

#### Visual intent

Create a severe, monumental editorial portrait in which likeness is carried by silhouette, feature placement, and a small number of oversized grayscale planes. The result should feel like a portrait assembled from broad pieces of painted value: graphic and architectural, but still visibly brushed and human rather than digitally geometric.

#### Construction rules

- Target approximately **40–45% realism**. Preserve identity through head shape, hair silhouette, eye placement, nose structure, mouth position, and facial-hair mass—not through skin detail.
- Reduce the apparent facial stroke count by approximately half compared with the standard Ari Aster finish.
- Construct the forehead from approximately **4–6 major planes**, each cheek from **2–4 major planes**, and the nose from approximately **3 dominant shapes**: bridge, shadow side, and base/nostril mass.
- Join the temples, eye sockets, shadow-side cheek, jaw, and neck into broad contiguous charcoal fields where anatomy permits.
- Treat under-eye forms, brow furrows, and major wrinkles as one or two graphic shadow wedges. Do not describe them as thin lines.
- Simplify the eyes into small, firm dark accents held inside broad socket shapes. Avoid delicate eyelid modeling and optical reflections.
- Use flat, block-like brush marks with blunt endings, visible overlap, dry-brush breaks, and abrupt value changes. Curved anatomy should emerge from the relationship between angled planes rather than smooth blending.
- Allow selected plane boundaries to feel polygonal, but avoid mechanically perfect vector facets, cubist displacement, or broken anatomy. Both eyes, the nose, and the mouth must remain correctly aligned on one believable head.
- Consolidate hair into approximately **5–7 oversized directional chunks**. Preserve the subject's recognizable outer silhouette while eliminating fine locks and flyaway strands.
- Consolidate beard and mustache into approximately **3–5 connected value masses** with irregular dry-brush edges. Never use individual hairs, repeated dashes, or stippling.
- Reduce jackets, shirts, collars, and lapels to a few near-black shapes. Clothing should support the head silhouette and contain almost no internal description.
- Compress the value range into near-black, charcoal, muted mid-gray, and grouped soft off-white. Highlights should appear as a few large slabs rather than many small accents.
- Keep the exact standard background, framing, head scale, eye-line, monochrome palette, and no-text rules unchanged.

#### Boundary conditions

Reject or revise the variant when:

- the face becomes unrecognizable because key proportions or feature alignment have been displaced;
- the result reads as faceted 3D rendering, low-poly CGI, vector art, or cubism rather than broad oil painting;
- the planes become uniformly sharp and mechanical, with no bristle drag, imperfect overlap, or lost edges;
- small strokes or smooth gradients return and weaken the monumental plane structure;
- hair, beard, or clothing regains realistic strand and fabric detail;
- the background varies from exact flat `#1E1E1E`.

#### Invocation phrase

Use this exact label in production requests:

```text
Apply the optional “Monumental Faceted Planes” variant from Directors Portrait Style Guide v1.4. Preserve the standard series framing and background, but reduce the portrait to oversized interlocking grayscale planes with approximately 40–45% realism.
```

It does **not** control the depicted identity, pose, glasses, hairstyle, facial hair, or clothing. Never transfer those subject-specific features to another director.

### Style fidelity gate — mandatory

A portrait must be rejected or regenerated when any of the following is true:

- it could plausibly be mistaken for a monochrome photograph at first glance;
- skin is modeled mainly with smooth gradients instead of visible painted planes;
- the likeness depends on pores, wrinkles, individual hairs, or other micro-detail;
- the entire image has uniform fine texture resembling a digital painting filter;
- facial transitions are more polished or optically accurate than the master reference;
- brushstrokes disappear when the image is viewed at approximately 360 × 360 px.
- the finish is visibly smoother, tighter, or more photographic than the Ari Aster brushwork reference.
- the forehead, cheeks, nose, or neck are fragmented into many small strokes instead of a few large light-and-shadow planes;
- hair or facial hair is built from repeated narrow marks instead of a small number of grouped directional masses;
- clothing contains unnecessary folds, texture, or detail instead of broad dark shapes.

---

## 4. Palette

Use a restrained grayscale palette only.

| Role | Specification |
|---|---|
| Deepest shadow | Near-black to black |
| Dark midtone | Charcoal gray |
| Light midtone | Muted gray |
| Highlight | Soft off-white; never glaring white |
| Background | Flat dark gray fixed at `#1E1E1E` |

### Palette rules

- No chromatic color.
- Keep highlights subdued so the portrait feels cinematic rather than glossy.
- Use black in broad, intentional masses.
- Maintain enough separation between the subject and background for the silhouette to remain legible at 180 px.
- Do not introduce sepia, blue, or warm skin tones unless a future version of this guide explicitly defines a color variant.

---

## 5. Brushwork

- Use clearly visible, controlled, medium-to-broad painterly strokes matching `assets/portraits/ari-aster.png`.
- Brushwork should be approximately **15–20% larger, rougher, and more decisive** than the v1.1 series structure reference.
- Build the face from fewer, larger interlocking value shapes. Do not smoothly blend every transition.
- Use medium-to-large block-like strokes across the forehead, temples, cheeks, nose planes, jaw, and neck.
- Reserve smaller strokes for the eyes, nostrils, and mouth only where likeness requires them.
- Allow visible bristle endings, dry-brush skips, imperfect overlaps, and uneven stroke boundaries in selected areas.
- Use moderate controlled impasto: approximately **10–15% lighter** than a traditional thick oil painting. Highlights may carry slightly stronger paint relief than v1.1, without becoming sculptural.
- Simplify both the light and shadow sides of the face into clean, readable planes.
- Treat hair as grouped masses rather than individual strands.
- Preserve the subject's natural hairline, silhouette, length, and volume before simplifying the paint handling.
- Organize hair hierarchically: first establish approximately **5–10 broad directional masses**, then add only a small number of medium-width overlapping locks to explain natural flow.
- Hair may carry slightly more internal articulation than the forehead, cheeks, beard, or clothing, but it must still read as grouped painted locks—not a collection of individual strands.
- Use broad directional highlights and restrained medium accents to explain changes in direction around the crown, temples, and outer contour.
- Treat beards and mustaches as grouped painted shapes with selected broken edges, never as collections of individual hairs.
- Keep clothing broad and understated, without small folds or decorative detail.
- The face may carry slightly more brush information than the background.
- Allow restrained lost edges where hair, the shadow-side jaw, or dark clothing meets a similar value.
- Use lost edges more confidently than v1.1: selected portions of hair, shadow-side cheek, jaw, neck, and jacket may dissolve into adjacent charcoal values.
- Preserve a handmade quality without allowing texture to obscure likeness.
- Do not create realism first and add texture afterward; the painted shapes themselves must construct the face.

### Large-plane construction — mandatory

- Reduce the total stroke count and construct the portrait from fewer, larger marks.
- Build the forehead, cheeks, nose, jaw, and neck from large, clearly separated light-and-shadow planes.
- Prefer 5–10 broad directional hair masses with a restrained secondary layer of medium-width locks. Preserve a believable hairstyle without using dense narrow strokes or individually described strands.
- Merge mustaches and beards into grouped painted shapes; eliminate repetitive short hair marks and stippling.
- Simplify jackets, shirts, collars, and folds into a small number of broad dark masses.
- Use small strokes only where they are essential to recognition, primarily around the eyes, nostrils, and mouth.
- When uncertain, merge adjacent small shapes into one larger value block. Large-plane readability takes priority over surface detail.

---

## 6. Lighting

- Use one strong, cinematic directional light.
- Establish a clear division between light and shadow.
- Keep the shadow side deep but not entirely featureless; retain restrained midtone information where needed for identity.
- Use sharper, slightly cel-like shadow boundaries in selected areas to improve graphic readability.
- Avoid soft beauty lighting, multiple light sources, glossy highlights, and photographic studio polish.
- Lighting direction and contrast should feel related across the series even when the director's pose changes.

---

## 7. Composition and Framing

### Fixed production frame

- Canvas: **180 × 180 px**.
- Aspect ratio: **1:1**.
- Portrait type: close bust portrait, generally chest-up.
- Compose directly for the square icon; do not generate a loose portrait that relies on later cropping.

### Head scale and placement

- Keep head size visually consistent across every portrait.
- The head should feel large and immediate within the frame.
- Crop the top of the hair or head **slightly** at the upper edge—intentional, never severe.
- Target head height, from visible top/crop line to chin: approximately **70–72% of the canvas**.
- Target head width: approximately **52–56% of the canvas**, adjusted only where natural anatomy requires it.
- Keep the eyes near a consistent horizontal band, approximately **42–46% down from the top edge**.
- Keep the lower shoulder/chest mass anchored consistently near the bottom of the frame.
- Preserve comparable visual weight and side margins when portraits are viewed together.

### Series consistency rule

Imagine every portrait was created with the same camera, lens, distance, crop, and output frame. The pose may change, but the perceived head scale, eye-line band, lower-body anchor, and overall visual weight must remain stable.

### Small-size test

At 180 × 180 px, confirm that:

- the director remains recognizable;
- eyes and primary facial structure remain legible;
- texture does not become visual noise;
- the silhouette remains distinct from the background;
- the portrait aligns naturally with other images in the series.

---

## 8. Background Specification

- Use a **flat, single-color dark gray background fixed at `#1E1E1E`**.
- Final production assets must use exact RGB `30, 30, 30` (`#1E1E1E`).
- No alternative working range or per-image background adjustment is allowed.
- No gradient.
- No scenery, props, typography, logos, frames, halos, or decorative objects.
- No background brushwork, grain, texture, patches, vignette, glow, or directional movement.

---

## 9. Texture

- Apply fine, restrained film grain across the finished image.
- Grain should evoke an archival print or film still, not digital noise.
- Keep grain density consistent across the series.
- Avoid scratches, dust marks, damaged-film effects, paper fibers, canvas weave, and distressed poster artifacts unless explicitly requested for a separate variant.
- Suppress thick oil-paint relief and excessive surface shine.
- Texture must remain subordinate to facial recognition and silhouette.
- Do not use uniform micro-texture as a substitute for brushwork.
- The face should show varied stroke direction and size; repeating identical small marks is prohibited.
- Favor fewer large strokes over many careful small strokes.
- Dry-brush breaks and bristle drag are encouraged on hair, clothing, and broad facial planes, but must not obscure the eyes or mouth.

---

## 10. Pose Rules

Every director must receive a different pose or gesture suited to their public creative persona. Repeating one rigid pose across the series is discouraged.

Possible variations include:

- frontal gaze;
- three-quarter view;
- subtle profile turn;
- gaze directed just outside the frame;
- chin slightly lowered or raised;
- hand near the chin;
- arms folded, when visible within the shared crop;
- a restrained lean or shoulder turn.

### Non-negotiable constraints

- Change the pose for each director.
- Preserve the same perceived head size and 180 × 180 framing system.
- Keep the intentional slight crop at the top of the head.
- Do not zoom out to accommodate a gesture.
- Do not let hands dominate or obscure essential facial features.
- Avoid theatrical action poses, exaggerated expressions, or caricatured body language.
- The portrait should remain composed, intelligent, and editorial.

---

## 11. Master Prompt

Replace all bracketed fields before use.

```text
Create a portrait of [DIRECTOR NAME] for the Directors' Timeline Archive portrait series.

VISUAL CONCEPT
A modern reinterpretation of a 1970s film-culture magazine portrait. Cinematic, editorial, archival, restrained, and timeless. Present the director as an artist with a distinct creative identity.

ART STYLE
A high-contrast monochrome hand-painted illustration, approximately 50–55% realistic, with clear stylization and simplified forms. It must be immediately recognizable as an oil-painted illustration, never a monochrome photograph or a photograph with a painting filter. Combine the atmosphere of a painted film poster with the graphic clarity of a sophisticated graphic novel. Preserve the director's recognizable facial structure through large shapes without reproducing a specific photograph or existing artwork.

MASTER STYLE REFERENCE — STRICT
Use both attached Directors' Timeline Archive references. Use `dta-portrait-style-master-reference.png` for tonal structure, editorial atmosphere, facial readability, and series cohesion. Use `assets/portraits/ari-aster.png` as the primary authority for paint handling and finish: fewer large interlocking value blocks, decisive rough oil strokes, dry-brush breaks, blunt endings, uneven boundaries, selective lost edges, and broadly simplified clothing. Do not copy either reference subject's identity, pose, glasses, hair, beard, or clothing. A separate identity photograph, when supplied, controls facial identity only and must not make the result smoother or more photographic than the Ari Aster brushwork reference.

BRUSHWORK
Construct the portrait directly from fewer, larger, medium-to-broad brushstrokes and interlocking value shapes. Reduce the total stroke count and make the average stroke approximately 15–20% larger and rougher than the series structure reference. Organize the forehead, cheeks, nose, jaw, and neck into a small number of large, clearly separated light-and-shadow planes. Do not fragment these areas into many small strokes or smoothly blend every transition. Permit visible bristle endings, dry-brush skips, imperfect overlaps, and selected lost edges. Use small strokes only around the eyes, nostrils, and mouth where likeness requires precision. Use moderate controlled impasto, approximately 10–15% lighter than traditional thick oil paint; highlights may carry slightly stronger relief. Treat hair as a few broad directional masses rather than narrow strands. Merge beards and mustaches into grouped shapes without repeated short hair marks or stippling. Simplify clothing into a small number of broad dark shapes without detailed folds or texture. Give the face more brush information than the background. When uncertain, merge adjacent small shapes into a larger value block. Do not render a realistic face first and add a canvas texture afterward.

LIGHTING
Use one strong cinematic directional light with a clear light-and-shadow division. Keep the shadow side deep but retain limited midtone information where needed for recognition. Introduce slightly sharp, cel-like shadow boundaries in selected areas. Avoid soft beauty lighting and glossy photographic highlights.

PALETTE
Use only black, off-white, and grayscale tones. Keep highlights muted. Use broad black masses. No color or sepia.

BACKGROUND
Use an exactly flat, uniform #1E1E1E dark-gray background (RGB 30, 30, 30). No gradient, vignette, glow, texture, grain, brushwork, patches, objects, scenery, text, logo, border, or decoration. Do not vary this color between portraits.

COMPOSITION AND FRAMING — STRICT
Square 180 × 180 px icon composition. Close chest-up portrait. Make the head large in the frame and crop the top of the hair or head slightly at the upper edge. Keep the perceived head size consistent with every portrait in the series: visible head height approximately 70–72% of the canvas and head width approximately 52–56%. Keep the eyes within a consistent band approximately 42–46% down from the top. Anchor the shoulders and chest consistently near the lower edge. The final image must align naturally beside other portraits in the series.

POSE
Use a pose different from all previously created directors while preserving the fixed framing, head scale, eye-line band, and visual weight. For this director use: [POSE / GAZE / GESTURE]. Keep the pose restrained, intelligent, and editorial.

TEXTURE
Apply fine, subtle, consistent film grain. Keep oil-paint thickness controlled but visibly tactile. Vary brush size and direction naturally. Favor fewer large strokes over many small marks. Encourage restrained dry-brush drag on hair, clothing, and broad facial planes. Do not use uniform fine texture or repeated tiny marks. Do not add scratches, dust, paper texture, canvas weave, or distressed-poster damage.

DIRECTOR-SPECIFIC TRAITS
[FACIAL FEATURES]
[HAIR / FACIAL HAIR / GLASSES]
[EXPRESSION AND PRESENCE]
[OPTIONAL VISUAL QUALITY ASSOCIATED WITH THEIR FILMS]

OUTPUT PRIORITY
The director must remain recognizable at 180 × 180 px. Prioritize likeness through large shapes, bold visible painterly construction, silhouette, eye readability, consistent scale, and series cohesion over fine detail. If the result looks smoother, tighter, or more photographic than the Ari Aster brushwork reference, simplify it and repaint with fewer, larger strokes before approval.
```

---

## 12. Negative Prompt

```text
photograph, photorealistic, hyperrealistic, realistic monochrome photograph, photographic skin, visible pores, pore detail, optically precise skin, smooth airbrushed gradients, overblended paint, polished digital painting, tight academic rendering, timid tiny strokes, realistic face with a painting filter, digital canvas filter, uniform micro-texture, repeating tiny brush marks, individual eyelashes, individual beard hairs, individually rendered hair strands, exact recreation of a source photo, color, sepia, bright white highlights, glossy studio portrait, beauty lighting, soft diffuse lighting, multiple light sources, gradient background, background color other than #1E1E1E, background texture, background grain, vignette, glow, white background, scenery, background objects, film set, camera equipment, typography, letters, captions, logo, watermark, border, frame, halo, uncontrolled heavy impasto, thick sculptural paint ridges, chaotic palette-knife abstraction, cubist distortion, excessive brush texture, canvas weave, paper fibers, scratches, dust, distressed poster, excessive digital noise, cross-hatching, tiny facial detail, busy clothing, costume, smile, open mouth, exaggerated emotion, caricature, comedy pose, action pose, distorted anatomy, oversized hands, hands covering the face, inconsistent head scale, excessive headroom, fully visible head with large top margin, severely cropped face, zoomed-out composition, full body, landscape format
```

---

## 13. Per-Director Customization Checklist

Complete this checklist before generating a new portrait.

### Identity

- [ ] Correct full name and spelling
- [ ] Distinctive face shape and proportions identified
- [ ] Hairline, hairstyle, and hair mass identified
- [ ] Facial hair specified, if applicable
- [ ] Glasses or signature accessories specified only when appropriate
- [ ] Age or career period defined when relevant

### Character

- [ ] Three or four descriptive qualities selected
- [ ] Expression remains restrained and believable
- [ ] A subtle visual quality associated with the director's work is defined without copying a specific film

### Pose

- [ ] Pose differs from previously created portraits
- [ ] Gaze direction specified
- [ ] Head and shoulder angle specified
- [ ] Gesture, if any, fits inside the fixed crop
- [ ] Pose does not require zooming out

### Series control

- [ ] Both approved references attached: series structure and Ari Aster brushwork master
- [ ] Any identity photograph is explicitly labeled as identity-only
- [ ] 180 × 180 px square composition
- [ ] Head slightly cropped at the top
- [ ] Head scale matches the master portrait/reference sheet
- [ ] Eye-line remains within the shared band
- [ ] Background is exactly flat `#1E1E1E` (RGB 30, 30, 30), with no texture or tonal variation
- [ ] Monochrome palette only
- [ ] Medium-to-broad brushwork and grain match the Ari Aster brushwork master
- [ ] Average strokes are visibly larger and rougher than the v1.1 structure reference
- [ ] Forehead, cheeks, nose, jaw, and neck are organized into a few large light-and-shadow planes
- [ ] Hair preserves the subject's natural silhouette and is organized into 5–10 broad directional masses with only restrained medium-width locks
- [ ] Beard and mustache contain no repetitive short hair marks or stippling
- [ ] Clothing is simplified into broad dark shapes without unnecessary folds or texture
- [ ] Selected dry-brush breaks, imperfect overlaps, and lost edges are present
- [ ] Facial form is built from painted planes, not smooth photographic gradients
- [ ] No pores, individual eyelashes, individual beard hairs, or other photographic micro-detail
- [ ] Image does not resemble a photograph with a canvas filter
- [ ] No text, logo, props, or decorative background
- [ ] Final image checked beside at least two existing portraits

---

## 14. Quality-Control Review

Before approving a portrait, review it at both working size and final 180 × 180 px size.

1. **Likeness:** Is the director identifiable without relying solely on accessories?
2. **Illustration quality:** Does it immediately look hand-painted rather than photographic?
3. **Scale:** Does the head match the perceived size of the master portrait?
4. **Crop:** Is the top of the head only slightly and intentionally cropped?
5. **Alignment:** Do the eye-line and lower portrait mass align with the series?
6. **Pose:** Is the pose distinct but restrained?
7. **Lighting:** Are the light and shadow shapes graphic and readable?
8. **Background:** Is it exactly uniform `#1E1E1E` (RGB 30, 30, 30), with no gradient, texture, grain, vignette, glow, or decoration?
9. **Paint construction:** Is the face built from fewer, larger, varied directional planes matching the Ari Aster brushwork reference?
10. **Large-plane discipline:** Are the forehead, cheeks, nose, jaw, and neck expressed as a few large value blocks rather than many small marks?
11. **Grouped detail:** Does the hair preserve its natural silhouette through broad masses plus restrained medium locks, while facial hair remains consolidated and clothing is reduced to large dark shapes?
12. **No filter effect:** Is uniform micro-texture absent, with no sign of a realistic portrait merely covered by a paint or canvas filter?
13. **Texture:** Is the grain subtle, and is the brush relief controlled?
14. **Style comparison:** Is the portrait at least as bold and painterly—and no smoother or more polished—than `assets/portraits/ari-aster.png`?
15. **Small-size clarity:** Does it remain legible and balanced at 180 px?

---

## 15. Example Usage

### Short request when this guide is attached

```text
Use Directors Portrait Style Guide v1.3.3 to create a portrait of David Fincher. Attach `outputs/dta-portrait-style-master-reference.png` for series structure and `assets/portraits/ari-aster.png` as the primary paint-handling and finish reference.

Choose a new pose that has not been used for another director. Use a restrained three-quarter turn with his gaze directed slightly past the camera. Preserve the fixed head scale, slight top crop, eye-line band, exact flat #1E1E1E background, monochrome palette, bold medium-to-broad planar brushwork, dry-brush breaks, selected lost edges, and fine film grain on the subject only. The result must be visibly hand-painted and no smoother than the attached Ari Aster brushwork reference.

Director-specific traits: closely cropped hair, angular facial structure, focused eyes, composed expression, and a precise, cool, controlled presence.
```

### Filled master-prompt example: Christopher Nolan

```text
Create a portrait of Christopher Nolan for the Directors' Timeline Archive portrait series, following Director Portrait Style Guide v1.3.3 exactly. Use the attached structure reference for tonal cohesion and the Ari Aster brushwork reference as the primary authority for paint handling and finish. If an identity photograph is supplied, use it only for Nolan's facial proportions and do not copy its pose, lighting, clothing, background, or photographic finish.

Use a modern reinterpretation of a 1970s film-culture magazine portrait: cinematic, editorial, archival, and restrained. Render him as a high-contrast monochrome hand-painted illustration that is approximately 50–55% realistic and unmistakably non-photographic. Construct the face from fewer, larger directional interlocking strokes across the forehead, temples, cheeks, nose planes, jaw, and neck. Make average strokes approximately 15–20% larger and rougher than the structure reference. Include selected dry-brush breaks, imperfect overlaps, and lost edges. Use smaller strokes only around the eyes, nostrils, and mouth. Use moderate controlled impasto, approximately 10–15% lighter than traditional thick oil paint. Use broad black masses, muted highlights, and fine film grain. Do not create a realistic face and add texture afterward.

Use one strong directional light and a graphic division between light and shadow. Keep limited midtone detail in the shadow for recognition. Use only black, off-white, and grayscale tones.

Place him against a perfectly flat #1E1E1E background (RGB 30, 30, 30) with no gradient, grain, texture, vignette, glow, objects, typography, logo, or decoration.

Compose directly as a 180 × 180 px square, close chest-up portrait. Keep his head large and consistent with the series, with the top of his hair slightly cropped by the upper edge. Maintain a visible head height of approximately 70–72%, head width of approximately 52–56%, and eyes approximately 42–46% down from the top.

Use a restrained pose unique within the series: a subtle three-quarter shoulder turn, head angled back toward the camera, with a focused gaze just off-axis. Do not zoom out to accommodate the pose.

Capture Christopher Nolan's distinctive swept-back hair, structured facial proportions, concentrated eyes, and composed, intellectual, exacting presence. Prioritize likeness through large shapes, visible painterly construction, silhouette, eye readability, consistent scale, and series cohesion over fine detail. Reject and simplify the result if it looks more photographic than the approved master style reference.
```

---

## 16. Version History

Use semantic-style versioning for meaningful changes to the system.

- **Patch** (`1.0.1`): wording clarifications or minor prompt tuning without changing the visual direction.
- **Minor** (`1.1`): a new optional rule, production method, or controlled variant.
- **Major** (`2.0`): a substantial change to composition, palette, medium, or overall art direction.

| Version | Date | Author | Changes | Reference assets affected |
|---|---|---|---|---|
| 1.0 | 2026-08-01 | [Name] | Initial master style guide | Initial portrait series |
| 1.1 | 2026-08-01 | [Name] | Established a mandatory master style reference; reduced realism target from 70% to 55–60%; strengthened planar brushwork and anti-photorealism requirements | All future portraits; regenerate overly realistic portraits as needed |
| 1.2 | 2026-08-03 | [Name] | Adopted the Tim Burton rough-oil treatment as the brushwork master; increased average stroke size and roughness by 15–20%; added dry-brush breaks, stronger lost edges, and moderate impasto; reduced realism target to 50–55% | All future portraits; update earlier portraits when consistency requires it |
| 1.2.1 | 2026-08-06 | Endo Hiroyuki | Simplified portrait asset filenames to director name plus optional version; removed the `dta-director-` prefix and `-portrait` suffix | All future portrait assets |
| 1.3 | 2026-08-07 | Endo Hiroyuki | Adopted `assets/portraits/ari-aster.png` as the primary brushwork and finish reference; established its larger interlocking value blocks, rough oil strokes, broken edges, and broadly simplified clothing as the future standard | All future portraits |
| 1.3.1 | 2026-08-08 | Endo Hiroyuki | Made large-plane construction mandatory: reduced stroke count; enlarged facial light-and-shadow planes; grouped hair and facial hair; simplified clothing into broad dark masses | All future portraits and regenerations |
| 1.3.2 | 2026-08-11 | Endo Hiroyuki | Fixed the background color to exact `#1E1E1E` and prohibited all background texture, grain, gradients, vignettes, glows, and per-image color variation | All future portraits and regenerations |
| 1.3.3 | 2026-08-11 | Endo Hiroyuki | Refined the bold large-plane standard: preserved very large facial value blocks and simplified beard/clothing masses while allowing hair to retain its natural silhouette through 5–10 broad directional groups and restrained medium-width locks | All future portraits and regenerations |
| 1.3.4 | 2026-08-11 | Endo Hiroyuki | Documented the observed Ari Aster touch profile: plane-first construction, directional bristle marks, compressed grayscale, hard/soft edge rhythm, selective precision, and non-filtered paint handling | All future portraits and regenerations |
| 1.4 | 2026-08-11 | Endo Hiroyuki | Added the optional “Monumental Faceted Planes” variant derived from the exaggerated Ridley Scott study; defined its 40–45% realism, oversized planar construction, identity safeguards, and invocation rule without changing the default Ari Aster finish | Optional experimental portraits only |

### Change proposal template

```text
Proposed version:
Date:
Requested by:

Current rule:

Proposed change:

Reason:

Expected visual impact:

Does this require regenerating existing portraits? Yes / No

Reference images or tests:
```

---

## 17. Asset Naming Convention

```text
{director-name}-v{version}.png
```

Examples:

```text
m-night-shyamalan-v2.png
christopher-nolan-v2.png
denis-villeneuve-v2.png
steven-spielberg-v1.png
```

### Rules

- Use the director's full English name in lowercase kebab case.
- Separate each part of the name with a hyphen.
- When a version identifier is required, append it as `-v1`, `-v2`, and so on.
- Use `.png` as the standard extension.
- Do **not** add `dta-director-` to the beginning of the filename.
- Do **not** add `-portrait` to the end of the director name.
- Do not use spaces, underscores, Japanese characters, or other symbols.

Incorrect examples:

```text
dta-director-m-night-shyamalan-portrait-v2.png
dta-director-christopher-nolan.png
denis_villeneuve_portrait.png
```

Keep the editable master or highest-resolution generation separately from the final optimized 180 × 180 px export.
