import { LensDemo } from "./LensDemo";
export function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Kasteos Music Producer",
      image: "/kasteos.png",
      link: "https://kasteos.com/",
      description:
        "Crafted a sleek, modern website for a California-based music producer, featuring smooth animations, responsive design, and an engaging portfolio to showcase their talent and projects.",
    },
    {
      id: 2,
      title: "Doug's Tractor Works",
      image: "/dougstractorworks.png",
      link: "https://dougstractorworks.com/",
      description:
        "A clean and professional landing page designed for a tractor service business, featuring service details, a gallery, and an FAQ section to provide comprehensive information for potential customers.",
    },
    {
      id: 3,
      title: "Mr. O Fresh",
      image: "/mrofresh.png",
      link: "https://mrofresh.com/",
      description:
        "A visually engaging landing page for a car detailing business, highlighting service offerings with a vibrant design, integrated booking system, and a focus on local brand identity.",
    },
    {
      id: 4,
      title: "Alan Reyes Real Estate",
      image: "/alanreyeswebsite.png",
      link: "https://alanreyesrealty.com/",
      description:
        "A modern and sleek landing page for a real estate agent, featuring property listings, client testimonials, and contact information to guide buyers through the home-buying process.",
    },
    {
      id: 5,
      title: "Rooted Truth",
      image: "/rootedtruthwebsite.png",
      link: "https://rootedtruth.vercel.app/",
      description:
        "A minimalist and inspiring blog website focusing on faith-based content, with clean navigation for reading articles, reflections, and personal stories centered on spiritual growth.",
    },
    {
      id: 6,
      title: "Cordelia Photography",
      image: "/cordeliawebsite.png",
      link: "https://www.cordeliafaithphotography.ca/",
      description:
        "An elegant landing page for a photography business, showcasing a professional portfolio with high-quality images, client reviews, and easy-to-use contact forms for booking sessions.",
    },
    {
      id: 7,
      title: "Portfolio Website",
      image: "/portfoliowebsite.png",
      link: "https://sahak-portfolio.com/",
      description:
        "A sophisticated personal portfolio showcasing a collection of completed projects, including case studies and design details, with a dark theme that emphasizes professionalism and creativity.",
    },
  ];
  return (
    <section id="portfolio" className="w-full">
      <div className=" px-4 md:px-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <LensDemo key={item.id} item={item} />
            // <Card key={item.id}>
            //   <CardContent className="p-4">
            //     <img
            //       alt={`Portfolio item ${item}`}
            //       className="object-cover w-full h-48 rounded-lg"
            //       height="200"
            //       src={`/placeholder.svg?height=200&width=300`}
            //       style={{
            //         aspectRatio: "300/200",
            //         objectFit: "cover",
            //       }}
            //       width="300"
            //     />
            //     <h3 className="mt-2 text-xl font-bold">Project {item}</h3>
            //     <p className="text-sm text-gray-500 dark:text-gray-400">
            //       Brief description of the project and technologies used.
            //     </p>
            //   </CardContent>
            // </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
