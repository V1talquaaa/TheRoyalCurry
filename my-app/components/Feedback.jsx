'use client'

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



export const Feedback = () => {

  const feedbacks = [
    {
      id: 1,
      title: "The service",
      message:
        "The service at The Royal Curry was impeccable. The staff was attentive, knowledgeable, and eager to provide recommendations based on individual preferences. They ensured that every aspect of the dining experience was flawless, from prompt service to accommodating dietary restrictions",
      avatar: "/avatar.png",
    },
    {
      id: 1,
      title: "The service",
      message:
        "The service at The Royal Curry was impeccable. The staff was attentive, knowledgeable, and eager to provide recommendations based on individual preferences. They ensured that every aspect of the dining experience was flawless, from prompt service to accommodating dietary restrictions",
      avatar: "/avatar.png",
    },
    {
      id: 1,
      title: "The service",
      message:
        "The service at The Royal Curry was impeccable. The staff was attentive, knowledgeable, and eager to provide recommendations based on individual preferences. They ensured that every aspect of the dining experience was flawless, from prompt service to accommodating dietary restrictions",
      avatar: "/avatar.png",
    },
    {
      id: 1,
      title: "The service",
      message:
        "The service at The Royal Curry was impeccable. The staff was attentive, knowledgeable, and eager to provide recommendations based on individual preferences. They ensured that every aspect of the dining experience was flawless, from prompt service to accommodating dietary restrictions",
      avatar: "/avatar.png",
    },
    {
      id: 1,
      title: "The service",
      message:
        "The service at The Royal Curry was impeccable. The staff was attentive, knowledgeable, and eager to provide recommendations based on individual preferences. They ensured that every aspect of the dining experience was flawless, from prompt service to accommodating dietary restrictions",
      avatar: "/avatar.png",
    },
  ];

  return (
    <section className="bg-textLight">
      <div className="container">
        <h2 className="font-lobster text-4xl">Our Happy Customers</h2>
        <p className="my-[24px]">See what other people have to say about our dishes</p>
        <Swiper navigation={true} loop={true} modules={[Navigation]} coverflowEffect={true} slidesPerView={2} spaceBetween={20} effect='coverflow' className="mySwiper">
            {feedbacks.map((feedback, index) => <SwiperSlide key={index}>
                <div className="flex border border-green">
                <Image src={feedback.avatar} width={330} height={330} alt="avatar"/>
                <div className="ml-[12px]">
                <h3 className="text-orange-600 mb-[12px]">{feedback.title}</h3>
                <p>{feedback.message}</p>
            </div>
                </div>

                </SwiperSlide>)}
      </Swiper>
      </div>
    </section>
  );
};
