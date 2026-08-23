import { ShieldCheck, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function VolunteerCallout() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-16 sm:py-20" aria-labelledby="level2-heading">
      <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-green-400">
            <ShieldCheck size={26} aria-hidden="true" />
          </div>
          <h2 id="level2-heading" className="text-3xl font-black text-white sm:text-4xl">
            Become a Sarasota County Schools Approved Volunteer
          </h2>
          <p className="mt-5 font-body leading-relaxed text-navy-100">
            Any volunteer who will be working directly with students —
            chaperoning a trip, helping at a competition, mentoring at a
            meeting — is required by Sarasota County Schools to complete
            Level 2 fingerprinting and background clearance first. It's a
            one-time process through the district, not GCA TSA, and it
            applies to every volunteer role on this page.
          </p>
          
            href="https://www.sarasotacountyschools.net/o/scs/page/level-2-volunteer-fingerprinting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Become a Level 2 Volunteer
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
