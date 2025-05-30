"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
const Header = () => {
  const [isLoggedIn , setIsLoggedIn]= useState(false)
  const { user } = useUser();
  const { cartItems } = useCart();
    useEffect(()=>{
setIsLoggedIn(window.location.href.toString().includes("sign-in"))
  },[])
  return (
    !isLoggedIn && (
      <>
        <header className="bg-white shadow-2xl">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 items-center justify-between">
              <div className="">
                <Image
                  src="/logo-header.svg"
                  alt="logo"
                  width={40}
                  height={40}
                />
              </div>

              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="#"
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="#"
                      >
                        Explore
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="#"
                      >
                        {" "}
                        Projects
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="#"
                      >
                        {" "}
                        About us
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="#"
                      >
                        {" "}
                        Contact us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                {!user ? (
                  <div className="sm:flex sm:gap-4">
                    <Link
                      className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary-hover "
                      href="/sign-in"
                    >
                      Login
                    </Link>

                    <div className="hidden sm:flex">
                      <Link
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary hover:bg-gray-400 hover:text-gray-50"
                        href="/sign-up"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-10 cursor-pointer ">
                    <div className="relative">
                      <ShoppingCart className="w-6 h-6" />
                      {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                          {cartItems.length}
                        </span>
                      )}
                    </div>
                    <UserButton />
                  </div>
                )}

                <div className="block md:hidden">
                  <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
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
          </div>
        </header>
      </>
    )
  );
};

export default Header;
