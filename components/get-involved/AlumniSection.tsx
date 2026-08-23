import { Users, ClipboardCheck, Mic, Trophy } from "lucide-react";
import Reveal from "@/components/Reveal";

const OPPORTUNITIES = [
  {
    icon: Users,
    title: "Mentor Students",
    body: "Share what you learned as a TSA member and guide current students through their own competitions.",
  },
  {
    icon: ClipboardCheck,
    title: "Judge Projects",
    body: "Evaluate student work at chapter-level competitions and give real feedback that helps them improve.",
  },
  {
    icon: Mic,
    title: "Speak at Meetings",
    body: "Tell the chapter about your career path, your college experience, or what TSA meant to you.",
  },
  {
    icon: Trophy,
    title: "Sponsor Competitions",
    body: "Help fund the materials, travel, and registration costs that make competing possible.",
  },
];

export default function AlumniSection() {
  return (
    <section className="bg-navy-50 py-16 sm:py-20" aria-labelledby="alumni-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">For Alumni</p>
          <h2 id="alumni-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            Come Back and Give Back
          </h2>
          <p className="mt-4 font-body text-steel-700">
            Former Brookside and GCA TSA members — the chapter would love to
            have you back, in whatever form works for you.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OPPORTUNITIES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-xl border border-navy-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-400 text-navy-900">
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
          <a href="mailto:tsa@gulfcoastacademy.org?subject=Alumni%20Interest" className="btn-primary">
            Reach Out to the Chapter
          </a>
        </div>
      </div>
    </section>
  );
}
