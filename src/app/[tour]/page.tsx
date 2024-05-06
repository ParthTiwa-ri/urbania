import Head from "@/components/Head";
import React from "react";

export default function page({ params }: { params: { tour: string } }) {
  console.log(params.tour);
  return (
    <>
      <Head />
    </>
  );
}
