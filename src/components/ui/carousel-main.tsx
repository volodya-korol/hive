import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const artworks = [
  {
    title: "Picture's title 1",
    width: 40,
    height: 80,
    price: 50,
    src: "https://images.joseartgallery.com/127332/conversions/marine-art-painting-sailing-in-the-wind-thumb580.jpg",
  },
  {
    title: "Picture's title 2",
    width: 40,
    height: 80,
    price: 50,
    src: "https://images.joseartgallery.com/98766/conversions/portrait-photography-thumb.jpg",
  },
  {
    title: "Picture's title 3",
    width: 40,
    height: 80,
    price: 50,
    src: "https://images.joseartgallery.com/92846/conversions/landscape-painting-thumb.jpg",
  },
  {
    title: "Picture's title 4",
    width: 40,
    height: 80,
    price: 50,
    src: "https://images.joseartgallery.com/97765/conversions/marine-art-painting-thumb.jpg",
  },
  {
    title: "Picture's title 5",
    width: 40,
    height: 80,
    price: 50,
    src: "https://images.joseartgallery.com/126606/conversions/landscape-painting-amanecer-entre-nieblas-i-thumb580.jpg",
  },
  {
    title: "Picture's title 6",
    width: 40,
    height: 80,
    price: 50,
    src: "https://images.joseartgallery.com/126626/conversions/landscape-painting-fairytale-forest-thumb580.jpg",
  },
  {
    title: "Picture's title 7",
    width: 40,
    height: 80,
    price: 50,
    src: "https://images.joseartgallery.com/125981/conversions/cityscapes-painting-tuci-nad-dneprom-poplavok-thumb580.jpg",
  },
  {
    title: "Picture's title 8",
    width: 40,
    height: 80,
    price: 50,
    src: "https://images.joseartgallery.com/116645/conversions/landscape-painting-waves-of-calm-a-beach-tale-thumb.jpg",
  },
  {
    title: "Picture's title 9",
    width: 40,
    height: 80,
    price: 50,
    src: "https://images.joseartgallery.com/124227/conversions/marine-art-painting-to-the-sun-thumb.jpg",
  },
];

const CarouselMain = () => {
  return (
    <Carousel className="max-w-full h-96 my-8">
      <CarouselContent className="space-x-2 md:space-x-4 px-10 py-2">
        {artworks.map((artwork) => (
          <CarouselItem
            key={artwork.title}
            className="md:basis-1/2 lg:basis-1/3 overflow-visible"
          >
            <motion.div
              className="h-96 bg-white border border-zinc-300 rounded-lg p-2 text-black cursor-pointer drop-shadow"
              transition={{ duration: 0.15 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* pictute down below */}
              <div
                className="flex items-center justify-center bg-zinc-600 w-full rounded-lg h-72 bg-contain"
                style={{ background: `url('${artwork.src}')` }}
              ></div>

              <div className="w-full h-20 px-2 pb-2 flex justify-between items-center">
                <div className="">
                  <h3 className="text-xl font-semibold">{artwork.title}</h3>
                  <p className="text-sm">
                    {artwork.width}cm x {artwork.height}cm
                  </p>
                </div>
                <p className="text-3xl font-semibold">${artwork.price}</p>
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="invisible md:visible" />
      <CarouselNext className="invisible md:visible" />
    </Carousel>
  );
};

export default CarouselMain;
