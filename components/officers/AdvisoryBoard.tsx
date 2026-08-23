import { Users2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function AdvisoryBoard() {
  return (
    <section className="bg-navy-950 py-16 sm:py-20" aria-labelledby="advisory-heading">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow justify-center">◆ Advisory Board</p>
          <h2 id="advisory-heading" className="mt-3 text-3xl font-black text-white sm:text-4xl">
            TSA Advisory Board
          </h2>

          <div className="mt-8 rounded-xl border-2 border-dashed border-white/25 bg-navy-800/50 p-10">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-green-400">
              <Users2 size={26} aria-hidden="true" />
            </div>
            <p className="mt-4 font-heading text-sm font-bold uppercase tracking-wide text-white">
              Coming Soon
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-navy-100">
              This section will introduce the chapter advisor and the
              community and business leaders who formally support GCA TSA.
              Check back as the board is finalized.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
