import { Project } from "@/app/projects/type";

// placeholder project data
export const projects: Project[] = [
  {
    id: "ai-chat-platform",
    title: "AI Chat Platform",
    featured: true,
    images: [
      "/LinkedIn-pfp.jpeg",
      "/images/code.jpg",
      "/images/code.jpg",
    ],
    description:
      "A full-stack AI chat application with real-time streaming responses, user authentication, and conversation memory. Built to explore scalable AI UX patterns and modern streaming APIs.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "Prisma",
    ],
  },

  {
    id: "portfolio-v2",
    title: "Personal Portfolio v2",
    featured: true,
    images: [
      "/images/code.jpg",
      "/images/code.jpg",
    ],
    description:
      "A high-performance developer portfolio with advanced scroll animations, Framer Motion transitions, and a custom-built project showcase system.",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript",
    ],
  },

  {
    id: "task-management-app",
    title: "Task Management App",
    featured: false,
    images: [
      "/images/code.jpg",
      "/images/code.jpg",
      "/images/code.jpg",
      "/images/code.jpg",
    ],
    description:
      "A collaborative task management tool with drag-and-drop boards, real-time updates, and team-based project organization.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
    ],
  },

  {
    id: "ecommerce-dashboard",
    title: "E-commerce Analytics Dashboard",
    featured: false,
    images: [
      "/images/code.jpg",
      "/images/code.jpg",
    ],
    description:
      "A data visualization dashboard for e-commerce metrics including sales trends, user behavior, and revenue tracking with interactive charts.",
    technologies: [
      "Next.js",
      "D3.js",
      "TypeScript",
      "PostgreSQL",
    ],
  },

  {
    id: "fitness-tracker",
    title: "Fitness Tracking App",
    featured: false,
    images: [
      "/images/code.jpg",
      "/images/code.jpg",
      "/images/code.jpg",
    ],
    description:
      "A mobile-first fitness tracking app with workout logging, progress analytics, and goal tracking features.",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
    ],
  },
];