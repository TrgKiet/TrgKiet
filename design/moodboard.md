## Portfolio Moodboard & Art Direction

This document consolidates research, style references, and four distinct art directions for your portfolio website. Each direction includes a color palette, typography pairings (free Google Fonts), layout/motion notes, and example references.

---

### Quick brand prompts (fill in to tailor the moodboard)
- Who is your primary audience? (recruiters, clients, peers)
- What 3 adjectives should the site convey? (e.g., confident, playful, refined)
- What work will you prioritize? (case studies, visual gallery, writing)
- Any colors or motifs you love/avoid?

---

### Direction A — Modern Swiss Minimal
- Keywords: reductive, grid-first, confident whitespace, calm motion
- Palette (HEX)
  - Background: `#F8F9FA` (Snow)
  - Primary text: `#0E0F10` (Onyx)
  - Subtext: `#5B5F63` (Neutral Gray)
  - Accent: `#3B82F6` (Electric Blue)
  - Soft accent: `#FF6B6B` (Coral) [sparingly]
- Typography (Google Fonts)
  - Display: Space Grotesk (variable)
  - Body/UI: Inter (variable)
- Layout
  - 12-column grid, generous gutters; 4–8px base unit with 8pt scaling
  - Asymmetric hero with big type, concise intro; masonry-lite work index
- Motion
  - Minimal parallax, soft fade/slide at 120–240ms; subtle scroll-linked headline tracking
- Components
  - Case study card with thumbnail, role, impact metric; modular project filter
- Accessibility
  - Target contrast: ≥ 7:1 for text; use blue only for emphasis with bold/underline
- CSS tokens
```css
:root {
  --bg: #F8F9FA; --text: #0E0F10; --muted: #5B5F63;
  --accent: #3B82F6; --accent-2: #FF6B6B;
}
```

---

### Direction B — Playful Neo‑Brutalist
- Keywords: bold blocks, chunky type, high-contrast accents, character
- Palette (HEX)
  - Background: `#F5F2EE` (Off‑White)
  - Ink: `#111111` (Coal)
  - Accent 1: `#FFD400` (Safety Yellow)
  - Accent 2: `#FF2E63` (Magenta)
  - Accent 3: `#0038FF` (Cobalt)
- Typography (Google Fonts)
  - Display: Bricolage Grotesque (variable)
  - Body/UI: IBM Plex Sans (variable)
- Layout
  - Big blocks, thick dividers, intentionally “raw” outlines; sticky section headers
- Motion
  - Snappy (120ms), springy hover, magnetic buttons, cursor flourishes
- Components
  - Tile-based project grid with hover-revealed details; oversized CTA chips
- Accessibility
  - Keep yellow strictly on dark backgrounds; ensure focus states are visible
- CSS tokens
```css
:root {
  --bg: #F5F2EE; --text: #111111;
  --accent: #FFD400; --accent-2: #FF2E63; --accent-3: #0038FF;
}
```

---

### Direction C — Warm Editorial Humanist
- Keywords: approachable, narrative, bookish, tactile details
- Palette (HEX)
  - Background: `#F7F2EA` (Ecru)
  - Ink: `#0B0B0D` (Rich Black)
  - Warm: `#8B5E34` (Chestnut)
  - Support: `#2F7A67` (Sap Green)
  - Cool: `#2C4C7C` (Indigo Blue)
- Typography (Google Fonts)
  - Display: Fraunces (variable, soft or wonky axis)
  - Body/UI: Source Serif 4 (variable) + DM Sans (for UI labels)
- Layout
  - Editorial rhythm, generous line-height, multi-column on widescreens
  - Pull quotes, figure captions, process photography
- Motion
  - Gentle reveal-on-scroll; image pans on hover; story-driven transitions between case sections
- Components
  - Chaptered case study template: Context → Constraints → Decisions → Outcomes → Learnings
- Accessibility
  - Watch serif weights under 16px; prefer 17–18px base size with 1.6–1.75 line-height
- CSS tokens
```css
:root {
  --bg: #F7F2EA; --text: #0B0B0D;
  --accent: #8B5E34; --accent-2: #2F7A67; --accent-3: #2C4C7C;
}
```

