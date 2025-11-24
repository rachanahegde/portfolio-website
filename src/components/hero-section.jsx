"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { BlurFade } from "@/components/ui/blur-fade";
import { WordRotate } from "@/components/ui/word-rotate";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 bg-[var(--color-bg)]/70 overflow-hidden">
      {/* Particles background effect */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={80}
        ease={80}
        color="#e8a6b8"
        refresh
      />

      <Container className="text-center relative z-10">
        <BlurFade delay={0.1} inView>
          <h1 className="text-4xl sm:text-6xl font-[Playfair_Display] font-semibold text-[var(--color-text)]">
            Hi, I'm{" "}
            <span className="text-[var(--color-primary)]">Rachana Hegde</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="mt-6 text-2xl sm:text-3xl font-[Playfair_Display] text-[var(--color-text)]">
            <WordRotate
              words={[
                "Frontend Developer",
                "UI/UX Designer",
                "AI Product Designer",
              ]}
              className="font-semibold text-[var(--color-primary)]"
            />
          </div>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-[var(--color-text)/80]">
            I craft thoughtful, user-centric digital experiences where elegant
            design meets functionality. Lately, I've been exploring how code and
            agentic AI can work together to create more intuitive, intelligent
            products.
          </p>
        </BlurFade>

        <BlurFade delay={0.7} inView>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <ShimmerButton
              className="shadow-2xl"
              background="var(--color-primary)"
              shimmerColor="#ffffff"
              shimmerSize="0.1em"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                View My Work
              </span>
            </ShimmerButton>

            <ShimmerButton
              className="shadow-2xl"
              background="var(--color-sage)"
              shimmerColor="#ffffff"
              shimmerSize="0.1em"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                Contact Me
              </span>
            </ShimmerButton>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
