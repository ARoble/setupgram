"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import User from "./User";
import Skeleton from "react-loading-skeleton";
import { UserProps } from "@/app/Types/UserProps";
import { IoTrashOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { deleteSetup, likeSetup } from "@/app/Utilities/fetch";
import { useSetupStore } from "@/app/Hooks/setupHook";
import { SetupProps } from "@/app/Types/SetupProps";
import RemoveButton from "./RemoveButton";
import { useContext } from "react";
import { Context } from "@/app/Hooks/context";
export default function GalleryImage({ setup }: { setup: SetupProps }) {
  const { setModal } = useContext(Context);
  const [display, setDisplay] = useState("hidden");
  const [loading, setLoading] = useState(true);
  const { deleteSetupp, addLike, removeLike, setups } = useSetupStore(
    (state) => state
  );
  const { data: session, status } = useSession();

  const hasLiked = () => {
    if (!setup.likes) return 0;
    const liked = setup.likes.some((setup) => setup.userId == session?.user.id);
    return liked;
  };

  const handleOnDelete = (id: string) => {
    deleteSetup(id);
    deleteSetupp(id);
  };

  const handleOnLike = async (id: string) => {
    if (!session) return setModal(true);
    const like = await likeSetup(id);

    if (hasLiked()) {
      const userId = session?.user.id;
      removeLike(id, userId, setup.id);
    } else {
      addLike(like, setup.id);
    }
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
      <RemoveButton handleOnDelete={handleOnDelete} setup={setup} />

      {session?.user?.id != setup.user.id && (
        <div
          className={`absolute inset-0 flex justify-center items-center ${display} z-40`}
          onClick={() => handleOnLike(setup.id)}
        >
          <IoMdHeart
            size={80}
            className={`opacity-1  z-40 hover:text-red ${
              hasLiked() && "text-red "
            }`}
          />
        </div>
      )}
      <User display={display} userInfo={setup.user!} />
      <div className="absolute bottom-1 right-1 flex items-center">
        <IoMdHeart
          size={17}
          className={`opacity-1 z-40 mr-1 ${hasLiked() && "text-red"}`}
        />
        <p className="text-sm">{setup.likes.length}</p>
      </div>
    </motion.div>
  );
}
