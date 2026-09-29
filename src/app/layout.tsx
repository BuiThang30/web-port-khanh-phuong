import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/nav";

export const metadata: Metadata = {
  title: "Phuong Nguyen — Welcome to my tapestry",
  description: "Portfolio của Phuong Nguyen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}