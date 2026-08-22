"use client";

import { useMemo, useState } from "react";
import { Search, ExternalLink, X, FileText } from "lucide-react";
import Reveal from "@/components/Reveal";
import { EVENTS, CATEGORIES, type EventCategory } from "@/lib/events";
import { EVENT_THEMES } from "@/lib/themes";

const CATEGORY_STYLES: Record<EventCategory, string> = {
  "Technology & Computer Science": "bg-navy-800 text-white",
  "Engineering & Design": "bg-green-400 text-navy-900",
  "Transportation & Robotics": "bg-steel-500 text-white",
  "Science & Medical": "bg-green-600 text-white",
  "Leadership & Communication": "bg-navy-700 text-white",
};

// Join theme data with its parent event for category/name lookup
const THEMED_EVENTS = EVENT_THEMES.map((theme) => {
  const event = EVENTS.find((e) => e.slug === theme.eventSlug);
  return event ? { ...theme, event } : null;
}).filter((t): t is NonNullable<typeof t> => t !== null);

export default function ThemesCatalog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<EventCategory | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return THEMED_EVENTS.filter((t) => {
      if (activeCategory !== "All" && t.event.category !== activeCategory) return false;
      if (!q) return true;
      const haystack = [t.event.name, t.themeTitle, t.brief].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query, activeCategory]);

  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <label htmlFor="theme-search" className="sr-only">
          Search themes by event name or topic
        </label>
        <div className="relative">
          <Search
            size={20}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel-500"
            aria-hidden="true"
          />
          <input
            id="theme-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search themes — try “robotics,” “housing,” or “podcasting”"
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

      <p className="mt-8 text-center font-mono text-sm text-steel-700" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "theme" : "themes"} found
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t, i) => (
          <Reveal key={t.eventSlug} delay={Math.min(i * 0.03, 0.3)}>
            <article className="flex h-full flex-col rounded-xl border-2 border-green-400 bg-white p-6 shadow-sm transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg">
              <span
                className={`w-fit rounded-full px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide ${CATEGORY_STYLES[t.event.category]}`}
              >
                {t.event.category}
              </span>

              <h3 className="mt-3 font-heading text-base font-bold uppercase tracking-wide text-steel-700">
                {t.event.name}
              </h3>
              <p className="mt-1 font-display text-lg font-black text-navy-800">{t.themeTitle}</p>

              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-steel-700">{t.brief}</p>

              {t.resources && t.resources.length > 0 && (
                <div className="mt-4 flex flex-col gap-1 border-t border-navy-100 pt-4">
                  {t.resources.map((r) => (
                    <a
                      key={r.url}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wide text-navy-800 hover:text-green-600"
                    >
                      <FileText size={12} aria-hidden="true" />
                      {r.label}
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center font-body text-steel-700">
          No themes match your search. Try a different term or clear the category filter.
        </p>
      )}
    </div>
  );
}
