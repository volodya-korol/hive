import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";

const artworks = [
  { src: "/218052644.jpg", width: 500, height: 300, alt: "image1" },
  { src: "/218052644.jpg", width: 500, height: 300, alt: "image2" },
  { src: "/218052644.jpg", width: 250, height: 300, alt: "image3" },
  { src: "/218052644.jpg", width: 500, height: 300, alt: "image4" },
  { src: "/218052644.jpg", width: 400, height: 300, alt: "image5" },
];

const CarouselAbout = () => {
  return (
    <Carousel
      className="w-full h-[300px]"
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
    >
      <CarouselContent className="space-x-4 px-10">
        {artworks.map((photo) => (
          <CarouselItem key={photo.src} className="basis-auto overflow-visible">
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              className="rounded-lg drop-shadow h-[300px] duration-200 active:scale-[95%]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselAbout;
