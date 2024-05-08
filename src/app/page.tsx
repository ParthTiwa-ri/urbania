import DetailSection from "@/components/DetailSection";
import Head from "@/components/Head";
import axios from "axios";

export default async function Home() {
  const res = await axios.get(`https://www.bookurbania.online/api/tour/`);
  const data = res.data;

  console.log(data[0]);
  return (
    <main className="bg-black max-h-screen">
      <Head />
      <DetailSection />
    </main>
  );
}
