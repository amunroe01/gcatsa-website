import type { Metadata } from "next";
import SchoolOverview from "@/components/about/SchoolOverview";
import ChapterHistory from "@/components/about/ChapterHistory";
import FutureVision from "@/components/about/FutureVision";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Gulf Coast Academy of Innovation & Technology and the history of GCA TSA — Chapter 1302, formerly Brookside Middle School TSA.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow justify-center">◆ About GCA TSA</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">About Us</h1>
            <p className="mt-5 font-body text-white/80">
              A STEM-focused school, a chapter with real roots, and a team
              building something new together.
            </p>
          </Reveal>
        </div>
      </section>

      <SchoolOverview />
      <ChapterHistory />
      <FutureVision />
    </>
  );
}
