import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "i-stew.com - PAWPARAZZI",
  description: "Early 2000s retro MySpace themed website featuring PAWPARAZZI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
