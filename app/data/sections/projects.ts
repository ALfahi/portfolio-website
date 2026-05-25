import { Project } from "@/app/projects/type";
import { buildImagePaths } from "@/app/lib/imagePaths";

export const projects: Project[] = [
  {
    id: "mood-rooms",
    title: "Mood Rooms",
    featured: true,
    images: buildImagePaths("/projects/mood-room", [
      "thumbnail.png",
      "object-editor.png",
      "add-object.png",
      "generate.png",
    ]),
    description: `
      An interactive 3D web application that allows users to design and customise their own virtual rooms using a wide range of objects, colours, and layouts.
      Users can also enter their current mood to generate a procedurally created room template that visually reflects that mood, providing a creative starting point for further customisation.
      Built collaboratively with Jabir, who contributed to development, while Romas handled the 3D modelling, environment design, and collision setup for interactive objects.
    `,
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "React Three Fiber",
      "Rapier Physics",
      "Tailwind CSS",
      "Framer Motion",
      "MongoDB",
      "Hugging Face API",
      "Blender"
    ],
    githubLink: "https://github.com/jabirmb1/mood-room"
  },

  {
    id: "flatdm",
    title: "FlatDM",
    featured: true,
    images: buildImagePaths("/projects/flatdm", [
      "thumbnail.png",
      "consultant-dashboard.png",
      "listings.png",
      "listing-index.png",
      "applications.png"
    ]),
    description: `
      A university group project developed in collaboration with FDM as industry consultants, focused on creating a modern flat-finding platform tailored to real client requirements.
      The application includes secure authentication with magic link login, role-based access for landlords, moderators, and applicants, as well as features such as property listings, reporting, reviews, direct messaging, and email notifications.
      The project emphasised scalable full-stack architecture, usability, and collaborative agile development practices.
    `,
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "OpenRouteService",
      "NextAuth.js"
    ],
    githubLink: "https://github.com/joshualewis1717/flatdm"
  },

  {
    id: "marathon-weather-app",
    title: "Marathon Weather App",
    featured: true,
    images: buildImagePaths("/projects/marathon-weather", [
      "thumbnail.png",
      "edit-route.png",
      "route-weather.png",
      "running-mode.png",
      "route-list.png"
    ]),
    description: `
      A weather and route-planning application designed specifically for marathon runners and long-distance training.
      Users can create, edit, save, and export running routes while viewing detailed weather information across different checkpoints and times. The application supports layered weather visualisations including temperature, elevation, wind speed, and wind direction.
      Additional features include live route tracking, dynamic weather-based theming, checkpoint notifications, and detailed weather breakdowns throughout a run.
    `,
    technologies: [
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "IndexedDB",
      "OpenWeather API",
      "OpenRouteService",
      "Leaflet",
      "Lucide React"
    ],
    githubLink: "https://github.com/ALfahi/Marathon-Runner-Weather-App"
  },

  {
    id: "personal-portfolio-v2",
    title: "Portfolio Website v2",
    images: [],
    description: `
      A redesigned personal portfolio website focused on modern UI design, smooth animations, and an improved overall user experience.
      The site features responsive layouts, animated page transitions, interactive project showcases, and polished visual presentation aimed at creating a more professional and immersive portfolio experience.
    `,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],
    githubLink: "https://github.com/ALfahi/portfolio-website"
  },

  {
    id: "personal-portfolio-v1",
    title: "Portfolio Website v1",
    images: buildImagePaths("/projects/website-v1", [
      "about-me.png",
      "projects.png",
      "menu.png"
    ]),
    description: `
      My first personal portfolio website built using the LAMP stack to learn the fundamentals of full-stack web development.
      The project included a custom authentication system, blog management functionality, and CRUD features allowing blog posts to be created and managed through an admin-only interface.
      This project helped build foundational knowledge in backend development, databases, authentication, and web application structure.
    `,
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    githubLink: "https://github.com/ALfahi/Personal-Portfolio"
  },

  {
    id: "horse-race-simulator",
    title: "Horse Race Simulator",
    images: buildImagePaths("/projects/horse-racing-simulator", [
      "thumbnail.png",
      "menu.png",
      "empty-track.png",
      "add-horse.png",
      "race-track.png",
      "horse-textual.png"
    ]),
    description: `
      A Java-based horse racing simulator featuring both terminal and graphical user interface versions of the game.
      Players can simulate races, place bets, and manage different race conditions including terrain, weather, horse breeds, and item effects. The GUI version expands gameplay with additional mechanics and a dynamic betting system designed to make each race unpredictable and engaging.
    `,
    technologies: [
      "Java",
      "Java Swing",
      "AWT"
    ],
    githubLink: "https://github.com/ALfahi/HorseRaceSimulator"
  },

  {
    id: "react-quiz-website",
    title: "Quiz Platform",
    images: [],
    description: `
      A full-stack quiz platform built while learning React and modern web development practices.
      Users can create and play quizzes across multiple question types, while moderators are able to manage content and users through a dedicated dashboard. The application also includes authentication, email validation, and role-based permissions.
      Although unfinished, the project served as valuable experience in building larger React applications with backend integration and user management systems.
    `,
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "node-cron",
      "Multer"
    ],
    githubLink: "https://github.com/ALfahi/react-quiz-website"
  },

  {
    id: "connect-4-discord-bot",
    title: "Connect 4 Discord Bot",
    featured: true,
    images: buildImagePaths("/projects/connect4-discord", [
      "match.png",
      "win-screen.png"
    ]),
    description: `
      A Discord bot built with Python that allows two users to play Connect 4 directly inside a Discord server using emoji-based interactions.
      The bot tracks gameplay state, validates moves, and displays the winning player's profile picture once a game is completed.
    `,
    technologies: [
      "Python",
      "Discord.py",
      "Discord API"
    ],
    githubLink: "https://github.com/ALfahi/Connect-4-Discord-bot"
  },

  {
    id: "nea-platformer",
    title: "2D Platformer NEA Project",
    images: buildImagePaths("/projects/nea-project", [
      "title-screen.jpeg",
      "choose-player.jpeg",
      "instructions.jpeg",
      "level1.jpeg",
      "player-jump.jpeg"
    ]),
    description: `
      A 2D platformer game developed in Python for my Computer Science NEA project.
      The game includes combat systems, enemy AI, animations, sound effects, custom level editing tools, save functionality, and player progression systems. Additional features include user authentication, leaderboards, and statistical graph visualisations.
      This project provided early experience with game development, object-oriented programming, and managing larger software projects.
    `,
    technologies: [
      "Python",
      "Pygame",
      "pygame-menu",
      "SQLite",
      "Matplotlib"
    ],
    githubLink: "https://github.com/ALfahi/2-D-platformer-NEA-Project-"
  },

  {
    id: "leetcode-problems",
    title: "LeetCode Solutions",
    images: buildImagePaths("/projects/leetcode", [
      "leetcode-github.png"
    ]),
    description: `
      A collection of algorithmic problem-solving solutions completed on LeetCode.
      The repository contains solutions covering topics such as data structures, dynamic programming, graphs, recursion, sorting, searching, and general problem-solving techniques used in technical interviews.
    `,
    technologies: [
      "Python",
      "Algorithms",
      "Data Structures"
    ],
    githubLink: "https://github.com/ALfahi/Leetcode-problems"
  }
];