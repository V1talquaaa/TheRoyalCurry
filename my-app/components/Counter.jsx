'use client'
import React from "react";
import { useState } from "react";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

export const Counter = () => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => {
        if(value <= 0) return
        setValue(value - 1)
    }
  return (
    <div className="flex justify-between items-center mt-[12px]">
      <div className="flex grow ">
        <button onClick={decrement}><RemoveCircleRoundedIcon color="warning"/></button>
        <p className="mx-[15px]">{value}</p>
        <button onClick={increment} ><AddCircleRoundedIcon color="warning" /></button>
      </div>
      <button className="py-[9px] px-[23px] border rounded-[12px] bg-orange-400 text-white hover:scale-105 transition-all">Add to Order</button>
    </div>
  );
};
