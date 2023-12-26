"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IBanner } from "@/types/home";
import { useQuery } from "@tanstack/react-query";
import { getBannerList } from "@/utils/api/homeAPI";
import NextImg from "@/components/common/NextImg";
import style from "./default.module.css";
import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner() {
    const { data } = useQuery<IBanner[]>({
        queryKey: ['banner'],
        queryFn: getBannerList,
        staleTime: Infinity
    })

    return (
        <div>
            {data && (
                <Swiper
                    className={style.banner}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    {data.map((banner) =>
                        <SwiperSlide key={banner.bannerId}>
                            <NextImg className={style.banner_item} src={banner.imageSrc} alt="banner" width={1280} height={480} priority={true} />
                        </SwiperSlide>
                    )}
                </Swiper>
            )}
        </div>
    )
}