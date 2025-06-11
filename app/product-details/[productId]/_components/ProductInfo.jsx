"use client";
import React, { useContext } from "react";
import { ShoppingCart, BadgeCheck, AlertOctagon, List } from "lucide-react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../../_utils/CartApis";
import { CartContext } from "../../../_context/CartContext";
function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
//  const { cart, setCart } = useContext(CartContext);
  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.documentId],
        },
      };
      CartApis.addToCart(data)
        .then((res) => {
          console.log("cart created successfully",res.data.data);
          //setCart((oldCart) => [...oldCart,{id: res?.data?.data?.documentId,product,}, ]);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  return (
    <div>
      {product?.documentId ? (
        <div>
          <h2 className="text-[30px]">{product?.title}</h2>
          <h2 className="text-[15px] text-gray-400 flex  gap-1 items-center">
            <List className="w-4 h-4" />
            {product?.category}
          </h2>
          <h2 className="text-[18px] mt-2">
            {product?.description[0]?.children[0].text}
          </h2>
          <h2 className="text-[13px] text-gray-500 flex gap-2 mt-2 items-center">
            {product?.instantDelivery ? (
              <BadgeCheck className="w-5 h-5 text-green-500" />
            ) : (
              <AlertOctagon />
            )}{" "}
            Eligible For Instant Delivery
          </h2>
          <h2 className="text-[24px] text-primary mt-2">$ {product?.price}</h2>

          <button
            onClick={() => handleAddToCart()}
            className="flex gap-2 py-3 px-6 mt-5 text-[20px] items-center cursor-pointer text-white rounded-lg bg-primary hover:bg-primary-hover"
          >
            <ShoppingCart /> Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
}

export default ProductInfo;
