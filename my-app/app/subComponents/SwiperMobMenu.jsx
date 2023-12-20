'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination } from 'swiper/modules';
import dishes from '../../data/dishes.json'
import {Card} from './Card'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const SwiperMobMenu = () => {
  return (
<div className='lg:hidden'>
<Swiper slidesPerView={1} spaceBetween={24} pagination navigation={{clickable: true}} modules={[Navigation, Pagination]}>
    {dishes.map((dish) => {
      return (
        <SwiperSlide>
          <Card key={dish.id} image={dish.image? `${dish.image}` : '/menuImg1.png'} title={dish.name} description={dish.description} price={dish.price}/>
        </SwiperSlide>
      )
    })}
    </Swiper>
</div>
  )
}