import {
  CheckCircle2,
  Coffee,
  Code,
  Rocket,
  MessageSquare,
  PenTool,
} from "lucide-react";
import { Button } from "./ui/button";

export default function ProcessSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-orbitron md:text-4xl font-bold text-center mb-4">
          How I Work
        </h2>
        <p className="text-center font-montserrat text-gray-600 max-w-2xl text-lg mx-auto mb-12">
          My streamlined process ensures your project is completed efficiently
          while maintaining the highest quality standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Discovery - Large Card */}
          <div className="md:col-span-3 bg-[#f8f0e5] rounded-3xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold font-orbitron mb-3">
              01. Discovery
            </h3>
            <p className="text-gray-700 font-montserrat">
              We&apos;ll discuss your goals, requirements, and vision to ensure
              I fully understand your needs before starting any work.
            </p>
          </div>

          {/* Design - Medium Card */}
          <div className="md:col-span-3 bg-[#e3f6f5] rounded-3xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6">
              <PenTool className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 font-orbitron">02. Design</h3>
            <p className="text-gray-700 font-montserrat">
              I&apos;ll create wireframes and mockups for your approval before
              moving to development.
            </p>
          </div>

          {/* Development - Medium Card */}
          <div className="md:col-span-2 bg-[#ffd8be] rounded-3xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold font-orbitron mb-3">
              03. Development
            </h3>
            <p className="text-gray-700 font-montserrat">
              Using modern technologies, I&apos;ll build your solution with
              clean, efficient code.
            </p>
          </div>

          {/* Testing - Small Card */}
          <div className="md:col-span-2 bg-[#bae5e5] rounded-3xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold font-orbitron mb-3">
              04. Testing
            </h3>
            <p className="text-gray-700 font-montserrat">
              Rigorous testing ensures your project works flawlessly across all
              devices and browsers.
            </p>
          </div>

          {/* Launch - Small Card */}
          <div className="md:col-span-2 bg-[#d8e2dc] rounded-3xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold font-orbitron mb-3">05. Launch</h3>
            <p className="text-gray-700 font-montserrat">
              Once approved, your project goes live with full deployment
              support.
            </p>
          </div>

          {/* Support - Full Width Card */}
          <div className="md:col-span-6 bg-[#f0efeb] rounded-3xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-start md:items-center flex-col md:flex-row gap-6">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-2">
                  06. Support & Maintenance
                </h3>
                <p className="text-gray-700 font-montserrat">
                  I provide ongoing maintenance and support to keep your project
                  running smoothly and up-to-date with the latest technologies
                  and security standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-orbitron font-medium mb-6">
            Ready to start your project?
          </p>
          <Button className="font-bold font-orbitron text-foreground text-lg">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </section>
  );
}
