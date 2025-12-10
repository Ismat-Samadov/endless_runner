import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Endless Runner - Play Now!",
  description: "An exciting endless runner game. Jump over obstacles and beat your high score!",
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
