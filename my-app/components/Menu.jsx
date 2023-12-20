import React from "react";
import Link from "next/link";
import { Card } from "@/app/subComponents/Card";
import { SwiperMobLanding } from "@/app/subComponents/SwiperMobLanding";

export const Menu = () => {

    const dishes = [
        {
            id: '1',
            name: 'Chicken Dhansak',
            description: 'An Indian classic chicken dish, cooked in a medley of lentils and spices, served with Basmati rice',
            price: 14.5,
            image: '/dish.png'
        },
        {
            id: '2',
            name: 'Chicken Curry',
            description: 'Boneless chicken cooked in authentic curry sauce with onions, ginger, garlic, tomatoes and spices',
            price: 16,
            image: '/dish.png'
        },
        {
            id: '3',
            name: 'Chicken Saag',
            description: 'A popular North Indian dish with chicken simmered with spices in a nutritious sauce ',
            price: 18,
            image: '/dish.png'
        },
        {
            id: '4',
            name: 'Chicken Dhanya Wala',
            description: 'Chicken cooked in cilantro flavored mild curry sauce, served with Basmati rice ',
            price: 13,
            image: '/dish.png'
        },
        // {
        //     id: '5',
        //     name: 'Chicken Shahi Korma',
        //     description: 'Tender pieces of chicken simmered in mild spices, yogurt, nuts and aromatic cream sauce',
        //     price: 15,
        // },
        // {
        //     id: '6',
        //     name: 'Spicy Chicken',
        //     description: 'Boneless chicken cooked in spicy tomato onion sauce, served with Basmati rice',
        //     price: 20,
        // },
        // {
        //     id: '7',
        //     name: 'Chicken Dhansak',
        //     description: 'An Indian classic chicken dish, cooked in a medley of lentils and spices, served with Basmati rice',
        //     price: 16.5,
        // },
        // {
        //     id: '8',
        //     name: 'Chicken Curry',
        //     description: 'Boneless chicken cooked in authentic curry sauce with onions, ginger, garlic, tomatoes and spices',
        //     price: 15,
        // },
        // {
        //     id: '9',
        //     name: 'Chicken Saag',
        //     description: 'A popular North Indian dish with chicken simmered with spices in a nutritious sauce ',
        //     price: 11,
        // },
        // {
        //     id: '10',
        //     name: 'Chicken Dhanya Wala',
        //     description: 'Chicken cooked in cilantro flavored mild curry sauce, served with Basmati rice ',
        //     price: 18,
        // },
        // {
        //     id: '11',
        //     name: 'Chicken Shahi Korma',
        //     description: 'Tender pieces of chicken simmered in mild spices, yogurt, nuts and aromatic cream sauce',
        //     price: 17,
        // },
        // {
        //     id: '12',
        //     name: 'Spicy Chicken',
        //     description: 'Boneless chicken cooked in spicy tomato onion sauce, served with Basmati rice',
        //     price: 21,
        // },

    ]

  return (
    <section className="py-[60px] bg-textLight lg:py-[80px]">
      <div className="container">
        <h2 className="text-2xl text-center font-lobster lg:text-4xl lg:text-left">Menu</h2>
        <p className="text-center mt-[24px] lg:text-left ">Bestsellers</p>
        <ul className="hidden mt-[36px] lg:grid grid-cols-4 gap-x-[24px] text-green">
            {dishes.map(dish => <Card key={dish.id} image={dish.image} title={dish.name} description={dish.description} price={dish.price} />)}
        </ul>
        <div className="lg:hidden">
        <SwiperMobLanding data={dishes}/>
        </div>
        <Link href="/menu"><button className="mt-[32px] px-[104px] py-[20px] border border-green rounded-[12px] mx-auto flex hover:scale-105 transition-all">View More</button></Link>
      </div>
    </section>
  );
};
