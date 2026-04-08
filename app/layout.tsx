import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Technical and Sales Engineer | Agro-Food Portfolio",
  description: "Portfolio showcasing technical sales expertise, agro-food projects, and client-focused engineering experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

