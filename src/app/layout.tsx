import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "3D PrintForce — Business Software for 3D Print Sellers",
  description:
    "Track every order, cost, and profit across Etsy and Amazon — automatically. The business brain behind 6,200+ print farms.",
  openGraph: {
    title: "3D PrintForce",
    description: "Stop running your print farm on spreadsheets.",
    url: "https://www.3dprintforce.com",
    siteName: "3D PrintForce",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
