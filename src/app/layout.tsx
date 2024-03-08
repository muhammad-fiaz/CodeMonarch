import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import '@radix-ui/themes/styles.css';
import Head from "next/head";
import { cn } from "@/lib/utils"
import { Theme } from '@radix-ui/themes';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
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

    <body  className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
    )}
    >
    <Theme>

    {children}
    </Theme>
    </body>
    </html>
  );
}
