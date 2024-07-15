"use client";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "@/redux/cart/cardSlice";

const Cart = () => {
  const cart = useSelector((state) => state.card);

  const dispatch = useDispatch();

  const onRemoveBtnClick = (id) => {
    dispatch(removeCard(id));
  };

  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);

  return (
    <section className="mt-[80px] py-[60px]">
      <div className="container">
        <div className="relative py-[67px] border rounded-[12px] bg-textLight text-center text-green">
          <Link href="/menu">
            <img
              src="/closeCartIcon.png"
              alt="x"
              className="absolute right-[8px] top-[8px]"
            />
          </Link>
          <h2 className="text-2xl pb-[12px] border-b-[1px] border-green">
            The Royal Curry
          </h2>
          <img
            src="/CartXL.png"
            width={60}
            height={60}
            aria-label="cart"
            className="mx-auto mt-[24px]"
          />
          {cart.length > 0 &&
            cart.map((cartItem) => {
              return (
                <div className="p-5 my-[20px] mx-[100px] grid grid-cols-4 border border-green rounded-lg relative">
                  <button
                    onClick={() => onRemoveBtnClick(cartItem.id)}
                    className="w-[20px] h-[20px] absolute right-2 top-2 bg-red-500 rounded-full"
                  >
                    <img
                      src="/closeCartIcon.png"
                      alt="x"
                      className="w-[10px] h-[10px] mx-auto"
                    />
                  </button>
                  <p className="">{cartItem.dish}</p>
                  <p className="">x {cartItem.quantity}</p>
                  <p className="">
                    price: {cartItem.price * cartItem.quantity} USD
                  </p>
                </div>
              );
            })}
          <h3 className="my-[50px] text-2xl text-green">Total order: {totalPrice} USD</h3>
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
