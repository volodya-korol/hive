import Image from "next/image";
import Link from "next/link";

const CategoryItem = ({
  item,
}: {
  item: { src: string; title: string; description: string; href: string };
}) => {
  return (
    // rounded-lg h-full w-full relative p-6 bg-gradient-to-r from-gray-500 to-gray-400 cursor-pointer
    // bg-[url('/exterior.jpg')]
    //  <Image src={item.src} width={100} height={100} alt={item.title}/>
    <Link href={item.href}>
      <div
        className="rounded-lg h-full w-full relative  cursor-pointer border border-zinc-400"
        style={{ background: `url('${item.src}')`, backgroundSize: "cover" }}
      >
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-zinc-800 rounded-lg"></div>
        <div className="text-white absolute bottom-6 px-6">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          {/* <p className="text-sm">{item.description}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
