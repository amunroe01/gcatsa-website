import { HeartHandshake, Bus, HandCoins, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";

const OPPORTUNITIES = [
  {
    icon: HeartHandshake,
    title: "Volunteer",
    body: "Lend a hand at competitions, chapter meetings, and events throughout the year.",
  },
  {
    icon: Bus,
    title: "Chaperone",
    body: "Join students on trips to regional, state, and national TSA conferences.",
  },
  {
    icon: HandCoins,
    title: "Donate",
    body: "Help cover materials, registration fees, and travel costs for competitions.",
  },
  {
    icon: Wrench,
    title: "Event Support",
    body: "Help set up, run, and break down chapter events and fundraisers.",
  },
];

export default function FamiliesSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="families-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">For Families</p>
          <h2 id="families-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            Get Involved as a Family
          </h2>
          <p className="mt-4 font-body text-steel-700">
            Parents, guardians, and family members keep this chapter
            running — here's how to jump in.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OPPORTUNITIES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-xl border border-navy-100 bg-navy-50 p-6 text-center transition-colors hover:border-green-400">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-white">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold uppercase tracking-wide text-navy-800">
                  {title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-steel-700">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="mailto:tsa@gulfcoastacademy.org?subject=Family%20Volunteer%20Interest" className="btn-primary">
            Email the Chapter
          </a>
        </div>
      </div>
    </section>
  );
}
