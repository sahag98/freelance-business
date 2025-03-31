import CTASection from "@/components/cta-section";
import ContactFooter from "@/components/footer";
import Hero from "@/components/hero";
import IntroSection from "@/components/intro";
import Packages from "@/components/packages";
import ProcessSection from "@/components/processes";
import { Portfolio } from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen space-y-16 flex flex-col items-center relative">
      <Hero />
      <IntroSection />
      <ProcessSection />
      <Packages />
      <Portfolio />
      <CTASection />
      {/* <StickyScrollRevealDemo /> */}
      {/* <BentoGridSecondDemo /> */}

      {/* <AboutSection /> */}
      <ContactFooter />
    </main>
  );
}
