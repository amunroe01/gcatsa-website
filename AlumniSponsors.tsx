import Link from "next/link";
import {
  HandCoins,
  Users,
  Mic,
  Building2,
  Presentation,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const WAYS_TO_SUPPORT = [
  { icon: HandCoins, label: "Donations" },
  { icon: Users, label: "Mentoring" },
  { icon: Mic, label: "Speaking Engagements" },
  { icon: Building2, label: "Internship Opportunities" },
  { icon: Presentation, label: "Career Presentations" },
];

export default function AlumniSponsors() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24" aria-labelledby="alumni-heading">
      <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Alumni &amp; Business Sponsors</p>
          <h2 id="alumni-heading" className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Help Power the Next Generation of Innovators
          </h2>
          <p className="mt-5 font-body leading-relaxed text-white/80">
            Brookside and Gulf Coast Academy alumni and local business
            partners keep our chapter running. Whether it&apos;s a one-time
            donation or an ongoing mentorship, your support puts real tools
            and opportunities in students&apos; hands.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {WAYS_TO_SUPPORT.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center gap-3 rounded-lg border border-white/15 px-3 py-6 text-center transition-colors hover:border-green-400">
                <Icon size={26} className="text-green-400" aria-hidden="true" />
                <span className="font-heading text-xs font-bold uppercase leading-tight tracking-wide">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 flex justify-center">
          <Link href="/get-involved" className="btn-primary">
            Become a Sponsor or Mentor
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
