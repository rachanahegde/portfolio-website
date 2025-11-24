import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import FeaturedProjects from "@/components/featured-projects";
import WorkExperienceSkills from "@/components/work-experience-skills";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* 🌸 Fixed floral background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/flower_background.png')] bg-bottom bg-no-repeat bg-[length:115%_auto] opacity-100"></div>
        {/* Gentle gradient fade near top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-[var(--color-bg)]/60 to-[var(--color-bg)]/10"></div>
      </div>

      {/* Page sections */}
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <WorkExperienceSkills />
      <ContactSection />
    </main>
  );
}
