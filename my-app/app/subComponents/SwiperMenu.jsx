'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import dishes from '../../data/dishes.json'
import {Card} from './Card'

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const SwiperManu = () => {
  return (
<Swiper slidesPerView={3} spaceBetween={24} grid={{fill: "row", rows: 2 }} pagination navigation={{clickable: true}} modules={[Grid, Navigation, Pagination]}>
    {dishes.map((dish) => {
      return (
        <SwiperSlide>
          <Card key={dish.id} image={dish.image? `${dish.image}` : '/menuImg1.png'} title={dish.name} description={dish.description} price={dish.price}/>
        </SwiperSlide>
      )
    })}
    </Swiper>
  )
}
