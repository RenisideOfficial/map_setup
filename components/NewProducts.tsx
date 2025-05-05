import React from "react";
import ProductCard from "./ProductCard";

const productData = [
  {
    img: "/imgs/door-open.png",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/imgs/HumanoidDP.png",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/imgs/KeyIcon.png",
    title: "Electronics",
    desc: "Wireless Bluetooth Headphones",
    rating: 4,
    price: "75.00",
  },
  {
    img: "/imgs/Map.png",
    title: "Clothing",
    desc: "Cotton T-Shirt - Various Colors",
    rating: 5,
    price: "25.00",
  },
  {
    img: "/imgs/music.png",
    title: "Home & Kitchen",
    desc: "Stainless Steel Cookware Set",
    rating: 3,
    price: "150.00",
  },
  {
    img: "/imgs/SearchIcon.png",
    title: "Toys & Games",
    desc: "Building Blocks Set - 500 Pieces",
    rating: 5,
    price: "40.00",
  },
  {
    img: "/imgs/Resume_PlayIcon.png",
    title: "Beauty & Personal Care",
    desc: "Organic Face Moisturizer",
    rating: 4,
    price: "32.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
        >
          {productData.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
