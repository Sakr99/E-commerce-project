import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import Link from "next/link";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  console.log("cart : ", cartItems);

  return (
    <div
      className="h-[300px] w-[250px]
      bg-gray-100 z-10 rounded-md border shadow-sm
      absolute mx-10 right-10 top-12 p-5 overflow-auto"
    >
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cartItems?.map((item) => (
            <li key={item?.id} className="flex items-center gap-4">
              <img
                src={item?.product?.image?.url}
                alt={item?.product?.title}
                className="object-cover w-16 h-16 rounded"
              />

              <div>
                <h3 className="text-sm text-gray-900 line-clamp-1">
                  {item?.product?.title}
                </h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Category:</dt>
                    <dd className="inline">{item?.product?.category}</dd>
                  </div>

                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">${item?.product?.price}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 space-y-4 text-center">
        <Link
          href="/cart"
          className="block px-5 py-3 text-sm text-gray-100 transition bg-primary rounded hover:bg-primary-hover"
        >
          View my cart ({cartItems?.length})
        </Link>

        <Link
          href="/"
          className="inline-block text-sm text-sky-500 underline transition underline-offset-4 hover:text-sky-600"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;
