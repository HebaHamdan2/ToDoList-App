import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";

export const metadata: Metadata = {
  title: "To Do List App",
  description: "to do list app using Nextjs",
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
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
