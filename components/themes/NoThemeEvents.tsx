import { EVENTS } from "@/lib/events";
import { NO_THEME_EVENTS } from "@/lib/themes";
import Reveal from "@/components/Reveal";

export default function NoThemeEvents() {
  const items = NO_THEME_EVENTS.map((n) => {
    const event = EVENTS.find((e) => e.slug === n.eventSlug);
    return event ? { ...n, name: event.name } : null;
  }).filter((i): i is NonNullable<typeof i> => i !== null);

  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="no-theme-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow justify-center"> No Set Theme</p>
          <h2 id="no-theme-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            These Events Don&apos;t Have a Fixed Topic
          </h2>
          <p className="mt-4 font-body text-steel-700">
            The remaining 12 events either hand out a challenge on site, test
            knowledge directly, or let you choose your own subject — so
            there&apos;s nothing to research ahead of time.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.eventSlug}
              className="flex items-start gap-3 rounded-lg border border-navy-100 bg-navy-50 px-4 py-3"
            >
              <span className="via-node mt-1.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-heading text-sm font-bold uppercase tracking-wide text-navy-800">
                  {item.name}
                </p>
                <p className="mt-0.5 font-body text-sm text-steel-700">{item.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
