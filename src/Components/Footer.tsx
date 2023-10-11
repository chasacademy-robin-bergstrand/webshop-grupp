import React from "react";
import CategoryCard from "./CategoryCard";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className=" h-[350px]  bg-slate-300 py-20  text-center">
      <div className=" mx-auto flex w-10/12 justify-evenly">
        <div className="flex flex-col space-y-2 text-left">
          <h2 className="  pb-2 text-xl font-medium  ">Shop</h2>
          <p className=" text-sm">WOMEN</p>
          <p className=" text-sm">MEN</p>
          <p className=" text-sm">SHOES</p>
          <p className=" text-sm">BEAUTY</p>
          <p className=" text-sm">ACCESSORIES</p>
        </div>
        <div className="flex flex-col space-y-2 text-left">
          <h2 className=" text-xl font-medium  ">About us</h2>
          <p className=" text-sm">Our mission</p>
          <p className=" text-sm">Eco-friendliness</p>
          <p className=" text-sm">Press</p>
          <p className=" text-sm">Investor relations</p>
          <p className=" text-sm">For the future</p>
        </div>
        <div className="flex flex-col space-y-2 text-left">
          <h2 className=" text-xl font-medium ">Help</h2>
          <p className=" text-sm">Cústomer service</p>
          <p className=" text-sm">My account</p>
          <p className=" text-sm">Privacy & Security</p>
          <p className=" text-sm">Contacts us</p>
          <p className=" text-sm">Cookies</p>
        </div>
        <div className="flex flex-col space-y-2 text-left">
          <h2 className="text-xl font-medium ">Become a member</h2>
          <p className=" text-sm">
            Join us and recieve 10% off your first <br /> order + free shipping
            to your doorstep
          </p>
          <p className=" font-medium">Learn more → </p>
        </div>
      </div>
    </div>
  );
}
