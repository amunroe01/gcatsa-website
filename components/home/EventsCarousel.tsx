"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, CalendarDays, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CALENDAR_EVENTS, type CalendarColorGroup } from "@/lib/calendar";

const AUTO_ADVANCE_MS = 12000; // rotates every 12s (within the requested 10–15s window)
const MAX_SHOWN = 4;

const COLOR_GROUP_STYLES: Record<CalendarColorGroup, string> = {
  tsa: "bg-navy-800 text-white",
  service: "bg-green-400 text-navy-900",
  deadline: "bg-steel-500 text-white",
};

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
};

function formatDateLabel(dateStart: string, dateEnd?: string, timeLabel?: string) {
  const start = new Date(`${dateStart}T00:00:00`);
  if (!dateEnd || dateEnd === dateStart) {
    const dateFull = start.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    return timeLabel ? `${dateFull} · ${timeLabel}` : dateFull;
  }
  const end = new Date(`${dateEnd}T00:00:00`);
  const startMonth = start.toLocaleDateString("en-US", { month: "long" });
  const endMonth = end.toLocaleDateString("en-US", { month: "long" });
  return startMonth === endMonth
    ? `${startMonth} ${start.getDate()}–${end.getDate()}, ${end.getFullYear()}`
    : `${startMonth} ${start.getDate()} – ${endMonth} ${end.getDate()}, ${end.getFullYear()}`;
}

export default function EventsCarousel() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [isPaused, setIsPaused] = useState(false);

  // Pulls straight from the shared calendar data — automatically shows
  // whichever events are soonest, with no manual curation needed.
  const events = useMemo(() => {
    const todayStr = new Date().toISOString().slice(0, 10);
    return CALENDAR_EVENTS.filter((e) => (e.dateEnd ?? e.dateStart) >= todayStr)
      .sort((a, b) => a.dateStart.localeCompare(b.dateStart))
      .slice(0, MAX_SHOWN);
  }, []);

  const count = events.length;

  const go = useCallback(
    (newDirection: number) => {
      if (count === 0) return;
      setSlide(([current]) => {
        const next = (current + newDirection + count) % count;
        return [next, newDirection];
      });
    },
    [count]
  );

  // Respect reduced-motion preference: start paused for those users
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) setIsPaused(true);
  }, []);

  // Auto-advance, right to left, every AUTO_ADVANCE_MS — pausable
  useEffect(() => {
    if (isPaused || count < 2) return;
    const timer = setInterval(() => go(1), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [isPaused, go, count]);

  if (count === 0) return null;

  const event = events[index];

  return (
    <section className="relative overflow-hidden bg-navy-800 py-20 sm:py-24" aria-labelledby="events-carousel-heading">
      <div className="absolute inset-0 bg-circuit-grid bg-[size:36px_36px] opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Mark Your Calendar</p>
          <h2 id="events-carousel-heading" className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Upcoming Conferences &amp; Events
          </h2>
          <p className="mt-4 font-body text-navy-100">
            Key dates for this chapter year — see the full calendar for
            meetings, deadlines, and service opportunities.
          </p>
        </Reveal>

        {/* Screen-reader announcement of slide changes */}
        <p className="sr-only" aria-live="polite">
          Event {index + 1} of {count}: {event.title}, {formatDateLabel(event.dateStart, event.dateEnd, event.timeLabel)}, {event.location}
        </p>

        <div
          className="mt-12 flex items-center justify-center gap-3 sm:gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            const prefersReduced =
              typeof window !== "undefined" &&
              window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (!prefersReduced) setIsPaused(false);
          }}
        >
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous event"
            className="shrink-0 rounded-full border border-white/20 p-2 text-white transition-colors hover:border-green-400 hover:text-green-400 sm:p-3"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          <div className="relative h-64 w-full max-w-xl overflow-hidden sm:h-56">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-between rounded-xl border border-white/15 bg-navy-950 p-6 shadow-lg sm:p-8"
              >
                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide ${COLOR_GROUP_STYLES[event.colorGroup]}`}
                  >
                    {event.type}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-black uppercase text-white sm:text-2xl">
                    {event.title}
                  </h3>
                </div>
                <dl className="space-y-2 text-sm text-navy-100">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="shrink-0 text-green-400" aria-hidden="true" />
                    <dt className="sr-only">Date</dt>
                    <dd>{formatDateLabel(event.dateStart, event.dateEnd, event.timeLabel)}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="shrink-0 text-green-400" aria-hidden="true" />
                    <dt className="sr-only">Location</dt>
                    <dd>{event.location}</dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next event"
            className="shrink-0 rounded-full border border-white/20 p-2 text-white transition-colors hover:border-green-400 hover:text-green-400 sm:p-3"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Dot indicators + pause/play control */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Choose event slide">
            {events.map((e, i) => (
              <button
                key={e.slug}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show event ${i + 1}: ${e.title}`}
                onClick={() => setSlide([i, i > index ? 1 : -1])}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === index ? "bg-green-400" : "bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            aria-label={isPaused ? "Resume auto-rotating events" : "Pause auto-rotating events"}
            className="rounded-full border border-white/20 p-1.5 text-white/80 transition-colors hover:border-green-400 hover:text-green-400"
          >
            {isPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          </button>
        </div>

        <div className="mt-10 text-center">
          <Link href="/calendar" className="btn-primary">
            View Full Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
