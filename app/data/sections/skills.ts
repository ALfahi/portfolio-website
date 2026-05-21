// all the data needed for the skills section is stored here

export const SKILL_GROUPS = [
    {
      label: "Languages",
      color: {
        bg: "rgba(96,165,250,0.18)",
        border: "rgba(96,165,250,0.55)",
        text: "#93c5fd",
      },
      items: ["Python", "Java", "TypeScript"],
    },
    {
      label: "Frameworks",
      color: {
        bg: "rgba(167,139,250,0.18)",
        border: "rgba(167,139,250,0.55)",
        text: "#c4b5fd",
      },
      items: ["React", "Next.js"],
    },
    {
      label: "Technologies",
      color: {
        bg: "rgba(52,211,153,0.18)",
        border: "rgba(52,211,153,0.55)",
        text: "#6ee7b7",
      },
      items: ["SQL", "Tailwind", "Git"],
    },
  ] as const;
  
  export const PILL_HEIGHT = 38;
  
  export function getPillWidth(label: string) {
    return label.length * 10 + 50;
  }