import React from "react";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

export default function CategoryCarousel() {
  // Define an array of image URLs for each CategoryCard
  const imageUrls = [
    "https://images.pexels.com/photos/4210850/pexels-photo-4210850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4210850/pexels-photo-4210850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319172/pexels-photo-7319172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6311449/pexels-photo-6311449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2530912/pexels-photo-2530912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11056159/pexels-photo-11056159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="relative py-10 text-center">
      <motion.h2 className="text-5xl font-extrabold tracking-tight text-darkGray">
        Popular categories
      </motion.h2>
      <motion.div className="overflow-auto">
        <motion.div
          dragConstraints={{ right: 0, left: 0 }}
          className="mx-auto flex w-10/12 justify-center space-x-10 overflow-auto overflow-x-scroll pt-14 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-peach"
        >
          {imageUrls.map((imageUrl, index) => (
            <CategoryCard key={index} imageUrl={imageUrl} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
