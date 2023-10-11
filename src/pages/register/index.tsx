import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import RegeisterForm from "~/Components/RegeisterForm";

type Props = {};

export default function RegisterPage({}: Props) {
  return (
    <div className=" z-0 flex  h-screen items-center justify-center bg-slate-100">
      <div className="absolute left-0 top-[40%]  z-20 hidden h-[500px] w-full -skew-y-12 bg-[#ec97514f] xl:inline" />

      <div className=" z-50 flex h-fit  w-10/12 max-w-[1200px] rounded-2xl shadow-xl">
        <div className="w-1/2 space-y-14 rounded-l-2xl  bg-white/80 p-10">
          <h2 className=" cursor-pointer text-xl uppercase sm:tracking-[3px] lg:text-xl lg:tracking-[7px]">
            Clothing Store
          </h2>

          <div className=" space-y-4">
            <div className="item flex">
              <CheckCircleIcon className="mt-1 h-6 pr-2 text-[#ec9751]" />

              <div>
                <p className="text-lg font-semibold">Get exclusive deals</p>
                <p className="">
                  Recieve special delas on our whole catalog of fantastic
                  products.
                </p>
              </div>
            </div>
            <div className="item flex">
              <CheckCircleIcon className="mt-1 h-6 pr-2 text-[#ec9751]" />

              <div>
                <p className="text-lg font-semibold">
                  Earn points on your orders
                </p>
                <p className="">
                  Every order gives you points that can be used as coupons.
                </p>
              </div>
            </div>
            <div className="item flex">
              <CheckCircleIcon className="mt-1 h-6 pr-2 text-[#ec9751]" />

              <div>
                <p className="text-lg font-semibold">
                  Always free shipping on orders over 200SEK
                </p>
                <p className="">
                  Spend over 200SEK and we will send your order to your doorstep
                  for free.
                </p>
              </div>
            </div>
          </div>
        </div>
        <RegeisterForm />
      </div>
    </div>
  );
}
