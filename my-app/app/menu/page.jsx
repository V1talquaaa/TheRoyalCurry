import React from "react";
import { SwiperManu } from "../subComponents/SwiperMenu";
import { SwiperMobMenu } from "../subComponents/SwiperMobMenu";
import Image from "next/image";
import Link from "next/link";

const menu = () => {

return (
<div className="pt-[24px] pb-[60px] bg-gradient-to-b from-green to-textLight to-90% ...">
<div className="container relative">
  <h2 className="mt-[80px] mb-[24px] font-lobster text-4xl text-textLight text-center lg:mt-0">Menu</h2>
<div className="hidden lg:flex">
<div className="mr-[80px] p-[24px] bg-textLight w-[302px]">
        <label>
          Search
          <input type="text" name="name" className="mt-[24px]"/>
        </label>
        <ul className="mt-[24px] flex flex-col gap-y-6">
          <li ><a href="">Vegetarian Appetizers</a></li>
          <li><a href="">Non Vegetarian Appetizers</a></li>
          <li><a href="">Soup</a></li>
          <li><a href="">Non Clay Oven Special</a></li>
          <li><a href="">Lamb Or Goay</a></li>
          <li><a href="">Poultry</a></li>
          <li><a href="">Seafood</a></li>
          <li><a href="">Biryani Rice Entrees</a></li>
          <li><a href="">Accompaniments</a></li>
          <li><a href="">Breads</a></li>
          <li><a href="">Desserts</a></li>
          <li><a href="">Beverages</a></li>
        </ul>
      </div>
        <SwiperManu />
      </div>
      <div className="mt-[80px]lg:hidden">
        <SwiperMobMenu />
      </div>
      <Link href="/cart"><Image src="/cart.png" width={32} height={32} className="absolute top-0 right-3 md:right-[100px]"/></Link>
    </div>
</div>
  );
};

export default menu;
