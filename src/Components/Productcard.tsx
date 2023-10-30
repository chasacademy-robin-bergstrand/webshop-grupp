import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  Name: string;
  Price: number;
  ImageSrc: string;
};

export default function Productcard({ Name, Price, ImageSrc }: Props) {
  const router = useRouter();

  return (
    <div className="py-5">
      <div
        className="relative mx-auto max-h-[550px] max-w-[350px] cursor-pointer xl:max-h-full xl:max-w-full"
        onClick={async () => {
          await router.push(`products/${Name}`);
        }}
      >
        <div className="relative">
          <Image
            src={ImageSrc}
            alt={Name}
            width={1000}
            height={1000}
            className=" h-full w-full object-cover"
          />
          <HeartIcon
            height={28}
            className=" absolute bottom-4 right-2  z-20 h-8 fill-white  hover:fill-red-500  hover:text-red-500 "
          />
        </div>
        <div className="pb-4 pt-1">
          <p className=" text-sm font-thin">{Name}</p>
          <p className=" text-sm font-thin">{Price},00 SEK</p>
        </div>
      </div>
    </div>
  );
}
