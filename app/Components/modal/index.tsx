import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { Context } from "@/app/Hooks/context";
import { LuUploadCloud } from "react-icons/lu";
import ImageUploading from "react-images-uploading";
import { IoCloseSharp } from "react-icons/io5";
import { SlCursor } from "react-icons/sl";

export default function Login() {
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
    <div className="">
      <div className="fixed top-0 left-0 bg-primary w-full h-full opacity-80"></div>
      <div className="absolute top-0 left-0 w-full mt-10 flex justify-center">
        <div className="bg-black  p-5 w-[400px] rounded-md">
          <div className="flex justify-end ">
            <button onClick={() => setModal(false)}>
              <IoClose size="25" />
            </button>
          </div>
          <div className="pt-5 text-center pb-3">
            <h1 className="text-2xl underline">SetupGram</h1>
            <div className="py-3">
              Share your setup with us today for the rest of us setup addicts to
              see!😊
            </div>
          </div>
          {/* IMAGE UPLOADER */}
          <div className="App">
            <ImageUploading
              value={images}
              onChange={onChange}
              maxNumber={1}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="flex flex-col justify-center items-center">
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    className="bg-white text-primary p-2 flex items-center"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <SlCursor className="mr-1" size={16} /> Select Image
                  </button>

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
                      <div>
                        <button
                          className="bg-green text-white p-2 flex items-center mt-2"
                          onClick={uploadImage}
                        >
                          <LuUploadCloud className="mr-1" size={22} /> Upload
                          Image
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
          {/* IMAGE UPLOADER */}
        </div>
      </div>
    </div>
  );
}
