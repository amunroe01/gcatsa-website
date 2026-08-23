import type { Metadata } from "next";
import ThemesCatalog from "@/components/themes/ThemesCatalog";
import NoThemeEvents from "@/components/themes/NoThemeEvents";
import DownloadResources from "@/components/themes/DownloadResources";
import ThemesNotesAndChecklist from "@/components/themes/ThemesNotesAndChecklist";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "2027 Themes & Problems",
  description:
    "The official 2026-2027 TSA Middle School themes and design problems for each competitive event, plus downloadable resources, teacher notes, and a student checklist.",
};

export default function ThemesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow justify-center"> 2026 &amp; 2027 Conference Cycle</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              Themes &amp; Problems
            </h1>
            <p className="mt-5 font-body text-white/80">
              24 of our 37 events have an official theme or design problem
              posted for this cycle. Search or filter by category to find
              yours, or scroll down to see which events don&apos;t need one.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="font-display text-3xl font-black text-green-400 sm:text-4xl">37</p>
                <p className="mt-1 font-heading text-xs font-bold uppercase tracking-wide text-white/70">
                  Total Events
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-black text-green-400 sm:text-4xl">24</p>
                <p className="mt-1 font-heading text-xs font-bold uppercase tracking-wide text-white/70">
                  Themes Posted
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-black text-green-400 sm:text-4xl">5</p>
                <p className="mt-1 font-heading text-xs font-bold uppercase tracking-wide text-white/70">
                  Categories
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20" aria-labelledby="themes-catalog-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="eyebrow justify-center">◆ Annual Challenges</p>
            <h2 id="themes-catalog-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
              2027 Competition Themes
            </h2>
            <p className="mt-4 font-body text-steel-700">
              These are the events with a 2027 theme or design problem
              posted so far. Events not listed below haven&apos;t had a
              theme added yet — check back, or ask your chapter advisor.
            </p>
          </Reveal>
          <ThemesCatalog />
        </div>
      </section>

      <NoThemeEvents />
      <DownloadResources />
      <ThemesNotesAndChecklist />
    </>
  );
}
