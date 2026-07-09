const config = {
  title: "Kuldeep Lakhera | Full Stack Web Developer & Software Engineer",
  description: {
    long: "Explore the portfolio of Kuldeep Lakhera — B.Tech in Computer Engineering student and Full Stack Web Developer. Experienced in building high-performance MERN applications, real-time WebSocket systems, and scalable APIs.",
    short:
      "Portfolio of Kuldeep Lakhera — Full Stack Web Developer and Computer Engineering student specializing in the MERN stack and real-time systems.",
  },
  keywords: [
    "Kuldeep Lakhera",
    "portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "Computer Engineering",
    "VPKBIET",
  ],
  author: "Kuldeep Lakhera",
  email: "kuldeeplakhera018@gmail.com",
  site: "https://kuldeeplakhera.com", // Placeholder or personal domain

  // for github stars button
  githubUsername: "KuldeepLakhera9",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://linkedin.com/in/kuldeep-lakhera", // fallback to LinkedIn if Twitter isn't on resume
    linkedin: "https://linkedin.com/in/kuldeep-lakhera",
    instagram: "https://github.com/KuldeepLakhera9", // fallback to GitHub
    facebook: "https://github.com/KuldeepLakhera9",
    github: "https://github.com/KuldeepLakhera9",
  },
};
export { config };

