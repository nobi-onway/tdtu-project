import Image from "next/image";
import Link from "next/link";

const links = [
    {
        href: '/',
        title: 'Trang chủ',
    },
    {
        href: '/products',
        title: 'Kho hàng',
    },
    {
        href: '/',
        title: 'Đơn hàng',
    }
]

function Header() {
    return ( 
        <div className="flex items-center justify-between py-6 px-4 shadow-lg">
            <Link href="/" className="flex gap-2 items-center">
                <Image width={60} height={60} alt="tdtu-logo" src={'/images/TDTU.png'}/>
                <span className="font-semibold text-xl uppercase text-secondary_color">Đồ án tổng hợp</span>
            </Link>
            <ul className="flex items-center gap-8 font-semibold">
                {links.map((link, index) => 
                {
                    const { href, title } = link;
                    return (
                        <li className="text-secondary_color text-lg" key={index}>
                            <Link href={href}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div> 
    );
}

export default Header;