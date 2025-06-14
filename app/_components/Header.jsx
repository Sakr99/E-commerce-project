"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Cart from "./Cart"
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [openCart, setOpenCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { user } = useUser();

  useEffect(() => {
    setIsLoggedIn(window?.location?.href.toString().includes("sign-in"));
  }, []);

  useEffect(() => {
    user && getCartItems();
  }, [user]);

  const getCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        const items = res?.data?.data.map((cartItem) => ({
          id: cartItem.id,
          product: cartItem?.attributes?.products?.data?.[0],
        }));
        setCartItems(items);
      }
    );
  };
  

  return (
    !isLoggedIn && (
      <header className="bg-white relative">
        <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto shadow-md sm:px-6 lg:px-8">
          <Image src="/logo.svg" alt="logo" width={200} height={200} />

          <div className="flex items-center justify-end flex-1 md:justify-between">
            <nav aria-label="Global" className="hidden md:block text-black">
              <ul className="flex items-center gap-6 text-gray-500 text-sm">
                <li>
                  <a className="hover:text-gray-500/75" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500/75" href="/">
                    Explore
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500/75" href="/">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500/75" href="/">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500/75" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
                    href="/sign-in"
                  >
                    Login
                  </a>
                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary-hover/75 sm:block"
                    href="/"
                  >
                    Register
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  <h2 className="flex gap-1 cursor-pointer">
                    <ShoppingCart onClick={() => setOpenCart(!openCart)} />(
                    {cartItems?.length})
                  </h2>
                  <UserButton afterSignOutUrl="/" />

                  {openCart && <Cart />}
                </div>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className=" md:hidden absolute top-16 left-0 w-full bg-white items-center shadow-md z-50">
            <ul className="flex flex-col gap-4 p-4 text-gray-700 text-sm">
              <li>
                <a href="/" className="block hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-primary">
                  Explore
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    )
  );
}

export default Header;
