import { ShieldCheck, BrainCircuit, Bot, Wrench, Factory, Gamepad2, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";

const SPECIALTIES = [
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: BrainCircuit, label: "Artificial Intelligence" },
  { icon: Bot, label: "Robotics" },
  { icon: Wrench, label: "Engineering" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Gamepad2, label: "Video Game Design" },
  { icon: Rocket, label: "Emerging Technologies" },
];

export default function SchoolOverview() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="overview-heading">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow justify-center">◆ Our School</p>
          <h2 id="overview-heading" className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">
            Gulf Coast Academy of Innovation &amp; Technology
          </h2>
          <p className="mt-5 font-body leading-relaxed text-steel-700">
            Gulf Coast Academy of Innovation &amp; Technology is a
            STEM-focused Sarasota County middle school built around the
            technology fields shaping the next generation of careers.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SPECIALTIES.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center gap-3 rounded-lg border border-navy-100 bg-navy-50 px-3 py-6 text-center transition-colors hover:border-green-400 hover:bg-green-100">
                <Icon size={26} className="text-navy-800" aria-hidden="true" />
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
