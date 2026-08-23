"use client";

import { useMemo, useState } from "react";
import { Search, X, MapPin, Eye, EyeOff } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CALENDAR_EVENTS, type CalendarColorGroup } from "@/lib/calendar";

const COLOR_GROUPS: { key: CalendarColorGroup; label: string }[] = [
  { key: "tsa", label: "TSA Events" },
  { key: "service", label: "Community Service" },
  { key: "deadline", label: "Deadlines" },
];

const COLOR_STYLES: Record<CalendarColorGroup, { border: string; badge: string; pillActive: string }> = {
  tsa: {
    border: "border-l-navy-800",
    badge: "bg-navy-800 text-white",
    pillActive: "border-navy-800 bg-navy-800 text-white",
  },
  service: {
    border: "border-l-green-400",
    badge: "bg-green-400 text-navy-900",
    pillActive: "border-green-600 bg-green-400 text-navy-900",
  },
  deadline: {
    border: "border-l-steel-500",
    badge: "bg-steel-500 text-white",
    pillActive: "border-steel-700 bg-steel-500 text-white",
  },
};

function formatDateRange(dateStart: string, dateEnd: string | undefined, timeLabel: string | undefined) {
  const start = new Date(`${dateStart}T00:00:00`);
  const startMonth = start.toLocaleDateString("en-US", { month: "short" });
  const startDay = start.getDate();

  if (!dateEnd || dateEnd === dateStart) {
    const dateFull = start.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    return { badgeMonth: startMonth, badgeDay: String(startDay), full: timeLabel ? `${dateFull} · ${timeLabel}` : dateFull };
  }

  const end = new Date(`${dateEnd}T00:00:00`);
  const endMonth = end.toLocaleDateString("en-US", { month: "short" });
  const endDay = end.getDate();
  const full =
    startMonth === endMonth
      ? `${startMonth} ${startDay}–${endDay}, ${end.getFullYear()}`
      : `${startMonth} ${startDay} – ${endMonth} ${endDay}, ${end.getFullYear()}`;

  return { badgeMonth: startMonth, badgeDay: String(startDay), full };
}

function monthGroupKey(dateStart: string) {
  const d = new Date(`${dateStart}T00:00:00`);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function CalendarList() {
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState<CalendarColorGroup | "All">("All");
  const [showPast, setShowPast] = useState(false);

  const todayStr = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CALENDAR_EVENTS.filter((e) => {
      const endOrStart = e.dateEnd ?? e.dateStart;
      const isPast = endOrStart < todayStr;
      if (isPast && !showPast) return false;
      if (activeGroup !== "All" && e.colorGroup !== activeGroup) return false;
      if (!q) return true;
      return [e.title, e.type, e.location].join(" ").toLowerCase().includes(q);
    }).sort((a, b) => a.dateStart.localeCompare(b.dateStart));
  }, [query, activeGroup, showPast, todayStr]);

  const grouped = useMemo(() => {
    const groups = new Map<string, typeof filtered>();
    for (const event of filtered) {
      const key = monthGroupKey(event.dateStart);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(event);
    }
    return Array.from(groups.entries());
  }, [filtered]);

  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <label htmlFor="calendar-search" className="sr-only">
          Search calendar by event name or location
        </label>
        <div className="relative">
          <Search size={20} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel-500" aria-hidden="true" />
          <input
            id="calendar-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dates — try “state,” “fundraiser,” or a location”"
            className="w-full rounded-lg border border-navy-100 bg-white py-3 pl-12 pr-12 font-body text-navy-900 placeholder:text-steel-500 focus:border-green-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-steel-500 hover:text-navy-800"
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter by category">
          <button
            type="button"
            onClick={() => setActiveGroup("All")}
            aria-pressed={activeGroup === "All"}
            className={`rounded-full border px-4 py-2 font-heading text-sm font-bold uppercase tracking-wide transition-colors ${
              activeGroup === "All" ? "border-navy-800 bg-navy-800 text-white" : "border-navy-100 bg-white text-navy-800 hover:border-green-400"
            }`}
          >
            All
          </button>
          {COLOR_GROUPS.map((g) => (
            <button
              key={g.key}
              type="button"
              onClick={() => setActiveGroup(g.key)}
              aria-pressed={activeGroup === g.key}
              className={`rounded-full border px-4 py-2 font-heading text-sm font-bold uppercase tracking-wide transition-colors ${
                activeGroup === g.key ? COLOR_STYLES[g.key].pillActive : "border-navy-100 bg-white text-navy-800 hover:border-green-400"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setShowPast((p) => !p)}
            className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wide text-steel-700 hover:text-navy-800"
          >
            {showPast ? <EyeOff size={14} aria-hidden="true" /> : <Eye size={14} aria-hidden="true" />}
            {showPast ? "Hide past events" : "Show past events"}
          </button>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-sm text-steel-700" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "date" : "dates"} shown
      </p>

      <div className="mx-auto mt-8 max-w-3xl space-y-10">
        {grouped.map(([month, events]) => (
          <div key={month}>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-green-600">{month}</h3>
            <ul className="mt-4 space-y-3">
              {events.map((event, i) => {
                const { badgeMonth, badgeDay, full } = formatDateRange(event.dateStart, event.dateEnd, event.timeLabel);
                const isPast = (event.dateEnd ?? event.dateStart) < todayStr;
                return (
                  <Reveal key={event.slug} delay={Math.min(i * 0.03, 0.2)}>
                    <li
                      className={`flex items-center gap-4 rounded-lg border border-navy-100 border-l-4 bg-white p-4 shadow-sm ${COLOR_STYLES[event.colorGroup].border} ${
                        isPast ? "opacity-50" : ""
                      }`}
                    >
                      <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-navy-50 py-2">
                        <span className="font-heading text-xs font-bold uppercase tracking-wide text-steel-700">
                          {badgeMonth}
                        </span>
                        <span className="font-display text-2xl font-black text-navy-800">{badgeDay}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide ${COLOR_STYLES[event.colorGroup].badge}`}
                        >
                          {event.type}
                        </span>
                        <p className="mt-1 truncate font-heading text-base font-bold uppercase tracking-wide text-navy-800">
                          {event.title}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1.5 font-body text-sm text-steel-700">
                          <MapPin size={13} className="shrink-0" aria-hidden="true" />
                          <span className="truncate">{event.location}</span>
                          <span className="mx-1 text-steel-300">·</span>
                          <span>{full}</span>
                        </p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center font-body text-steel-700">
          No dates match your filters right now.{" "}
          {!showPast && "Try enabling \u201cShow past events,\u201d or "}check back as new dates are added.
        </p>
      )}
    </div>
  );
}
