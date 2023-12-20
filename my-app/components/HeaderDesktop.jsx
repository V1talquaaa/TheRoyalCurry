import React from 'react';
import Link from "next/link";

export const HeaderDesktop = () => {
  return (
    <div className="container">
    <div className="hidden lg:flex mt-[24px] justify-between p-[25px] border border-textLight rounded-2xl">
    <Link href="/">The Royal Curry</Link>
      <ul className="flex">
        <li className="mr-5">
          <Link href="/#about" className="hover:text-orange-400 transition-all">About</Link>
        </li>
        <li className="mr-5">
          <Link href="/#preferences" className="hover:text-orange-400 transition-all">Preferences</Link>
        </li>
        <li className="mr-5">
          <Link href="/#reviews" className="hover:text-orange-400 transition-all">Reviews</Link>
        </li>
        <li className="mr-5">
          <Link href="/#gallery" className="hover:text-orange-400 transition-all">Gallery</Link>
        </li>
        <li className="">
          <Link href="/#contacts" className="hover:text-orange-400 transition-all">Contacts</Link>
        </li>
      </ul>
    </div>
    </div>
  )
}
