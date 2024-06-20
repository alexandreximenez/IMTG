import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";

const font = Kumbh_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextUIProvider>
          <div className="z-0 relative">
            <Menu />
            {children}
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
