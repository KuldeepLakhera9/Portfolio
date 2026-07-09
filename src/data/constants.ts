// Tech Stack Enum aligning with resume skills and Spline mapping
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  // New skills from resume
  JAVA = "java",
  PYTHON = "python",
  CPP = "cpp",
  SQL = "sql",
  SOCKETIO = "socketio",
  MAPBOX = "mapbox",
  POSTMAN = "postman",
  CLOUDINARY = "cloudinary",
  POWERBI = "powerbi",
  DSA = "dsa",
  AIML = "aiml",
  AGILE = "agile",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "making the web interactive since day one! 🚀💯",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "type safety for peace of mind and robust applications! 🔒✨",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription: "the semantic structural backbone of the web! 🧱🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3",
    shortDescription: "styling layouts and crafting animations with ultimate style! 🎨💫",
    color: "#1572b6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "building highly reactive UI components with state management! ⚛️⚡",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "SEO-friendly SSR and server components hitting different! 👑🏎️",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "utility classes for speed and customized pixel perfection! 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "asynchronous, event-driven JavaScript server environments! 🟢📦",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 9,
    name: "express",
    label: "Express.js",
    shortDescription: "minimalist, lightweight web routing and server middleware! 🚂💨",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 10,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "high-performance, flexible document store query design! 🍃💪",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 11,
    name: "git",
    label: "Git",
    shortDescription: "distributed version control and code's personal bodyguard! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 12,
    name: "github",
    label: "GitHub",
    shortDescription: "collaborating, PR reviewing, and deploying cloud repositories! 🐙🛡️",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 13,
    name: "docker",
    label: "Docker",
    shortDescription: "containerization to run and deploy anywhere seamlessly! 🐳🏗️",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 14,
    name: "java",
    label: "Java",
    shortDescription: "object-oriented, robust class-based code development! ☕🛡️",
    color: "#e76f51",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 15,
    name: "python",
    label: "Python",
    shortDescription: "readable scripting, automation, data science, and ML! 🐍📊",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.CPP]: {
    id: 16,
    name: "cpp",
    label: "C++",
    shortDescription: "low-level execution speed, pointers, and memory control! 💻💀",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.SQL]: {
    id: 17,
    name: "sql",
    label: "SQL / MySQL",
    shortDescription: "structured query optimization and relational database design! 📊🔍",
    color: "#00758f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.SOCKETIO]: {
    id: 18,
    name: "socketio",
    label: "Socket.io",
    shortDescription: "real-time, bidirectional event-driven network communication! ⚡🔌",
    color: "#010101",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  [SkillNames.MAPBOX]: {
    id: 19,
    name: "mapbox",
    label: "Mapbox API",
    shortDescription: "real-time map rendering and location search capabilities! 🗺️📍",
    color: "#3bb2d0",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", // Fallback devicon
  },
  [SkillNames.POSTMAN]: {
    id: 20,
    name: "postman",
    label: "Postman",
    shortDescription: "testing APIs, designing collections, and automated testing! ✉️✅",
    color: "#ff6c37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  [SkillNames.CLOUDINARY]: {
    id: 21,
    name: "cloudinary",
    label: "Cloudinary",
    shortDescription: "cloud-based media management, optimization, and responsive delivery! ☁️🖼️",
    color: "#3448c5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.POWERBI]: {
    id: 22,
    name: "powerbi",
    label: "Power BI",
    shortDescription: "interactive business intelligence and professional data dashboards! 📈📊",
    color: "#f2c811",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  },
  [SkillNames.DSA]: {
    id: 23,
    name: "dsa",
    label: "DSA",
    shortDescription: "solid foundation in complex data structures and efficient algorithms! 🧠💡",
    color: "#4caf50",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.AIML]: {
    id: 24,
    name: "aiml",
    label: "AI/ML Fundamentals",
    shortDescription: "machine learning models, preprocessing, and neural network concepts! 🤖🧠",
    color: "#9c27b0",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
  },
  [SkillNames.AGILE]: {
    id: 25,
    name: "agile",
    label: "Agile / Scrum",
    shortDescription: "collaborating in quick-paced sprint cycles and code review syncs! 🔄🏃‍♂️",
    color: "#ff9800",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location?: string;
  description?: string[];
  skills?: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "TODO: Start Date",
    endDate: "Present",
    title: "Full Stack Web Developer",
    company: "Insite Arc (Startup)",
    location: "Nashik, MH",
    description: [
      "Built and shipped full-stack features for multiple live, client-facing projects using the MERN stack, taking ownership from requirement gathering through deployment.",
      "Partnered directly with clients to translate business needs into technical requirements, present progress updates, and incorporate feedback across iterative development cycles.",
      "Designed and integrated RESTful APIs with responsive front-end interfaces, ensuring production-grade reliability and a smooth user experience.",
      "Debugged and optimized existing codebases to improve performance and maintainability across active client applications."
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.JS,
      SkillNames.GIT
    ]
  },
  {
    id: 2,
    startDate: "TODO: Start Date",
    endDate: "TODO: End Date",
    title: "Web Developer",
    company: "Nexoraa Tech (Startup)",
    location: "Pune, MH",
    description: [
      "Contributed to the design and development of web applications, focusing on clean, reusable UI components and consistent functional reliability.",
      "Collaborated within an agile team to translate product requirements into working code, participating in sprint planning and code reviews."
    ],
    skills: [
      SkillNames.JS,
      SkillNames.REACT,
      SkillNames.TAILWIND,
      SkillNames.GIT,
      SkillNames.AGILE
    ]
  }
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
