import { Gavel, Star, PenLine, Scale, Newspaper, Handshake, ScrollText, Archive, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { OFFICERS } from "@/lib/officers";

// Icons chosen to match TSA's official chapter-officer symbols
// (gavel, star, pen, scale, newspaper/publications, handshake).
const POSITION_ICONS: Record<string, LucideIcon> = {
  President: Gavel,
  "Vice President": Star,
  Secretary: PenLine,
  Treasurer: Scale,
  Reporter: Newspaper,
  "Sergeant-at-Arms": Handshake,
  Parliamentarian: ScrollText,
  Historian: Archive,
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function OfficersGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {OFFICERS.map((officer, i) => {
        const Icon = POSITION_ICONS[officer.position] ?? Star;
        return (
          <Reveal key={officer.position} delay={i * 0.06}>
            <article className="flex h-full flex-col items-center rounded-xl border border-navy-100 bg-white p-7 text-center shadow-sm transition-shadow hover:shadow-lg">
              {/* Photo placeholder — swap for a real <Image> once photos are uploaded */}
              <div
                className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-green-400 bg-navy-50 font-display text-2xl font-black text-navy-800"
                aria-label={`Photo placeholder for ${officer.name}`}
              >
                {getInitials(officer.name)}
              </div>

              <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-white">
                <Icon size={24} aria-hidden="true" />
              </div>

              <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-wide text-navy-800">
                {officer.position}
              </h3>
              <p className="mt-1 font-display text-base font-black text-green-600">{officer.name}</p>

              <ol className="mt-4 w-full space-y-2 border-t border-navy-100 pt-4 text-left">
                {officer.duties.map((duty, idx) => (
                  <li key={duty} className="flex gap-2 font-body text-sm leading-snug text-steel-700">
                    <span className="shrink-0 font-heading text-xs font-bold text-green-600">{idx + 1}.</span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
