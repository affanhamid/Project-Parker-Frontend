import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const font = Archivo({
  variable: "--font-archivo-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Parker",
  description: "AI Assistant to help with your lectures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-black antialiased text-white`}>
        {children}
      </body>
    </html>
  );
}
