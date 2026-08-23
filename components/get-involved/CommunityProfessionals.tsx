import { Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";

const FIELDS = [
  "Industry",
  "Engineering",
  "Cybersecurity",
  "Military",
  "Healthcare Technology",
  "Manufacturing",
  "Information Technology",
];

export default function CommunityProfessionals() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="community-heading">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-white">
            <Briefcase size={26} aria-hidden="true" />
          </div>
          <p className="eyebrow justify-center">Community Professionals</p>
          <h2 id="community-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            Bring Your Career Into the Classroom
          </h2>
          <p className="mt-4 font-body text-steel-700">
            We're always looking for guest experts to talk to students, judge
            competitions, or run a hands-on demo — especially from these
            fields:
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {FIELDS.map((field) => (
              <span
                key={field}
                className="rounded-full border border-navy-100 bg-navy-50 px-4 py-2 font-heading text-sm font-bold uppercase tracking-wide text-navy-800"
              >
                {field}
              </span>
            ))}
          </div>

          
            href="mailto:tsa@gulfcoastacademy.org?subject=Guest%20Speaker%20Interest"
            className="btn-primary mt-8 inline-flex"
          >
            Volunteer as a Guest Expert
          </a>
        </Reveal>
      </div>
    </section>
  );
}
