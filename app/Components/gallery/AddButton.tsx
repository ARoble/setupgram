import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { Context } from "@/app/Hooks/context";

export default function AddButton() {
  const { setModal } = useContext(Context);
  return (
    <div className="fixed bottom-0 mx-2 my-4 drop-shadow-md ">
      <button
        className=" bg-secondary  w-16 h-16 rounded-full shadow-md flex justify-center items-center"
        onClick={() => setModal(true)}
      >
        <IoMdAdd className="text-primary" size={25} />
      </button>
    </div>
  );
}
