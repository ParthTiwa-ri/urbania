import Head from "@/components/Head";
import Image from "next/image";
import React from "react";

export default function page({ params }: { params: { tour: string } }) {
  console.log(params.tour);
  return (
    <>
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
        <div>
          <p className="text-3xl font-bold tracking-tight ">Char dham, India</p>
        </div>
      </section>
    </>
  );
}
