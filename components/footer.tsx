import Link from "next/link";
import { Instagram } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="max-w-5xl mx-auto px-4 py-16">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-sm tracking-widest">WEB&MOBILE</p>
          <h2 className="text-6xl font-bold tracking-wider">CONTACT</h2>
        </div>

        <div className="h-px bg-gray-200" />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium tracking-wide">
                WEB - MOBILE - UI/UX
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Innovative freelancer offering effective solutions tailored to
                your business.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-sm tracking-wide">Email</h4>
              <Link
                href="mailto:sahag@webmobilefreelance.com"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
              >
                sahag@webmobilefreelance.com
              </Link>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm tracking-wide">Find me on</h4>
              <div className="flex gap-6">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/webmobilefreelance"
                  className="hover:text-gray-600"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
