import "./globals.css";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import React from "react";

export const metadata = {
  title: "Paving Website Demo",
  description: "A demo website for paving services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}