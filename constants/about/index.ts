/**
 * Static content for the About section.
 * Contains a timeline of major events related to Mead Memorial Chapel.
 *
 * Note: Values are display strings only and not parsed as dates.
 */
/**
 * Timeline events displayed on the About page.
 * Each item has the following shape:
 * - year: string — display label for the period (e.g., "1920s").
 * - description: string — a short note about that period.
 *
 * Consumed by: app/sections/about/AboutContent.tsx
 */
export const AboutTimelineEvent = [
  {
    year: "1916s",
    description: "Mead Memorial Chapel is dedicated.",
  },
  {
    year: "1920s",
    description: "First concerts and community gatherings held.",
  },
  {
    year: "1950s",
    description: "Renovations and preservation work begin.",
  },
  {
    year: "2000s",
    description: "Community events and concerts expand.",
  },
  {
    year: "2020s",
    description: "Preservation efforts recommitted for the future.",
  },
];