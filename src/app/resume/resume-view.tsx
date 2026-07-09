"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ArrowLeft, Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeDoodle from "./resume-doodle";
import { config } from "@/data/config";

export default function ResumeView() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans bg-slate-950 text-slate-100 print:bg-white print:text-black">
      {/* Print stylesheet to isolate print layout */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 767px) {
              header { display: none !important; }
            }
            @media print {
              /* Hide UI elements */
              header, footer, .no-print, .fixed-toolbar {
                display: none !important;
              }
              body {
                background: white !important;
                color: black !important;
              }
              .resume-sheet {
                box-shadow: none !important;
                border: none !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                color: black !important;
                background: white !important;
              }
              .resume-sheet text-muted-foreground, .resume-sheet .text-muted-foreground {
                color: #4b5563 !important; /* darker gray for print */
              }
              .resume-sheet strong {
                color: black !important;
              }
              a {
                text-decoration: none !important;
                color: black !important;
              }
            }
          `,
        }}
      />

      {/* Top bar: back (left) + print (right) - hidden during print */}
      <div className="mx-auto w-full max-w-4xl shrink-0 px-4 pt-16 md:pt-24 no-print">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <Button onClick={handlePrint} className="flex gap-2 text-sm">
            <Download className="h-4 w-4" />
            Print / Save PDF
          </Button>
        </motion.div>
      </div>

      {/* Resume Container */}
      <div className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-2 pb-6 md:items-start md:px-4 md:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full overflow-hidden rounded-2xl bg-white text-black shadow-xl aspect-auto md:aspect-[210/297] print:shadow-none print:rounded-none"
        >
          <ResumeDoodle title="Kuldeep Pravin Lakhera — Résumé">
            {/* Interactive HTML Resume Sheet */}
            <div className="resume-sheet p-6 sm:p-10 md:p-12 text-black bg-white select-text h-full flex flex-col justify-between font-sans">
              
              {/* Header Info */}
              <div className="text-center space-y-3 pb-6 border-b border-gray-200">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                  Kuldeep Pravin Lakhera
                </h1>
                
                {/* Contact Row */}
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-600">
                  <a href={`mailto:${config.email}`} className="flex items-center gap-1 hover:text-blue-600 hover:underline">
                    <Mail className="w-3.5 h-3.5" />
                    {config.email}
                  </a>
                  <span className="text-gray-300 hidden sm:inline">|</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    (+91) 9325299923
                  </span>
                  <span className="text-gray-300 hidden sm:inline">|</span>
                  <a href="https://linkedin.com/in/kuldeep-lakhera" target="_blank" className="flex items-center gap-1 hover:text-blue-600 hover:underline">
                    <Linkedin className="w-3.5 h-3.5" />
                    linkedin.com/in/kuldeep-lakhera
                  </a>
                  <span className="text-gray-300 hidden sm:inline">|</span>
                  <a href="https://github.com/KuldeepLakhera9" target="_blank" className="flex items-center gap-1 hover:text-blue-600 hover:underline">
                    <Github className="w-3.5 h-3.5" />
                    github.com/KuldeepLakhera9
                  </a>
                </div>
              </div>

              {/* Grid content to fit standard A4 layout */}
              <div className="space-y-6 mt-6 flex-grow">
                
                {/* Education */}
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-gray-100 pb-1">
                    Education
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                          Vidya Pratishthan’s Kamalnayan Bajaj Institute of Engineering & Technology (VPKBIET)
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-700 italic">
                          Bachelor of Technology in Computer Engineering
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-bold text-xs sm:text-sm block">CGPA: 9.1/10</span>
                        <span className="text-[10px] sm:text-xs text-gray-500 block">Aug 2023 – May 2027</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                          DNCVP College
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-700 italic">
                          Higher Secondary Certificate (HSC), Science
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-bold text-xs sm:text-sm block">72%</span>
                        <span className="text-[10px] sm:text-xs text-gray-500 block">2021 – 2023</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-gray-100 pb-1">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-gray-800">
                    <p>
                      <strong className="text-gray-900 font-semibold">Languages:</strong> Java, Python, C++, JavaScript (ES6+), SQL (MySQL, MongoDB query design)
                    </p>
                    <p>
                      <strong className="text-gray-900 font-semibold">Web Development:</strong> MERN Stack (MongoDB, Express.js, React.js, Node.js), RESTful API design, real-time communication with Socket.io, HTML5, CSS3, responsive UI development
                    </p>
                    <p>
                      <strong className="text-gray-900 font-semibold">Tools & Platforms:</strong> Git/GitHub, Docker, Power BI, Postman, Cloudinary, Mapbox geolocation services
                    </p>
                    <p>
                      <strong className="text-gray-900 font-semibold">Core Competencies:</strong> Data Structures & Algorithms, AI/ML fundamentals, Business Intelligence, client communication, agile collaboration
                    </p>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-gray-100 pb-1">
                    Experience
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                            Full Stack Web Developer
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Insite Arc (Startup) — Nashik, MH
                          </p>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 italic">TODO: Duration</span>
                      </div>
                      <ul className="list-disc list-outside ml-4 mt-1 text-xs text-gray-700 space-y-1">
                        <li>Built and shipped full-stack features for client-facing projects using the MERN stack.</li>
                        <li>Partnered directly with clients to translate business needs into technical specifications and present progress updates.</li>
                        <li>Designed and integrated RESTful APIs with responsive frontend interfaces for production-grade reliability.</li>
                        <li>Debugged and optimized existing codebases to improve maintainability across active client applications.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                            Web Developer
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Nexoraa Tech (Startup) — Pune, MH
                          </p>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 italic">TODO: Duration</span>
                      </div>
                      <ul className="list-disc list-outside ml-4 mt-1 text-xs text-gray-700 space-y-1">
                        <li>Contributed to web app development, focusing on clean, reusable UI components and consistent functional reliability.</li>
                        <li>Collaborated within an agile team, participating in sprint planning and peer code reviews.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-gray-100 pb-1">
                    Projects
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-gray-900 text-xs sm:text-sm">
                          Zerodha Clone <span className="font-normal text-xs text-gray-500">| React, Node.js, Express, MongoDB</span>
                        </h3>
                        <span className="text-[10px] sm:text-xs text-gray-500 font-mono">2025</span>
                      </div>
                      <p className="text-xs text-gray-700 mt-0.5">
                        Engineered a full-stack stock trading platform with live market data visualization, order placement simulation, dynamic charts, secure authentication, and account portfolio tracking.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-gray-900 text-xs sm:text-sm">
                          Wanderlust <span className="font-normal text-xs text-gray-500">| React, Node.js, Express, MongoDB, Mapbox</span>
                        </h3>
                        <span className="text-[10px] sm:text-xs text-gray-500 font-mono">2025</span>
                      </div>
                      <p className="text-xs text-gray-700 mt-0.5">
                        Architected an Airbnb-style lodging marketplace with secure JWT auth and CRUD listings. Integrated Mapbox API for real-time location mapping and Cloudinary for optimized hosting, improving API response times by 20%.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-gray-900 text-xs sm:text-sm">
                          QuizPulse <span className="font-normal text-xs text-gray-500">| MERN Stack, Socket.io</span>
                        </h3>
                        <span className="text-[10px] sm:text-xs text-gray-500 font-mono">2024</span>
                      </div>
                      <p className="text-xs text-gray-700 mt-0.5">
                        Developed a live multiplayer quiz hosting platform. Implemented Socket.io WebSocket connections for synchronized question delivery, scoring, and leaderboard updates with minimal latency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements & Leadership */}
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-gray-100 pb-1">
                    Achievements & Leadership
                  </h2>
                  <ul className="list-disc list-outside ml-4 text-xs text-gray-800 space-y-1">
                    <li>
                      <strong className="text-gray-900">Smart India Hackathon 2024:</strong> Appointed Team Lead for final development phase, coordinating technical execution under strict time limits.
                    </li>
                    <li>
                      <strong className="text-gray-900">Avishkar Research Convention (SPPU):</strong> Selected for university-level presentation of the Flood Management System research project.
                    </li>
                    <li>
                      <strong className="text-gray-900">Tech Lead at CESA & E-Cell:</strong> Leading the end-to-end development of a student resource portal (serving 200+ users), mentoring peers in version control, and digitizing event workflows to boost registration efficiency by 40%.
                    </li>
                    <li>
                      <strong className="text-gray-900">NPTEL Certifications:</strong> Completed certified coursework in Business Intelligence, AI, and Python for Data Science.
                    </li>
                    <li>
                      <strong className="text-gray-900">CDAC Bootcamp:</strong> Completed intensive hands-on practical training in Drone/UAS technology.
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </ResumeDoodle>
        </motion.div>
      </div>
    </div>
  );
}
