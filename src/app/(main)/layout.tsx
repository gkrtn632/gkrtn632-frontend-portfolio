import { ReactNode } from "react";
import Header from "@/components/Header";
import style from "@/app/(main)/layout.module.css";
import ReactQueryProvider from "@/app/ReactQueryProvider";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>
            <ReactQueryProvider>
                <Header />
                    <main className={style.main}>
                        {children}
                    </main>
            </ReactQueryProvider>
        </div>
    )
}