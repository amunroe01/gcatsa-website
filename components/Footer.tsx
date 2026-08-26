import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const QUICK_LINKS = [
  { href: "/events", label: "Events" },
  { href: "/themes", label: "2027 Themes & Problems" },
  { href: "/calendar", label: "Calendar" },
  { href: "/officers", label: "Officers" },
  { href: "/about", label: "About Us" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <a
            href="https://www.sarasotacountyschools.net/o/gulfcoastacademy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gulf Coast Academy of Innovation & Technology main school site (opens in a new tab)"
            className="mb-4 inline-block"
          >
            <Image
              src="/images/logo-round-gca.png"
              alt="Gulf Coast Academy of Innovation & Technology logo"
              width={120}
              height={120}
              className="h-20 w-20"
            />
          </a>
          <p className="max-w-sm text-sm leading-relaxed">
            Gulf Coast Academy TSA prepares tomorrow&apos;s innovators through
            leadership, technology, engineering, and design — proudly part of
            Gulf Coast Academy of Innovation &amp; Technology @Brookside in
            Sarasota County Schools.
          </p>
          <div className="mt-5 flex gap-3">
            
              href="#"
              aria-label="Gulf Coast Academy TSA on Facebook"
              className="rounded-full border border-white/20 p-2 transition-colors hover:border-green-400 hover:text-green-400"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>
            
              href="#"
              aria-label="Gulf Coast Academy TSA on Instagram"
              className="rounded-full border border-white/20 p-2 transition-colors hover:border-green-400 hover:text-green-400"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            
              href="#"
              aria-label="Gulf Coast Academy TSA on X (Twitter)"
              className="rounded-full border border-white/20 p-2 transition-colors hover:border-green-400 hover:text-green-400"
            >
              <Twitter size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-green-400">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="rounded hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-green-400">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-green-400" aria-hidden="true" />
              <span>
                GCA TSA
                <br />
                3636 S. Shade Ave, Room 7-102
                <br />
                Sarasota, FL 34239
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="shrink-0 text-green-400" aria-hidden="true" />
              <a href="mailto:alister.munroe@sarasotacountyschools.net" className="rounded hover:underline">
                alister.munroe@sarasotacountyschools.net
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="shrink-0 text-green-400" aria-hidden="true" />
              <a href="tel:19413616462" className="rounded hover:underline">
                941-361-6462 Ext 61591
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="mx-auto max-w-7xl px-4 text-center text-xs text-white/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Gulf Coast Academy TSA. All rights reserved. Gulf
          Coast Academy TSA is a chapter of the Technology Student Association.
        </p>
      </div>
    </footer>
  );
}
