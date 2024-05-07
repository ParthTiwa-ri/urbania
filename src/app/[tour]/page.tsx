import Head from "@/components/Head";
import { Categories } from "@/data/tourdata";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

type categoryProp = {
  category: { name: string; url: string };
};

export default function page({ params }: { params: { tour: string } }) {
  console.log(params.tour);
  return (
    <div className="bg-black">
      <header className="relative">
        <div className="h-80">
          <Image
            src="/images/hero-3.png"
            width={500}
            height={267}
            alt="hero-force-image"
            className="relative h-full w-full object-cover"
          ></Image>
        </div>
      </header>
      <section className=" p-6 bg-zinc-200 w-full h-[100%] rounded-[30px] rounded-b-none -mt-6 z-10 relative">
        <div className="w-16 absolute top-3 left-1/2 -translate-x-1/2 h-[6px] rounded bg-zinc-400"></div>
        <div className="mt-4">
          <p className="text-4xl font-bold tracking-tight ">Char dham, India</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex gap-x-2 items-center text-zinc-600/70">
            <IoLocationOutline className="text-xl " />
            <p>Maharashtra</p>
          </div>
          <div className="text-accent font-medium  flex gap-x-2 items-center">
            <GrMapLocation className="text-xl" />
            <p>Map Direction</p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-zinc-400/30 mt-5"></div>
        <section className="Places mt-6">
          <div className=" flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Places</h2>
            <div className="flex items-center gap-x-1">
              <p>See all</p>
              <FaChevronRight />
            </div>
          </div>
          <ul className="flex space-x-4 pt-4 overflow-x-scroll no-scrollbar pb-10  ">
            {Categories.map((category) => (
              <Categorycard key={category.name} category={category} />
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}
function Categorycard({ category }: categoryProp) {
  return (
    <div
      key={category.name}
      className="  w-28 shrink-0  bg-white shadow-lg  rounded-xl flex items-center flex-col"
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
