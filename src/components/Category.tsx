import { Categories } from "@/data/tourdata";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type categoryProp = {
  category: { name: string; url: string };
};

export default function Category() {
  return (
    <section className="category -mt-3 ">
      <div className=" flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Categories</h2>
        <FaArrowRightLong className="text-2xl font-extralight text-black/50" />
      </div>

      <ul className="flex space-x-4 pt-4 overflow-x-scroll no-scrollbar pb-10  ">
        {Categories.map((category) => (
          <Categorycard key={category.name} category={category} />
        ))}
      </ul>
    </section>
  );
}

function Categorycard({ category }: categoryProp) {
  return (
    <div
      key={category.name}
      className=" h-38 w-28 shrink-0  bg-white shadow-lg drop-shadow-md rounded-xl flex items-center flex-col"
    >
      <div className="h-[80%]">
        <Image
          src={category.url}
          width={200}
          height={200}
          alt="categories image"
          className="h-full w-full rounded-xl p-2"
        ></Image>
      </div>
      <p className=" py-1 font-semibold">{category.name}</p>
    </div>
  );
}
