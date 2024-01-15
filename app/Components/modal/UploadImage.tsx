import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { Context } from "@/app/Hooks/context";
import ImageUploading from "react-images-uploading";
import { IoCloseSharp } from "react-icons/io5";
import { SlCursor } from "react-icons/sl";
import { uploadSetup } from "@/app/Utilities/fetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";
import { useSetupStore } from "@/app/Hooks/setupHook";

export default function UploadImage() {
  const { setModal } = useContext(Context);
  const { addSetup } = useSetupStore((state) => state);
  const [images, setImages] = useState<any[]>([]);
  const [isUploading, setUploading] = useState(false);
  const maxNumber = 69;
  const queryClient = useQueryClient();

  const onChange = (imageList: []) => {
    setImages(imageList);
  };

  const uploadImage = async () => {
    if (images.length === 0) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("image", images[0]?.file);
    const setup = await uploadSetup(formData);
    addSetup(setup);
    setUploading(false);
    setModal(false);
  };
  return (
    <div className=" bg-black w-[400px] rounded-md">
      <div className="flex justify-between items-start p-5">
        <div className="">
          <h1 className="text-xl ">Upload Setup</h1>
          <p className="text-xs pt-0.5 text-gray">Share your setup with us</p>
        </div>
        <button
          onClick={() => setModal(false)}
          className="border border-gray p-0.5 rounded-sm"
        >
          <IoClose size="22" />
        </button>
      </div>

      {/* IMAGE UPLOADER */}
      <div className="py-5">
        <ImageUploading
          value={images}
          onChange={onChange}
          maxNumber={1}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,

            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="flex flex-col justify-center items-center">
              {images.length === 0 && (
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  className="bg-white text-primary p-2 flex items-center"
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <SlCursor className="mr-1" size={16} /> Select Image
                </button>
              )}
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative  my-2"
                >
                  <img
                    src={image["data_url"]}
                    alt=""
                    width="100"
                    className=" min-w-[300px]"
                  />
                  <button
                    onClick={() => onImageRemove(index)}
                    className="absolute top-1 right-1 bg-white text-primary p-2"
                  >
                    <IoCloseSharp />
                  </button>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
      {/* IMAGE UPLOADER */}
      <div className="border-t border-gray p-5">
        <div className="flex space-x-2 justify-end">
          <button
            className="bg-white text-primary py-2 px-4 flex items-center rounded-md"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button
            className={`${
              isUploading ? "bg-gray" : "bg-green"
            } text-white py-2 px-4 flex items-center rounded-md `}
            onClick={uploadImage}
            disabled={isUploading ? true : false}
          >
            {isUploading ? (
              <TailSpin
                visible={true}
                height="20"
                width="20"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "Share"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
