import type { Metadata } from "next";
import "./globals.css";
import { Itim } from 'next/font/google'
import ProviderLayout from "@/layout/ProviderLayout";

const primaryFont = Itim({ weight: '400', subsets: ['latin'] })

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
            {children}
          </ProviderLayout>
      </body>
    </html>
  );
}
