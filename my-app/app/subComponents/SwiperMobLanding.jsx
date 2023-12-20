'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Card } from './Card';
import 'swiper/css/pagination';


export const SwiperMobLanding = ({data}) => {
  return (
    <Swiper slidesPerView={1} spaceBetween={12} modules={[Pagination]} pagination>
        {data.map((dish) => <SwiperSlide key={dish.id}>
            <Card image={dish.image} title={dish.name} description={dish.description} price={dish.price}/>
        </SwiperSlide>)}
    </Swiper>
  )
}
