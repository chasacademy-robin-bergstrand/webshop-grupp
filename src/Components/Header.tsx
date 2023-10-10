import React from "react";
import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline";
type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <div className=" 500 bg-slate-400 px-5 text-center">
        THIS IS A TOP BANNER FOR NEWSLETTER INFO
      </div>
      <header>
        <div className=" px-5mx-auto flex items-center justify-between border-b-2 border-gray-100 p-6">
          <div>
            <input
              type="text"
              className=" rounded-md border border-gray-400 bg-gray-50 p-1 pl-2 text-gray-600 outline-none focus:border-gray-200 focus:ring-gray-200"
              placeholder="Search"
            />
          </div>
          <div className=" cursor-pointer text-xl uppercase sm:tracking-[3px] lg:text-2xl lg:tracking-[20px]">
            Clothing Store
          </div>
          <div className="flex items-center space-x-5">
            <UserCircleIcon className="h-8 w-8 cursor-pointer hover:opacity-60" />
            <ShoppingBagIcon className="h-8 w-8 cursor-pointer hover:opacity-60" />
          </div>
        </div>
        <nav className=" flex justify-center ">
          <div className="mx-auto flex w-full items-center justify-around  p-4  text-lg  lg:w-6/12 lg:justify-evenly">
            <div className=" cursor-pointer ">Mens</div>
            <div className=" cursor-pointer">Women</div>
            <div className=" cursor-pointer">Shoes</div>
            <div className=" cursor-pointer">Accessories</div>
            <div className=" cursor-pointer">Beauty</div>
          </div>
        </nav>
      </header>
    </>
  );
}
