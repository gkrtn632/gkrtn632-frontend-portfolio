"use client"

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductList } from "@/utils/api/homeAPI";
import { IProductItem } from "@/types/home";
import ProductItem from "@/components/ProductItem";
import useObserver from "@/hooks/useObserver";
import style from "./default.module.css";

export default function ProductList() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
    } = useInfiniteQuery({
        queryKey: ['product'],
        queryFn: getProductList,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            const lastPageData = lastPage.at(-1);
            return !lastPageData?.isLastPage ? lastPageData?.productId : undefined;
        },
    })
    const ref = useObserver({ fetchNextPage, hasNextPage, isFetching, delay: 0.1 });

    return (
        <div className={style.product}>
            {data?.pages.map((page) => (
                page.map((productItem: IProductItem) => <ProductItem key={productItem.productId} productItemData={productItem} />)
            ))}
            <div ref={ref} style={{height: 50}}/>
        </div>
    )
}