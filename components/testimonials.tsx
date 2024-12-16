import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

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
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="absolute bottom-0 flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
