import { allTour } from "@/data/tourdata";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

type tourProp = {
  tour: { name: string; url: string; slug: string };
};
type Typetour = { name: string; url: string; slug: string };
export default function PopularTour() {
  // const res = await fetch("api/tour");
  // const popularTour = await res.json();
  const popularTour = allTour;
  return (
    <section className="popular-tours">
      <div className="pt-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Best Destination</h2>
        <FaArrowRightLong className="text-2xl font-extralight text-black/50" />
      </div>

      <ul className="flex gap-3 overflow-x-scroll pb-9 no-scrollbar">
        {popularTour.map((tour: Typetour) => (
          <PopularCard key={tour.name} tour={tour} />
        ))}
      </ul>
    </section>
  );
}

function PopularCard({ tour }: tourProp) {
  return (
    <li
      key={tour.name}
      className="relative shadow-lg drop-shadow-sm  rounded-xl "
    >
      <Link href={tour.slug}>
        <div className="  relative rounded-xl flex-shrink-0 mt-4 h-48 w-40 ">
          <Image
            src={tour.url}
            alt="tourimage"
            width={160}
            height={192}
            className="w-full h-full rounded-xl object-cover"
          ></Image>
        </div>
        <p className="px-4  rounded-lg py-2 bottom-2 left-1 z-30 backdrop-blur-lg  bg-gray-100/80 absolute">
          {tour.name}
        </p>
      </Link>
    </li>
  );
}
