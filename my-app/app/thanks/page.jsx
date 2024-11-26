import React from "react";
import IconConfirmed from "../subComponents/IconSubmited";

const Thanks = () => {
  return (
    <div className="container">
    
      <div className="m-20 h-[400px] text-center text-textLight text-5xl flex flex-col justify-center items-center">
      <IconConfirmed />
        <p className="mt-10">Order confirmed, thank you!</p>
      </div>
    </div>
  );
};

export default Thanks;
