import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import RegeisterForm from "~/Components/RegeisterForm";
import AnimatedTextWord from "~/Components/AnimatedTextWord";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className=" z-0 flex  h-screen items-center justify-center bg-slate-100">
      <div className="absolute left-0 top-[40%]  z-20 hidden h-[500px] w-full -skew-y-12 bg-peach/75 xl:inline" />

      <div className=" z-50 flex h-fit  w-10/12 max-w-[1200px] rounded-2xl shadow-xl">
        <div className="w-1/2 space-y-14 rounded-l-2xl  bg-white/80 p-10">
          <h2 className=" cursor-pointer text-xl uppercase sm:tracking-[3px] lg:text-xl lg:tracking-[7px]">
            <Link href="/">
              <AnimatedTextWord text="CHAS CLOTHING" />
            </Link>
          </h2>

          <div className=" space-y-4">
            <div className="item flex">
              <CheckCircleIcon className="mt-1 h-6 pr-2 text-peach" />

              <div>
                <p className="text-lg font-semibold text-darkGray">
                  Get exclusive deals
                </p>
                <p className="text-darkGray">
                  Recieve special delas on our whole catalog of fantastic
                  products.
                </p>
              </div>
            </div>
            <div className="item flex">
              <CheckCircleIcon className="mt-1 h-6 pr-2 text-peach" />

              <div>
                <p className="text-lg font-semibold text-darkGray">
                  Earn points on your orders
                </p>
                <p className="text-darkGray ">
                  Every order gives you points that can be used as coupons.
                </p>
              </div>
            </div>
            <div className="item flex">
              <CheckCircleIcon className="mt-1 h-6 pr-2 text-peach" />

              <div>
                <p className="text-lg font-semibold text-darkGray">
                  Always free shipping on orders over 200SEK
                </p>
                <p className="text-darkGray">
                  Spend over 200SEK and we will send your order to your doorstep
                  for free.
                </p>
              </div>
            </div>
            <div className="item flex">
              <CheckCircleIcon className="mt-1 h-6 pr-2 text-peach" />

              <div>
                <p className="text-lg font-semibold text-darkGray">
                  Join our newsletter - get 10% off
                </p>
                <p className="text-darkGray">
                  When you sign up for our newsletter you will recieve 10% off
                  your first order.
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
