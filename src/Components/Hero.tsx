import React from "react";
import Image from "next/image";
import autumnCollection from "public/Images/autumnCollection.jpg";

export default function () {
  return (
    <div className=" flex  flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="relative flex min-h-[calc(100vh-350px)] w-full flex-col items-center justify-center">
        <Image
          src={autumnCollection}
          alt="Autumn Collection"
          className=" absolute z-0 max-h-[calc(100vh-350px)] w-full object-cover opacity-80 "
        />
        <div className="z-50">
          <h1 className=" text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Autumn sales
          </h1>
          <div className="flex flex-col items-center pt-4">
            <p className="cursor-pointer text-2xl text-white hover:animate-pulse">
              Check out our new autumn collection →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
