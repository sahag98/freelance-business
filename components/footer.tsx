import Link from "next/link";
import { Instagram } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex flex-col space-y-16">
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-sm font-orbitron tracking-widest">WEB&MOBILE</p>
          <h2 className="text-6xl font-orbitron font-bold tracking-wider">
            CONTACT
          </h2>
        </div>

        <div className="h-px bg-gray-200" />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-orbitron font-medium tracking-wide">
                WEB - MOBILE - UI/UX
              </h3>
              <p className="text-gray-600 text-lg font-montserrat dark:text-gray-300">
                Innovative freelancer offering effective solutions tailored to
                your business.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-lg font-orbitron tracking-wide">Email</h4>
              <Link
                href="mailto:arzsahag@gmail.com"
                className="text-gray-600 font-montserrat dark:text-gray-300 hover:text-gray-900"
              >
                arzsahag@gmail.com
              </Link>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-orbitron tracking-wide">
                Find me on
              </h4>
              <div className="flex gap-6">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/webmobilefreelance"
                  className="hover:text-gray-600"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only font-montserrat">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="self-center font-orbitron text-sm mx-auto">
          © 2025 WebMobileFreelance. All rights reserved
        </span>
      </div>
    </footer>
  );
}
