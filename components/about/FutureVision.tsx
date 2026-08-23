import { Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function FutureVision() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 text-center sm:py-20" aria-labelledby="vision-heading">
      <div className="absolute inset-0 bg-circuit-grid bg-[size:40px_40px] opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-green-400">
            <Rocket size={26} aria-hidden="true" />
          </div>
          <p className="eyebrow justify-center">◆ Looking Ahead</p>
          <h2 id="vision-heading" className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Our Vision
          </h2>
          <p className="mt-5 font-body leading-relaxed text-white/80">
            Gulf Coast Academy TSA is just getting started under its new
            name — but with the same chapter number and the same mission:
            giving Sarasota County students real, hands-on experience in
            the technology fields shaping their future. As GCA continues
            to grow into its identity as a technology and innovation
            academy, our chapter aims to grow right alongside it —
            expanding our competitive program, building lasting
            partnerships with local STEM employers, and giving every
            student who walks through our doors a reason to see themselves
            in engineering, cybersecurity, robotics, and beyond.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
