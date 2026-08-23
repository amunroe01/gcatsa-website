export type CalendarColorGroup = "tsa" | "service" | "deadline";

export type CalendarEventType =
  | "TSA Competition"
  | "Regional Conference"
  | "State Conference"
  | "National Conference"
  | "Leadership Conference"
  | "Fundraiser"
  | "Community Service"
  | "Early Submission Deadline";

const TYPE_TO_COLOR_GROUP: Record<CalendarEventType, CalendarColorGroup> = {
  "TSA Competition": "tsa",
  "Regional Conference": "tsa",
  "State Conference": "tsa",
  "National Conference": "tsa",
  "Leadership Conference": "tsa",
  Fundraiser: "service",
  "Community Service": "service",
  "Early Submission Deadline": "deadline",
};

export interface CalendarEvent {
  slug: string;
  title: string;
  type: CalendarEventType;
  /** ISO date string, e.g. "2026-10-28" */
  dateStart: string;
  /** ISO date string — omit for single-day events */
  dateEnd?: string;
  /** Optional time range, e.g. "7:00 AM – 2:00 PM" */
  timeLabel?: string;
  location: string;
  colorGroup: CalendarColorGroup;
}

function makeEvent(e: Omit<CalendarEvent, "colorGroup">): CalendarEvent {
  return { ...e, colorGroup: TYPE_TO_COLOR_GROUP[e.type] };
}

export const WEEKLY_MEETING = {
  day: "Wednesday",
  time: "2:15 PM – 4:00 PM",
  location: "GCA @ Brookside, Room 7-102",
};

// Add new dates here — both the Calendar page and the Home page carousel
// pull from this one list automatically.
export const CALENDAR_EVENTS: CalendarEvent[] = [
  makeEvent({
    slug: "leadership-training-conference-2026",
    title: "Leadership Training Conference",
    type: "Leadership Conference",
    dateStart: "2026-10-28",
    dateEnd: "2026-10-31",
    location: "Altamonte Springs, Orlando, FL",
  }),
  makeEvent({
    slug: "manatee-west-coast-regional-2026",
    title: "Manatee West Coast Regional Conference",
    type: "Regional Conference",
    dateStart: "2026-12-05",
    location: "Braden River HS, Bradenton, FL",
  }),
  makeEvent({
    slug: "gulf-coast-virtual-conference-2027",
    title: "Gulf Coast Virtual Conference",
    type: "TSA Competition",
    dateStart: "2027-01-23",
    location: "Wellen Park HS, North Port, FL",
  }),
  makeEvent({
    slug: "sarasota-county-ms-cte-skills-competition-2027",
    title: "Sarasota County Middle School CTE Skills Competition",
    type: "TSA Competition",
    dateStart: "2027-02-25",
    timeLabel: "7:00 AM – 2:00 PM",
    location: "Suncoast Technical College, North Port Branch",
  }),
  makeEvent({
    slug: "florida-state-conference-2027",
    title: "Florida TSA State Conference & Competition",
    type: "State Conference",
    dateStart: "2027-03-03",
    dateEnd: "2027-03-06",
    location: "DoubleTree Hilton at Universal, Orlando, FL",
  }),
  makeEvent({
    slug: "national-tsa-conference-2027",
    title: "2027 National TSA Conference",
    type: "National Conference",
    dateStart: "2027-06-23",
    dateEnd: "2027-06-27",
    location: "Rosen Resort, Orlando, FL",
  }),
];
