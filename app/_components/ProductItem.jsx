import { AlignLeft } from "lucide-react";
import Image from 'next/image';
import React from 'react'

const ProductItem = ({ item }) => {
  return (
    <div className="bg-gray-50 rounded-lg hover:border border-primary hover:shadow-md hover:cursor-pointer">
      <Image
        className="rounded-t-lg object-contain h-[150px] w-full shadow-4xl"
        src={item.image || "/fallback.jpg"}
        alt={item.title || "product image"}
        width={400}
        height={350}
      />
      <div className="flex justify-between p-2">
        <div>
          <h2 className="text-lg line-clamp-1">{item.title || "No title"}</h2>
          <h2 className="text-sm items-center text-gray-400 flex gap-1">
            <AlignLeft />
            {item.category || "No category"}
          </h2>
        </div>
        <h3>{item.price ? `${item.price}$` : "No price"}</h3>
      </div>
    </div>
  );
};

export default ProductItem;