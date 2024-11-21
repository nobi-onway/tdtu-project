import Header from "@/components/Header";
import Menu from "@/components/Menu";

const links = [
    {
        href: '/',
        title: 'Trang chủ',
    },
    {
        href: '/cart',
        title: 'Giỏ hàng',
    },
]

export default function Home() {
  return (
    <main>
      <section className="bg-bg_color p-8">
        <h1 className="text-center uppercase mb-12 font-bold text-4xl">Danh sách sản phẩm</h1>
        <Menu />
      </section>
    </main>
  );
}
