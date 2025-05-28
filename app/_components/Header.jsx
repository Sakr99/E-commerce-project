"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const Header = () => {
  const [isLoggedIn , setIsLoggedIn]= useState(false)
  const { user } = useUser();
  useEffect(()=>{
setIsLoggedIn(window.location.href.toString().includes("sign-in"))
  },[])
  return !isLoggedIn && (
      <>
        <header className="bg-white shadow-2xl">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 items-center justify-between">
              <div className="md:flex md:items-center md:gap-12">
                <Image src="/logo.svg" alt="logo" width={200} height={200} />
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
                    <a
                      className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary-hover "
                      href="/sign-in"
                    >
                      Login
                    </a>

                    <div className="hidden sm:flex">
                      <a
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary hover:bg-gray-400 hover:text-gray-50"
                        href="/sign-up"
                      >
                        Register
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-10 ">
                    <h2 className="flex items-center gap-2 cursor-pointer ">
                      <ShoppingCart />
                      (0)
                    </h2>
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
    );
};

export default Header;
