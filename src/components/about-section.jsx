"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
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
    <section className="relative pb-24 bg-[var(--color-bg)]/70 text-[var(--color-text)]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image with Orbiting Circles */}
        <BlurFade delay={0.2} inView className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-85 h-85 flex items-center justify-center">
            {/* Orbiting circles for visual interest */}
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={120}
            >
              <Atom className="text-sky-500" size={30} />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={120}
            >
              <Braces className="text-yellow-500" size={30} />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent"
              reverse
              duration={20}
              delay={0}
              radius={160}
            >
              <Layout className="text-cyan-600" size={30} />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[30px] border-none bg-transparent"
              reverse
              duration={20}
              delay={10}
              radius={160}
            >
              <Cpu className="text-rose-500" size={30} />
            </OrbitingCircles>

            {/* Profile image */}
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg z-10">
              <Image
                src="/profile.png"
                alt="Rachana Hegde portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </BlurFade>

        {/* Right: About text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <BlurFade delay={0.3} inView>
            <h2 className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-6 text-[var(--color-text)]">
              About Me
            </h2>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <p className="text-lg leading-relaxed text-[var(--color-text)/80] mb-8">
              Five years ago, I fell in love with software development while
              studying English Literature. Since then, I've earned an MSc in
              Computer Science with distinction and worked as a Frontend Developer
              at a fast-paced media startup. I'm passionate about crafting digital
              experiences where elegant design meets thoughtful engineering — and
              I love exploring agentic AI workflows that make this possible.
            </p>
          </BlurFade>

          {/* Tech Stack */}
          <div>
            <BlurFade delay={0.5} inView>
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
                Tech Stack
              </h3>
            </BlurFade>

            <BlurFade delay={0.6} inView>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[var(--color-text)]">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <Atom className="text-sky-500" size={24} />
                  <span className="text-sm">React / Next.js</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <Braces className="text-yellow-500" size={24} />
                  <span className="text-sm">JavaScript / Node</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <Layout className="text-cyan-600" size={24} />
                  <span className="text-sm">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <Cpu className="text-rose-500" size={24} />
                  <span className="text-sm">Agentic AI / RAG</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <Palette className="text-pink-500" size={24} />
                  <span className="text-sm">Figma</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <Code2 className="text-blue-500" size={24} />
                  <span className="text-sm">Python</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <GitBranch className="text-gray-700" size={24} />
                  <span className="text-sm">GitHub Copilot</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <Boxes className="text-green-600" size={24} />
                  <span className="text-sm">Cursor / AI Tools</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm hover:scale-105 transition-all hover:shadow-md">
                  <FileCode2 className="text-amber-600" size={24} />
                  <span className="text-sm">HTML / CSS</span>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
