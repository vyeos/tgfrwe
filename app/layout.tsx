import type { Metadata } from "next";
import "@/styles/global.css";
import { Space_Mono, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rudra Patel",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${spaceMono.variable} antialiased font-mono`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
