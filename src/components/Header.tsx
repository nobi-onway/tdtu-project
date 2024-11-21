import Image from "next/image";
import Link from "next/link";

type LinkType = {
    title: React.ReactNode,
}

function Header({links} : {links: LinkType[]}) {
    return ( 
        <div className="flex items-center justify-between py-6 px-4 shadow-lg">
            <Link href="/" className="flex gap-2 items-center">
                <Image width={60} height={60} alt="tdtu-logo" src={'/images/TDTU.png'}/>
                <span className="font-semibold text-2xl uppercase text-secondary_color">Đồ án tổng hợp</span>
            </Link>
            <ul className="flex items-center gap-8 font-semibold">
                {links.map((link, index) => 
                {
                    const { title } = link;
                    return (
                        <li className="text-secondary_color text-xl" key={index}>
                            {title}
                        </li>
                    )
                })}
            </ul>
        </div> 
    );
}

export default Header;