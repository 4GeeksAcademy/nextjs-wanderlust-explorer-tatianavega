import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import AppShell from "@/components/AppShell";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Descubre experiencias locales en cada destino.",
};

export default function RootLayout() {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense
          fallback={
            <header
              aria-hidden="true"
              className="h-[104px] border-b border-foreground/15 bg-background sm:h-[73px]"
            />
          }
        >
          <Navbar />
        </Suspense>
        <Suspense
          fallback={
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 font-sans sm:px-6">
              <p>Cargando...</p>
            </main>
          }
        >
          <AppShell />
        </Suspense>
      </body>
    </html>
  );
}
