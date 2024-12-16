import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-full mx-auto md:auto-rows-[40rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          link={item.link}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Alan Realty",
    description: "Sit back and enjoy your ride to.......ORION",
    header: (
      <Image
        alt="single"
        src={"/alanreyeswebsite.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://alanreyesrealty.com/",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Kasteos",
    description: "What really happens inside a black hole?",
    header: (
      <Image
        alt="single"
        src={"/kasteos.png"}
        width={1000}
        height={1000}
        className="w-full h-full object-cover bg-red-100 rounded-lg"
      />
    ),
    link: "https://kasteos.com",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "DougsTractorWorks",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Image
        alt="single"
        src={"/dougstractorworks.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://dougstractorworks.com",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Rooted Truth",
    description: "Always bet on black cause the odds are always in your favor.",
    header: (
      <Image
        alt="single"
        src={"/rootedtruthwebsite.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://rootedtruth.vercel.app/",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Portfolio",
    description: "Always bet on black cause the odds are always in your favor.",
    header: (
      <Image
        alt="single"
        src={"/portfoliowebsite.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://sahak-portfolio.com",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cordelia Photography",
    description: "Always bet on black cause the odds are always in your favor.",
    header: (
      <Image
        alt="single"
        src={"/cordeliawebsite.png"}
        width={1000}
        height={1000}
        className="w-full object-cover h-full rounded-lg"
      />
    ),
    link: "https://www.cordeliafaithphotography.ca/",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
