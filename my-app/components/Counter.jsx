'use client'
import React from "react";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';


export const Counter = ({quantity, setQuantity}) => {


    const increment = () => {
      setQuantity(quantity + 1)
    }

    const decrement = () => {
        if(value <= 0) return
        setQuantity(quantity - 1)
    }
  return (
    <div className="flex justify-between items-center mt-[12px]">
      <div className="flex">
        <button onClick={decrement}><RemoveCircleRoundedIcon color="warning" className="mr-3"/></button>
        <p className="">{quantity}</p>
        <button onClick={increment}><AddCircleRoundedIcon color="warning" className="ml-3"/></button>
      </div>
    </div>
  );
};
