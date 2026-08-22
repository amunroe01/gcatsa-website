import type { Metadata } from "next";
import EventsCatalog from "@/components/events/EventsCatalog";
import PilotEvents from "@/components/events/PilotEvents";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse all 37 Gulf Coast Academy TSA competitive events from the official 2026-2027 TSA Middle School Competitive Events Guide, searchable by category, participation type, and format.",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow justify-center">Competitive Events</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              GCA TSA Events Catalog
            </h1>
            <p className="mt-5 font-body text-white/80">
              All 37 events from the official TSA Middle School Competitive
              Events Guide for the 2026 &amp; 2027 National TSA Conferences.
              Search, or filter by category, participation type, and what
              the event actually involves, to find the right fit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20" aria-labelledby="catalog-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="catalog-heading" className="sr-only">
            Browse events
          </h2>
          <EventsCatalog />
        </div>
      </section>

      <PilotEvents />

      <section className="bg-navy-50 py-14" aria-labelledby="tips-heading">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="tips-heading" className="text-2xl font-black text-navy-800">
            Not sure where to start?
          </h2>
          <p className="mt-3 font-body text-steel-700">
            Try the filters above. Prefer working alone? Filter by{" "}
            <span className="font-bold text-navy-800">Individual</span>.
            Like building things live at the conference over long
            take-home projects? Filter by{" "}
            <span className="font-bold text-navy-800">Onsite Challenge</span>{" "}
            and skip <span className="font-bold text-navy-800">Pre-Submission</span>.
            Not a fan of interviews? Just leave that tag unselected. Talk to
            your chapter advisor once you've found a few that look
            interesting.
          </p>
        </div>
      </section>
    </>
  );
}
