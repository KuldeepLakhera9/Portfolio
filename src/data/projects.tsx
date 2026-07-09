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
    id: "zerodha-clone",
    category: "Stock Trading",
    title: "Zerodha Clone",
    src: PLACEHOLDER_IMG,
    screenshots: [],
    live: "#",
    github: "https://github.com/KuldeepLakhera9",
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
            Engineered a full-stack stock trading platform modeled on Zerodha, featuring live market data visualization, order placement, and portfolio tracking.
          </TypographyP>
          
          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Engineered full-stack stock trading platform with dynamic charting</li>
              <li>Designed secure authentication and a RESTful backend for portfolio management</li>
              <li>Built a responsive React front-end with real-time portfolio tracking</li>
            </ul>
          </div>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Challenges Solved</h5>
            <p className="text-sm text-muted-foreground">
              Developing a robust state synchronization model to simulate live market movements on the client while maintaining consistent ledger balances on the REST backend.
            </p>
          </div>

          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "wanderlust",
    category: "Marketplace",
    title: "Wanderlust",
    src: PLACEHOLDER_IMG,
    screenshots: [],
    live: "#",
    github: "https://github.com/KuldeepLakhera9",
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
        PROJECT_SKILLS.mapbox,
        PROJECT_SKILLS.cloudinary,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <TypographyP className="font-mono text-sm leading-relaxed text-muted-foreground">
            Architected a scalable lodging marketplace with secure JWT-based authentication and full CRUD functionality for property listings.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Robust JWT-based user authentication and CRUD property posting capabilities</li>
              <li>Mapbox API integration for interactive real-time geolocation searches</li>
              <li>Optimized Cloudinary integrations for fast, responsive image loading and hosting</li>
            </ul>
          </div>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Performance Achievements</h5>
            <p className="text-sm text-muted-foreground">
              Improved database response times by **20%** through streamlined index optimizations and custom Express middleware.
            </p>
          </div>

          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "quizpulse",
    category: "Real-Time Gaming",
    title: "QuizPulse",
    src: PLACEHOLDER_IMG,
    screenshots: [],
    live: "#",
    github: "https://github.com/KuldeepLakhera9",
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
            Developed a live quiz hosting platform enabling users to create, host, and participate in multiplayer quizzes in real time.
          </TypographyP>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Key Features</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>WebSocket-driven live connection management via Socket.io</li>
              <li>Real-time score synchronizations and instant user leaderboards</li>
              <li>Polished responsive hosting dashboards and contestant gameplay layouts</li>
            </ul>
          </div>

          <div className="mt-4">
            <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Tech Architecture</h5>
            <p className="text-sm text-muted-foreground">
              Built on a standard MERN stack utilizing Socket.io event triggers to synchronize player answer inputs with minimal latency under concurrent scenarios.
            </p>
          </div>

          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
];

export default projects;
