"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { Award, Compass, Cpu, BookOpen, Users, Trophy } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "Smart India Hackathon 2024",
    subtitle: "Team Lead (Final Development Phase)",
    icon: <Trophy className="w-6 h-6 text-primary" />,
    description: "Appointed Team Lead to coordinate technical execution, resolve critical integration bugs, and drive prototype delivery under tight hackathon timelines.",
    badge: "National Hackathon",
  },
  {
    title: "Avishkar Research Convention (SPPU)",
    subtitle: "University-Level Presenter",
    icon: <Cpu className="w-6 h-6 text-sky-400" />,
    description: "Selected to present the 'Flood Management System' research project at the university level, showcasing predictive data models and public safety alert architectures.",
    badge: "Research Presentation",
  },
];

const LEADERSHIP = [
  {
    title: "Tech Lead",
    organization: "Computer Engineering Students Association (CESA)",
    location: "VPKBIET, Baramati",
    duration: "2024 – Present",
    icon: <Users className="w-5 h-5 text-primary" />,
    points: [
      "Leading end-to-end development of a student resource portal serving 200+ active users.",
      "Mentoring peers in full-stack engineering, code modularity, and Git version control workflows."
    ],
  },
  {
    title: "Tech Lead",
    organization: "Entrepreneurship Cell (E-Cell)",
    location: "VPKBIET, Baramati",
    duration: "2024 – Present",
    icon: <Compass className="w-5 h-5 text-sky-400" />,
    points: [
      "Digitized event management workflows for cell initiatives, increasing overall registration efficiency by 40%."
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "Business Intelligence Coursework",
    issuer: "NPTEL Certified",
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    details: "Completed certified academic coursework focusing on business intelligence pipelines, reporting, and data modeling.",
  },
  {
    title: "Artificial Intelligence Coursework",
    issuer: "NPTEL Certified",
    icon: <BookOpen className="w-5 h-5 text-sky-400" />,
    details: "Completed certified coursework in artificial intelligence concepts, search heuristics, and knowledge representation.",
  },
  {
    title: "Python for Data Science Coursework",
    issuer: "NPTEL Certified",
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    details: "Certified coursework in Python, covering data frames, visualization libraries, and scientific computing packages.",
  },
  {
    title: "CDAC Bootcamp: Drone/UAS Technology",
    issuer: "CDAC Certified",
    icon: <Award className="w-5 h-5 text-sky-400" />,
    details: "Completed intensive hands-on practical training in unmanned aerial systems configurations and drone architectures.",
  },
];

const AchievementsCertificationsSection = () => {
  return (
    <SectionWrapper id="achievements" className="flex flex-col items-center justify-center min-h-[120vh] py-20">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto space-y-20">
        
        {/* Section Header */}
        <SectionHeader
          id="achievements"
          title="Achievements & Leadership"
          desc="Hackathons, leadership initiatives, and certifications"
          className="mb-12 mt-0"
        />

        {/* Part 1: Achievements & Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hackathons & Awards */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" /> Key Accomplishments
            </h3>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card border-border hover:border-primary/20 transition-all duration-300 shadow-sm p-5 relative overflow-hidden">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-secondary/30 shrink-0">
                        {ach.icon}
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-bold text-foreground text-base tracking-tight">{ach.title}</h4>
                          <Badge variant="outline" className="text-[10px] uppercase font-mono border-transparent bg-secondary/50">
                            {ach.badge}
                          </Badge>
                        </div>
                        <p className="text-xs font-semibold text-muted-foreground">{ach.subtitle}</p>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{ach.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership Roles */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> Leadership & Activities
            </h3>
            <div className="space-y-4">
              {LEADERSHIP.map((lead, idx) => (
                <motion.div
                  key={lead.organization}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card border-border hover:border-primary/20 transition-all duration-300 shadow-sm p-5">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-secondary/30 shrink-0">
                        {lead.icon}
                      </div>
                      <div className="space-y-2 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 w-full">
                          <h4 className="font-bold text-foreground text-base tracking-tight">{lead.title}</h4>
                          <Badge variant="secondary" className="w-fit font-mono text-[10px] font-normal">
                            {lead.duration}
                          </Badge>
                        </div>
                        <p className="text-xs font-semibold text-primary">{lead.organization}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{lead.location}</p>
                        <ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-xs text-muted-foreground leading-relaxed">
                          {lead.points.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Part 2: Certifications Grid */}
        <div className="space-y-8 pt-8 border-t border-border/40">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Certifications & Training
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-secondary/10 hover:bg-secondary/20 border-border hover:border-primary/20 transition-all duration-300 shadow-sm p-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-2 w-fit rounded-lg bg-secondary/30 text-primary">
                      {cert.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground text-sm tracking-tight leading-snug">{cert.title}</h4>
                      <p className="text-xs font-semibold text-primary">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{cert.details}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default AchievementsCertificationsSection;
