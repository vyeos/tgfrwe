import type { Metadata } from "next";
import Footer from "@/components/FooterSection";
import "@/styles/global.css";
import Navbar from "@/components/Navbar";
import { personalInfo } from "@/data/portfolio";

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
        <Footer personalInfo={personalInfo} variant="minimal" />
      </body>
    </html>
  );
}
