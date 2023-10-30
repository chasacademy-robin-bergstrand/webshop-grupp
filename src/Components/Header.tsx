import React from "react";
import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import AnimatedTextWord from "./AnimatedTextWord";

export default function Header() {
  const { userId } = useAuth();
  return (
    <>
      <div className="max-w mx-auto flex justify-center scroll-smooth bg-peach/75 px-5">
        <Link href="#newsletter">JOIN OUR NEWSLETTER - GET 10% OFF</Link>
      </div>
      <header>
        <div className="relative mx-auto flex items-center justify-center border-b-2 border-gray-100 p-6 px-5">
          <SearchBar />
          <div className="cursor-pointer text-xl uppercase sm:tracking-[3px] lg:text-2xl lg:tracking-[20px]">
            <Link href="/">
              <AnimatedTextWord text="CHAS CLOTHING" />
            </Link>
          </div>
          <div className="absolute right-4 flex items-center space-x-5">
            {userId ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link href="/signin">
                <UserCircleIcon className="h-8 w-8 cursor-pointer text-peach hover:opacity-60" />
              </Link>
            )}
            <Link href="/">
              <ShoppingBagIcon className="h-8 w-8 cursor-pointer text-peach hover:opacity-60" />
            </Link>
          </div>
        </div>

        <nav className=" flex justify-center ">
          <div className="mx-auto flex w-full items-center justify-around  p-4  text-lg lg:w-6/12 lg:justify-evenly">
            <div className="cursor-pointer ">Mens</div>
            <div className="cursor-pointer">Women</div>
            <div className="cursor-pointer">Shoes</div>
            <div className="cursor-pointer">Accessories</div>
            <div className="cursor-pointer">Beauty</div>
          </div>
        </nav>
      </header>
    </>
  );
}
