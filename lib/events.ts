export type EventCategory =
  | "Technology & Computer Science"
  | "Engineering & Design"
  | "Transportation & Robotics"
  | "Science & Medical"
  | "Leadership & Communication";

export type Participation = "Individual" | "Team" | "Individual or Team";

export type FormatTag =
  | "Onsite Challenge"
  | "Interview"
  | "Presentation"
  | "Written Test"
  | "Portfolio"
  | "Pre-Submission";

export interface TsaEvent {
  slug: string;
  name: string;
  category: EventCategory;
  participation: Participation;
  teamSize: string;
  formatTags: FormatTag[];
  description: string;
  skills: string[];
  resources: { label: string; url: string }[];
}

const TSA_LINK = { label: "TSA Themes & Problems", url: "https://tsaweb.org/competitions/themes-and-problems" };
const TSA_HOME = { label: "TSA Middle School Events", url: "https://tsaweb.org" };

export const EVENTS: TsaEvent[] = [
  {
    slug: "audio-podcasting",
    name: "Audio Podcasting",
    category: "Technology & Computer Science",
    participation: "Individual or Team",
    teamSize: "Individual or team (up to 3 entries per state)",
    formatTags: ["Portfolio", "Pre-Submission", "Onsite Challenge"],
    description:
      "Produce an original podcast episode addressing the annual theme, using strong storytelling, voice acting, and sound effects, along with documentation of the creative process. Semifinalists produce an additional podcast on the spot at the conference.",
    skills: ["Audio production", "Storytelling", "Voice acting", "Sound design"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "biotechnology",
    name: "Biotechnology",
    category: "Science & Medical",
    participation: "Team",
    teamSize: "Team of 3+ (up to 5 teams per state)",
    formatTags: ["Portfolio", "Interview"],
    description:
      "Research a current biotechnology issue tied to the annual theme and present your findings through a documented display. Semifinalist teams are interviewed by judges about their research.",
    skills: ["Scientific research", "Data presentation", "Biotechnology concepts"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "career-prep",
    name: "Career Prep",
    category: "Leadership & Communication",
    participation: "Individual",
    teamSize: "Individual (1 per chapter)",
    formatTags: ["Pre-Submission", "Interview"],
    description:
      "Research a technology-related career, then prepare a letter of introduction and a job-specific resume for a potential employer. Semifinalists complete a mock job interview.",
    skills: ["Career research", "Resume writing", "Interview skills"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "challenging-technology-issues",
    name: "Challenging Technology Issues",
    category: "Leadership & Communication",
    participation: "Team",
    teamSize: "Team of 2 (3 teams per state)",
    formatTags: ["Onsite Challenge", "Presentation"],
    description:
      "Draw a technology topic on site from a pre-posted list, then prepare and deliver a debate-style presentation covering both sides of the issue.",
    skills: ["Debate", "Critical thinking", "Public speaking", "Research"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "chapter-team",
    name: "Chapter Team",
    category: "Leadership & Communication",
    participation: "Team",
    teamSize: "Team of 6 per chapter",
    formatTags: ["Written Test", "Onsite Challenge", "Presentation"],
    description:
      "Pass a parliamentary procedure test to reach the semifinal round, then run a full simulated chapter meeting — opening ceremony, items of business, parliamentary motions, and closing ceremony.",
    skills: ["Parliamentary procedure", "Public speaking", "Teamwork", "Meeting facilitation"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "childrens-stories",
    name: "Children's Stories",
    category: "Leadership & Communication",
    participation: "Individual or Team",
    teamSize: "Individual or team (3 entries per state)",
    formatTags: ["Pre-Submission", "Interview", "Presentation"],
    description:
      "Write and illustrate an original children's storybook based on the annual theme, with artistic, instructional, and social value. Semifinalists read their story aloud and are interviewed.",
    skills: ["Creative writing", "Illustration", "Storytelling", "Public speaking"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "coding",
    name: "Coding",
    category: "Technology & Computer Science",
    participation: "Team",
    teamSize: "Team of 2 per chapter",
    formatTags: ["Written Test", "Onsite Challenge"],
    description:
      "Take a written test on programming fundamentals and computer science to reach the semifinal round, then solve a live coding challenge on site to demonstrate programming knowledge.",
    skills: ["Programming fundamentals", "Data structures", "Debugging under time pressure"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "community-service-video",
    name: "Community Service Video",
    category: "Leadership & Communication",
    participation: "Individual or Team",
    teamSize: "Individual or team (1 per chapter)",
    formatTags: ["Pre-Submission", "Presentation", "Interview"],
    description:
      "Create a video documenting your TSA chapter's involvement in a community service project. Semifinalists present the project and are interviewed about it.",
    skills: ["Video production", "Storytelling", "Public speaking"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "cad-foundations",
    name: "CAD Foundations",
    category: "Engineering & Design",
    participation: "Individual",
    teamSize: "Individual (2 per state)",
    formatTags: ["Onsite Challenge"],
    description:
      "Use computer-aided design software to create a two-dimensional drawing of an engineering part or object on site, then answer evaluators' questions about the design.",
    skills: ["CAD software (2D drafting)", "Dimensioning & line conventions", "Technical drawing"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "construction-challenge",
    name: "Construction Challenge",
    category: "Engineering & Design",
    participation: "Team",
    teamSize: "Team of 2+ per chapter",
    formatTags: ["Portfolio", "Pre-Submission", "Presentation", "Interview"],
    description:
      "Design and build a scale model construction solution addressing the annual theme, backed by a documentation portfolio. Semifinalists present and field judges' questions.",
    skills: ["Model building", "Technical documentation", "Public speaking"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    category: "Technology & Computer Science",
    participation: "Individual",
    teamSize: "Individual (up to 3 per chapter)",
    formatTags: ["Written Test", "Presentation"],
    description:
      "Take a test assessing cybersecurity vocabulary and common cybersecurity tasks. Semifinalists deliver a digital presentation addressing the annual theme.",
    skills: ["Cybersecurity fundamentals", "Digital presentation software"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "data-science-and-analytics",
    name: "Data Science & Analytics",
    category: "Technology & Computer Science",
    participation: "Team",
    teamSize: "Team of 2–3 per state",
    formatTags: ["Portfolio", "Presentation"],
    description:
      "Analyze a provided real-world data set tied to the annual topic, document your research and conclusions, and create a display. Semifinalists present their findings on site.",
    skills: ["Data analysis", "Research", "Data visualization"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "digital-photography",
    name: "Digital Photography",
    category: "Technology & Computer Science",
    participation: "Individual",
    teamSize: "Individual (3 per state)",
    formatTags: ["Pre-Submission", "Onsite Challenge", "Interview"],
    description:
      "Submit a digital photography portfolio relating to the annual theme. Semifinalists complete an onsite photography challenge plus a presentation and interview.",
    skills: ["Photography", "Photo editing", "Visual storytelling"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "dragster",
    name: "Dragster",
    category: "Transportation & Robotics",
    participation: "Individual",
    teamSize: "Individual (2 per chapter)",
    formatTags: ["Portfolio", "Pre-Submission", "Onsite Challenge", "Interview"],
    description:
      "Design, draw, and build a CO2-powered dragster to exact specifications. Semifinalists are interviewed and compete in a double-elimination race.",
    skills: ["Aerodynamic design", "Technical drawing", "Fabrication"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "drone-challenge",
    name: "Drone Challenge (UAV)",
    category: "Transportation & Robotics",
    participation: "Team",
    teamSize: "Team of 2 per state",
    formatTags: ["Portfolio", "Pre-Submission", "Onsite Challenge", "Interview"],
    description:
      "Study the principles of flight and drone applications tied to the annual theme, then complete manual flight missions and build a documentation portfolio. Semifinalists are interviewed.",
    skills: ["Drone piloting", "Flight principles", "Documentation"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "electrical-applications",
    name: "Electrical Applications",
    category: "Engineering & Design",
    participation: "Team",
    teamSize: "Team of 2 per chapter",
    formatTags: ["Written Test", "Onsite Challenge", "Interview"],
    description:
      "Take a test on basic electrical and electronic theory. Semifinalists assemble a specified circuit from a schematic on site, take measurements, and explain their solution.",
    skills: ["Electrical theory", "Circuit assembly", "Troubleshooting"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "flight",
    name: "Flight",
    category: "Transportation & Robotics",
    participation: "Individual",
    teamSize: "Individual (2 per chapter)",
    formatTags: ["Portfolio", "Pre-Submission", "Onsite Challenge"],
    description:
      "Submit a documentation portfolio and build a glider designed for maximum flight time. Semifinalists use technical drawing skills to build and fly a second glider on site.",
    skills: ["Aerodynamics", "Technical drawing", "Fabrication"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "forensic-technology",
    name: "Forensic Technology",
    category: "Science & Medical",
    participation: "Team",
    teamSize: "Team of 2 per chapter",
    formatTags: ["Written Test", "Onsite Challenge"],
    description:
      "Take a test on basic forensic science theory to reach the semifinal round, then complete a hands-on forensic skills demonstration on site.",
    skills: ["Forensic science", "Analytical thinking"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "inventions-and-innovations",
    name: "Inventions & Innovations",
    category: "Engineering & Design",
    participation: "Team",
    teamSize: "Team of 2–4 per chapter",
    formatTags: ["Portfolio", "Pre-Submission", "Presentation", "Interview"],
    description:
      "Research a real need and design an original invention or innovation built mostly from recycled materials. Semifinalists present their work and are interviewed.",
    skills: ["Ideation & research", "Prototyping", "Persuasive pitching"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "leadership-strategies",
    name: "Leadership Strategies",
    category: "Leadership & Communication",
    participation: "Team",
    teamSize: "Team of 3 per state",
    formatTags: ["Onsite Challenge", "Presentation"],
    description:
      "Prepare and deliver a presentation on a specific challenge a TSA chapter officer might face. Semifinalists respond to a different chapter challenge using the same format.",
    skills: ["Impromptu speaking", "Leadership thinking", "Teamwork"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "mass-production",
    name: "Mass Production",
    category: "Engineering & Design",
    participation: "Team",
    teamSize: "Team of 3+ per chapter",
    formatTags: ["Portfolio", "Pre-Submission", "Interview"],
    description:
      "Manufacture a marketable product addressing the annual theme, documenting the mass-production process in a portfolio. Semifinalists demonstrate the prototype and are interviewed.",
    skills: ["Manufacturing process", "Product design", "Documentation"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "mechanical-engineering",
    name: "Mechanical Engineering",
    category: "Engineering & Design",
    participation: "Team",
    teamSize: "Team of 2 per chapter",
    formatTags: ["Portfolio", "Pre-Submission", "Onsite Challenge"],
    description:
      "Design, document, and build a working mechanical device (a catapult) that incorporates the annual theme. Finalists are determined by the portfolio and a head-to-head bracket competition.",
    skills: ["Mechanical design", "Technical documentation", "Fabrication"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "medical-technology",
    name: "Medical Technology",
    category: "Science & Medical",
    participation: "Team",
    teamSize: "Team of 2–3 per state",
    formatTags: ["Portfolio", "Pre-Submission", "Presentation", "Interview"],
    description:
      "Research a contemporary medical technology issue tied to the annual theme, build a display and prototype, and document your work. Semifinalists present and are interviewed.",
    skills: ["Scientific research", "Prototyping", "Presentation skills"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "microcontroller-design",
    name: "Microcontroller Design",
    category: "Technology & Computer Science",
    participation: "Individual or Team",
    teamSize: "Individual or team (1 team per chapter)",
    formatTags: ["Portfolio", "Pre-Submission", "Presentation"],
    description:
      "Design and build a working digital device addressing the annual theme, documenting the development process and demonstrating the product as part of a presentation.",
    skills: ["Microcontroller programming", "Electronics", "Documentation"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "off-the-grid",
    name: "Off the Grid",
    category: "Engineering & Design",
    participation: "Individual or Team",
    teamSize: "Individual or team (3 teams per state)",
    formatTags: ["Portfolio", "Pre-Submission", "Presentation", "Interview"],
    description:
      "Research a sustainable architectural design for a home in a specified country, then build a portfolio, display, and model. Semifinalists present their design and are interviewed.",
    skills: ["Sustainable design", "Architecture research", "Model building"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "prepared-speech",
    name: "Prepared Speech",
    category: "Leadership & Communication",
    participation: "Individual",
    teamSize: "Individual (3 per state)",
    formatTags: ["Presentation"],
    description:
      "Write and deliver an original, timed speech built around the current national TSA conference theme, judged on content, organization, and stage presence.",
    skills: ["Public speaking", "Persuasive writing", "Stage presence"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "problem-solving",
    name: "Problem Solving",
    category: "Engineering & Design",
    participation: "Team",
    teamSize: "Team of 2 per chapter",
    formatTags: ["Onsite Challenge"],
    description:
      "Use problem-solving skills to design and build a solution to a surprise onsite challenge, evaluated by measures like elapsed time, distance, or strength.",
    skills: ["On-the-spot problem solving", "Hands-on fabrication", "Teamwork under pressure"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "promotional-marketing",
    name: "Promotional Marketing",
    category: "Leadership & Communication",
    participation: "Individual",
    teamSize: "Individual (1 per chapter)",
    formatTags: ["Portfolio", "Pre-Submission", "Onsite Challenge"],
    description:
      "Create a marketing portfolio addressing the annual theme. Semifinalists complete a layout and design assignment on site for evaluation.",
    skills: ["Graphic design", "Marketing/branding", "Software fluency"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "robotics",
    name: "Robotics",
    category: "Transportation & Robotics",
    participation: "Team",
    teamSize: "Team of 2–6 per state",
    formatTags: ["Portfolio", "Pre-Submission", "Onsite Challenge"],
    description:
      "Design, build, document, and test a robot assembled from open-source parts to meet the yearly theme's challenge and stated specifications.",
    skills: ["Robotics", "Programming", "Mechanical building"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "solar-racer",
    name: "Solar Racer",
    category: "Transportation & Robotics",
    participation: "Team",
    teamSize: "Team of 2–4 per chapter",
    formatTags: ["Portfolio", "Pre-Submission", "Onsite Challenge"],
    description:
      "Apply STEM concepts, creativity, and teamwork to design, build, and race a solar-powered model car, with full documentation of the process.",
    skills: ["Solar/renewable energy concepts", "Fabrication", "Teamwork"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "stem-animation",
    name: "STEM Animation",
    category: "Technology & Computer Science",
    participation: "Team",
    teamSize: "Team of 2+ per state",
    formatTags: ["Portfolio", "Pre-Submission", "Presentation"],
    description:
      "Design and create an original animation communicating a STEM concept, along with a documentation portfolio. Semifinalists present their animation and portfolio.",
    skills: ["Animation & storytelling", "STEM communication", "Storyboarding"],
    resources: [TSA_LINK, { label: "Khan Academy — Pixar in a Box", url: "https://www.khanacademy.org" }],
  },
  {
    slug: "structural-engineering",
    name: "Structural Engineering",
    category: "Engineering & Design",
    participation: "Team",
    teamSize: "Team of 2 per chapter",
    formatTags: ["Portfolio", "Pre-Submission", "Onsite Challenge"],
    description:
      "Apply structural engineering principles to design and build a structure that meets the annual challenge. Semifinalists and finalists are determined by documentation and destructive load testing.",
    skills: ["Structural design principles", "Technical drawing", "Load & materials testing"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "system-control-technology",
    name: "System Control Technology",
    category: "Engineering & Design",
    participation: "Team",
    teamSize: "Team of 3 per state",
    formatTags: ["Onsite Challenge"],
    description:
      "Analyze an industrial-style automation problem presented on site, then build and program a computer-controlled model to solve it and explain the solution to evaluators.",
    skills: ["Programming/automation logic", "Mechanical building", "Systems thinking"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "tech-bowl",
    name: "Tech Bowl",
    category: "Technology & Computer Science",
    participation: "Team",
    teamSize: "Team of 3 per chapter",
    formatTags: ["Written Test", "Onsite Challenge"],
    description:
      "Demonstrate knowledge of TSA and technology content standards through an objective test. Semifinalists compete head-to-head in team match play.",
    skills: ["TSA/technology knowledge", "Quick recall", "Teamwork"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "technical-design",
    name: "Technical Design",
    category: "Engineering & Design",
    participation: "Team",
    teamSize: "Team of 2 per chapter",
    formatTags: ["Onsite Challenge", "Portfolio"],
    description:
      "Use the technical design process to solve an engineering problem given on site, documenting at least three viable solutions with technical drawings in a portfolio.",
    skills: ["Technical drawing", "Engineering design process", "Documentation"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "video-game-design",
    name: "Video Game Design",
    category: "Technology & Computer Science",
    participation: "Team",
    teamSize: "Team of 2–6 per chapter",
    formatTags: ["Portfolio", "Pre-Submission", "Presentation", "Interview"],
    description:
      "Design, build, document, and launch an original E-rated video game. Semifinalists present and are interviewed to demonstrate the knowledge gained during development.",
    skills: ["Game design", "Programming", "Storytelling"],
    resources: [TSA_LINK, TSA_HOME],
  },
  {
    slug: "website-design",
    name: "Website Design",
    category: "Technology & Computer Science",
    participation: "Team",
    teamSize: "Team of 3–6 per chapter",
    formatTags: ["Portfolio", "Pre-Submission", "Presentation", "Interview"],
    description:
      "Design, build, document, and launch a website that demonstrates strong design, layout, and coding practices addressing the annual challenge. Semifinalists present and are interviewed.",
    skills: ["Web design", "HTML/CSS basics", "UX/layout"],
    resources: [TSA_LINK, TSA_HOME],
  },
];

export const CATEGORIES: EventCategory[] = [
  "Technology & Computer Science",
  "Engineering & Design",
  "Transportation & Robotics",
  "Science & Medical",
  "Leadership & Communication",
];

export const PARTICIPATION_TYPES: Participation[] = ["Individual", "Team", "Individual or Team"];

export const FORMAT_TAGS: FormatTag[] = [
  "Onsite Challenge",
  "Interview",
  "Presentation",
  "Written Test",
  "Portfolio",
  "Pre-Submission",
];
