import Reveal from "@/components/Reveal";

const GOALS = [
  "Leadership",
  "Communication",
  "Creativity",
  "Teamwork",
  "Engineering",
  "Technology Literacy",
  "Community Service",
];

export default function Goals() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-20 sm:py-24" aria-labelledby="goals-heading">
      <div className="absolute inset-0 bg-circuit-grid bg-[size:36px_36px] opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What We Build</p>
          <h2 id="goals-heading" className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Chapter Goals
          </h2>
          <p className="mt-4 font-body text-navy-100">
            Every competition, meeting, and community project ties back to
            these seven core goals for every GCA TSA member.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {GOALS.map((goal, i) => (
            <Reveal key={goal} delay={i * 0.05} className="h-full">
              <div className="flex h-full items-center gap-3 bg-navy-800 px-6 py-6 transition-colors hover:bg-navy-700">
                <span className="via-node shrink-0" aria-hidden="true" />
                <span className="font-heading text-base font-bold uppercase tracking-wide text-white">
                  {goal}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
