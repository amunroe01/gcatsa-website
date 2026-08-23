import type { Metadata } from "next";
import WeeklyMeeting from "@/components/calendar/WeeklyMeeting";
import CalendarList from "@/components/calendar/CalendarList";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Gulf Coast Academy TSA chapter calendar — weekly meetings, competitions, conferences, community service, and deadlines for the 2026-2027 season.",
};

export default function CalendarPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow justify-center"> 2026 &amp; 2027 Season</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Chapter Calendar</h1>
            <p className="mt-5 font-body text-white/80">
              Every meeting, competition, conference, and deadline for GCA
              TSA. Dates can shift — announcements at the Wednesday meeting
              always win.
            </p>
          </Reveal>
        </div>
      </section>

      <WeeklyMeeting />

      <section className="bg-navy-50 py-16 sm:py-20" aria-labelledby="season-heading">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="eyebrow justify-center"> Season Dates</p>
          <h2 id="season-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            Upcoming Dates
          </h2>
          <p className="mt-4 font-body text-steel-700">
            Navy = TSA competitions &amp; conferences · Green = community
            service &amp; fundraisers · Grey = deadlines. Past dates hide
            automatically — toggle them back on to see what we've already done.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <CalendarList />
        </div>
      </section>
    </>
  );
}
