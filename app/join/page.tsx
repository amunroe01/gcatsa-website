import type { Metadata } from "next";
import { UserPlus, ExternalLink, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Join TSA",
  description: "Join Gulf Coast Academy TSA for the 2026-2027 school year — fill out the official membership form to get started.",
};

const MEMBERSHIP_FORM_URL =
  "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=E9pxtx3TRUedpjocyHRS0dMeClfS09FCtKjc7UOgU5JUOTI1SzcyVVNPVURWNFAxQzBEMzc0MjBCUS4u";

export default function JoinPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow justify-center">Join TSA</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              Join Gulf Coast Academy TSA
            </h1>
            <p className="mt-5 font-body text-white/80">
              Membership for the 2026–2027 school year is open. Fill out the
              official membership form below to get started — your chapter
              advisor will follow up with next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20" aria-labelledby="membership-heading">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-xl border-2 border-green-400 bg-white p-8 shadow-sm sm:p-10">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-green-400">
                <UserPlus size={26} aria-hidden="true" />
              </div>
              <h2 id="membership-heading" className="mt-4 text-2xl font-black text-navy-800 sm:text-3xl">
                2026–2027 Membership Form
              </h2>
              <p className="mt-3 font-body leading-relaxed text-steel-700">
                This opens Gulf Coast Academy TSA's official membership form.
                Have your basic information ready, and check with a parent
                or guardian if any of the questions need their input.
              </p>
              <a href={MEMBERSHIP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-flex"
              >
                Fill Out the Membership Form
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            </div>

            <p className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-steel-700">
              <Mail size={16} className="shrink-0 text-green-600" aria-hidden="true" />
              Questions before you sign up?{" "}
              <a href="mailto:alister.munroe@sarasotacountyschools.net"
                className="font-bold text-navy-800 underline hover:text-green-600"
              >
                Email the chapter advisor
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
