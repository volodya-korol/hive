import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full flex self-center items-center justify-center">
      <Image
        width={100}
        height={100}
        src="/Cube@1x-1.0s-200px-200px copy.svg"
        alt="loading"
        className=""
      />
    </div>
  );
};

export default Loading;
