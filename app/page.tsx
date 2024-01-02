"use client";
import GalleryGrid from "./Components/gallery/GalleryGrid";
import Modal from "./Components/modal";
import { useContext } from "react";
import { Context } from "./Hooks/context";
export default function Home() {
  const { modal } = useContext(Context);
  return (
    <main className="relative">
      <GalleryGrid />
      {modal && <Modal />}
    </main>
  );
}
