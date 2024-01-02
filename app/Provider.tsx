"use client";
import { ThemeProvider } from "next-themes";
import { Context } from "./Hooks/context";
import { useState } from "react";
export default function Provider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState(false);
  return (
    <Context.Provider value={{ modal, setModal }}>
      <ThemeProvider>
        <div className=" flex justify-center ">
          <div className="md:w-2/3">{children}</div>
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}
