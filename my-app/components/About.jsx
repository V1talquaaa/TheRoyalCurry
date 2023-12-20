import Image from "next/image";
import Link from "next/link";
import React from "react";

export const About = () => {
  return (
    <>
        <section className="hidden lg:block mt-[80px]" id="about">
      <div className="container flex">
        <Image src='/aboutImg.png' alt="shef" width={587} height={587}/>
        <div className="py-[55px] ml-[55px] text-textLight">
          <h3 className="text-5xl mb-[32px]">The Royal Curry</h3>
          <p className="text-xl mb-[32px]">
            Our restaurant, "The Royal Curry” emerged from a deep love for
            Indian culture, traditions, and, of course, cuisine. The founders of
            the restaurant, Raj and Mira, were incredibly captivated by the
            richness of Indian gastronomy and wanted to share this incredible
            heritage with their guests.
          </p>
          <p className="text-xl mb-[32px]">
          They understood that Indian cuisine is
            not just about eating food; it is a true masterpiece where each dish
            has its own story and secret ingredients that make it special. So,
            they decided to create a restaurant where guests could immerse
            themselves in the captivating world of Indian culinary.
          </p>
          <Link href="/about">
          <button className="px-[99px] py-[22px] border rounded-[12px] hover:scale-105 transition-all">Learn More</button>
          </Link>
          
        </div>
      </div>
    </section>

    
    <section className="py-[60px] text-textLight lg:hidden">
    <div className="container">
      <h3 className="text-4xl font-lobster text-center mb-[24px]">About us</h3>
      <div className="text-sm flex items-center mb-[24px]">
        <img src="/mobileAbout2.png" alt=""  className="mr-[12px]"/>
        <p>Our restaurant, "The Royal Curry” emerged from a deep love for Indian culture, traditions, and, of course, cuisine.</p>
      </div>
      <div className="text-sm flex items-center mb-[32px]">
        <p className="mr-[12px]">They understood that Indian cuisine is not just about eating food; it is a true masterpiece where each dish has its own story and secret ingredients that make it special.</p>
        <img src="/mobileAbout1.png" alt="" />
      </div>
      <Link href="/about" className="border-b-2 pb-[8px]">Learn More</Link>
    </div>
    </section>
    </>

  );
};
