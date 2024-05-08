import DetailSection from "@/components/DetailSection";
import Head from "@/components/Head";
import axios from "axios";

export default async function Home() {
  return (
    <main className="bg-black max-h-screen">
      <Head />
      <DetailSection />
    </main>
  );
}
