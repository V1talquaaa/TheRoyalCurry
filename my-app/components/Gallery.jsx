'use client'
import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/app/subComponents/Modal";
import Link from "next/link";


export const Gallery = () => {

  return (
    <section className="hidden lg:block pt-[80px] pb-[102px] bg-textLight" id="gallery">
      <div className="container ">
      <h2 className="mb-[48px] font-lobster text-4xl">Gallery</h2>
      <div className="grid grid-cols-3">
        <div className="">
            <Image src='/dish8.png' alt="dish" width="411" height="435" className="hover:scale-110 transition-all" />
        </div>
        <div className="grid gap-[24px]">
          <div className="flex gap-[24px]">
          <Image src='/dish7.png' alt="dish" width="193" height="266" className="hover:scale-110 transition-all"/>
          <Image src='/dish6.png' alt="dish" width="194" height="266" className="hover:scale-110 transition-all"/>
          </div>
          <div>
          <Image src='/dish5.png' alt="dish" width="411" height="145" className="hover:scale-110 transition-all"/>
          </div>
        </div>
          <div className="flex gap-[24px]">
          <div>
          <Image src='/dish4.png' alt="dish" width="193" height="159" className="mb-[24px] hover:scale-110 transition-all"/>
          <Image src='/dish3.png' alt="dish" width="193" height="159" className="hover:scale-110 transition-all"/>
          </div>
          <div>
          <Image src='/dish2.png' alt="dish" width="193" height="252" className="mb-[24px] hover:scale-110 transition-all"/>
          <Image src='/dish1.png' alt="dish" width="193" height="252" className="hover:scale-110 transition-all"/>
          </div>
          </div>
      </div>
      <Link href="/menu"><button className="mt-[32px] px-[83px] py-[22px] border border-green rounded-[12px] mx-auto flex hover:scale-105 transition-all" >Make Order</button></Link>
      </div>
    </section>
  );
};
