import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

import SignInForm from "~/Components/SignInForm";
export default function RegisterPage() {
  return (
    <div className=" z-0 flex h-screen  flex-col items-center justify-center space-y-20 bg-slate-100">
      <div className=" cursor-pointer text-xl uppercase sm:tracking-[3px] lg:text-2xl lg:tracking-[20px]">
        Clothing Store
      </div>
      <div className="absolute left-0 top-[30%]  z-20 hidden h-[500px] w-full -skew-y-12 bg-[#ec97514f] xl:inline" />

      <div className=" z-50 flex h-fit  w-10/12 max-w-[600px] rounded-2xl shadow-xl">
        <SignInForm />
      </div>
    </div>
  );
}
