import type { Metadata } from "next";
import { Metrophobic  } from "next/font/google";

import "./globals.css";


export const metadata: Metadata = {
  title: "prime-hospital",
  description: "Created by PulsePoint",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
