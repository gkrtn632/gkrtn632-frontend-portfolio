import React from "react";
import LogoImg from "../../public/image/logo.webp";
import style from "./default.module.css";
import NextImg from "@/components/common/NextImg";
import NextLink from "@/components/common/NextLink";

export default function Header() {
    return(
        <header className={style.header}>
            <div className={style.header_inner}>
                <h1>
                    <NextLink href="/home" style={ { width: 40, height: 40 } }>
                        <NextImg src={LogoImg} alt="logo" width={40} height={40} priority={true} />
                    </NextLink>
                </h1>
                <div className={style.right}>
                    <nav className={style.gnb}>
                        <ul className={style.gnb_list}>
                            <li className={style.gnb_item}>
                                <NextLink href="/home">
                                    HOME
                                </NextLink>
                            </li>
                            <li className={style.gnb_item}>
                                <NextLink href="#">
                                    MENU2
                                </NextLink>
                            </li>
                            <li className={style.gnb_item}>
                                <NextLink href="#">
                                    MENU3
                                </NextLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}