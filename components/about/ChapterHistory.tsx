import Reveal from "@/components/Reveal";

const TIMELINE = [
  {
    year: "1999 to 2019",
    title: "Brookside Middle School TSA — Chapter 1302",
    description:
      "For many years Brookside Middle School advisors and students have been involved in TSA competition, leadership, and hands-on STEM work. However, Brookside Middle School did not have a long term advisor.",
  },
  {
    year: "2023",
    title: "New Chapter Advisor",
    description:
      "Alister Munroe, The current chapter advisor takes the helm at Brookside, Starting a New Chapter 1302's mission of hands-on STEM and leadership development. The new TSA program first stater with 18 members",
  },
  {
    year: "2026–2027",
    title: "Brookside Becomes Gulf Coast Academy",
    description:
      "Brookside Middle School transforms into Gulf Coast Academy of Innovation & Technology. The chapter is renamed GCA TSA — Chapter 1302 — carrying its number and legacy into a new identity.",
  },
  {
    year: "Today",
    title: "A New Name, the Same Chapter Number",
    description:
      "GCA TSA is a young name with real roots. This website marks the start of that new chapter — built to grow alongside the academy itself.",
  },
];

export default function ChapterHistory() {
  return (
    <section className="bg-navy-50 py-16 sm:py-20" aria-labelledby="history-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow justify-center"> Chapter History</p>
          <h2 id="history-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            From Brookside to GCA
          </h2>
          <p className="mt-4 font-body text-steel-700">
            Same chapter number, same mission — a new name for a new era.
          </p>
        </Reveal>

        <div className="mt-14">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.1}>
              <div className="flex gap-4">
                {/* Dot + connecting line column — flex handles alignment, no manual math */}
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 shrink-0 rounded-full border-4 border-green-400 bg-white" aria-hidden="true" />
                  {i < TIMELINE.length - 1 && (
                    <div className="w-0.5 flex-1 bg-navy-100" aria-hidden="true" />
                  )}
                </div>

                {/* Card content */}
                <div className="flex-1 pb-10">
                  <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
                    <span className="font-display text-2xl font-black text-green-600">{item.year}</span>
                    <h3 className="mt-1 font-heading text-base font-bold uppercase tracking-wide text-navy-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-steel-700">{item.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
