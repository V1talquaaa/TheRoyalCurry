import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <section className="mt-[80px] py-[60px]">
      <div className="container">
        <div className="relative py-[67px] border rounded-[12px] bg-textLight text-center text-green">
            <Link href="/menu"><img src="/closeCartIcon.png" alt="x" className="absolute right-[8px] top-[8px]"/></Link>
          <h2 className="text-2xl pb-[12px] border-b-[1px] border-green">
            The Royal Curry
          </h2>
          <img
            src="/cartXL.png"
            width={60}
            height={60}
            aria-label="cart"
            className="mx-auto mt-[24px]"
          />
          <p className="my-[40px]">YOUR CART IS EMPTY</p>
          <button
            type="submit"
            className="px-[75px] py-[15px] bg-orange-400 text-textLight rounded-[12px]"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
