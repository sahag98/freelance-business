import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function LensDemo({ item }: any) {
  return (
    <div className="portfolio-card">
      <div className="w-full flex relative border rounded-xl overflow-hidden bg-gray-50 dark:bg-secondary p-4">
        <div
          className={cn(
            "relative flex flex-col md:flex-row-reverse items-center gap-10 justify-between z-10",
            item.id % 2 === 0 && "md:flex-row"
          )}
        >
          <Image
            src={item.image}
            alt="image"
            width={700}
            height={700}
            className="rounded-2xl"
          />

          <div className="py-4 h-full flex flex-col justify-center gap-5  md:w-1/2 w-full relative z-20">
            <div className="flex items-center justify-between">
              <h2 className="md:text-3xl text-2xl text-left font-bold">
                {item.title}
              </h2>
            </div>
            <p className=" text-left tracking-wider  mt-0">
              {item.description}
            </p>
            <Link target="_blank" href={item.link} className="mt-5">
              <Button
                variant={"default"}
                size={"lg"}
                className="text-base py-3 font-semibold"
              >
                Visit Website
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
