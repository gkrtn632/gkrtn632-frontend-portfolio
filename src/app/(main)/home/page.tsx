import React from "react";
import style from "./home.module.css";
import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import loadingImg from "../../../../public/image/loading.webp";

export default function Home() {

    return(
        <div className={style.main_container}>
            <section>
                <Banner/>
            </section>
            <section>
                <ProductList/>
            </section>
        </div>
    )
}