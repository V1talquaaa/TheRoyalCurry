import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="mt-[40px]">
      <div className="container text-textLight flex justify-between">
        <div className="max-w-[600px] mt-[126px]">
          <h2 className="font-lobster text-[64px]">
            Awaken Your Taste Buds to Indian Culinary Magic
          </h2>
          <p className="fs-[20px] leading-[26px] pt-[24px]">
            Enjoy the unique flavors and aromas of Indian cuisine that you <br></br> will
            appreciate in every sip
          </p>
          <button className="text-white bg-orange-600 px-[80px] py-[22px] rounded-[12px] mt-[40px]">
            View Our Menu
          </button>
        </div>
        <Image src='/heroImg.png' width={432} height={504} alt="hero" priority={true} className="w-auto h-auto"/>
      </div>
    </section>
  );
};
