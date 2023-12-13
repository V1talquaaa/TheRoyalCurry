import Image from "next/image";
import React from "react";
import { Counter } from "./Counter";

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
    <section className="bg-textLight py-[80px]">
      <div className="container">
        <h2 className="font-lobster text-4xl">Menu</h2>
        <p className="mt-[24px] ">Bestsellers</p>
        <ul className=" mt-[36px] grid grid-cols-4 gap-x-[24px] text-green">
            {dishes.map(dish => <li key={dish.id} className="p-[19px] border border-green text-center">
                <Image src={dish.image} width={264} height={264} className="mx-auto" alt="dish"/>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <span>{`$${dish.price}`}</span>
                <Counter />
            </li>)}
        </ul>
        <button className="mt-[32px] px-[104px] py-[20px] border border-green rounded-[12px] mx-auto flex">View More</button>
      </div>
    </section>
  );
};
