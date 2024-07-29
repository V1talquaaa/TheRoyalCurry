'use client'
import React, { useState } from 'react';
import { Counter } from '@/components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '@/redux/cart/cardSlice';
import { nanoid } from 'nanoid';

export const Card = ({id, image, title, description, price}) => {

  const [quantity, setQuantity] = useState(0);

  const cart = useSelector((state) => state.card)

  const dispatch = useDispatch();

  const onAddButtonClick = (dish, quantity, price) => {
    if(quantity > 0) {
      dispatch(addCard({dish, quantity, price, id}));
    }

  }

  return (

<div key={id} className="p-[19px] bg-textLight border-green text-center flex flex-col h-[460px] justify-between">
                <img src={image} className="mx-auto" alt="dish"/>
                <h3 className='text-xl mt-[12px]'>{title}</h3>
                <p className='my-[8px]'>{description}</p>
                <span className='text-xl'>{`$${price}`}</span>
                <div className='mt-5 flex items-center justify-between'>
                <Counter quantity={quantity} setQuantity={setQuantity} />
                <button onClick={() => onAddButtonClick(title, quantity, price, id=nanoid())} className="py-[9px] px-[23px] border rounded-[12px] bg-orange-400 text-white hover:scale-105 transition-all">Add to Order</button>
                </div>
    </div>
  )
}