---

### Direction D — Tech Noir Futurism
- Keywords: dark UI, neon accents, glassy layers, cinematic depth
- Palette (HEX)
  - Background: `#0A0C10` (Near‑Black)
  - Surface: `#1F2937` (Slate)
  - Neon Cyan: `#00F0FF`
  - Hot Pink: `#FF1E8A`
  - Deep Purple: `#2E1A47`
- Typography (Google Fonts)
  - Display: Sora (variable)
  - Body/UI: Plus Jakarta Sans (variable)
  - Code snippets: JetBrains Mono (optional)
- Layout
  - Layered cards with subtle blurs; grid lasers (fine hairline rules)
- Motion
  - Scroll-linked transforms, cursor parallax; 3D tilt on project cards; prefers-reduced-motion safe
- Components
  - Case “data sheet” with role, tools, timeline; neon KPI tags
- Accessibility
  - Enforce text contrast; keep neon for small accents only; validate with contrast tools
- CSS tokens
```css
:root {
  --bg: #0A0C10; --surface: #1F2937; --text: #E5E7EB;
  --accent: #00F0FF; --accent-2: #FF1E8A; --accent-3: #2E1A47;
}
```

---

### Reusable components checklist
- Hero: statement headline, 1–2 line subcopy, primary CTA
- Work index: filters (role/industry), cards with quick impact summary
- Case study: overview → process → outcomes; before/after; metrics; credits
- About: portrait, bio, values, client logos/testimonials
- Writing: tags, estimated read time, footnotes
- Contact: email, calendly, social; simple form with spam protection
- Footer: nav, copyright, theme toggle

---

### Imagery and content direction
- Photography: consistent lighting; a single background color or texture per direction
- Thumbnails: consistent aspect ratios (e.g., 3:2 or 4:3); avoid busy text overlays
- Iconography: pick one style (solid vs. outlined) and stick to it
- Tone of voice: write in first person, short paragraphs, outcome-first

---

### Motion & interaction system
- Durations: 120–240ms standard; 320ms for page transitions
- Easing: ease-out for entrances, ease-in for exits; spring for playful hover
- Scroll-linked: mild translate/opacity on section headers; pin key figures
- Focus/keyboard: visible outlines; skip links; reduced-motion media query

---

### Accessibility guardrails
- Base font size ≥ 16–18px; line-height 1.5–1.75
- Color contrast: aim for WCAG AA/AAA (check body text and buttons)
- Alt text on all images; keyboard navigable menus; form labels and errors

Tools: Use a contrast checker and automated audit.
- Contrast: `https://webaim.org/resources/contrastchecker/`
- Audit: Lighthouse (Chrome DevTools)

---

### Example references to browse
- Curated galleries: [Awwwards](https://www.awwwards.com/), [SiteInspire](https://www.siteinspire.com/), [Dribbble](https://dribbble.com/), [Behance](https://www.behance.net/)
- Collections/articles:
  - Speckyboy — creative portfolio roundup: [link](https://speckyboy.com/portfolio-website-inspiration/?utm_source=openai)
  - Design Shack — portfolio trends: [link](https://designshack.net/articles/trends/portfolio-design/?utm_source=openai)
- Notable portfolios/examples:
  - Lauren Hom (vibrant, playful): [overview](https://framerbite.com/blog/25-best-portfolio-website-design-inspirations?utm_source=openai)
  - Alice Lee (minimal, illustration-forward): [overview](https://www.hostinger.com/tutorials/portfolio-website-examples?utm_source=openai)

---

### Next steps
1) Mark the direction that best fits your goals (A/B/C/D). Optionally merge elements.
2) Collect 9–12 concrete visual references matching that direction (images/screenshots) in a board (Milanote, Pinterest, Figma page).
3) Finalize design tokens (colors, type sizes/weights, spacing scale) from the chosen section.
4) Draft your IA and page list: Home, Work (index), Case Study, About, Writing, Contact.
5) Create one case study in the C.O.D.E. template (Context, Obstacles, Decisions, Evidence/Results).
6) Start wireframes → high-fidelity mockups → build.

If you want, I can tailor one direction precisely to your brand after you answer the prompts at the top.