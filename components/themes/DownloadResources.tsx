import { FileText, ExternalLink } from "lucide-react";
import { EVENTS } from "@/lib/events";
import { EVENT_THEMES } from "@/lib/themes";
import Reveal from "@/components/Reveal";

export default function DownloadResources() {
  const downloads = EVENT_THEMES.flatMap((t) => {
    const event = EVENTS.find((e) => e.slug === t.eventSlug);
    if (!event || !t.resources) return [];
    return t.resources.map((r) => ({ ...r, eventName: event.name }));
  });

  return (
    <section className="bg-navy-800 py-16 sm:py-20" aria-labelledby="downloads-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">◆ Download Center</p>
          <h2 id="downloads-heading" className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Official Theme Documents
          </h2>
          <p className="mt-4 font-body text-navy-100">
            Direct links to the official TSA design briefs, datasets, and
            problem statements posted for the 2026–2027 cycle.
          </p>
        </Reveal>

        <ul className="mt-10 divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10">
          {downloads.map((d) => (
            <li key={d.url}>
              
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-navy-950/40 px-5 py-4 transition-colors hover:bg-navy-950/70"
              >
                <span className="flex items-center gap-3">
                  <FileText size={18} className="shrink-0 text-green-400" aria-hidden="true" />
                  <span>
                    <span className="block font-heading text-sm font-bold uppercase tracking-wide text-white">
                      {d.label}
                    </span>
                    <span className="block font-mono text-xs text-navy-100">{d.eventName}</span>
                  </span>
                </span>
                <ExternalLink size={16} className="shrink-0 text-white/60" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
