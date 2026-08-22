import { Users, Wrench, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PILOT_EVENTS } from "@/lib/pilotEvents";

export default function PilotEvents() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="pilot-events-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-4xl tracking-wide sm:text-5xl">New For 2026</p>
          <h2 id="pilot-events-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            Florida TSA State Conference Pilot Events
          </h2>
          <p className="mt-4 font-body text-steel-700">
            These events are being piloted at the Florida TSA State Conference
            ONLY — they are not yet part of the National TSA event lineup.
            Ask your chapter advisor before committing, since pilot events
            can change from year to year.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILOT_EVENTS.map((event, i) => (
            <Reveal key={event.slug} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-xl border-2 border-green-400 bg-white p-6 shadow-sm">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-green-400 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-navy-900">
                  <MapPin size={12} aria-hidden="true" />
                  FL State Pilot Event
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
                    <span key={tag} className="rounded bg-navy-50 px-2 py-0.5 font-mono text-xs text-navy-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex items-start gap-2 text-sm">
                  <Wrench size={16} className="mt-0.5 shrink-0 text-green-600" aria-hidden="true" />
                  <div className="flex flex-wrap gap-1.5">
                    {event.skills.map((skill, idx) => (
                      <span key={skill} className="text-xs text-steel-700">
                        {skill}
                        {idx !== event.skills.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
