import React from "react";
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";
import { SiKlarna } from "react-icons/si";
import { GrAmex } from "react-icons/gr";
import { BsPaypal } from "react-icons/bs";
import { BiLogoBitcoin } from "react-icons/bi";
import { FaApplePay } from "react-icons/fa";

import CategoryCard from "./CategoryCard";

export default function Footer() {
  return (
    <div className="h-full bg-mainColor py-20 text-center md:h-[350px] lg:h-[350px]">
      <div className="mx-auto flex w-10/12 flex-col justify-evenly py-8 md:flex-row">
        <div className="flex flex-col space-y-2  text-left">
          <h2 className="pb-2 text-xl font-medium text-darkGray">Shop</h2>
          <p className=" text-sm text-darkGray">WOMEN</p>
          <p className=" text-sm text-darkGray">MEN</p>
          <p className=" text-sm text-darkGray">SHOES</p>
          <p className=" text-sm text-darkGray">BEAUTY</p>
          <p className=" text-sm text-darkGray">ACCESSORIES</p>
        </div>
        <div className="flex flex-col space-y-2 pb-8 text-left">
          <h2 className=" text-xl font-medium text-darkGray ">About us</h2>
          <p className=" text-sm text-darkGray">Our mission</p>
          <p className=" text-sm text-darkGray">Eco-friendliness</p>
          <p className=" text-sm text-darkGray">Press</p>
          <p className=" text-sm text-darkGray">Investor relations</p>
          <p className=" text-sm text-darkGray">For the future</p>
        </div>
        <div className="flex flex-col space-y-2 pb-8 text-left">
          <h2 className=" text-xl font-medium text-darkGray">Help</h2>
          <p className=" text-sm text-darkGray">Customer service</p>
          <p className=" text-sm text-darkGray">My account</p>
          <p className=" text-sm text-darkGray">Privacy & Security</p>
          <p className=" text-sm text-darkGray">Contacts us</p>
          <p className=" text-sm text-darkGray">Cookies</p>
        </div>
        <div className="">
          <div className="flex flex-col space-y-2 text-left">
            <h2 className="text-xl font-medium text-darkGray">
              Become a member
            </h2>
            <p className=" text-sm text-darkGray">
              Join us and recieve 10% off your first <br /> order + free
              shipping to your doorstep
            </p>
            <p className=" font-medium text-darkGray">Learn more → </p>
            <div className="flex flex-col justify-between py-4">
              <div className="flex flex-row gap-4 py-2 text-darkGray">
                <RiMastercardFill size={20} />
                <SiKlarna size={20} />
                <BsPaypal size={20} />
              </div>
              <div className="flex flex-row gap-4 text-darkGray">
                <GrAmex size={20} />
                <RiVisaLine size={20} />
                <FaApplePay size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
