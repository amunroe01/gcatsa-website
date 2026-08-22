import Link from "next/link";
import {
  Trophy,
  Presentation,
  HeartHandshake,
  Crown,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const FEATURES = [
  {
    icon: Trophy,
    title: "Competitions",
    body: "Compete in 25+ STEM events — from CAD and coding to robotics and video game design — at regional, state, and national conferences.",
  },
  {
    icon: Presentation,
    title: "Conferences",
    body: "Travel to the Florida TSA State Conference and the National TSA Conference to compete, network, and celebrate innovation.",
  },
  {
    icon: HeartHandshake,
    title: "Community Service",
    body: "Give back through chapter-organized service projects that put technology and teamwork to work for our community.",
  },
  {
    icon: Crown,
    title: "Leadership Opportunities",
    body: "Run for chapter office, lead committees, and build real leadership experience you can carry beyond middle school.",
  },
  {
    icon: GraduationCap,
    title: "Scholarships",
    body: "Top competitors and dedicated members can access TSA and partner scholarship opportunities as they head to high school and beyond.",
  },
  {
    icon: Briefcase,
    title: "Career Exploration",
    body: "Meet industry mentors and explore careers in cybersecurity, engineering, healthcare technology, and more.",
  },
];

export default function WhyJoin() {
  return (
    <section className="bg-navy-50 py-20 sm:py-24" aria-labelledby="why-join-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Why Join</p>
          <h2 id="why-join-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            What TSA Membership Gives You
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-white transition-colors group-hover:bg-green-400 group-hover:text-navy-900">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-navy-800">
                  {title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-steel-700">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 flex justify-center">
          <Link href="/get-involved" className="btn-primary">
            Join TSA
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
