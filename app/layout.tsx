import type { Metadata } from "next";
import Header from "./Components/Header";

import Provider from "./Provider";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Setupgram",
  description: "Share your setup with us developers!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
