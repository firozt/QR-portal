// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto_Flex, Roboto_Mono } from "next/font/google";

// Load fonts with next/font/google
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-roboto-flex",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Next.js App with Google Fonts",
  description: "Using Poppins, Roboto Flex, and Roboto Mono",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoFlex.variable} ${robotoMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
