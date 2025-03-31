import Link from "next/link";
import React from "react";
import HyperText from "./ui/hyper-text";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import { RainbowButton } from "./ui/rainbow-button";
import { MarqueeDemo } from "./testimonials";
import { ModeToggle } from "./theme-toggle";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center">
      {/* <h1 className="font-bold md:text-6xl text-7xl">
        Web & Mobile Freelancing Excellence
      </h1> */}
      <ModeToggle />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
      <h1>
        <HyperText
          className="font-bold font-orbitron md:text-7xl text-5xl"
          text="WEB&MOBILE"
        />
      </h1>
      <p className="font-montserrat mb-3 font-medium tracking-widest text-center md:w-1/2 w-4/5 text-gray-500 md:text-xl dark:text-gray-400">
        Modern Web & Mobile Solutions, Built for You.
      </p>
      <Link
        href={"https://cal.com/sahag-arz-d8kd8p/15min"}
        className="mt-1"
        target="_blank"
      >
        <RainbowButton className="font-extrabold font-orbitron">
          Get Your Website Now
        </RainbowButton>
      </Link>
      <MarqueeDemo />
    </div>
  );
};

export default Hero;
