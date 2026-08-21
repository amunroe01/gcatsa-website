import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Goals from "@/components/home/Goals";
import WhyJoin from "@/components/home/WhyJoin";
import ParentSection from "@/components/home/ParentSection";
import AlumniSponsors from "@/components/home/AlumniSponsors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Goals />
      <WhyJoin />
      <ParentSection />
      <AlumniSponsors />
    </>
  );
}
