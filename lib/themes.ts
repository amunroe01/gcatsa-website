export interface EventTheme {
  eventSlug: string; // matches TsaEvent.slug in lib/events.ts
  themeTitle: string;
  brief: string;
  resources?: { label: string; url: string }[];
}

// Sourced from tsaweb.org/competitions/themes-and-problems (Middle School, 2026-2027 cycle).
// Only events with a posted theme/problem appear here — see lib/events.ts for the full 37-event list.
export const EVENT_THEMES: EventTheme[] = [
  {
    eventSlug: "audio-podcasting",
    themeTitle: "Breaking News from the Future",
    brief:
      "Report live, as breaking news, on a fictional future event, discovery, invention, or crisis.",
  },
  {
    eventSlug: "biotechnology",
    themeTitle: "Biotechnology in Food",
    brief:
      "Explain how biotechnology improves crops, extends shelf life, or creates new foods, and describe one specific benefit it offers farmers or consumers.",
  },
  {
    eventSlug: "career-prep",
    themeTitle: "Digital Technology Career Cluster",
    brief:
      "Choose one career from TSA's Digital Technology cluster: Data Science & AI, IT Support & Services, Network Systems & Cybersecurity, Software Solutions, or Unmanned Vehicle Technology.",
  },
  {
    eventSlug: "challenging-technology-issues",
    themeTitle: "2027 Debate Topics",
    brief:
      "Five topics are posted in advance (AI writing news articles, coding as a required middle school subject, VR replacing physical science labs, medical tourism, and robots in elder/child care) — one is drawn at random on site.",
  },
  {
    eventSlug: "childrens-stories",
    themeTitle: "Weather Storybook",
    brief:
      "Create an illustrated storybook about weather that includes at least five tactile elements.",
  },
  {
    eventSlug: "coding",
    themeTitle: "Scratch Programming Challenge",
    brief:
      "The semifinal onsite challenge uses MIT's free Scratch language. Download the offline version ahead of time — there's no internet access during the semifinal round.",
    resources: [{ label: "Get Scratch (offline)", url: "https://scratch.mit.edu/download" }],
  },
  {
    eventSlug: "construction-challenge",
    themeTitle: "Urban Community Greenhouse & Garden",
    brief:
      "Design a greenhouse and garden for a dense city block (a tight 25 × 100 ft lot) that safely fits 20–30 community members and uses at least two sustainable design practices.",
  },
  {
    eventSlug: "cybersecurity",
    themeTitle: "The FinStream Data Breach",
    brief:
      "A fictional fintech company's security team spots a departing employee exfiltrating sensitive data. Recommend the immediate response, investigation steps, and policy changes.",
  },
  {
    eventSlug: "data-science-and-analytics",
    themeTitle: "Yellowstone Wildlife Migration",
    brief:
      "Analyze 50 years of Yellowstone wildlife and migration data to build evidence-based criteria the park can use for conservation planning.",
    resources: [
      {
        label: "Yellowstone Wildlife Dataset (.csv)",
        url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/middle-school/yellowstone_wildlife.csv?sfvrsn=884ed5a9_1",
      },
    ],
  },
  {
    eventSlug: "digital-photography",
    themeTitle: "ROY G. BIV Series",
    brief:
      "Shoot seven photos, one per color of the rainbow, unified by a single consistent theme, story, or subject across the whole set.",
  },
  {
    eventSlug: "dragster",
    themeTitle: "No Theme for 2027",
    brief:
      "This event has no annual theme this cycle — build to the official specifications in the event guide instead.",
  },
  {
    eventSlug: "drone-challenge",
    themeTitle: "Humanitarian Aid & Rescue",
    brief:
      "Apply drone flight skills to a humanitarian aid and rescue scenario. Full theme details are in the official PDF.",
    resources: [
      {
        label: "2027 Drone Theme (PDF)",
        url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/middle-school/2027-ms-drone-theme.pdf?sfvrsn=26c64b18_1",
      },
    ],
  },
  {
    eventSlug: "forensic-technology",
    themeTitle: "Forensic Focus Areas",
    brief:
      "Study three skill areas for the onsite demonstration: forensic biology/genetics, toxicology, and forensic psychology.",
  },
  {
    eventSlug: "mass-production",
    themeTitle: "Automata Box",
    brief: "Design and manufacture an Automata Box as this year's product concept.",
  },
  {
    eventSlug: "mechanical-engineering",
    themeTitle: "2027 Problem Statement",
    brief: "The catapult design problem for this cycle is posted as an official PDF.",
    resources: [
      {
        label: "2027 Problem Statement (PDF)",
        url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/middle-school/2027-mechanical-engineering-problem.pdf?sfvrsn=cd827ca6_1",
      },
    ],
  },
  {
    eventSlug: "medical-technology",
    themeTitle: "Pulmonological Conditions & Modern Technology",
    brief:
      "Choose a respiratory-related condition and a modern medical technology that addresses it, presented through a display, pamphlet, and video.",
  },
  {
    eventSlug: "microcontroller-design",
    themeTitle: "Wearable Technology",
    brief: "Design a working microcontroller device in the wearable technology space.",
  },
  {
    eventSlug: "off-the-grid",
    themeTitle: "Resilient Housing in Cabo San Lucas",
    brief:
      "Design an affordable, single-level home for a multi-generational family in an informal desert settlement — addressing extreme heat, wind, and flooding with passive cooling, water collection, resilient construction, and a realistic budget.",
  },
  {
    eventSlug: "prepared-speech",
    themeTitle: "Forward to Fifty",
    brief: "Speeches tie into the 2027 National TSA Conference theme, \"Forward to Fifty.\"",
  },
  {
    eventSlug: "promotional-marketing",
    themeTitle: "Discover TSA: Open House & Recruitment Night",
    brief:
      "Build a 3-part campaign (print/social graphic, a wearable lapel pin design, and a digital auto-advancing presentation) for a fictional chapter recruitment event, using the event details provided in the official brief.",
  },
  {
    eventSlug: "robotics",
    themeTitle: "2027 Robotics Theme",
    brief: "This year's build challenge and specifications are posted as an official PDF.",
    resources: [
      {
        label: "2027 Robotics Theme (PDF)",
        url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/middle-school/2027-robotics-ms.pdf?sfvrsn=b5f63725_1",
      },
    ],
  },
  {
    eventSlug: "solar-racer",
    themeTitle: "2027 Track Surface",
    brief: "Cars will race on a model solar track set on top of carpet at the National Conference.",
  },
  {
    eventSlug: "stem-animation",
    themeTitle: "Think. Design. Create.",
    brief: "Create an animation centered on the engineering design process.",
  },
  {
    eventSlug: "structural-engineering",
    themeTitle: "2027 Design Brief",
    brief: "This year's structure challenge and load-testing requirements are posted as official PDFs.",
    resources: [
      {
        label: "2027 Design Brief (PDF)",
        url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/middle-school/2027-ms-structural-engineering-design-brief.pdf?sfvrsn=24b8197d_1",
      },
      {
        label: "Verification Form (PDF)",
        url: "https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2026-2027/middle-school/ms-structural-engineering-verification-form.pdf?sfvrsn=dcf0cd01_1",
      },
    ],
  },
  {
    eventSlug: "website-design",
    themeTitle: "Fictional Space Exploration Program",
    brief:
      "Build an informational website for an imagined space mission that educates and inspires a student-age audience about its goals, crew, technology, and significance.",
  },
];

