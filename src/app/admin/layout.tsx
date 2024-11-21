import Header from "@/components/Header";

const links = [
    {
        href: '/admin',
        title: 'Trang chủ',
    },
    {
        href: '/admin/products',
        title: 'Kho hàng',
    },
    {
        href: '/admin/orders',
        title: 'Đơn hàng',
    }
]

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <main>
        <Header links={links}/>
        {children}
    </main>;
}

export default AdminLayout;