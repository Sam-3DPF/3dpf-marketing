import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3D Print Force — Business Software for 3D Print Sellers",
  description:
    "Track every order, cost, and profit across Etsy and Amazon — automatically. The business brain behind 6,200+ print farms.",
  openGraph: {
    title: "3D Print Force",
    description: "Stop running your print farm on spreadsheets.",
    url: "https://www.3dprintforce.com",
    siteName: "3D Print Force",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
