import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Images, BookOpen, Compass, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Students",
  description: "Student hub for Gulf Coast Academy TSA — forms, photos, resources, and help finding your event.",
};

const CARDS = [
  {
    href: "/students/forms",
    icon: FileText,
    title: "Forms",
    body: "Permission slips, medical forms, and other documents you need for competitions and trips.",
  },
  {
    href: "/students/gallery",
    icon: Images,
    title: "Pictures & Gallery",
    body: "Photos from meetings, competitions, and chapter events throughout the year.",
  },
  {
    href: "/students/resources",
    icon: BookOpen,
    title: "Resources",
    body: "Study guides, software downloads, and other materials to help you prep for your event.",
  },
  {
    href: "/events",
    icon: Compass,
    title: "Find My Event",
    body: "Not sure which event fits you? Search and filter all 37 events by category, team size, and format.",
  },
];

export default function StudentsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow justify-center">Student Hub</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Students</h1>
            <p className="mt-5 font-body text-white/80">
              Everything you need in one place — forms, photos, resources,
              and help finding the right event for you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20" aria-labelledby="student-hub-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="student-hub-heading" className="sr-only">
            Student hub sections
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CARDS.map(({ href, icon: Icon, title, body }, i) => (
              <Reveal key={href} delay={i * 0.08}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-white transition-colors group-hover:bg-green-400 group-hover:text-navy-900">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-navy-800">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-steel-700">{body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wide text-green-600">
                    Explore
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
