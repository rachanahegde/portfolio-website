"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  Sparkles,
  Zap,
  Target,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "./data/projects";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Meteors } from "@/components/ui/meteors";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative pb-24 bg-[var(--color-bg)]/70 text-[var(--color-text)] overflow-hidden">
      {/* Meteors background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={10} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-4 text-[var(--color-text)]">
              Featured Projects
            </h2>
            <p className="text-lg text-[var(--color-text)/80] max-w-2xl mx-auto">
              A curated selection of projects showcasing thoughtful design, clean
              code, and innovative solutions
            </p>
          </div>
        </BlurFade>

        {/* 🔸 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <BlurFade
              key={project.id}
              delay={0.15 + index * 0.05}
              inView
            >
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* 🔸 Fixed card size + solid background */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-pink-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] h-[420px] flex flex-col">
                  {/* Animated border beam on hover */}
                  <BorderBeam size={250} duration={12} delay={9} />
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-pink-50 to-sand/30">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading={index < 3 ? "eager" : "lazy"}
                      quality={75}
                      unoptimized
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-rose-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Buttons */}
                    <AnimatePresence>
                      {hoveredCard === project.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute inset-0 flex items-center justify-center gap-4"
                        >
                          {/* View Button */}
                          <Button
                            variant="sage"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demoUrl, "_blank");
                            }}
                            className="flex items-center gap-2 px-3 py-3 rounded-full font-small 
                        bg-[var(--color-primary)] text-white 
                        hover:bg-[var(--color-accent)] 
                        hover:shadow-[0_0_18px_var(--color-primary)] 
                        transition-all duration-300 shadow-md text-xs"
                          >
                            <ExternalLink size={16} />
                            View
                          </Button>

                          {/* Code Button */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, "_blank");
                            }}
                            className="flex items-center gap-2 px-3 py-3 rounded-full font-medium 
                        bg-[var(--color-bg)] text-[var(--color-text)] 
                        hover:shadow-[0_0_18px_var(--color-sand)] 
                        hover:brightness-105 transition-all duration-300 shadow-md border-0 text-xs"
                          >
                            <Github size={16} />
                            Code
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col justify-between flex-grow text-[var(--color-text)]">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                        {project.title}
                      </h3>
                      {/* 2–3 sentence space */}
                      <p className="text-sm text-[var(--color-text)/80] mb-4 line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-pink-50 text-[var(--color-text)] border border-pink-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Modal (unchanged except color tweaks) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-pink-50 to-sand/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/90 hover:bg-pink-50 shadow-lg transition-colors z-10"
              >
                <X size={24} className="text-[var(--color-text)]" />
              </button>

              <div className="relative p-8 sm:p-12 text-[var(--color-text)]">
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-4 text-[var(--color-text)]">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-[var(--color-text)/80]">
                    {selectedProject.shortDescription}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="text-[var(--color-primary)]" size={20} />
                    <h3 className="text-xl font-semibold">Project Overview</h3>
                  </div>
                  <p className="leading-relaxed">{selectedProject.overview}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles
                      className="text-[var(--color-primary)]"
                      size={20}
                    />
                    <h3 className="text-xl font-semibold">Key Features</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className="text-[var(--color-leaf)] mt-1 flex-shrink-0"
                          size={18}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() =>
                      window.open(selectedProject.demoUrl, "_blank")
                    }
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] hover:bg-pink-400 text-white shadow-lg transition-all"
                  >
                    <Globe size={18} />
                    Live Demo
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(selectedProject.githubUrl, "_blank")
                    }
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-text)] hover:bg-[#2b2424] text-white shadow-lg transition-all"
                  >
                    <Github size={18} />
                    GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
