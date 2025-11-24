"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { BlurFade } from "@/components/ui/blur-fade";
import { HyperText } from "@/components/ui/hyper-text";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  Briefcase,
  Code2,
  Sparkles,
  CheckCircle2,
  Star,
  Cpu,
  Globe,
  Settings,
  Wrench,
  Lightbulb,
  Award,
  Rocket,
} from "lucide-react";

export default function WorkExperienceSkills() {
  const [tab, setTab] = useState("experience");
  const [hoveredSkill, setHoveredSkill] = useState("");

  const skills = {
    "Web Development": {
      icon: <Globe className="text-[var(--color-primary)]" size={26} />,
      color: "from-pink-100 via-white to-sand/30",
      skills: [
        "HTML/CSS",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "React (Hooks, Context API, Router, REST APIs)",
        "UI Design (Figma, Adobe XD)",
        "Responsive Design",
      ],
    },
    Backend: {
      icon: <Settings className="text-[var(--color-primary)]" size={26} />,
      color: "from-sand/30 via-white to-green-50",
      skills: [
        "Express.js (Beginner)",
        "Node.js (Beginner)",
        "WebSockets (Beginner)",
      ],
    },
    AI: {
      icon: <Cpu className="text-[var(--color-primary)]" size={26} />,
      color: "from-blue-50 via-white to-pink-50",
      skills: ["Python", "RAG", "Agentic AI", "LLMs", "Prompt Engineering"],
    },
    Other: {
      icon: <Wrench className="text-[var(--color-primary)]" size={26} />,
      color: "from-sand/20 via-white to-gray-50",
      skills: [
        "Software Design",
        "Software Testing",
        "IT Support",
        "Git & GitHub",
        "Databases",
        "Data Visualization",
      ],
    },
    "Soft Skills": {
      icon: <Lightbulb className="text-[var(--color-primary)]" size={26} />,
      color: "from-pink-50 via-white to-sand/30",
      skills: [
        "Teamwork",
        "Collaboration",
        "Communication",
        "Writing",
        "Research",
      ],
    },
  };

  const responsibilities = [
    "Design and build responsive, high-quality UIs with Figma, React, Next.js, and Tailwind CSS",
    "Replace legacy JS/HTML with modern React applications",
    "Collaborate with Head of Technology and Lead Backend Developer on architecture",
    "Conduct code reviews, optimize performance, contribute to project planning",
    "Integrate frontend UI with custom API endpoints built in Express.js",
    "Secondary IT support duties including hardware maintenance and Workspace admin",
    "Leverage AI tools (Cursor, Copilot, Claude) to streamline development workflows",
  ];

  const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Node.js", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Git", color: "#F05032" },
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
  ];

  return (
    <section className="relative py-24 bg-[var(--color-bg)]/70 text-[var(--color-text)]">
      <Container>
        {/* Statistics Section with NumberTicker for Experience, Projects, and Technologies */}
        <BlurFade delay={0.05} inView>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6 bg-white/60 rounded-2xl border border-pink-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="text-[var(--color-primary)]" size={24} />
                <NumberTicker
                  value={6}
                  className="text-4xl font-bold text-[var(--color-primary)]"
                />
                <span className="text-4xl font-bold text-[var(--color-primary)]">+</span>
              </div>
              <p className="text-sm font-medium text-[var(--color-text)/80]">Months Experience</p>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-2xl border border-pink-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Rocket className="text-[var(--color-primary)]" size={24} />
                <NumberTicker
                  value={15}
                  className="text-4xl font-bold text-[var(--color-primary)]"
                />
                <span className="text-4xl font-bold text-[var(--color-primary)]">+</span>
              </div>
              <p className="text-sm font-medium text-[var(--color-text)/80]">Projects Completed</p>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-2xl border border-pink-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code2 className="text-[var(--color-primary)]" size={24} />
                <NumberTicker
                  value={15}
                  className="text-4xl font-bold text-[var(--color-primary)]"
                />
                <span className="text-4xl font-bold text-[var(--color-primary)]">+</span>
              </div>
              <p className="text-sm font-medium text-[var(--color-text)/80]">Technologies</p>
            </div>
          </div>
        </BlurFade>

        {/* Header with HyperText */}
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-8">
            <HyperText
              className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-4"
              duration={1000}
            >
              Work Experience & Skills
            </HyperText>
            <p className="text-lg text-[var(--color-text)/80] max-w-2xl mx-auto">
              Building modern web experiences with thoughtful design and clean
              code
            </p>
          </div>
        </BlurFade>

        {/* Tech Stack Marquee */}
        <BlurFade delay={0.15} inView>
          <div className="mb-12 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="mx-6 flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-pink-100 shadow-sm"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            {
              id: "experience",
              label: "Experience",
              icon: <Briefcase size={18} />,
            },
            { id: "skills", label: "Skills", icon: <Code2 size={18} /> },
          ].map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`group px-8 py-3 rounded-full font-medium transition-all duration-300 ${tab === id
                ? "bg-[var(--color-primary)] text-white shadow-lg"
                : "bg-white text-[var(--color-text)] hover:shadow-md border border-pink-100"
                }`}
            >
              <span className="flex items-center gap-2">
                {icon} {label}
              </span>
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          {tab === "experience" ? (
            /* EXPERIENCE SECTION */
            <BlurFade key="experience" delay={0.3} inView>
              <Card className="p-8 sm:p-12 bg-gradient-to-br from-white via-pink-50 to-sand/40 border border-pink-100 rounded-3xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-[var(--color-primary)] rounded-2xl shadow-lg">
                      <Briefcase className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">
                        Frontend Web Developer (React)
                      </h3>
                      <p className="text-[var(--color-primary)] font-medium mt-1">
                        BRR Media, London, UK
                      </p>
                      <p className="text-sm text-[var(--color-text)/60] mt-1">
                        July 2025 – Present
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Sparkles
                        className="text-[var(--color-primary)]"
                        size={20}
                      />
                      <h4 className="text-lg font-semibold">
                        Key Responsibilities
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {responsibilities.map((resp, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 group"
                        >
                          <CheckCircle2
                            className="text-[var(--color-leaf)] mt-1 group-hover:scale-110 transition-transform"
                            size={18}
                          />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-pink-100 my-10" />
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Star className="text-[var(--color-primary)]" size={20} />
                      <h4 className="text-lg font-semibold">
                        Projects & Prototypes
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <strong>AI Voice Transcription Prototype:</strong> Built
                        a Whisper API-based web app with searchable transcripts
                        and dynamic highlighting.
                      </li>
                      <li>
                        <strong>RAG Chatbot:</strong> Created a LlamaIndex-based
                        chatbot using LLMs for internal onboarding support.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </BlurFade>
          ) : (
            /* SKILLS SECTION */
            <div
              key="skills"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {Object.entries(skills).map(([category, data], index) => (
                <BlurFade
                  key={category}
                  delay={0.15 + index * 0.05}
                  inView
                >
                  <div
                    onMouseEnter={() => setHoveredSkill(category)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="h-full"
                  >
                    <Card
                      className={`relative overflow-hidden p-6 rounded-2xl border transition-all duration-500 h-full bg-gradient-to-br ${data.color
                        } ${hoveredSkill === category
                          ? "scale-105 shadow-2xl border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20"
                          : "border-pink-100 shadow-md hover:shadow-xl"
                        }`}
                    >
                      {/* Animated Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent transition-opacity duration-500 ${hoveredSkill === category ? "opacity-100" : "opacity-0"
                          }`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-5">
                          <div
                            className={`p-2 rounded-xl bg-white/80 shadow-sm transition-transform duration-300 ${hoveredSkill === category ? "scale-110 rotate-6" : ""
                              }`}
                          >
                            {data.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                            {category}
                          </h4>
                        </div>

                        <ul className="space-y-2.5">
                          {data.skills.map((skill, i) => (
                            <li
                              key={skill}
                              className="flex items-center gap-2.5 text-sm group/item"
                              style={{
                                animationDelay: `${i * 50}ms`
                              }}
                            >
                              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] group-hover/item:scale-150 transition-transform" />
                              <span className="group-hover/item:text-[var(--color-primary)] group-hover/item:translate-x-1 transition-all duration-200">
                                {skill}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </BlurFade>
              ))}
            </div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
