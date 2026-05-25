// all the data needed for the skills section is stored here
export const SKILL_GROUPS = [
  {
    label: "Languages",
    color: {
      bg: "rgba(96,165,250,0.18)",
      border: "rgba(96,165,250,0.55)",
      text: "#93c5fd",
    },
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },

  {
    label: "Web Dev",
    color: {
      bg: "rgba(167,139,250,0.18)",
      border: "rgba(167,139,250,0.55)",
      text: "#c4b5fd",
    },
    items: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },

  {
    label: "Backend & Data",
    color: {
      bg: "rgba(52,211,153,0.18)",
      border: "rgba(52,211,153,0.55)",
      text: "#6ee7b7",
    },
    items: ["MongoDB", "PostgreSQL", "Prisma", "Express.js"],
  },

  {
    label: "Creative & Tools",
    color: {
      bg: "rgba(251,191,36,0.18)",
      border: "rgba(251,191,36,0.55)",
      text: "#fde68a",
    },
    items: [
      "React Three Fiber",
      "Framer Motion",
      "Rapier",
      "Pygame",
      "Figma"
    ],
  },
] as const;
  
  export const PILL_HEIGHT = 38;
  
  export function getPillWidth(label: string) {
    return label.length * 10 + 50;
  }