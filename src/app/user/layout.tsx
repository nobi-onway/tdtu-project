import CartHeader from "@/components/CartHeader";
import Header from "@/components/Header";
import Link from "next/link";

const links = [
    {
        title: <Link href='/user'>Trang chủ</Link>,
    },
    {
        title: <CartHeader/>,
    },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <Header links={links}/>
        {children}
    </main>
  );
}