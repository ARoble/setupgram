"use client";
import { ThemeProvider } from "next-themes";
export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className=" flex justify-center ">
        <div className="w-2/3">{children}</div>
      </div>
    </ThemeProvider>
  );
}
