import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { Context } from "@/app/Hooks/context";
import ImageUploading from "react-images-uploading";
import { IoCloseSharp } from "react-icons/io5";
import { SlCursor } from "react-icons/sl";

export default function UploadImage() {
  const { setModal } = useContext(Context);
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList: [], addUpdateIndex: []) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const uploadImage = () => {
    console.log(images);
  };
  return (
    <div className="bg-black   w-[400px] rounded-md">
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
            className="bg-green text-white py-2 px-4 flex items-center rounded-md "
            onClick={uploadImage}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}