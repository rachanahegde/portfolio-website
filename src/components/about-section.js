"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Cpu,
  FileCode2,
  Layout,
  Atom,
  GitBranch,
  Braces,
  Boxes,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-85 h-85 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/profile.png"
              alt="Rachana Hegde portrait"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right: About text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-6 text-[var(--color-text)]">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-text)/80] mb-8">
            Five years ago, I fell in love with software development while
            studying English Literature. Since then, I’ve earned an MSc in
            Computer Science with distinction and worked as a Frontend Developer
            at a fast-paced media startup. I’m passionate about crafting digital
            experiences where elegant design meets thoughtful engineering — and
            I love exploring agentic AI workflows that make this possible.
          </p>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[var(--color-text)]">
              <div className="flex items-center gap-2">
                <Atom className="text-sky-500" size={24} />
                <span className="text-sm">React / Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Braces className="text-yellow-500" size={24} />
                <span className="text-sm">JavaScript / Node</span>
              </div>
              <div className="flex items-center gap-2">
                <Layout className="text-cyan-600" size={24} />
                <span className="text-sm">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="text-rose-500" size={24} />
                <span className="text-sm">Agentic AI / RAG</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="text-pink-500" size={24} />
                <span className="text-sm">Figma</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="text-blue-500" size={24} />
                <span className="text-sm">Python</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="text-gray-700" size={24} />
                <span className="text-sm">GitHub Copilot</span>
              </div>
              <div className="flex items-center gap-2">
                <Boxes className="text-green-600" size={24} />
                <span className="text-sm">Cursor / AI Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode2 className="text-amber-600" size={24} />
                <span className="text-sm">HTML / CSS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
