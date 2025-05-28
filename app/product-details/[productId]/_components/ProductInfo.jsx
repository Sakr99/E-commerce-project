import React from "react";
import { AlignLeft, ShoppingCart, Star } from "lucide-react";

const ProductInfo = ({ prodctInfo }) => {
  return (
    <div>
      <h2 className="text-[40px] mb-2">{prodctInfo?.title}</h2>
      <h2 className="text-[15px] items-center text-gray-500 flex gap-1">
        <AlignLeft />
        {prodctInfo?.category}
      </h2>
      <h2 className=" text-[15px] mt-5">{prodctInfo?.description}</h2>
      <h2 className=" text-primary text-[32px] mt-3">
        {prodctInfo?.price} <span className="text-[25px]">$</span>
      </h2>
      <div className="flex justify-between gap-5 md:gap-18 ">
        <button className="bg-primary hover:bg-primary-hover md:text-[25px] text-[16px] text-white hover:text-black cursor-pointer rounded-full w-1/2 justify-center items-center px-2 py-2  md:px-8 md:py-4  flex gap-2 mt-5 ">
          Add To Cart <ShoppingCart />
        </button>
        <button className="bg-amber-500 hover:bg-amber-200 md:text-[25px] text-[16px] text-white hover:text-black cursor-pointer rounded-full w-1/2 justify-center items-center px-2 py-2  md:px-8 md:py-4 line-clamp-1  flex gap-2 mt-5 ">
          Add To Favourites <Star />
        </button>
      </div>
    </div>
  ); };

export default ProductInfo;
