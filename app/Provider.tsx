"use client";
import { ThemeProvider } from "next-themes";
import { Context } from "./Hooks/context";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function Provider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState(false);
  return (
    <Context.Provider value={{ modal, setModal }}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <div className=" flex justify-center ">
              <div className="md:w-2/3">{children}</div>
            </div>
          </SessionProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Context.Provider>
  );
}
