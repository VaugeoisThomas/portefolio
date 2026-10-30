/** Repères communs aux pastilles et à leur légende. */
export const skillLevels = {
  autonomous: { label: "Pratiqué en autonomie", symbol: "✓" },
  guided: { label: "Pratiqué avec accompagnement", symbol: "+" },
  review: { label: "Déjà utilisé, à réviser", symbol: "↻" },
} as const;

export type SkillLevel = keyof typeof skillLevels;

export const skillLevelOrder: readonly SkillLevel[] = ["autonomous", "guided", "review"];
