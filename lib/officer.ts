export interface Officer {
  position: string;
  name: string;
  duties: string[];
}

// 2026-2027 Chapter Team
// Duties adapted from TSA's official "Suggested Chapter Officer Responsibilities."
// Note: that document has Sergeant-at-Arms also serve as parliamentarian, and
// Reporter also serve as historian — since our chapter elects those as separate
// positions, the relevant duties are split out to Parliamentarian and Historian below.
export const OFFICERS: Officer[] = [
  {
    position: "President",
    name: "Samantha Velazquez",
    duties: [
      "Preside at and conduct meetings according to parliamentary procedure.",
      "Appoint committees and serve as an ex-officio member of committees.",
      "Keep meetings moving at an interesting pace.",
      "Call on other officers to take the chair when necessary or desirable.",
      "Keep chapter activities progressing in a satisfactory manner.",
      "Represent the chapter in outside activities.",
    ],
  },
  {
    position: "Vice President",
    name: "Lilyonna Sterrett",
    duties: [
      "Assist the president.",
      "Serve as president in the absence of the president.",
      "Succeed the president in case of vacancy.",
      "Serve as chairperson of the membership and program committee.",
      "Meet with and be responsible for all committees.",
    ],
  },
  {
    position: "Secretary",
    name: "Ta'nyia Battles",
    duties: [
      "Prepare and read the minutes of each meeting.",
      "Count and record member votes.",
      "Read correspondence and communications at meetings.",
      "Keep the chapter's permanent records.",
      "Post notices to members and send invitations to guests.",
      "Be responsible for chapter correspondence.",
      "Call meetings to order in the absence of a presiding officer.",
    ],
  },
  {
    position: "Treasurer",
    name: "John Shurley",
    duties: [
      "Report all financial standings at each meeting.",
      "Keep an accurate record of receipts and payments.",
      "Obtain and present ideas for increasing the treasury and financing activities.",
    ],
  },
  {
    position: "Reporter",
    name: "Jesly Ayala Garcia",
    duties: [
      "Prepare articles for publication.",
      "Contact members to gather news about the chapter.",
      "Coordinate with other publications' staff to meet their requests.",
      "Act as editor of chapter publications.",
    ],
  },
  {
    position: "Sergeant-at-Arms",
    name: "Dimas San Jose Companioni",
    duties: [
      "Arrange meeting rooms and care for chapter paraphernalia.",
      "Be responsible for the comfort of everyone present at meetings.",
      "Assist officer candidates before and during elections.",
      "Arrange entertainment, refreshments, and other meeting details.",
    ],
  },
  {
    position: "Parliamentarian",
    name: "John Smith",
    duties: [
      "Advise the chapter on parliamentary procedure.",
      "Keep a current copy of Robert's Rules of Order on hand.",
      "Help the president and officers run meetings by the rules.",
    ],
  },
  {
    position: "Historian",
    name: "Charlotte Sarason",
    duties: [
      "Keep an archive of chapter publications and records.",
      "Assist with planning and arranging chapter exhibits.",
      "Preserve photos and memorabilia from chapter events.",
    ],
  },
];
