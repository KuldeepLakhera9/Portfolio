"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent } from "../ui/card";
import { motion } from "motion/react";
import { Code2, BrainCircuit, Users2, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Software Engineering",
    description: "Developing robust and clean architectures using JavaScript/TypeScript and the MERN Stack.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-sky-400" />,
    title: "Problem Solving",
    description: "Solid foundation in Data Structures, Algorithms, and logical programming paradigms.",
  },
  {
    icon: <Users2 className="w-8 h-8 text-primary" />,
    title: "Team Collaboration & Leadership",
    description: "Experienced Tech Lead managing team sprints, events, and student resources.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-sky-400" />,
    title: "Continuous Learning",
    description: "Passionate about exploring modern tech, AI/ML concepts, and real-time architectures.",
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="flex flex-col items-center justify-center min-h-[100vh] py-20">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About Me"
          desc="Who I am and what drives my work"
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Bio Description - Span 2 columns */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-sans"
            >
              <p>
                Hi, I am <strong className="text-foreground">Kuldeep Pravin Lakhera</strong>, a Computer Engineering student currently pursuing my Bachelor of Technology at <strong className="text-foreground">VPKBIET</strong> (CGPA: 9.1/10). I specialize in designing and shipping full-stack features using the <strong className="text-foreground">MERN (MongoDB, Express, React, Node.js) stack</strong>.
              </p>
              <p>
                My professional experience includes working as a developer at active startups like <strong className="text-foreground">Insite Arc</strong> and <strong className="text-foreground">Nexoraa Tech</strong>, where I built responsive client-facing interfaces, integrated RESTful APIs, and optimized databases. 
              </p>
              <p>
                I thrive in collaborative agile teams. I love translating business needs into high-fidelity code and mentoring peers on version control workflows and best practices. As a tech enthusiast, I also maintain a strong focus on real-time messaging, geolocation integrations, and AI/ML fundamentals.
              </p>
            </motion.div>
          </div>

          {/* Quick Stats / Info card - Span 1 column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full flex"
          >
            <Card className="w-full bg-card border-border flex flex-col justify-center p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl transition-all group-hover:bg-primary/10" />
              <CardContent className="p-0 space-y-4 font-mono text-sm">
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wider">Role</span>
                  <span className="text-foreground font-semibold text-base">Full Stack Web Developer</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wider">Education</span>
                  <span className="text-foreground font-semibold text-base">B.Tech, Computer Engineering</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wider">Based in</span>
                  <span className="text-foreground font-semibold text-base">Maharashtra, India</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wider">Focus</span>
                  <span className="text-foreground font-semibold text-base">High-Performance REST APIs, Real-time WebSockets</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Pillars of expertise */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-secondary/10 hover:bg-secondary/20 border-border hover:border-primary/20 transition-all duration-300 shadow-sm p-5 flex flex-col gap-4">
                <div className="p-2 w-fit rounded-lg bg-secondary/50">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground text-base tracking-tight">{pillar.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
