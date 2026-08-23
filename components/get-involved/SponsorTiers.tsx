import { Medal } from "lucide-react";
import Reveal from "@/components/Reveal";

const TIERS = [
  {
    name: "Bronze",
    price: "$100–$249",
    accent: "border-amber-700",
    badge: "bg-amber-700 text-white",
    benefits: ["Name listed on the chapter website's sponsor page"],
  },
  {
    name: "Silver",
    price: "$250–$499",
    accent: "border-steel-500",
    badge: "bg-steel-500 text-white",
    benefits: [
      "Name listed on the chapter website's sponsor page",
      "Shoutout on chapter social media",
    ],
  },
  {
    name: "Gold",
    price: "$500–$999",
    accent: "border-green-500",
    badge: "bg-green-400 text-navy-900",
    benefits: [
      "Name listed on the chapter website's sponsor page",
      "Shoutout on chapter social media",
      "Logo featured on event banners and chapter t-shirts",
    ],
  },
  {
    name: "Platinum",
    price: "$1,000+",
    accent: "border-navy-800",
    badge: "bg-navy-800 text-white",
    benefits: [
      "Name listed on the chapter website's sponsor page",
      "Shoutout on chapter social media",
      "Logo featured on event banners and chapter t-shirts",
      "Recognition at chapter conferences and a personal thank-you from officers",
    ],
  },
];

export default function SponsorTiers() {
  return (
    <section className="bg-navy-950 py-16 sm:py-20" aria-labelledby="sponsors-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Business Sponsors</p>
          <h2 id="sponsors-heading" className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Sponsorship Tiers
          </h2>
          <p className="mt-4 font-body text-white/80">
            Every dollar goes straight toward competition fees, materials,
            and travel. Recognition benefits stack as you move up.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div className={`flex h-full flex-col rounded-xl border-2 bg-navy-800 p-6 ${tier.accent}`}>
                <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide ${tier.badge}`}>
                  <Medal size={12} aria-hidden="true" />
                  {tier.name}
                </span>
                <p className="mt-3 font-display text-2xl font-black text-white">{tier.price}</p>
                <ul className="mt-4 flex-1 space-y-2 border-t border-white/10 pt-4">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex gap-2 font-body text-sm leading-snug text-navy-100">
                      <span className="via-node mt-1.5 shrink-0" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="mailto:tsa@gulfcoastacademy.org?subject=Sponsorship%20Interest" className="btn-primary">
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
