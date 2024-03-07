import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Monarch | Kingdom of Code Learners",
  description: "Code Monarch is a free and open-source platform for learning to code. We provide a variety of resources to help you learn to code, including tutorials, articles, and interactive coding challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="manifest" href="/manifest.json"/>

      <link rel="apple-touch-icon" href="/img/192x192.png"></link>
      <meta name="theme-color" content="#fff"/>
    </head>

    <body className={inter.className}>{children}</body>
    </html>
  );
}
