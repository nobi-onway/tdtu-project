import type { Metadata } from "next";
import "./globals.css";
import { Itim } from 'next/font/google'
import ProviderLayout from "@/layout/ProviderLayout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer 
              position="bottom-right"
              autoClose={3000}
              theme="dark"
            />
            {children}
          </ProviderLayout>
      </body>
    </html>
  );
}
