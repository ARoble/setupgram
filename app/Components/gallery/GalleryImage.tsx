"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import User from "./User";
import Skeleton from "react-loading-skeleton";
import { UserProps } from "@/app/Types/UserProps";
export default function GalleryImage({
  setup,
}: {
  setup: {
    image: string;
    user: UserProps;
  };
}) {
  const [display, setDisplay] = useState("hidden");
  const [loading, setLoading] = useState(true);

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

      <div
        className={`absolute inset-0 flex justify-center items-center ${display}`}
      >
        <IoMdHeart size={80} className="opacity-1 hover:text-red" />
      </div>
      <User display={display} userInfo={setup.user} />
    </motion.div>
  );
}
