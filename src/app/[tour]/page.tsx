import Head from "@/components/Head";
import { Categories, allTour } from "@/data/tourdata";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLeftArrow } from "react-icons/bi";

import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";

type categoryProp = {
  category: { name: string; url: string };
};

type categoryType = {
  name: string;
  url: string;
};
export async function generateStaticParams() {
  return [
    {
      tour: "char-dham",
    },
  ];
}
export default function page({ params }: { params: { tour: string } }) {
  const data = allTour.find((tour) => tour.slug === params.tour);
  if (!data) {
    // Handle the case where no matching tour is found
    // For example, you might want to return a loading state, an error message, or redirect the user
    return <div>No tour found</div>;
  }
  const { tourPlaces } = data;

  return (
    <div className="bg-black max-h-screen relative">
      <header className="relative -mt-14">
        <div className="h-[267px]">
          <Image
            src={data.detailURL}
            width={500}
            height={267}
            alt="hero-force-image"
            className="relative h-full w-full object-cover"
            quality={30}
          ></Image>
        </div>
        <Link
          href="/"
          className="h-10 w-10 absolute top-20 flex items-center justify-center  left-5 rounded-full circle  bg-white"
        >
          <SlArrowLeft className="translate-x-[-0.3px] translate-y-[-0.2px]" />
        </Link>
      </header>
      <section className=" p-6 bg-zinc-200 w-full h-[100%] rounded-[30px] rounded-b-none -mt-4 z-10 relative">
        <div className="w-16 absolute top-3 left-1/2 -translate-x-1/2 h-[6px] rounded bg-zinc-400"></div>
        <div className="mt-1">
          <p className="text-3xl font-bold tracking-tight ">
            {data.detailName}
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex gap-x-2 items-center text-zinc-600/70">
            <IoLocationOutline className="text-xl " />
            <p>{data.locationName}</p>
          </div>
          {data.map && (
            <a
              href={data.map}
              target="_blank"
              className="text-accent font-medium  flex gap-x-2 items-center"
            >
              <GrMapLocation className="text-xl" />
              <p>Map Direction</p>
            </a>
          )}
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
          <button className="bg-accent flex gap-2  text-white px-8 py-4 rounded-full drop-shadow-3xl shadow-2xl shadow-accent  text-nowrap">
            <a href="tel:8126622930"> Book Now</a>
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
    <div className=" min-w-24  shrink-0  bg-white shadow-lg  rounded-xl flex items-center flex-col">
      <Image
        src={category.url}
        width={96}
        height={80}
        alt="categories image"
        className="h-[80px] w-[112px] rounded-xl p-2"
        quality={30}
      ></Image>

      <p className=" py-1 px-2 font-semibold ">{category.name}</p>
    </div>
  );
}
