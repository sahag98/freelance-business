import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Alan",
    username: "@jack",
    body: "Working with Web&Mobile was a game-changer! He brought my vision to life with a personal, professional website that reflects my business perfectly. Highly recommend!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Osei",
    username: "@jill",
    body: "For expert website creation, reach out to Web&Mobile! He listens to your needs, delivers beyond expectations, and guides you through the process. Contact him for your website needs!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Douglas",
    username: "@john",
    body: "He designed my business website perfectly, providing excellent communication throughout. Within a week, the website brought in my first client—highly recommend him!",
    img: "https://avatar.vercel.sh/john",
  },
];

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl p-4",
        "bg-gradient-to-br from-palette-cream to-palette-cyan",
        "hover:from-palette-cyan hover:to-palette-blue transition-all duration-300",
        "shadow-md hover:shadow-xl"
      )}
    >
      <div className="flex p-2 flex-row items-center gap-3">
        <Image
          className="rounded-full border-2 border-palette-blue"
          width={40}
          height={40}
          alt="testimony profile image"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="md:text-lg text-sm font-orbitron font-medium text-gray-800">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="md:text-base text-sm font-montserrat tracking-wider text-gray-700 p-2">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="absolute bottom-0 flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-palette-cream via-palette-cream/50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-palette-cream via-palette-cream/50 to-transparent"></div> */}
    </div>
  );
}
