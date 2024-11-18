import Link from "next/link";

function Welcome() {
    return ( 
        <div className="flex items-end justify-evenly w-full">
            <div className="flex flex-col gap-8">
                <h1 className="uppercase font-bold text-4xl text-primary_color">Phần mềm quản lý robot bán hàng tự động</h1>
                <div className="flex flex-col text-lg gap-2 font-light">
                    <span className="font-bold">Giáo viên hướng dẫn: </span>
                    <span>ThS. Nguyễn Quang Dũng</span>
                    <span className="my-1"></span>
                    <span className="font-bold">Sinh viên thực hiện: </span>
                    <span>Phạm Minh Hiếu - 42000370</span>
                    <span>Đinh Quang Minh - 42000420</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Link href={'/products'} className="rounded py-2 px-4  bg-primary_color text-xl text-white">Xem kho hàng</Link>
                <Link href={'/products/create'} className="rounded py-2 px-4 bg-secondary_color text-xl text-white">Đăng sản phẩm</Link>
            </div>
        </div>
    );
}

export default Welcome;