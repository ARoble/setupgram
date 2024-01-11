"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import User from "./User";
import Skeleton from "react-loading-skeleton";
import { UserProps } from "@/app/Types/UserProps";
import { IoTrashOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { deleteSetup, likeSetup } from "@/app/Utilities/fetch";
export default function GalleryImage({
  setup,
}: {
  setup: {
    id: string;
    image: string;
    user: UserProps;
  };
}) {
  const [display, setDisplay] = useState("hidden");
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => {
      return deleteSetup(id);
    },
  });
  const likeMutation = useMutation({
    mutationFn: (id: string) => {
      return likeSetup(id);
    },
  });

  const handleOnDelete = (id: string) => {
    console.log("hi");

    deleteMutation.mutate(id);
  };

  const handleOnLike = (id: string) => {
    console.log("mutating");

    likeMutation.mutate(id);
  };
  return (
    <motion.div
      className="hover:cursor-pointer relative "
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.04, opacity: 0.6 }}
      onMouseEnter={(e) => {
        setDisplay("block");
      }}
      onMouseLeave={(e) => {
        setDisplay("hidden");
      }}
    >
      {loading && <Skeleton className="h-[250px]" />}
      <img
        className={`rounded-md ${loading ? "hidden" : "block"} min-w-[100%]`}
        src={setup.image}
        onLoad={() => {
          setLoading(false);
        }}
      />
      {session?.user?.id === setup.user.id && (
        <button
          className="absolute top-1 right-1 bg-white text-primary p-1 rounded-sm z-40"
          onClick={() => handleOnDelete(setup.id)}
        >
          <IoTrashOutline size={16} color="red" />
        </button>
      )}
      {session?.user?.id != setup.user.id && (
        <div
          className={`absolute inset-0 flex justify-center items-center ${display} z-40`}
          onClick={() => handleOnLike(setup.id)}
        >
          <IoMdHeart size={80} className="opacity-1 hover:text-red z-40" />
        </div>
      )}
      <User display={display} userInfo={setup.user} />
    </motion.div>
  );
}
