import type { Metadata } from "next";
import Footer from "@/components/FooterSection";
import "./globals.css";
import Masthead from "@/components/Masthead";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Vyeos – Portfolio",
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
        <Masthead />
        {children}
        <Footer personalInfo={personalInfo} variant="minimal" />
      </body>
    </html>
  );
}
