import Header from "@/components/Header";

const links = [
    {
        href: '/user',
        title: 'Trang chủ',
    },
    {
        href: '/user/cart',
        title: 'Giỏ hàng',
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