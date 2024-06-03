"use client";

import { UploadButton } from "@/utils/uploadthing";

const ImageLoader = ({ setData }: { setData: Function }) => {
  return (
    <div className="w-full">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          setData(res[0].url);
        }}
        onUploadError={(error: Error) => {}}
      />
    </div>
  );
};

export default ImageLoader;
