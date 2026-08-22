import type { EventCategory, Participation, FormatTag } from "@/lib/events";

export interface PilotEvent {
  slug: string;
  name: string;
  category: EventCategory;
  participation: Participation;
  teamSize: string;
  formatTags: FormatTag[];
  description: string;
  skills: string[];
}

// New for the 2026 Florida TSA State Conference only — not offered at Nationals (yet).
// Add Fashion Design here once its event guide is available.
export const PILOT_EVENTS: PilotEvent[] = [
  {
    slug: "board-game-design",
    name: "Board Game Design",
    category: "Engineering & Design",
    participation: "Team",
    teamSize: "Team (1 per chapter; 2–3 members represent the team on site)",
    formatTags: ["Portfolio", "Pre-Submission", "Interview", "Presentation"],
    description:
      "Design, build, and package an entirely original board game, including all pieces and components, engineered and assembled solely by the team. Semifinalists set up and demonstrate the game, then answer judges' questions about its design, purpose, and development process.",
    skills: ["Product/packaging design", "Game design", "Technical writing", "Prototyping"],
  },
  {
    slug: "future-technology-and-engineering-teacher",
    name: "Future Technology & Engineering Teacher",
    category: "Leadership & Communication",
    participation: "Individual",
    teamSize: "Individual (up to 3 per chapter)",
    formatTags: ["Portfolio", "Pre-Submission", "Presentation"],
    description:
      "Build a portfolio exploring interest in the teaching profession, including research on two educational technologies and an original lesson plan aligned to technological literacy standards. Semifinalists deliver the lesson's activity live, with judges acting as students.",
    skills: ["Lesson planning", "Public speaking", "Educational technology research"],
  },
  {
    slug: "music-production",
    name: "Music Production",
    category: "Technology & Computer Science",
    participation: "Team",
    teamSize: "Team (1 per chapter)",
    formatTags: ["Portfolio", "Pre-Submission"],
    description:
      "Compose and produce an original 1–3 minute musical piece suited for playing at halftime of an athletic event, along with a documentation portfolio covering the creative and technical process. Both the audio file and portfolio are submitted online before the conference.",
    skills: ["Music composition", "Audio production", "Technical documentation"],
  },
];
