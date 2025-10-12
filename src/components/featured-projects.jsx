"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { projects } from "./projects";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative pb-24 backdrop-blur-[1px] bg-[var(--color-bg)]/70 text-[var(--color-text)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-4 text-[var(--color-text)]">
            Featured Projects
          </h2>
          <p className="text-lg text-[var(--color-text)/80] max-w-2xl mx-auto">
            A curated selection of projects showcasing thoughtful design, clean
            code, and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Pink Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Buttons */}
                  <AnimatePresence>
                    {hoveredCard === project.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute inset-0 flex items-center justify-center gap-4"
                      >
                        <Button
                          variant="sage"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demoUrl, "_blank");
                          }}
                          className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 backdrop-blur-sm shadow-lg"
                        >
                          <ExternalLink size={16} />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                          className="flex items-center gap-2 bg-gray-900/90 hover:bg-gray-900 text-white backdrop-blur-sm shadow-lg border-0"
                        >
                          <Github size={16} />
                          Code
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text)/70] mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-pink-100/10 to-purple-100/10 text-[var(--color-text)/80] border border-pink-200/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
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
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white/95 via-pink-50/95 to-purple-50/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(236,72,153,0.3),transparent_50%)] animate-pulse" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors z-10"
              >
                <X size={24} className="text-gray-700" />
              </button>

              <div className="relative p-8 sm:p-12">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-4 text-gray-900">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {selectedProject.shortDescription}
                  </p>
                </div>

                {/* Project Overview */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="text-pink-500" size={20} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Project Overview
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="text-purple-500" size={20} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Key Features
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2
                          className="text-green-500 mt-1 flex-shrink-0"
                          size={18}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="text-amber-500" size={20} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Tech Stack
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.techStack.map((tech, index) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/80 shadow-md border border-gray-200/50 hover:shadow-lg transition-shadow"
                        >
                          <Icon className="text-pink-500" size={20} />
                          <span className="font-medium text-gray-800">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Implementation Details */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="text-blue-500" size={20} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Implementation Details
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-white/60 p-4 rounded-xl border border-gray-200/50">
                    {selectedProject.implementation}
                  </p>
                </div>

                {/* Challenges & Learnings */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="text-rose-500" size={20} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Challenges & Learnings
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-pink-50/80 to-purple-50/80 p-4 rounded-xl border border-pink-200/50">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() =>
                      window.open(selectedProject.demoUrl, "_blank")
                    }
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <Globe size={18} />
                    Live Demo
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(selectedProject.githubUrl, "_blank")
                    }
                    variant="outline"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all border-0"
                  >
                    <Github size={18} />
                    View on GitHub
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
