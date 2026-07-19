import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";
const PLACEHOLDER_IMG = "/assets/logo-dark.svg";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, github }: { live?: string; github?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
      {github && github !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={github}
        >
          <Button variant={"outline"} size={"sm"}>
            GitHub Repository
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  react: brand("React.js", "react-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  tailwind: brand("Tailwind CSS", "tailwind-css-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express.js", "express-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  socketio: brand("Socket.io", "socketdotio-mono.svg"),
  mapbox: brand("Mapbox API", "xyflow-mono.svg"), // reuse xyflow as map representation
  cloudinary: brand("Cloudinary", "cloudflare-mono.svg"), // reuse cloudflare as cloud upload asset
  nextjs: brand("Next.js", "nextdotjs-mono.svg"),
  framer: brand("Framer Motion", "motion.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  gsap: brand("GSAP", "gsap-mono.svg"),
  ai: brand("AI APIs", "anthropic-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "devnotes",
    category: "Full-Stack Blog",
    title: "DevNotes",
    src: `${BASE_PATH}/devnotes.png`,
    screenshots: ["devnotes.png"],
    live: "https://blogs.kuldeeplakhera.me",
    github: "https://github.com/KuldeepLakhera9/Blog",
    skills: {
      frontend: [
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framer,
      ],
      backend: [
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.cloudinary,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <TypographyP className="font-mono text-sm leading-relaxed text-muted-foreground">
            A production-grade, single-author blogging platform with a modern UI and a secure admin dashboard. Built with performance, SEO, and scalability in mind.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>SEO Optimized & Markdown Blog Editor</li>
              <li>Admin Dashboard & Image Upload via Cloudinary</li>
              <li>Dynamic Categories & Tags filtering with full-text Search</li>
              <li>Responsive UI with Dark Mode, Reading Time, and View Counter</li>
            </ul>
          </div>

          <div className="mt-4 mb-6">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Tech Stack Details</h5>
            <p className="text-sm text-muted-foreground">
              Utilizes Next.js 16, TypeScript, Tailwind CSS, and Framer Motion on the frontend. Backed by MongoDB (Mongoose), NextAuth/Auth.js for secure admin controls, and Cloudinary for asset storage.
            </p>
          </div>

          <SlideShow images={[`${BASE_PATH}/devnotes.png`]} />
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "quizpulse",
    category: "Real-Time Gaming",
    title: "QuizPulse",
    src: `${BASE_PATH}/quizpulse.png`,
    screenshots: ["quizpulse.png"],
    live: "#",
    github: "https://github.com/KuldeepLakhera9/QuizPulse",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.socketio,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <TypographyP className="font-mono text-sm leading-relaxed text-muted-foreground">
            A Kahoot-inspired multiplayer quiz platform where users can create and join live quiz rooms with real-time leaderboards.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Live Quiz Rooms with WebSocket-driven Socket.IO connections</li>
              <li>Real-Time Scoreboard & interactive answer timers</li>
              <li>Multiplayer support with admin quiz control dashboard</li>
              <li>Fully responsive layout tailored for desktops and mobile screens</li>
            </ul>
          </div>

          <div className="mt-4 mb-6">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Tech Architecture</h5>
            <p className="text-sm text-muted-foreground">
              Built on a standard MERN stack utilizing Socket.io event triggers to synchronize player answer inputs with minimal latency under concurrent scenarios.
            </p>
          </div>

          <SlideShow images={[`${BASE_PATH}/quizpulse.png`]} />
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "learnsphere",
    category: "Education",
    title: "LearnSphere",
    src: `${BASE_PATH}/learnsphere.png`,
    screenshots: ["learnsphere.png"],
    live: "#",
    github: "https://github.com/KuldeepLakhera9/tech-playground",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    get content() {
      return (
        <div className="space-y-4">
          <TypographyP className="font-mono text-sm leading-relaxed text-muted-foreground">
            A modern responsive learning dashboard for students featuring analytics, course management, and progress tracking.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Interactive Dashboard Analytics tracking study metrics</li>
              <li>Clean, responsive course cards and management listings</li>
              <li>Visual progress tracking components and achievements breakdown</li>
              <li>Responsive design built with React 19, Vite, and Tailwind CSS v4</li>
            </ul>
          </div>

          <div className="mt-4 mb-6">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Design Focus</h5>
            <p className="text-sm text-muted-foreground">
              Prioritizes visual hierarchy and minimalist design tokens to offer students a distraction-free, highly intuitive progress-oriented environment.
            </p>
          </div>

          <SlideShow images={[`${BASE_PATH}/learnsphere.png`]} />
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "zerodha-clone",
    category: "FinTech",
    title: "Zerodha Clone",
    src: `${BASE_PATH}/zerodha-clone.png`,
    screenshots: ["zerodha-clone.png"],
    live: "#",
    github: "https://github.com/KuldeepLakhera9/Zerodha",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <TypographyP className="font-mono text-sm leading-relaxed text-muted-foreground">
            A full-stack clone of Zerodha's Kite trading platform with authentication, trading dashboard, and portfolio management.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Secure Authentication with JWT and Bcrypt hashing</li>
              <li>Interactive Dashboard with real-time portfolio tracking & charts</li>
              <li>Holdings, Orders, and Portfolio management pages</li>
              <li>Responsive and pixel-perfect clone UI of Zerodha Kite</li>
            </ul>
          </div>

          <div className="mt-4 mb-6">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Challenges Solved</h5>
            <p className="text-sm text-muted-foreground">
              Developing a robust state synchronization model to simulate live market movements on the client while maintaining consistent ledger balances on the REST backend.
            </p>
          </div>

          <SlideShow images={[`${BASE_PATH}/zerodha-clone.png`]} />
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "amul-3d",
    category: "3D Showcase",
    title: "Amul 3D Showcase",
    src: `${BASE_PATH}/amul-showcase.png`,
    screenshots: ["amul-showcase.png"],
    live: "https://amul.kuldeeplakhera.me",
    github: "https://github.com/KuldeepLakhera9/Amul-3D",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.gsap,
      ],
      backend: [],
    },
    get content() {
      return (
        <div className="space-y-4">
          <TypographyP className="font-mono text-sm leading-relaxed text-muted-foreground">
            An immersive scroll-based storytelling website featuring a 3D product animation built using image sequences instead of WebGL.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>229 Frame Animation pre-rendering via Canvas API for extreme performance</li>
              <li>GSAP & ScrollTrigger controlling precise video frames relative to scroll position</li>
              <li>Lenis integration for ultra-smooth inertia-based scrolling</li>
              <li>Highly-interactive modern landing page showcasing iconic Amul branding</li>
            </ul>
          </div>

          <div className="mt-4 mb-6">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Aesthetic Rationale</h5>
            <p className="text-sm text-muted-foreground">
              Bypassed WebGL performance bottlenecks by streaming a compressed, high-fidelity 229-frame PNG sequence onto a HTML5 Canvas, achieving 60fps scrolling animations on mobile and lower-end hardware.
            </p>
          </div>

          <SlideShow images={[`${BASE_PATH}/amul-showcase.png`]} />
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "portfolio-site",
    category: "Portfolio",
    title: "Personal Portfolio",
    src: `${BASE_PATH}/portfolio.png`,
    screenshots: ["portfolio.png"],
    live: "https://kuldeeplakhera.me",
    github: "https://github.com/KuldeepLakhera9/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framer,
      ],
      backend: [],
    },
    get content() {
      return (
        <div className="space-y-4">
          <TypographyP className="font-mono text-sm leading-relaxed text-muted-foreground">
            The personal portfolio website featuring dark mode, project showcase grids, dynamic animations, and contact utilities.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Responsive next-generation layout with seamless dark/light support</li>
              <li>Framer Motion smooth scroll-triggers and page transitions</li>
              <li>Interactive project display cards and filter tabs</li>
              <li>Fully integrated modern Contact Form</li>
            </ul>
          </div>

          <SlideShow images={[`${BASE_PATH}/portfolio.png`]} />
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "wanderlust",
    category: "Marketplace",
    title: "Wanderlust",
    src: `${BASE_PATH}/wanderlust.png`,
    screenshots: ["wanderlust.png"],
    live: "https://wanderlust-7fd4.onrender.com/listings",
    github: "https://github.com/KuldeepLakhera9/Wanderlust",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.mapbox,
        PROJECT_SKILLS.cloudinary,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <TypographyP className="font-mono text-sm leading-relaxed text-muted-foreground">
            An Airbnb-inspired full-stack marketplace with property listings, reviews, secure maps integration, and custom media uploads.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Authentication & Session Management utilizing Passport.js</li>
              <li>Full CRUD operations on property listings & ratings/reviews</li>
              <li>Mapbox API integration for interactive geographical location pins</li>
              <li>Cloudinary & Multer integration for reliable serverless image storage</li>
            </ul>
          </div>

          <div className="mt-4 mb-6">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Performance Achievements</h5>
            <p className="text-sm text-muted-foreground">
              Improved database response times by **20%** through streamlined index optimizations and custom Express middleware.
            </p>
          </div>

          <SlideShow images={[`${BASE_PATH}/wanderlust.png`]} />
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "convosecure",
    category: "Chat App",
    title: "ConvoSecure",
    src: `${BASE_PATH}/convosecure.png`,
    screenshots: ["convosecure.png"],
    live: "#",
    github: "https://github.com/KuldeepLakhera9/Convo",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.socketio,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <TypographyP className="font-mono text-sm leading-relaxed text-muted-foreground">
            A real-time messaging application designed with security and minimal connection latency in mind.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Real-time bidirectional communication powered by Socket.io</li>
              <li>Secure authentication and message logs storage in MongoDB</li>
              <li>Active/Online users indicators and status counters</li>
              <li>Fully fluid responsive user interface on all modern screens</li>
            </ul>
          </div>

          <SlideShow images={[`${BASE_PATH}/convosecure.png`]} />
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "portway",
    category: "DevOps",
    title: "Portway",
    src: `${BASE_PATH}/portway.png`,
    screenshots: ["portway.png"],
    live: "#",
    github: "https://github.com/KuldeepLakhera9/portway",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <TypographyP className="font-mono text-sm leading-relaxed text-muted-foreground">
            A deployment platform inspired by Vercel for building and hosting web applications in isolated environments.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Automatic deployment configuration linked to user repositories</li>
              <li>Docker Containers for sandboxed building and dependency insulation</li>
              <li>Real-time build logs stream and deploy progress indicators</li>
              <li>Interactive dashboard to monitor deploy statuses and project URLs</li>
            </ul>
          </div>

          <SlideShow images={[`${BASE_PATH}/portway.png`]} />
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
];

export default projects;
