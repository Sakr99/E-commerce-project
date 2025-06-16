"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../_context/CartContext";
import Cart from "./Cart";

function Header() {
  const [openCart, setOpenCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  const isLoggedIn =
    typeof window !== "undefined" && window.location.href.includes("sign-in");
  if (isLoggedIn) return null;

  return (
    <header className="bg-white relative">
      <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto shadow-md sm:px-6 lg:px-8">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={200} height={200} />
        </Link>

        <div className="flex items-center justify-end flex-1 md:justify-between">
          {/* Links (Desktop) */}
          <nav aria-label="Global" className="hidden md:block text-black">
            <ul className="flex justify-center items-center gap-6 text-md">
              <li>
                <Link href="/">
                  <span className="hover:text-primary">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="hover:text-primary">Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/explore">
                  <span className="hover:text-primary">Explore</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-primary">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-primary">Contact Us</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {!user ? (
              <div className="sm:flex sm:gap-4">
                <Link href="/sign-in">
                  <span className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover">
                    Login
                  </span>
                </Link>
                <Link href="/">
                  <span className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary-hover/75 sm:block">
                    Register
                  </span>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <h2
                  className="flex gap-1 cursor-pointer"
                  onClick={() => setOpenCart(!openCart)}
                >
                  <ShoppingCart />({cartItems?.length || 0})
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white items-center shadow-md z-50">
          <ul className="flex flex-col items-center gap-6 text-md">
            <li>
              <Link href="/">
                <span className="hover:text-primary">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <span className="hover:text-primary">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/explore">
                <span className="hover:text-primary">Explore</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:text-primary">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-primary">Contact Us</span>
              </Link>
            </li>
            <hr />
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
