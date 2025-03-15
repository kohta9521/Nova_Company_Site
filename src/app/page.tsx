import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Philosophy from "@/components/organisms/Philosophy";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Philosophy />
      <div className="w-full h-[300px]"></div>
    </>
  );
}
