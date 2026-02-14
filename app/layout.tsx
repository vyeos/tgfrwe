import type { Metadata } from "next";
import "@/styles/global.css";
import Navbar from "@/components/Navbar";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
