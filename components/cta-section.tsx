import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <div className="w-full px-4 md:px-32">
      <section className="py-20 px-4 md:px-6 lg:px-8 md:mx-20 bg-gradient-to-r from-palette-peach to-palette-cream rounded-2xl">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-orbitron md:text-4xl font-bold mb-6 text-gray-800">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl font-montserrat text-gray-700 mb-10 max-w-2xl mx-auto">
            Let's collaborate to create a website that not only looks great but
            drives results for your business.
          </p>

          <Button
            variant={"default"}
            className="text-lg font-bold font-orbitron bg-palette-blue hover:bg-palette-cyan text-gray-800"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
