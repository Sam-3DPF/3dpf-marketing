import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "3D PrintForce — Business Software for 3D Print Sellers",
  description:
    "Track every order, cost, and profit across Etsy — automatically. The business brain behind 6,200+ print farms.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "3D PrintForce",
    description: "Stop running your print farm on spreadsheets.",
    url: "https://www.3dprintforce.com",
    siteName: "3D PrintForce",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D PrintForce — Business Software for 3D Print Sellers",
    description:
      "Track every order, cost, and profit across Etsy — automatically.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "3D PrintForce",
  url: "https://www.3dprintforce.com",
  logo: "https://www.3dprintforce.com/logo.png",
  description:
    "Business software for 3D print sellers. Track orders, costs, and profit across Etsy automatically.",
  founder: {
    "@type": "Person",
    name: "Sam Erickson",
    url: "https://www.3dprintforce.com/sam",
  },
  sameAs: ["https://www.etsy.com"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
