import React from 'react';
import { Counter } from '@/components/Counter';

export const Card = ({id, image, title, description, price}) => {
  return (
    <li key={id} className="p-[19px] border h-[100%] flex flex-col justify-between bg-textLight border-green text-center">
                <img src={image} className="mx-auto" alt="dish"/>
                <h3 className='text-xl'>{title}</h3>
                <p className=''>{description}</p>
                <span className='text-xl'>{`$${price}`}</span>
                <Counter />
    </li>
  )
}
