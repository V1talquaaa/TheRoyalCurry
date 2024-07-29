// "use client";
// import React, { useState } from "react";
// import { SwiperMenu } from "../subComponents/SwiperMenu";
// import { SwiperMobMenu } from "../subComponents/SwiperMobMenu";
// import Link from "next/link";
// import { useSelector } from "react-redux";
// import dishes from '../../data/dishes.json'

// const Menu = () => {
  
//   const addedToCartQty = useSelector((state) => state.card.length);

//   const [items, setItems] = useState(dishes);

//   const filteredDishes = (category) => {
//     const newItems = items.filter((newVal) => newVal.category === category)
//     console.log(newItems)
//     setItems(newItems);
//   }

//   return (
//     <div className="pt-[24px] pb-[60px] bg-gradient-to-b from-green to-textLight to-90% ...">
//       <div className="container relative">
//         <h2 className="mt-[80px] mb-[24px] font-lobster text-4xl text-textLight text-center lg:mt-0">
//           Menu
//         </h2>
//         <div className="hidden lg:flex">
//           <div className="mr-[80px] p-[24px] bg-textLight w-[302px]">
//             <ul className="mt-[24px] w-[250px] flex flex-col gap-y-6">
//             <li>
//                 <button type="button" onClick={() => filteredDishes(category)}>All menu</button>
//               </li>
//               <li>
//                 <button type="button" onClick={() => filteredDishes(category)}>Main course</button>
//               </li>
//               <li>
//                 <button type="button" onClick={() => filteredDishes(category)}>Vegan</button>
//               </li>
//               <li>
//                 <button type="button" onClick={() => filteredDishes(category)}>Beverages</button>
//               </li>
//               <li>
//                 <button type="button" onClick={() => filteredDishes(category)}>Desserts</button>
//               </li>
//             </ul>
//           </div>
//           <SwiperMenu dishes={items} />
//         </div>
//         <div className="mt-[80px]lg:hidden">
//           <SwiperMobMenu />
//         </div>
//         <Link href="/cart">
//           <img
//             src="/Cart.png"
//             width={32}
//             height={32}
//             alt="cart"
//             className="absolute top-0 right-3 md:right-[100px]"
//           />
//           {addedToCartQty > 0 && (
//             <span className="w-[20px] h-[20px] text-[15px] text-center text-white absolute right-[90px] top-0 rounded-full bg-red-600">
//               {addedToCartQty}
//             </span>
//           )}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Menu;


"use client";
import React, { useState } from "react";
import { SwiperMenu } from "../subComponents/SwiperMenu";
import { SwiperMobMenu } from "../subComponents/SwiperMobMenu";
import Link from "next/link";
import { useSelector } from "react-redux";
import dishes from '../../data/dishes.json';

const Menu = () => {
  const addedToCartQty = useSelector((state) => state.card.length);

  const [initialItems] = useState(dishes); // Початковий список страв
  const [items, setItems] = useState(dishes);

  const filteredDishes = (category) => {
    if (category === "All menu") {
      setItems(initialItems);
    } else {
      const newItems = initialItems.filter((newVal) => newVal.category === category);
      console.log(newItems);
      setItems(newItems);
    }
  };

  return (
    <div className="pt-[24px] pb-[60px] bg-gradient-to-b from-green to-textLight to-90% ...">
      <div className="container relative">
        <h2 className="mt-[80px] mb-[24px] font-lobster text-4xl text-textLight text-center lg:mt-0">
          Menu
        </h2>
        <div className="hidden lg:flex">
          <div className="mr-[80px] p-[24px] bg-textLight w-[302px]">
            <ul className="mt-[24px] w-[250px] flex flex-col gap-y-6">
              <li>
                <button type="button" onClick={() => filteredDishes("All menu")}>All menu</button>
              </li>
              <li>
                <button type="button" onClick={() => filteredDishes("dinner")}>Main course</button>
              </li>
              <li>
                <button type="button" onClick={() => filteredDishes("vegan")}>Vegan</button>
              </li>
              <li>
                <button type="button" onClick={() => filteredDishes("beverages")}>Beverages</button>
              </li>
              <li>
                <button type="button" onClick={() => filteredDishes("desserts")}>Desserts</button>
              </li>
            </ul>
          </div>
          <SwiperMenu dishes={items} />
        </div>
        <div className="mt-[80px] lg:hidden">
          <SwiperMobMenu />
        </div>
        <Link href="/cart">
          <img
            src="/Cart.png"
            width={32}
            height={32}
            alt="cart"
            className="absolute top-0 right-3 md:right-[100px]"
          />
          {addedToCartQty > 0 && (
            <span className="w-[20px] h-[20px] text-[15px] text-center text-white absolute right-[90px] top-0 rounded-full bg-red-600">
              {addedToCartQty}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Menu;