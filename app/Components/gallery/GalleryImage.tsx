"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import User from "./User";

export default function GalleryImage({
  setup,
}: {
  setup: { image: string; user: {} };
}) {
  const [display, setDisplay] = useState("hidden");
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
      <img className="rounded-md" src={setup.image} />
      <div
        className={`absolute inset-0 flex justify-center items-center ${display}`}
      >
        <IoMdHeart size={80} className="opacity-1 hover:text-red" />
      </div>
      <User display={display} user={setup.user} />
    </motion.div>
  );
}
