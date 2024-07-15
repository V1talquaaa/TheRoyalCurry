"use client";
import React from "react";
import { SwiperMenu } from "../subComponents/SwiperMenu";
import { SwiperMobMenu } from "../subComponents/SwiperMobMenu";
import Link from "next/link";
import { useSelector } from "react-redux";

const Menu = () => {
  
  const addedToCartQty = useSelector((state) => state.card.length);

  return (
    <div className="pt-[24px] pb-[60px] bg-gradient-to-b from-green to-textLight to-90% ...">
      <div className="container relative">
        <h2 className="mt-[80px] mb-[24px] font-lobster text-4xl text-textLight text-center lg:mt-0">
          Menu
        </h2>
        <div className="hidden lg:flex">
          <div className="mr-[80px] p-[24px] bg-textLight w-[302px]">
            <label>
              Search
              <input type="text" name="name" id="name" className="mt-[24px]" />
            </label>
            <ul className="mt-[24px] flex flex-col gap-y-6">
              <li>
                <a href="">Vegetarian Appetizers</a>
              </li>
              <li>
                <a href="">Non Vegetarian Appetizers</a>
              </li>
              <li>
                <a href="">Soup</a>
              </li>
              <li>
                <a href="">Non Clay Oven Special</a>
              </li>
              <li>
                <a href="">Lamb Or Goay</a>
              </li>
              <li>
                <a href="">Poultry</a>
              </li>
              <li>
                <a href="">Seafood</a>
              </li>
              <li>
                <a href="">Biryani Rice Entrees</a>
              </li>
              <li>
                <a href="">Accompaniments</a>
              </li>
              <li>
                <a href="">Breads</a>
              </li>
              <li>
                <a href="">Desserts</a>
              </li>
              <li>
                <a href="">Beverages</a>
              </li>
            </ul>
          </div>
          <SwiperMenu />
        </div>
        <div className="mt-[80px]lg:hidden">
          <SwiperMobMenu />
        </div>
        <Link href="/cart">
          <img
            src="/Cart.png"
            width={32}
            height={32}
            alt="cart"
            className="absolute top-0 right-3 md:right-[100px]"
          />
          {addedToCartQty > 0 && (
            <span className="w-[20px] h-[20px] text-[15px] text-center text-white absolute right-[90px] top-0 rounded-full bg-red-600">
              {addedToCartQty}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Menu;
