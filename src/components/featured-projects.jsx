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
  Palette,
  Cpu,
  Layout,
  Atom,
  Braces,
  Database,
  Globe,
  Server,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "AI Content Generator",
    shortDescription:
      "An intelligent content creation platform powered by OpenAI",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Node.js", "React"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Built an AI-powered content generator that helps marketers and writers create engaging copy with contextual understanding and brand voice consistency.",
    features: [
      "Real-time AI content generation with custom prompts",
      "Brand voice customization and tone adjustment",
      "Multi-language support with automatic translation",
      "Content templates for various use cases",
      "Export functionality in multiple formats",
    ],
    techStack: [
      { name: "Next.js", icon: Atom },
      { name: "React", icon: Atom },
      { name: "OpenAI API", icon: Sparkles },
      { name: "Tailwind CSS", icon: Layout },
      { name: "Node.js", icon: Server },
    ],
    implementation:
      "Built with Next.js App Router and API routes for secure OpenAI integration. Implemented streaming responses for real-time content generation, with Redis caching to optimize API calls. Used Tailwind's utility-first workflow for responsive design.",
    challenges:
      "Learned how to optimize API calls and implement request queuing to prevent rate limiting. Developed a custom caching strategy that reduced API costs by 60% while maintaining response quality.",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    shortDescription: "Analytics dashboard for online retail businesses",
    technologies: ["React", "D3.js", "Firebase", "Material UI", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Designed and developed a comprehensive analytics dashboard for e-commerce businesses to track sales, inventory, and customer behavior in real-time.",
    features: [
      "Real-time sales and revenue tracking",
      "Interactive data visualizations with D3.js",
      "Inventory management and alerts",
      "Customer segmentation and behavior analysis",
      "Customizable reporting and export options",
    ],
    techStack: [
      { name: "React", icon: Atom },
      { name: "D3.js", icon: Boxes },
      { name: "Firebase", icon: Database },
      { name: "JavaScript", icon: Braces },
      { name: "Material UI", icon: Palette },
    ],
    implementation:
      "Leveraged Firebase Realtime Database for live updates and authentication. Created custom D3.js visualizations with smooth transitions. Implemented lazy loading and code splitting for optimal performance.",
    challenges:
      "Tackled complex state management for real-time data updates across multiple chart components. Learned advanced D3.js patterns for creating reusable, animated visualizations that perform well with large datasets.",
  },
  {
    id: 3,
    title: "Portfolio Builder SaaS",
    shortDescription:
      "No-code platform for creating stunning portfolio websites",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Created a SaaS platform that enables creative professionals to build and deploy beautiful portfolio websites without writing code, featuring drag-and-drop editing and professional templates.",
    features: [
      "Drag-and-drop visual editor with live preview",
      "Professional portfolio templates library",
      "Custom domain support and SSL",
      "Integrated payment processing with Stripe",
      "SEO optimization and analytics dashboard",
    ],
    techStack: [
      { name: "Next.js", icon: Atom },
      { name: "Prisma", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Stripe", icon: Code2 },
      { name: "Tailwind", icon: Layout },
    ],
    implementation:
      "Used Next.js ISR for fast page loads and dynamic content updates. Built a custom drag-and-drop editor with React DnD. Integrated Stripe for subscription management and Prisma for type-safe database operations.",
    challenges:
      "Architecting a flexible template system that allows user customization while maintaining design integrity was complex. Learned advanced Next.js patterns for multi-tenancy and implemented efficient database queries to handle concurrent users.",
  },
  {
    id: 4,
    title: "RAG Chatbot Assistant",
    shortDescription:
      "Context-aware chatbot using retrieval-augmented generation",
    technologies: ["Python", "LangChain", "Pinecone", "FastAPI", "React"],
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Developed an intelligent chatbot that uses RAG architecture to provide accurate, context-aware responses by retrieving relevant information from a custom knowledge base.",
    features: [
      "Semantic search with vector embeddings",
      "Multi-document context understanding",
      "Source citation and reference tracking",
      "Conversation memory and follow-up handling",
      "Custom knowledge base management interface",
    ],
    techStack: [
      { name: "Python", icon: Code2 },
      { name: "LangChain", icon: Cpu },
      { name: "Pinecone", icon: Database },
      { name: "FastAPI", icon: Server },
      { name: "React", icon: Atom },
    ],
    implementation:
      "Built with LangChain for orchestration and Pinecone for vector storage. Implemented semantic chunking strategies for optimal retrieval. Created FastAPI endpoints for efficient client-server communication.",
    challenges:
      "Optimizing retrieval relevance while maintaining response speed required careful tuning of embedding models and chunk sizes. Learned advanced prompt engineering techniques to reduce hallucinations and improve answer accuracy.",
  },
  {
    id: 5,
    title: "Design System Library",
    shortDescription: "Comprehensive component library for consistent UIs",
    technologies: ["React", "TypeScript", "Storybook", "CSS Modules"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Built a fully documented design system and component library to ensure consistency across multiple products, featuring accessible components with comprehensive documentation.",
    features: [
      "50+ customizable React components",
      "WCAG 2.1 AA accessibility compliance",
      "Interactive documentation with Storybook",
      "Theme customization and dark mode support",
      "TypeScript definitions for type safety",
    ],
    techStack: [
      { name: "React", icon: Atom },
      { name: "TypeScript", icon: Code2 },
      { name: "Storybook", icon: Boxes },
      { name: "CSS Modules", icon: Layout },
      { name: "Figma", icon: Palette },
    ],
    implementation:
      "Designed components in Figma first, then implemented with React and TypeScript for type safety. Used CSS Modules for scoped styling and Storybook for interactive documentation and testing.",
    challenges:
      "Creating truly reusable components that work across different contexts required careful API design. Learned best practices for accessibility implementation and how to balance flexibility with consistency in component APIs.",
  },
  {
    id: 6,
    title: "Real-Time Collaboration Tool",
    shortDescription: "Collaborative workspace with live editing capabilities",
    technologies: ["Next.js", "WebSockets", "Redis", "MongoDB", "React"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Engineered a real-time collaborative workspace where teams can edit documents, share feedback, and work together seamlessly with live cursor tracking and instant updates.",
    features: [
      "Real-time collaborative text editing",
      "Live cursor and presence indicators",
      "Comment threads and mentions",
      "Version history and rollback",
      "Permission-based access control",
    ],
    techStack: [
      { name: "Next.js", icon: Atom },
      { name: "WebSockets", icon: Globe },
      { name: "Redis", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "React", icon: Atom },
    ],
    implementation:
      "Used WebSockets for real-time bidirectional communication and Redis for managing presence and temporary data. Implemented operational transformation for conflict-free concurrent editing.",
    challenges:
      "Handling concurrent edits without conflicts was the biggest technical challenge. Learned about CRDTs and operational transformation algorithms, ultimately implementing a hybrid approach that balanced simplicity with reliability.",
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative py-24 backdrop-blur-[1px] bg-[var(--color-bg)]/70 text-[var(--color-text)]">
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
