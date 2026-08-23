import type { Metadata } from "next";
import OfficersGrid from "@/components/officers/OfficersGrid";
import AdvisoryBoard from "@/components/officers/AdvisoryBoard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Officers",
  description:
    "Meet the 2026-2027 Gulf Coast Academy TSA chapter officers and learn what each position is responsible for.",
};

export default function OfficersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow justify-center">◆ 2026 &amp; 2027 Chapter Team</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Officers</h1>
            <p className="mt-5 font-body text-white/80">
              Eight students lead Gulf Coast Academy TSA this year — running
              meetings, coordinating competitions, and keeping the chapter
              organized from top to bottom.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20" aria-labelledby="officers-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="officers-heading" className="sr-only">
            Chapter officers
          </h2>
          <OfficersGrid />
        </div>
      </section>

      <AdvisoryBoard />
    </>
  );
}
