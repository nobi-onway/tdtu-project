'use client'
import { PropsWithChildren } from "react";
import Providers from "./Providers";

function ProviderLayout({children} : PropsWithChildren) {
    return <div>
        <Providers>{children}</Providers>
    </div>;
}

export default ProviderLayout;