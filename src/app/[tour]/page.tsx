import Head from "@/components/Head";
import { Categories } from "@/data/tourdata";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

type categoryProp = {
  category: { name: string; url: string };
};

type categoryType = {
  name: string;
  url: string;
};

export default async function page({ params }: { params: { tour: string } }) {
  const res = await axios.get(
    `${process.env.BASE_URL}api/tour/char-dham-yatra`
  );
  const data = res.data;
  // const res = await fetch("api/tour/char-dham-yatra");
  // const data = await res.json();
  const { tourPlaces } = data;
  console.log(tourPlaces);

  return (
    <div className="bg-black max-h-screen relative">
      <header className="relative -mt-14">
        <div className="">
          <Image
            src="/images/kedar.jpeg"
            width={500}
            height={267}
            alt="hero-force-image"
            className="relative h-full w-full object-cover"
          ></Image>
        </div>
      </header>
      <section className=" p-6 bg-zinc-200 w-full h-[100%] rounded-[30px] rounded-b-none -mt-4 z-10 relative">
        <div className="w-16 absolute top-3 left-1/2 -translate-x-1/2 h-[6px] rounded bg-zinc-400"></div>
        <div className="mt-1">
          <p className="text-4xl font-bold tracking-tight ">
            {data.detailName}
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex gap-x-2 items-center text-zinc-600/70">
            <IoLocationOutline className="text-xl " />
            <p>{data.locationName}</p>
          </div>
          <a
            href={data.map}
            target="_blank"
            className="text-accent font-medium  flex gap-x-2 items-center"
          >
            <GrMapLocation className="text-xl" />
            <p>Map Direction</p>
          </a>
        </div>
        <div className="w-full h-[2px] bg-zinc-400/30 mt-4"></div>
        <section className="Places mt-4">
          <div className=" flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Places</h2>
            <div className="flex items-center gap-x-1">
              <p>See all</p>
              <FaChevronRight />
            </div>
          </div>
          <ul className="flex space-x-4 pt-4 overflow-x-scroll no-scrollbar pb-10  ">
            {tourPlaces.map((category: categoryType) => (
              <Categorycard key={category.name} category={category} />
            ))}
          </ul>
        </section>
        <div className="discription ">
          <h2 className="text-2xl font-semibold -mt-3">Description</h2>
          <p className="mt-3 text-gray-500 pb-24">{data.description}</p>
        </div>
        <div className="buy-now backdrop-blur fixed bg-zinc-200/70 px-6 bottom-0 left-0   w-full h-20 flex items-center justify-between">
          <div className="flex flex-col items-end">
            <p className="font-extrabold text-3xl">
              <span>&#8377;</span>
              {data.price}
            </p>
            <p>/person</p>
          </div>
          <button className="bg-accent flex gap-2  text-white px-14 py-4 rounded-full drop-shadow-3xl shadow-2xl shadow-accent  text-nowrap">
            Book Now
            <FaArrowRightLong className="text-2xl font-extralight text-white-100" />
          </button>
          {/* <div className="absolute w-full h-10 bg-transparent/30 blur-2xl left-0 bottom-20"></div> */}
        </div>
      </section>
    </div>
  );
}
function Categorycard({ category }: categoryProp) {
  return (
    <div className=" w-24 shrink-0  bg-white shadow-lg  rounded-xl flex items-center flex-col">
      <div className="h-[80%]">
        <Image
          src={category.url}
          width={96}
          height={70}
          alt="categories image"
          className="h-full w-full rounded-xl p-2"
        ></Image>
      </div>
      <p className=" py-1 font-semibold">{category.name}</p>
    </div>
  );
}
