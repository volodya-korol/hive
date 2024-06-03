import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  item,
}: {
  item: {
    id: number;
    title: string;
    dimensions: string;
    price: number;
    src: string;
    type: string;
  };
}) => {
  return (
    <Link
      href={"/estate/" + item.id}
      className="break-inside-avoid mb-4 h-fit flex flex-col p-2 bg-white drop-shadow rounded-lg mx-auto hover:scale-[104%] active:scale-[90%] duration-300 hover:drop-shadow-lg cursor-pointer grow"
    >
      <Image
        src={item.src}
        layout="responsive"
        width={100}
        height={100}
        alt={item.title}
        loading="lazy"
        className="rounded-lg"
      />
      <div className="flex justify-between h-12">
        <div className="w-ful h-12 space-y-2 pt-2 flex flex-col">
          {/* <div className="w-3/5 h-12 space-y-2 pt-2 flex flex-col"> */}
          <Label className="cursor-pointer">{item.title}</Label>
          <Label className="text-zinc-400 cursor-pointer text-sm">
            ${item.type === "purchase" ? item.price : item.price + "/місяць"}
          </Label>
        </div>
        {/* <div className="w-2/5 flex items-end justify-end">
          ${item.price}/м<span className="text-[9px] mb-2">2</span>
        </div> */}
      </div>
    </Link>
  );
};

export default Card;
