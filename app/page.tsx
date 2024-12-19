import ContactFooter from "@/components/footer";
import Hero from "@/components/hero";
import IntroSection from "@/components/intro";
import Packages from "@/components/packages";
import { Portfolio } from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen space-y-16 flex flex-col items-center relative">
      <Hero />
      <IntroSection />
      <Packages />
      <Portfolio />
      {/* <StickyScrollRevealDemo /> */}
      {/* <BentoGridSecondDemo /> */}

      {/* <AboutSection /> */}
      <ContactFooter />
    </main>
  );
}
