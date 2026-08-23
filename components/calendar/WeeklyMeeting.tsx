import { Clock, MapPin, Repeat } from "lucide-react";
import Reveal from "@/components/Reveal";
import { WEEKLY_MEETING } from "@/lib/calendar";

export default function WeeklyMeeting() {
  return (
    <section className="bg-navy-950 py-14" aria-labelledby="weekly-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow justify-center text-center">◆ Every Week</p>
          <h2 id="weekly-heading" className="mt-3 text-center text-3xl font-black text-white sm:text-4xl">
            Chapter Meeting
          </h2>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border-2 border-green-400 bg-navy-800 p-6 sm:flex-row sm:justify-center sm:gap-8 sm:p-8">
            <div className="flex items-center gap-3">
              <Repeat size={22} className="shrink-0 text-green-400" aria-hidden="true" />
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wide text-white/60">Day</p>
                <p className="font-display text-lg font-black text-white">{WEEKLY_MEETING.day}</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <Clock size={22} className="shrink-0 text-green-400" aria-hidden="true" />
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wide text-white/60">Time</p>
                <p className="font-display text-lg font-black text-white">{WEEKLY_MEETING.time}</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <MapPin size={22} className="shrink-0 text-green-400" aria-hidden="true" />
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wide text-white/60">Location</p>
                <p className="font-display text-lg font-black text-white">{WEEKLY_MEETING.location}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
