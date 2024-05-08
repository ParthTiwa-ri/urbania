import DetailSection from "@/components/DetailSection";
import Head from "@/components/Head";
import axios from "axios";

export default async function Home() {
  console.log(data[0]);
  return (
    <main className="bg-black max-h-screen">
      <Head />
      <DetailSection />
    </main>
  );
}
