import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Carlos Castaño | Portafolio",
  description: "Ingeniero de Software con experiencia en desarrollo de aplicaciones con Spring Boot,React y Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} selection:bg-primary/20 selection:text-primary-foreground`}
    >
      <head />
      <body className="antialiased min-h-dvh bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}