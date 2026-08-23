import type { Metadata } from "next";
import FamiliesSection from "@/components/get-involved/FamiliesSection";
import AlumniSection from "@/components/get-involved/AlumniSection";
import CommunityProfessionals from "@/components/get-involved/CommunityProfessionals";
import SponsorTiers from "@/components/get-involved/SponsorTiers";
import VolunteerCallout from "@/components/get-involved/VolunteerCallout";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Ways for families, alumni, community professionals, and business sponsors to support Gulf Coast Academy TSA — plus how to become a Sarasota County Schools approved volunteer.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow justify-center">Get Involved</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              Support GCA TSA
            </h1>
            <p className="mt-5 font-body text-white/80">
              This chapter runs on the people who show up for it — families,
              alumni, community professionals, and local businesses. Here's
              how to be one of them.
            </p>
          </Reveal>
        </div>
      </section>

      <FamiliesSection />
      <AlumniSection />
      <CommunityProfessionals />
      <SponsorTiers />
      <VolunteerCallout />
    </>
  );
}
