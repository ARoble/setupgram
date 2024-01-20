import UploadImage from "./UploadImage";
import LoginFirst from "./LoginFirst";
import { useSession } from "next-auth/react";
export default function Modal() {
  const { data: session } = useSession();
  return (
    <div className="">
      <div className="fixed top-0 left-0 bg-primary w-full h-full opacity-80"></div>
      <div className="fixed top-40 left-0 w-full flex justify-center z-[99]">
        {session ? <UploadImage /> : <LoginFirst />}
      </div>
    </div>
  );
}
