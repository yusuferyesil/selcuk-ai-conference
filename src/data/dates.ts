export interface ImportantDate {
  event: string;
  date: string;
  passed: boolean;
  note?: string;
}

export const importantDates: ImportantDate[] = [
  { event: "Abstract Submission Deadline", date: "September 15, 2026", passed: false },
  { event: "Notification of Acceptance", date: "September 30, 2026", passed: false },
  { event: "Early Registration Deadline", date: "October 10, 2026", passed: false },
  { event: "Late Registration Deadline", date: "October 18, 2026", passed: false },
  { event: "Conference Dates", date: "October 23–25, 2026", passed: false },
  { event: "Full-Text Submission Deadline (Post-Conference Proceedings)", date: "November 30, 2026", passed: false },
];
