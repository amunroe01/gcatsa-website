import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const BENEFITS = [
  {
    title: "Academic Growth",
    body: "Hands-on STEM challenges reinforce classroom learning in math, science, and technology.",
  },
  {
    title: "Leadership Skills",
    body: "Chapter offices, committees, and team competitions build confidence and real responsibility.",
  },
  {
    title: "College Readiness",
    body: "Portfolio-building competitions and public presentations prepare students for what's next.",
  },
  {
    title: "Career Awareness",
    body: "Direct exposure to engineering, cybersecurity, and technology careers, years ahead of most students.",
  },
];

export default function ParentSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="parents-heading">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <p className="eyebrow">For Families</p>
          <h2 id="parents-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            A Head Start for Your Student
          </h2>
          <p className="mt-5 font-body leading-relaxed text-navy-700">
            TSA membership is more than an after-school activity — it&apos;s a
            proven track record of academic and personal growth. Parents tell
            us their students come home more confident, more curious, and
            more prepared for the challenges ahead.
          </p>
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-heading font-bold uppercase tracking-wide text-navy-800 hover:text-green-600">
            Learn about Gulf Coast Academy
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="space-y-4 rounded-xl border border-navy-100 bg-navy-50 p-6 sm:p-8">
            {BENEFITS.map((b) => (
              <li key={b.title} className="flex gap-4">
                <CheckCircle2
                  size={24}
                  className="mt-0.5 shrink-0 text-green-600"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-heading text-base font-bold uppercase tracking-wide text-navy-800">
                    {b.title}
                  </p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-steel-700">
                    {b.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
