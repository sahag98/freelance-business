"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".fade-in");
      gsap.from(elements, {
        opacity: 0,
        y: 50,
        stagger: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl md:mx-auto mx-4 px-4 py-16 md:py-24 bg-palette-blue rounded-3xl"
    >
      <div className="space-y-6">
        <p className="fade-in font-montserrat text-gray-700 md:text-xl tracking-[0.2em] uppercase">
          Web - Mobile - UI/UX
        </p>

        <h2 className="fade-in text-3xl font-orbitron md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
          Innovative freelancer offering effective solutions tailored to your
          business.
        </h2>
      </div>
    </section>
  );
}
