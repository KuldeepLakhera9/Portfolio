"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EDUCATION = [
  {
    college: "Vidya Pratishthan’s Kamalnayan Bajaj Institute of Engineering & Technology (VPKBIET)",
    degree: "Bachelor of Technology in Computer Engineering",
    duration: "Aug 2023 – May 2027",
    gpa: "CGPA: 9.1/10",
    details: "Focusing on fundamental computer science principles, core software engineering practices, database architectures, and algorithmic thinking.",
    coursework: [
      "Data Structures & Algorithms",
      "AI/ML Fundamentals",
      "Database Systems (SQL & NoSQL)",
      "Software Engineering Methedology",
      "Business Intelligence"
    ],
  },
  {
    college: "DNCVP College",
    degree: "Higher Secondary Certificate (HSC), Science",
    duration: "2021 – 2023",
    gpa: "Percentage: 72%",
    details: "Completed standard secondary education focusing on Physics, Chemistry, Mathematics, and Computer Science studies.",
    coursework: [],
  },
];

const EducationSection = () => {
  return (
    <SectionWrapper id="education" className="flex flex-col items-center justify-center min-h-[100vh] py-20">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="education"
          title="Education"
          desc="My academic background"
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="flex flex-col gap-8 relative">
          {/* Connector Line */}
          <div className="absolute left-8 md:left-12 top-4 bottom-4 w-px bg-border hidden sm:block" />

          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.college}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-0 sm:pl-16"
            >
              {/* Timeline marker icon */}
              <div className="absolute left-4 md:left-8 top-1 hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card z-10 -translate-x-1/2 text-primary">
                <GraduationCap className="w-4 h-4" />
              </div>

              <Card className="bg-card border-border hover:border-primary/20 transition-all duration-300 shadow-sm">
                <CardHeader className="pb-3 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">
                      {edu.college}
                    </CardTitle>
                    <p className="text-base font-semibold text-muted-foreground">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1.5 font-mono text-xs font-normal">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </Badge>
                    <Badge variant="default" className="flex items-center gap-1.5 font-mono text-xs font-bold bg-primary/20 text-primary border-transparent">
                      <Award className="w-3.5 h-3.5" />
                      {edu.gpa}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {edu.details}
                  </p>
                  {edu.coursework.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground block font-bold font-mono">
                        Key Coursework
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge
                            key={course}
                            variant="outline"
                            className="bg-secondary/20 hover:bg-secondary/40 transition-colors border-transparent text-xs font-normal font-sans"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
