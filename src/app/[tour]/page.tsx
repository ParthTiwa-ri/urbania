import Head from "@/components/Head";
import { Categories } from "@/data/tourdata";
import Image from "next/image";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

type categoryProp = {
  category: { name: string; url: string };
};

export default function page({ params }: { params: { tour: string } }) {
  console.log(params.tour);
  return (
    <div className="bg-black max-h-screen relative">
      <header className="relative">
        <div className="">
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
        <div className="mt-3">
          <p className="text-4xl font-bold tracking-tight ">Char dham, India</p>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex gap-x-2 items-center text-zinc-600/70">
            <IoLocationOutline className="text-xl " />
            <p>Maharashtra</p>
          </div>
          <div className="text-accent font-medium  flex gap-x-2 items-center">
            <GrMapLocation className="text-xl" />
            <p>Map Direction</p>
          </div>
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
            {Categories.map((category) => (
              <Categorycard key={category.name} category={category} />
            ))}
          </ul>
        </section>
        <div className="discription ">
          <h2 className="text-2xl font-semibold -mt-3">Description</h2>
          <p className="mt-3 text-gray-500 pb-24">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sit
            ea corporis fugiat nisi numquam voluptatibus neque voluptas
            dignissimos facilis, vitae placeat aut aspernatur ab in fugit non
            magni vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, corporis. Iusto, consequatur inventore officiis ipsum
            iure alias consectetur enim eum quo saepe ipsam dicta. Quas rem
            molestias dolorem pariatur nesciunt. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Aspernatur, tempora numquam! Maiores
            necessitatibus reprehenderit delectus molestiae! Error odit qui
            praesentium natus ducimus quia placeat harum, voluptatum numquam est
            optio temporibus?
          </p>
        </div>
        <div className="buy-now fixed bg-zinc-200/90 px-6 bottom-0 left-0  w-full h-24 flex items-center justify-between">
          <div className="flex flex-col items-end">
            <p className="font-extrabold text-3xl">
              <span>&#8377;</span>750
            </p>
            <p>/person</p>
          </div>
          <button className="bg-accent flex gap-4 text-white px-20 py-4 rounded-full drop-shadow-xl shadow-2xl">
            Book Now
            <FaArrowRightLong className="text-2xl font-extralight text-white-100" />
          </button>
        </div>
      </section>
    </div>
  );
}
function Categorycard({ category }: categoryProp) {
  return (
    <div
      key={category.name}
      className=" w-24 shrink-0  bg-white shadow-lg  rounded-xl flex items-center flex-col"
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
