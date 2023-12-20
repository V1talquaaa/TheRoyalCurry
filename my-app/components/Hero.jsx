import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="bg-hero-background bg-no-repeat bg-cover lg:bg-none lg:mt-[40px]">
        <div className="container text-textLight flex justify-between">
          <div className="max-w-[600px] mt-[126px]">
            <h2 className="font-lobster text-[48px] lg:text-[64px]">
              Awaken Your Taste Buds to Indian Culinary Magic
            </h2>
            <p className="fs-[14px] lg:fs-[20px] leading-[26px] pt-[24px]">
              Enjoy the unique flavors and aromas of Indian cuisine that you{" "}
              <br></br> will appreciate in every sip
            </p>

            <Link href="/menu" className="mt-[74px] flex justify-center lg:mt-0 lg:justify-start">
              <button className="text-white bg-orange-400 mb-[202px] px-[80px] py-[22px] rounded-[12px] mt-[40px] hover:scale-105 transition-all lg:mb-0">
                View Our Menu
              </button>
            </Link>
          </div>
          <Image
            src="/heroImg.png"
            width={432}
            height={504}
            alt="hero"
            priority={true}
            className="hidden lg:inline-block w-auto h-auto"
          />
        </div>
    </section>
  );
};
