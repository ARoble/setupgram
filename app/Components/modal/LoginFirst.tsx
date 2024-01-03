import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { Context } from "@/app/Hooks/context";
export default function LoginFirst() {
  const { setModal } = useContext(Context);
  return (
    <div className="bg-black   w-[400px] rounded-md">
      <div className="flex justify-between items-start p-5">
        <div className="">
          <h1 className="text-xl ">Ooops</h1>
          <p className="text-xs pt-0.5 text-gray">Please login first</p>
        </div>
        <button
          onClick={() => setModal(false)}
          className="border border-gray p-0.5 rounded-sm"
        >
          <IoClose size="22" />
        </button>
      </div>
      <div className="flex justify-center pt-5 pb-10">
        <button
          className="flex items-center px-3 py-2.5 bg-secondary text-primary rounded-full text-sm "
          onClick={() => signIn("google")}
        >
          <FcGoogle size={25} className="mr-3" /> Sign in with Google
        </button>
      </div>
    </div>
  );
}
