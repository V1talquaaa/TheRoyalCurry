import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
<section className=" text-textLight">
<div className="container">
  
    <div className=" flex mt-[24px] justify-between p-[25px] border border-textLight rounded-2xl">
    <a href="">The Royal Curry</a>
      <ul className="flex">
        <li className="mr-5">
          <a href="">About</a>
        </li>
        <li className="mr-5">
          <a href="">Preferences</a>
        </li>
        <li className="mr-5">
          <a href="">Reviews</a>
        </li>
        <li className="mr-5">
          <a href="">Gallery</a>
        </li>
        <li className="">
          <a href="">Contacts</a>
        </li>
      </ul>
    </div>

    </div>
</section>
  );
};
