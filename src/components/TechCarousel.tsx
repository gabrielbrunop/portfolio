"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const techs = [
  { name: "JavaScript", src: "/images/js-logo.png" },
  { name: "TypeScript", src: "/images/ts-logo.png" },
  { name: "React", src: "/images/react-logo.svg" },
  { name: "Next.js", src: "/images/next-logo.png" },
  { name: "Node.js", src: "/images/node-logo.png" },
  { name: "C++", src: "/images/cpp-logo.png" },
  { name: "Rust", src: "/images/rust-crab.png" }
];

export default function TechCarousel() {
  return (
    <Carousel className="w-full" opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 1000 })]}>
      <CarouselContent className="items-center">
        {techs.map(({ name, src }, i) =>
          <CarouselItem key={i} className="basis-1/3 lg:basis-1/5 md:basis-1/4">
            <div className="flex items-center justify-center">
              <Image src={src} alt={`Logo do ${name}`} width={100} height={144} className="rounded-lg select-none" />
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
    </Carousel>
  );
}
