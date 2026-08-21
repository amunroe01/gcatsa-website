"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/themes", label: "2027 Themes & Problems" },
  { href: "/calendar", label: "Calendar" },
  { href: "/officers", label: "Officers" },
  { href: "/about", label: "About Us" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the viewport is resized back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-700/20 bg-navy-800 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded py-1"
          aria-label="Gulf Coast Academy TSA home"
        >
          <Image
            src="/images/logo-horizontal-dark.png"
            alt="Gulf Coast Academy of Innovation & Technology logo"
            width={150}
            height={110}
            className="h-14 w-auto"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Gulf Coast Academy
            </span>
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
              Technology Student Association
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded px-3 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-green-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link href="/get-involved" className="btn-primary text-sm">
            Join TSA
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-t border-white/10 bg-navy-800 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-3 font-heading text-base font-semibold uppercase tracking-wide text-white/90 hover:bg-white/10 hover:text-green-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/get-involved"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Join TSA
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
