"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import CircuitBackground from "@/components/CircuitBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      {/* Subtle fixed grid to reinforce the "board" surface beneath the traces */}
      <div className="absolute inset-0 bg-circuit-grid bg-[size:44px_44px]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-800" aria-hidden="true" />
      <CircuitBackground />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/images/logo-tsa-shield.png"
            alt="Gulf Coast Academy TSA shield emblem"
            width={400}
            height={400}
            className="mx-auto mb-8 h-64 w-64 drop-shadow-[0_0_25px_rgba(91,197,0,0.35)] sm:h-80 sm:w-80 md:h-96 md:w-96"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eyebrow"
        >
          Gulf Coast Academy · Chapter of the Technology Student Association
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-4xl font-black leading-[1.05] text-white sm:text-6xl"
        >
          Gulf Coast Academy TSA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 max-w-2xl font-heading text-lg font-medium text-white/85 sm:text-xl"
        >
          Preparing tomorrow&apos;s innovators through leadership, technology,
          engineering, and design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/get-involved" className="btn-primary">
            Join TSA
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href="/events" className="btn-secondary">
            <CalendarDays size={18} aria-hidden="true" />
            View Events
          </Link>
        </motion.div>
      </div>

      {/* Bottom edge trace divider */}
      <div className="relative h-3 bg-gradient-to-r from-navy-800 via-green-400 to-navy-800" aria-hidden="true" />
    </section>
  );
}
