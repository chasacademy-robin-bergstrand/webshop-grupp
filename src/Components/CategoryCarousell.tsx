import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategoryCarousel() {
  return (
    <div className=" relative py-10 text-center">
      <h2 className=" text-5xl font-extrabold tracking-tight  ">
        Popular categories
      </h2>
      <div className="  mx-auto flex w-10/12  justify-center space-x-10 pt-14 ">
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
