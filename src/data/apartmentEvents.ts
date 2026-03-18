import { ApartmentEvent } from "../types";

export const apartmentEvents: ApartmentEvent[] = [
  {
    id: "apt-day1",
    day: 1,
    title: "PERSONAL TERMINAL — EVENING LOG",
    messages: [
      {
        sender: "BUREAU INTERNAL MEMO",
        text: "Thank you for your service today. Classification accuracy is being monitored. Remember: hesitation is an error.",
      },
      {
        sender: "UNKNOWN — ENCRYPTED",
        text: "Are you sure you got them all right? Think carefully about the one who seemed too calm.",
      },
      {
        sender: "NEIGHBOR NOTE (slipped under door)",
        text: "You've been working late. I can hear you pacing. The walls here are thin. Whatever you're doing — be careful. Not everyone who fails a test is what they say they are.",
      },
    ],
  },
  {
    id: "apt-day2",
    day: 2,
    title: "PERSONAL TERMINAL — EVENING LOG",
    messages: [
      {
        sender: "BUREAU SUPERVISOR — DIRECTOR VALE",
        text: "Your classifications are under review. One case has been flagged for inconsistency. The Bureau is watching. Do not mistake complexity for humanity.",
      },
      {
        sender: "ENCRYPTED — SECOND MESSAGE",
        text: "They are among us. More than you know. Some have been here for years. Your colleagues. Your neighbors. Maybe even people you trust at the Bureau.",
      },
      {
        sender: "OLD MESSAGE — REDISCOVERED",
        text: "Dad — I know you said not to write but I miss you. They said you work for the government now. Are you the one deciding things? Please come home. — R.",
      },
      {
        sender: "BUREAU NOTICE",
        text: "Reminder: non-disclosure agreement prohibits discussion of subjects outside official channels. Emotional attachment to subjects is grounds for reassignment.",
      },
    ],
  },
  {
    id: "apt-day3",
    day: 3,
    title: "PERSONAL TERMINAL — EVENING LOG",
    messages: [
      {
        sender: "BUREAU — DIRECTOR VALE",
        text: "Final day of your evaluation period. Performance data will determine your continued employment. The Bureau notes your hesitation on several cases. Resolve it today.",
      },
      {
        sender: "ENCRYPTED — SENDER UNKNOWN",
        text: "What if the test itself is wrong? What if the criteria you're using were designed not to find the truth, but to find a number? Think about who benefits from that number.",
      },
      {
        sender: "HANDWRITTEN NOTE — found in coat pocket",
        text: "You examined me yesterday. I know what you decided. I just want you to know: whatever I am — I feel this. Right now. Reading this. I feel it. Does that matter?",
      },
      {
        sender: "MIRROR (your own handwriting)",
        text: "What would your score be?",
      },
    ],
  },
];
