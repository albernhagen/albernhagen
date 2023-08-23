import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import "@fontsource/cormorant-garamond";
import "@fontsource/roboto-condensed";
import "@fontsource-variable/work-sans";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Andy Bernhagen</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
