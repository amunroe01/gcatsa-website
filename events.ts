export type EventCategory = "Technology" | "Engineering" | "Leadership";

export interface TsaEvent {
  slug: string;
  name: string;
  category: EventCategory;
  teamSize: string;
  format: string;
  description: string;
  skills: string[];
  resources: { label: string; url: string }[];
}

export const EVENTS: TsaEvent[] = [
  // ---------- TECHNOLOGY ----------
  {
    slug: "cad-foundations",
    name: "CAD Foundations",
    category: "Technology",
    teamSize: "Individual (up to 2 entries per chapter)",
    format: "On-site only — 30 min setup, 2 hrs to draft, 1 hr final evaluation",
    description:
      "Competitors use computer-aided design software to turn a given isometric sketch into a complete, correctly dimensioned two-dimensional engineering drawing, working solo at the conference with their own computer.",
    skills: ["CAD software (2D drafting)", "Dimensioning & line conventions", "Reading isometric drawings", "Time management"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
  {
    slug: "coding",
    name: "Coding",
    category: "Technology",
    teamSize: "Team of 2",
    format: "Written test (1 hr) → top 12 teams advance to a 2-hr on-site coding challenge",
    description:
      "Teams first prove their grasp of programming fundamentals — syntax, data structures, control flow, object-oriented concepts — on a timed test, then semifinalist teams solve a live programming challenge on their own laptops with no internet access.",
    skills: ["Programming fundamentals", "Data structures", "Debugging under time pressure", "Team collaboration"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
  {
    slug: "construction-challenge",
    name: "Construction Challenge",
    category: "Technology",
    teamSize: "Team of 2 or more",
    format: "Pre-built scale model + portfolio → semifinalist presentation & interview (10 min)",
    description:
      "Teams design and build a scale model construction solution addressing the year's annual theme, backed by a documentation portfolio, then present and field judges' questions on-site.",
    skills: ["Model building", "Technical documentation", "Public speaking", "Project planning"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
  {
    slug: "data-science-and-analytics",
    name: "Data Science & Analytics",
    category: "Technology",
    teamSize: "Team of 2–3",
    format: "Pre-conference display + portfolio → semifinalist presentation (5 min) & Q&A (5 min)",
    description:
      "Teams analyze a provided real-world data set tied to the annual topic, draw conclusions, and present their findings as a static display and documentation portfolio, then defend their analysis live at the conference.",
    skills: ["Data analysis", "Research", "Data visualization", "Presenting findings"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
  {
    slug: "dragster",
    name: "Dragster",
    category: "Technology",
    teamSize: "Individual (up to 2 entries per chapter)",
    format: "On-site check-in and race day — time trials, spec check, then double-elimination race bracket",
    description:
      "Competitors design, build, and race a CO2-powered dragster to exact specifications, submitting a scale technical drawing alongside the car — scoring combines race time, craftsmanship, and drawing accuracy.",
    skills: ["Aerodynamic design", "Technical drawing", "Fabrication", "Physics of motion"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
  {
    slug: "video-game-design",
    name: "Video Game Design",
    category: "Technology",
    teamSize: "Team of 2–6",
    format: "Pre-conference online submission → semifinalist presentation & interview (10 min)",
    description:
      "Teams build and publish an original, E-rated video game (3+ minutes of playable content) with a full design portfolio, then walk semifinalist judges through their design and development process.",
    skills: ["Game design", "Programming", "Storytelling", "Original art/audio creation"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },

  // ---------- ENGINEERING ----------
  {
    slug: "structural-engineering",
    name: "Structural Engineering",
    category: "Engineering",
    teamSize: "Team of 2",
    format: "Pre-built structure + portfolio → on-site destructive load testing (3 hrs)",
    description:
      "Teams research, design, and pre-build a structure to a published design brief, then bring it to the conference for destructive testing that measures its strength-to-weight efficiency — safety eyewear required on-site.",
    skills: ["Structural design principles", "Technical drawing", "Load & materials testing", "Research"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
  {
    slug: "inventions-and-innovations",
    name: "Inventions & Innovations",
    category: "Engineering",
    teamSize: "Team of 2–4",
    format: "Static display + model/prototype → semifinalist \"sales pitch\" (7 min) & Q&A (2 min)",
    description:
      "Teams identify a real need and design an original invention or innovation built mostly from recycled materials, then pitch it to a judging panel acting as venture capital investors.",
    skills: ["Ideation & research", "Prototyping", "Persuasive pitching", "Sustainable design"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
  {
    slug: "prepared-speech",
    name: "Prepared Speech",
    category: "Engineering",
    teamSize: "Individual",
    format: "3–5 minute speech, delivered live to judges with no props or notes beyond cards",
    description:
      "Competitors write and deliver an original speech built around the current year's national conference theme, judged on content, organization, and stage presence — no props, slides, or costumes allowed.",
    skills: ["Public speaking", "Persuasive writing", "Stage presence", "Time management"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
  {
    slug: "problem-solving",
    name: "Problem Solving",
    category: "Engineering",
    teamSize: "Team of 2",
    format: "On-site build challenge — 90 minutes to design and construct a solution",
    description:
      "Teams are handed a hands-on engineering problem on the spot and must design, build, and test a physical solution within a strict time limit using only their own toolbox of approved materials.",
    skills: ["On-the-spot problem solving", "Hands-on fabrication", "Teamwork under pressure", "Materials science"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },

  // ---------- LEADERSHIP ----------
  {
    slug: "leadership-strategies",
    name: "Leadership Strategies",
    category: "Leadership",
    teamSize: "Team of 3",
    format: "Impromptu — draw a topic, prepare for 15 min, present live for 3–5 min",
    description:
      "Teams draw a random leadership scenario a TSA chapter officer might face, prepare a short response with no outside resources, and present their strategy to judges on the spot.",
    skills: ["Impromptu speaking", "Leadership thinking", "Teamwork", "Composure under pressure"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
  {
    slug: "promotional-marketing",
    name: "Promotional Marketing",
    category: "Leadership",
    teamSize: "Individual",
    format: "Pre-conference portfolio (print ad, wearable design, digital signage) → on-site design challenge (1 hr)",
    description:
      "Competitors design a three-part marketing campaign — a print advertisement, a wearable design, and digital signage — around the year's theme, then complete a timed on-site design challenge at the conference.",
    skills: ["Graphic design", "Marketing/branding", "Software fluency (design tools)", "Original content creation"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
  {
    slug: "stem-animation",
    name: "STEM Animation",
    category: "Leadership",
    teamSize: "Team of 2 or more",
    format: "Pre-conference video (≤3 min) + portfolio → semifinalist presentation (10 min)",
    description:
      "Teams create an original animation that communicates a STEM concept, built entirely from scratch — no purchased assets or templates allowed — and document their process in a hand-sketched storyboard portfolio.",
    skills: ["Animation & storytelling", "STEM communication", "Storyboarding", "Original asset creation"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "Khan Academy — Pixar in a Box", url: "https://www.khanacademy.org" },
    ],
  },
  {
    slug: "system-control-technology",
    name: "System Control Technology",
    category: "Leadership",
    teamSize: "Team of 3",
    format: "On-site build — 30 min setup, 15 min analysis, 2.5 hrs to build, program & demo",
    description:
      "Teams are given an industrial-style automation problem on-site and must build and program a working computer-controlled model — sensors, motors, and all — then demonstrate and explain it live to judges.",
    skills: ["Programming/automation logic", "Mechanical building", "Systems thinking", "Live demonstration"],
    resources: [
      { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" },
      { label: "TSA Middle School Events", url: "https://tsaweb.org" },
    ],
  },
];

export const CATEGORIES: EventCategory[] = ["Technology", "Engineering", "Leadership"];
