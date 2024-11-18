import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Public_Sans } from 'next/font/google'
import ProviderLayout from "@/layout/ProviderLayout";

const primaryFont = Public_Sans({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "TDTU Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.className} antialiased`}
      >
          <ProviderLayout>
            <Header />
            {children}
          </ProviderLayout>
      </body>
    </html>
  );
}
