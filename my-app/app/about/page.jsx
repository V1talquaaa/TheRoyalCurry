import React from "react";

const about = () => {
  return (
<div className=" pb-[80px] bg-gradient-to-b from-green to-textLight to-90% ...">
<div className="container">
      <h2 className="hidden lg:block text-5xl my-[32px] text-center text-orange-400">The Royal Curry</h2>
      <h2 className="mt-[80px] text-center text-textLight text-2xl font-lobster lg:hidden">About us</h2>
      <div className="lg:flex items-center">
        <div className="fs-[20px] lg:mr-[132px] leading-[26px] pt-[24px] text-textLight">
          <p className="mb-[15px]">
            Our restaurant, "The Royal Curry” emerged from a deep love for
            Indian culture, traditions, and, of course, cuisine. The founders of
            the restaurant, Raj and Mira, were incredibly captivated by the
            richness of Indian gastronomy and wanted to share this incredible
            heritage with their guests.
          </p>
          <p>
            They understood that Indian cuisine is not just about eating food;
            it is a true masterpiece where each dish has its own story and
            secret ingredients that make it special. So, they decided to create
            a restaurant where guests could immerse themselves in the
            captivating world of Indian culinary.
          </p>
        </div>
        <img src="/aboutTop.png" alt="" />
      </div>
      <div className="mt-[20px] lg:mt-0 lg:flex items-center">
        <img src="/aboutBottom.png" alt="" />
        <div className="lg:ml-[132px] fs-[20px] leading-[26px] pt-[24px] text-green">
          <p>
            Our restaurant, "The Royal Curry” emerged from a deep love for
            Indian culture, traditions, and, of course, cuisine. The founders of
            the restaurant, Raj and Mira, were incredibly captivated by the
            richness of Indian gastronomy and wanted to share this incredible
            heritage with their guests.
          </p>
          <p>
            They understood that Indian cuisine is not just about eating food;
            it is a true masterpiece where each dish has its own story and
            secret ingredients that make it special. So, they decided to create
            a restaurant where guests could immerse themselves in the
            captivating world of Indian culinary.
          </p>
        </div>
      </div>
    </div>
</div>
  );
};

export default about;
