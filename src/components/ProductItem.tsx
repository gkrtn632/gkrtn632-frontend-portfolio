import React from "react";
import { IProductItem } from "@/types/home";
import style from "./default.module.css";
import NextImg from "@/components/common/NextImg";

type ProductItemProps = {
    productItemData: IProductItem;
}

export default function ProductItem({ productItemData }: ProductItemProps) {
    return (
        <div className={style.product_item}>
            <div className={style.thumb_box}>
                <NextImg src={productItemData.imageSrc} alt="product" width={250} height={250} />
            </div>
            <p className={style.product_name}>{productItemData.productName}</p>
            <p className={style.product_price}>{`${productItemData.price.toLocaleString()}원`}</p>
        </div>
    )
}
