import { Construction } from "lucide-react";

export default function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-navy-50 py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-green-400">
          <Construction size={28} aria-hidden="true" />
        </div>
        <p className="eyebrow justify-center">Under Construction</p>
        <h1 className="mt-3 text-3xl font-black text-navy-800 sm:text-4xl">{title}</h1>
        <p className="mt-4 font-body leading-relaxed text-navy-700">{description}</p>
      </div>
    </section>
  );
}