// Events with no posted 2027 theme — the "problem" is generated on site, is a
// knowledge test, or the topic is entirely the student's own choice.
export const NO_THEME_EVENTS: { eventSlug: string; reason: string }[] = [
  { eventSlug: "cad-foundations", reason: "Drawing is based on a sketch given on site." },
  { eventSlug: "chapter-team", reason: "Based on a parliamentary procedure test and live meeting simulation." },
  { eventSlug: "community-service-video", reason: "Documents your own chapter's service project, not a set topic." },
  { eventSlug: "electrical-applications", reason: "Circuit challenge is presented on site." },
  { eventSlug: "flight", reason: "Open design goal (maximum flight time), no set topic." },
  { eventSlug: "inventions-and-innovations", reason: "Students choose their own need or problem to solve." },
  { eventSlug: "leadership-strategies", reason: "Officer challenge scenario is drawn on site." },
  { eventSlug: "problem-solving", reason: "Challenge is a surprise, presented on site." },
  { eventSlug: "system-control-technology", reason: "Automation problem is presented on site." },
  { eventSlug: "tech-bowl", reason: "Objective knowledge test — no themed topic." },
  { eventSlug: "technical-design", reason: "Engineering problem is given on site at the conference." },
  { eventSlug: "video-game-design", reason: "Students choose their own game subject." },
];
