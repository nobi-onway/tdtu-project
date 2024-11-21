import { UserRound, UserRoundCog } from "lucide-react";
import Link from "next/link";

function RoleSelection() {
    return <section className="flex items-center justify-center h-screen">
        <Link href='/admin' className="bg-primary_color p-6 text-white flex flex-col justify-center items-center hover:opacity-30">
            <UserRoundCog className="mb-6" size={40}/>
            <h1 className="uppercase text-xl font-bold">Continue As An</h1>
            <span className="uppercase text-xl font-bold">Admin</span>
        </Link>
        <Link href='/user' className="bg-secondary_color p-6 text-white flex flex-col justify-center items-center hover:opacity-30">
            <UserRound className="mb-6" size={40}/>
            <h1 className="uppercase text-xl font-bold">Continue As An</h1>
            <span className="uppercase text-xl font-bold">User</span>
        </Link>
    </section>;
}

export default RoleSelection;