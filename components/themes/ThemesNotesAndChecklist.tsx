import { CheckCircle2, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";

const TEACHER_NOTES = [
  "Themes and problems are posted directly by National TSA and can be updated mid-year — check tsaweb.org's Themes & Problems page periodically, not just once at the start of the year.",
  "A few events (Off the Grid, Structural Engineering, Mechanical Engineering) have detailed design briefs as separate PDF downloads — students should read the full brief, not just the short summary here.",
  "Structural Engineering also requires a signed Verification Form; build that into your timeline well before the submission deadline.",
  "Events without a set theme (Problem Solving, Technical Design, System Control Technology, Electrical Applications) hand out their challenge on site — practice general problem-solving and fabrication skills instead of researching a topic.",
  "Coding's semifinal round requires the offline version of Scratch — confirm it's installed on competition laptops well before the conference, since there's no internet access during that round.",
];

const STUDENT_CHECKLIST = [
  "Read your event's full official rules on tsaweb.org — this page is a summary, not a substitute.",
  "Confirm your team size and eligibility for the event.",
  "Note every submission deadline and add it to your own calendar.",
  "Download any required forms, datasets, or design briefs linked above.",
  "Start your documentation portfolio early — most events grade it as its own category.",
  "Practice your presentation or interview out loud, not just in your head.",
  "Check in with your chapter advisor before finalizing your entry.",
];

export default function ThemesNotesAndChecklist() {
  return (
    <section className="bg-navy-50 py-16 sm:py-20" aria-labelledby="notes-heading">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-white">
            <GraduationCap size={24} aria-hidden="true" />
          </div>
          <h2 id="notes-heading" className="text-2xl font-black text-navy-800">
            Teacher Notes
          </h2>
          <ul className="mt-5 space-y-4">
            {TEACHER_NOTES.map((note) => (
              <li key={note} className="flex gap-3">
                <span className="via-node mt-2 shrink-0" aria-hidden="true" />
                <p className="font-body text-sm leading-relaxed text-steel-700">{note}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-400 text-navy-900">
            <CheckCircle2 size={24} aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-black text-navy-800">Student Checklist</h2>
          <ul className="mt-5 space-y-3 rounded-xl border border-navy-100 bg-white p-6">
            {STUDENT_CHECKLIST.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-600" aria-hidden="true" />
                <p className="font-body text-sm leading-relaxed text-navy-700">{item}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
