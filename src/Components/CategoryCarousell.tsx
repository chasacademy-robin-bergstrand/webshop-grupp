import React from "react";
import CategoryCard from "./CategoryCard";

type Props = {};

export default function CategoryCarousel({}: Props) {
  return (
    <div className=" relative py-10 text-center">
      <h2 className=" text-5xl font-extrabold tracking-tight  ">
        Popular categories
      </h2>
      <div className="  scrollbar-track-gray-400/20 scrollbar-thumb-[#b451b4]/80 scrollbar-thin  mx-auto flex w-10/12 justify-center space-x-10 overflow-x-scroll pt-14">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
