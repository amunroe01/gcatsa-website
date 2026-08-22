import type { Metadata } from "next";
import EventsCatalog from "@/components/events/EventsCatalog";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse Gulf Coast Academy TSA's competitive events — Technology, Engineering, and Leadership categories from the official TSA Middle School Competitive Events Guide.",
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
              Every event below is drawn from the official TSA Middle School
              Competitive Events Guide for the 2026 &amp; 2027 National TSA
              Conferences. Search or filter to find the right fit for your
              interests and skills.
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

      <section className="bg-white py-14" aria-labelledby="more-events-heading">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="more-events-heading" className="text-2xl font-black text-navy-800">
            Looking for a different event?
          </h2>
          <p className="mt-3 font-body text-steel-700">
            TSA offers 30+ middle school competitive events in total,
            including Cybersecurity, Robotics, Biotechnology, Flight, and
            more. The full guide is available at{" "}
            <a
              href="https://tsaweb.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-navy-800 underline hover:text-green-600"
            >
              tsaweb.org
            </a>{" "}
            — talk to your chapter advisor about adding an event that isn't
            listed here yet.
          </p>
        </div>
      </section>
    </>
  );
}
