"use client";

import { useMemo, useState } from "react";
import { Search, Users, Clock, Wrench, ExternalLink, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import { EVENTS, CATEGORIES, type EventCategory } from "@/lib/events";

const CATEGORY_STYLES: Record<EventCategory, string> = {
  Technology: "bg-navy-800 text-white",
  Engineering: "bg-green-400 text-navy-900",
  Leadership: "bg-steel-500 text-white",
};

export default function EventsCatalog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<EventCategory | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EVENTS.filter((event) => {
      const matchesCategory = activeCategory === "All" || event.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [event.name, event.description, ...event.skills].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query, activeCategory]);

  return (
    <div>
      {/* Search + filter controls */}
      <div className="mx-auto max-w-3xl">
        <label htmlFor="event-search" className="sr-only">
          Search events by name, skill, or keyword
        </label>
        <div className="relative">
          <Search
            size={20}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel-500"
            aria-hidden="true"
          />
          <input
            id="event-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events — try “CAD,” “robotics,” or “public speaking”"
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

        <div className="mt-4 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by category">
          {(["All", ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`rounded-full border px-4 py-2 font-heading text-sm font-bold uppercase tracking-wide transition-colors ${
                activeCategory === cat
                  ? "border-navy-800 bg-navy-800 text-white"
                  : "border-navy-100 bg-white text-navy-800 hover:border-green-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="mt-8 text-center font-mono text-sm text-steel-700" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "event" : "events"} found
      </p>

      {/* Event cards */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((event, i) => (
          <Reveal key={event.slug} delay={Math.min(i * 0.04, 0.3)}>
            <article className="flex h-full flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
              <span
                className={`w-fit rounded-full px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide ${CATEGORY_STYLES[event.category]}`}
              >
                {event.category}
              </span>

              <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-wide text-navy-800">
                {event.name}
              </h3>

              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-steel-700">
                {event.description}
              </p>

              <dl className="mt-4 space-y-2 border-t border-navy-100 pt-4 text-sm">
                <div className="flex items-start gap-2">
                  <Users size={16} className="mt-0.5 shrink-0 text-green-600" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Team size</dt>
                    <dd className="text-navy-700">{event.teamSize}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5 shrink-0 text-green-600" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Format</dt>
                    <dd className="text-navy-700">{event.format}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Wrench size={16} className="mt-0.5 shrink-0 text-green-600" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Skills used</dt>
                    <dd className="flex flex-wrap gap-1.5 text-navy-700">
                      {event.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded bg-navy-50 px-2 py-0.5 font-mono text-xs text-navy-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-4 flex flex-col gap-1 border-t border-navy-100 pt-4">
                {event.resources.map((r) => (
                  <a
                    key={r.url}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wide text-navy-800 hover:text-green-600"
                  >
                    {r.label}
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center font-body text-steel-700">
          No events match “{query}.” Try a different search term or clear the filters.
        </p>
      )}
    </div>
  );
}
