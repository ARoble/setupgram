"use client";

import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";
import { useEffect } from "react";
import Image from "next/image";
export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center py-8">
      <h1 className="text-2xl">SetupGram</h1>
      <div className="space-x-3">
        {session ? (
          <div className="flex items-center space-x-2">
            <Image
              src={session?.user?.image as string}
              alt="profile image"
              className="h-9 rounded-full"
              height={36}
              width={36}
            />
            <div className="hover:cursor-pointer" onClick={() => signOut()}>
              <IoLogOutOutline size={25} />
            </div>
          </div>
        ) : (
          <button
            className="flex items-center px-3 py-2.5 bg-secondary text-primary rounded-full text-sm "
            onClick={() => signIn("google")}
          >
            <FcGoogle size={25} className="mr-3" /> Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}
