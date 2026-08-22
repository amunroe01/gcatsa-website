export interface UpcomingEvent {
  title: string;
  dateLabel: string;
  location: string;
  category: "Leadership" | "Regional" | "Virtual" | "State";
}

// Add new events here as they're announced — the carousel picks them up automatically.
export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    title: "Leadership Training Conference",
    dateLabel: "October 28–31, 2026",
    location: "Altamonte Springs, Orlando, FL",
    category: "Leadership",
  },
  {
    title: "Manatee West Coast Regional Conference",
    dateLabel: "December 5, 2026",
    location: "Braden River HS, Bradenton, FL",
    category: "Regional",
  },
  {
    title: "Gulf Coast Virtual Conference",
    dateLabel: "January 23, 2027",
    location: "Wellen Park HS, North Port, FL",
    category: "Virtual",
  },
  {
    title: "Florida TSA State Conference & Competition",
    dateLabel: "March 3–6, 2027",
    location: "DoubleTree Hilton at Universal, Orlando, FL",
    category: "State",
  },
];
