import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple, FaSpotify, FaYoutube } from "react-icons/fa";
import HyperText from "./ui/hyper-text";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import { RainbowButton } from "./ui/rainbow-button";
import { MarqueeDemo } from "./testimonials";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* <h1 className="font-bold md:text-6xl text-7xl">
        Web & Mobile Freelancing Excellence
      </h1> */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
      <HyperText className="font-bold md:text-7xl text-4xl" text="WEB&MOBILE" />
      <p className=" mb-3 text-center md:w-1/2 w-full text-gray-500 md:text-xl dark:text-gray-400">
        Transforming ideas into powerful digital solutions. Specializing in web
        and mobile development to bring your vision to life.
      </p>
      <Link href={"https://cal.com/sahag-arz-d8kd8p/15min"} target="_blank">
        <RainbowButton className="">Get Started</RainbowButton>
      </Link>
      <MarqueeDemo />
    </div>
  );
};

export default Hero;
