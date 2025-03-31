"use client";

import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";

const Packages = () => {
  const packagesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //@ts-expect-error It wont be null
    const packageCards = packagesRef.current.querySelectorAll(".package-card");

    gsap.set([packageCards], { opacity: 0, y: 25 });

    ScrollTrigger.batch(packageCards, {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      once: false,
    });
  }, []);
  return (
    <section
      id="packages"
      className="w-full container py-12 md:py-24 lg:py-32 rounded-3xl bg-palette-cream"
      ref={packagesRef}
    >
      <div className="px-4 md:px-32">
        <h2 className="text-3xl font-orbitron font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="package-card bg-palette-cyan text-gray-800 flex flex-col hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron font-bold">
                Landing Page
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow font-montserrat">
              <p className="text-3xl font-orbitron font-bold mb-4">
                Starting at $400
              </p>
              <p className="font-semibold mb-4">
                Ideal for businesses that are just starting up or for those
                seeking a more professional online presence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  <span>Multi-page Design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  <span>Custom Design & Branding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  <span>Call-to-Action (CTA)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  <span>Mobile Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  <span>SEO</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  <span>Contact form</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Link
                target="_blank"
                className="w-full"
                href={"https://cal.com/sahag-arz-d8kd8p/simple-website"}
              >
                <Button
                  size={"lg"}
                  className="w-full font-orbitron hover:bg-palette-peach bg-palette-blue text-gray-800 text-base font-bold"
                >
                  Choose Plan
                </Button>
              </Link>
              <Link
                target="_blank"
                className="w-full"
                href={"https://dougstractorworks.com"}
              >
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="w-full font-orbitron bg-palette-cyan border-palette-blue text-gray-800 text-base font-bold hover:bg-palette-blue"
                >
                  View Example
                </Button>
              </Link>
            </CardFooter>
          </Card>
          {/* <Card className="package-card bg-primary text-white dark:text-background flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron font-bold">
                Advanced Website
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow font-montserrat">
              <p className="text-4xl font-bold font-orbitron mb-4">$600</p>
              <p className="font-medium text-gray-300 dark:text-gray-500 mb-4">
                Suitable for growing businesses needing a website with easy
                content management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-background" />
                  <span>Multi-page design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-background" />
                  <span>CMS</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-background" />
                  <span>SEO</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-background" />
                  <span>Analytics</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                target="_blank"
                className="w-full"
                href={"https://cal.com/sahag-arz-d8kd8p/advanced-website"}
              >
                <Button className="w-full font-orbitron text-base font-bold hover:bg-secondary bg-background text-foreground">
                  Choose Plan
                </Button>
              </Link>
            </CardFooter>
          </Card> */}
          <Card className="package-card flex flex-col bg-palette-peach hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron font-bold">
                Mobile App
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow font-montserrat">
              <p className="text-3xl font-bold font-orbitron mb-4">
                Starting at $800
              </p>
              <p className="font-medium  mb-4">
                Ideal for startups or businesses wanting to enter the mobile
                market.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Custom Design & Branding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>iOS and Android platform</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Essential Features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>API Integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Basic Testing & Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Deployment Support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Link
                target="_blank"
                className="w-full"
                href={"https://cal.com/sahag-arz-d8kd8p/mobile-app"}
              >
                <Button
                  size={"lg"}
                  className="w-full font-orbitron text-base font-bold bg-palette-blue hover:bg-palette-cyan text-gray-800"
                >
                  Choose Plan
                </Button>
              </Link>
              <Link
                target="_blank"
                className="w-full"
                href={"https://www.prayse.app/"}
              >
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="w-full font-orbitron text-base font-bold"
                >
                  View Example
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="package-card flex flex-col bg-palette-sage hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron font-bold">
                Custom Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow font-montserrat">
              <p className="text-4xl font-bold font-orbitron mb-4">Custom</p>
              <p className="font-medium text-gray-500 dark:text-gray-400 mb-4">
                For enterprises or complex projects requiring tailored solutions
                and ongoing support.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Tailored to your needs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Full-stack development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Scalable architecture</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Ongoing support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Link
                target="_blank"
                className="w-full"
                href={
                  "https://cal.com/sahag-arz-d8kd8p/custom-solution?date=2024-12-11&month=2024-12"
                }
              >
                <Button
                  size={"lg"}
                  className="w-full font-orbitron text-base font-bold bg-palette-blue hover:bg-palette-cyan text-gray-800"
                >
                  Contact Us
                </Button>
              </Link>
              <Link
                target="_blank"
                className="w-full"
                href={"https://admin-staff-portal.vercel.app/"}
              >
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="w-full font-orbitron text-base font-bold"
                >
                  View Example
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Packages;
