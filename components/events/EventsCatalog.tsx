"use client";

import { useMemo, useState } from "react";
import { Search, Users, Wrench, ExternalLink, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  EVENTS,
  CATEGORIES,
  PARTICIPATION_TYPES,
  FORMAT_TAGS,
  type EventCategory,
  type Participation,
  type FormatTag,
} from "@/lib/events";

const CATEGORY_STYLES: Record<EventCategory, string> = {
  "Technology & Computer Science": "bg-navy-800 text-white",
  "Engineering & Design": "bg-green-400 text-navy-900",
  "Transportation & Robotics": "bg-steel-500 text-white",
  "Science & Medical": "bg-green-600 text-white",
  "Leadership & Communication": "bg-navy-700 text-white",
};

export default function EventsCatalog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<EventCategory | "All">("All");
  const [activeParticipation, setActiveParticipation] = useState<Participation | "All">("All");
  const [activeTags, setActiveTags] = useState<FormatTag[]>([]);

  const toggleTag = (tag: FormatTag) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const clearAll = () => {
    setQuery("");
    setActiveCategory("All");
    setActiveParticipation("All");
    setActiveTags([]);
  };

  const hasActiveFilters =
    query !== "" || activeCategory !== "All" || activeParticipation !== "All" || activeTags.length > 0;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EVENTS.filter((event) => {
      if (activeCategory !== "All" && event.category !== activeCategory) return false;
      if (activeParticipation !== "All" && event.participation !== activeParticipation) return false;
      if (activeTags.length > 0 && !activeTags.every((tag) => event.formatTags.includes(tag))) return false;
      if (!q) return true;
      const haystack = [event.name, event.description, ...event.skills].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query, activeCategory, activeParticipation, activeTags]);

  return (
    <div>
      {/* Search */}
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
      </div>

      {/* Category filter */}
      <div className="mx-auto mt-6 max-w-4xl">
        <p className="mb-2 text-center font-heading text-xs font-bold uppercase tracking-wide text-steel-700">
          Category
        </p>
        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by category">
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

      {/* Participation filter */}
      <div className="mx-auto mt-6 max-w-4xl">
        <p className="mb-2 text-center font-heading text-xs font-bold uppercase tracking-wide text-steel-700">
          Participation
        </p>
        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by participation type">
          {(["All", ...PARTICIPATION_TYPES] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setActiveParticipation(p)}
              aria-pressed={activeParticipation === p}
              className={`rounded-full border px-4 py-2 font-heading text-sm font-bold uppercase tracking-wide transition-colors ${
                activeParticipation === p
                  ? "border-green-600 bg-green-400 text-navy-900"
                  : "border-navy-100 bg-white text-navy-800 hover:border-green-400"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Format tag filter (multi-select) */}
      <div className="mx-auto mt-6 max-w-4xl">
        <p className="mb-2 text-center font-heading text-xs font-bold uppercase tracking-wide text-steel-700">
          What does the event involve? <span className="font-normal normal-case text-steel-500">(select any)</span>
        </p>
        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by event format">
          {FORMAT_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              aria-pressed={activeTags.includes(tag)}
              className={`rounded-full border px-4 py-2 font-heading text-sm font-bold uppercase tracking-wide transition-colors ${
                activeTags.includes(tag)
                  ? "border-navy-800 bg-navy-800 text-white"
                  : "border-navy-100 bg-white text-navy-800 hover:border-green-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results count + clear */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="font-mono text-sm text-steel-700" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "event" : "events"} found
        </p>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="font-heading text-xs font-bold uppercase tracking-wide text-navy-800 underline hover:text-green-600"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Event cards */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((event, i) => (
          <Reveal key={event.slug} delay={Math.min(i * 0.03, 0.3)}>
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

              <div className="mt-4 flex items-start gap-2 border-t border-navy-100 pt-4 text-sm">
                <Users size={16} className="mt-0.5 shrink-0 text-green-600" aria-hidden="true" />
                <span className="text-navy-700">{event.teamSize}</span>
              </div>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {event.formatTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-navy-50 px-2 py-0.5 font-mono text-xs text-navy-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex items-start gap-2 text-sm">
                <Wrench size={16} className="mt-0.5 shrink-0 text-green-600" aria-hidden="true" />
                <div className="flex flex-wrap gap-1.5">
                  {event.skills.map((skill) => (
                    <span key={skill} className="text-xs text-steel-700">
                      {skill}
                      {event.skills[event.skills.length - 1] !== skill && ","}
                    </span>
                  ))}
                </div>
              </div>

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
          No events match your filters. Try clearing a filter or searching a different term.
        </p>
      )}
    </div>
  );
}
