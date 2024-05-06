import Image from "next/image";
import React from "react";

export default function Head() {
  return (
    <header className="relative">
      <Image
        src="/images/hero-3.png"
        width={500}
        height={267}
        alt="hero-force-image"
        className="relative"
      ></Image>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div> */}
      <div className="absolute top-6 left-4 text-center">
        {/* <p className=" text-sm font-light">Good Morning ☀️</p> */}
        <h1 className="ml-[15%] text-nowrap  font-bold text-3xl -mt-2 tracking-tight">
          Book Your Trip Now
        </h1>
      </div>
    </header>
  );
}
