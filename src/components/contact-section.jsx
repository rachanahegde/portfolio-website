"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Mail, Github, Instagram } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="relative py-24 bg-[var(--color-bg)]/70 text-[var(--color-text)]">
            <BlurFade delay={0.2} inView>
                <div className="container mx-auto px-6 text-center">
                    <SparklesText
                        text="Contact Me"
                        className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-6"
                        sparklesCount={6}
                    />
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        I'd love to hear from you! Whether you have a project idea, a collaboration
                        opportunity, or just want to say hi, feel free to reach out through any of the
                        channels below.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <ShimmerButton
                            onClick={() => window.location.href = "mailto:rachana@example.com"}
                            className="bg-[var(--color-primary)] text-white"
                        >
                            <Mail className="mr-2" size={18} /> Email Me
                        </ShimmerButton>
                        <ShimmerButton
                            onClick={() => window.open("https://github.com/rachana", "_blank")}
                            className="bg-[#333] text-white"
                        >
                            <Github className="mr-2" size={18} /> GitHub
                        </ShimmerButton>
                        <ShimmerButton
                            onClick={() => window.open("https://instagram.com/rachana", "_blank")}
                            className="bg-[#E1306C] text-white"
                        >
                            <Instagram className="mr-2" size={18} /> Instagram
                        </ShimmerButton>
                    </div>
                </div>
            </BlurFade>
        </section>
    );
}
