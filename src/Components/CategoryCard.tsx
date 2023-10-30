import React from "react";

interface CategoryCardProps {
  imageUrl: string;
}

export default function CategoryCard({ imageUrl }: CategoryCardProps) {
  return (
    <div className="m-2 h-[600px] w-[400px] flex-shrink-0 bg-white">
      <img
        src={imageUrl}
        alt="/"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
