# Add Contact Me Section

## Goal
Add a new **Contact Me** section at the bottom of the homepage, after the **Work Experience & Skills** section. The section will match the existing design language using Magic UI components and provide ways for visitors to contact Rachana via email, GitHub, and Instagram.

## Components & Animations
- **`BlurFade`** – container entrance animation (consistent with other sections).
- **`ShimmerButton`** – premium animated buttons for each contact method.
- **`OrbitingCircles`** – optional subtle orbiting icons around the section header for visual flair.
- **`SparklesText`** – for the section title to add sparkle effect.
- **`lucide-react` icons** – `Mail`, `Github`, `Instagram`.

## Files to Modify / Create
1. **Create** `src/components/contact-section.jsx` – the new component.
2. **Update** `src/app/page.js` – import and render `<ContactSection />` after `<WorkExperienceSkills />`.
3. **(Optional) Update** `src/components/ui/*` if any new Magic UI components are needed (none required beyond existing ones).

## Implementation Steps
| Step | Action |
|------|--------|
| 1 | Create `contact-section.jsx` with a `<section>` element using the same background (`bg-[var(--color-bg)]/70`) and text colors.
| 2 | Inside the section, wrap content with `<BlurFade delay={0.2} inView>`.
| 3 | Add a title using `<SparklesText text="Contact Me" className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-6" sparklesCount={6} />`.
| 4 | Add a brief description paragraph.
| 5 | Add three `<ShimmerButton>` components for Email, GitHub, Instagram. Each button uses `onClick` to open the appropriate link (`mailto:`, GitHub URL, Instagram URL).
| 6 | Optionally include `<OrbitingCircles>` with icons (`Mail`, `Github`, `Instagram`) orbiting around the title for extra animation.
| 7 | Ensure all imports are correctly using named imports from Magic UI (`import { BlurFade, ShimmerButton, SparklesText, OrbitingCircles } from "@/components/ui/..."`).
| 8 | Update `src/app/page.js` to import `ContactSection` and render it after `<WorkExperienceSkills />`.
| 9 | Run `npm run dev` and verify the new section appears with animations and links work.

## Verification Plan
- **Automated**: Run `npm run build` to ensure no compile errors.
- **Manual**: Open the site in the browser, scroll to the bottom, confirm:
  - Section fades in smoothly.
  - Title sparkles.
  - Buttons have shimmering hover effect and open correct links.
  - Orbiting icons animate subtly.
  - Styling matches the rest of the site (colors, fonts).

---
**Note**: All new code uses existing Magic UI components; no additional dependencies are required.
