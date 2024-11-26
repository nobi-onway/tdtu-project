import Header from "@/components/Header";
import Link from "next/link";

const links = [
    {
        title: <Link href='/admin'>Trang chủ</Link>,
    },
    {
        title: <Link href='/admin/products'>Kho hàng</Link>,
    },
    {
        title: <Link href='/admin/orders-manager'>Đơn hàng</Link>,
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