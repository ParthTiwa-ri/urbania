import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { popularTour } from "../data/tourdata";
import { Categories } from "../data/tourdata";
import PopularTour from "./PopularTour";
import Category from "./Category";
export default function DetailSection() {
  return (
    <section className=" p-6 bg-zinc-200 w-full h-[100%] rounded-[30px] rounded-b-none -mt-4 z-10 relative">
      <div className="w-16 absolute top-3 left-1/2 -translate-x-1/2 h-2 rounded bg-zinc-400"></div>
      <PopularTour />
      <Category />
    </section>
  );
}
