"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-28 sm:py-36">
      {/* Decorative floral illustration behind text */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('/floral-lineart.svg')] bg-center bg-no-repeat bg-contain"></div>

      <Container className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-[Playfair_Display] font-semibold text-[var(--color-text)]"
        >
          Hi, I’m{" "}
          <span className="text-[var(--color-primary)]">Rachana Hegde</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-[var(--color-text)/80]"
        >
          I craft beautiful, user-centric digital experiences where elegant
          design meets seamless functionality. Currently exploring the
          intersection of code and agentic AI workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Button>View My Work</Button>
          <Button variant="outline">Contact Me</Button>
        </motion.div>
      </Container>
    </section>
  );
}
