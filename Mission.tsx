import {
  Users,
  Cpu,
  Wrench,
  Dna,
  Rocket,
  ShieldCheck,
  Gamepad2,
  Bot,
  PuzzleIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const DOMAINS = [
  { icon: Users, label: "Leadership Development" },
  { icon: Cpu, label: "STEM Exploration" },
  { icon: Wrench, label: "Engineering Design" },
  { icon: Dna, label: "Biotechnology" },
  { icon: Rocket, label: "Transportation" },
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Gamepad2, label: "Video Game Design" },
  { icon: Bot, label: "Robotics" },
  { icon: PuzzleIcon, label: "Problem Solving" },
];

export default function Mission() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="mission-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Our Mission</p>
          <h2 id="mission-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            Building Innovators, One Circuit at a Time
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-navy-700 sm:text-lg">
            Gulf Coast Academy TSA gives every member hands-on experience across
            the full range of STEM fields — combining technical skill-building
            with real leadership development. Members explore engineering
            design, biotechnology, transportation, cybersecurity, video game
            design, and robotics, all while sharpening the problem-solving
            skills that carry them into high school, college, and career.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9 lg:gap-3">
          {DOMAINS.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center gap-3 rounded-lg border border-navy-100 bg-navy-50 px-3 py-6 text-center transition-colors hover:border-green-400 hover:bg-green-100">
                <Icon size={28} className="text-navy-800" aria-hidden="true" />
                <span className="font-heading text-xs font-bold uppercase leading-tight tracking-wide text-navy-800">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
