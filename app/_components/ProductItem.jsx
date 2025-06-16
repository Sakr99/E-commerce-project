import React from "react";
import Image from "next/image";
import { List } from "lucide-react";
import Link from "next/link";
function ProductItem({ product }) {
  return (
    <Link
      href={`/product-details/${product?.documentId}`}
      className="p-1 border-primary rounded-lg hover:border hover:shadow-md hover:cursor-pointer"
    >
      <Image
        src={product?.image?.url}
        alt="banner-card"
        width={500}
        height={450}
        className="rounded-t-lg object-contain h-[150px] w-full shadow-4xl"
      />
      <div className="flex items-center justify-between p-3 rounded-b-lg bg-gray-50">
        <div className="">
          <h2 className="text-[18px] font-medium line-clamp-1">
            {product?.title}
          </h2>
          <h2 className="text-[10px] text-gray-400 flex  gap-1 items-center">
            <List className="w-4 h-4" /> {product?.category}
          </h2>
          <h2>{product?.price} $</h2>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
