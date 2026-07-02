/* ============================================================
   Kentlands Psychotherapy — Journey Blueprint data
   ------------------------------------------------------------
   The "service blueprint" view: the happy-path stages left→right,
   with what the CLIENT does & feels (frontstage) and what the
   SYSTEM does (backstage). Edit this file to change the map;
   blueprint.html redraws itself (both the walkthrough & the grid).

   Each stage:
     { id, name, icon,
       emoji:    "😟",            // the feeling, as one emoji
       emotion:  0-100,            // height of the emotion curve
       feel:     "one-line mood",
       story:    "first-person narration for the walkthrough",
       client:   ["what the person does"],
       touch:    ["channels/tools they touch"],
       backstage:["what GHL / staff do, unseen"],
       tool:     "which KP tool is active" }     // "" = none
   ============================================================ */
window.BLUEPRINT = [
  {
    id: "discovery", name: "Discovery", icon: "🔍", emoji: "😟",
    emotion: 45, feel: "Overwhelmed — where do I even start?",
    story: "I'm not sure where to begin. I just know I need help, and I'm scanning for someone who feels right.",
    client: ["Searches for a therapist", "Gets a referral", "Sees an ad or social post"],
    touch:  ["Google", "Referral", "Website", "Social"],
    backstage: ["Not in the CRM yet", "SEO, ads & referral relationships do the work"],
    tool: ""
  },
  {
    id: "first-contact", name: "First Contact", icon: "📞", emoji: "😰",
    emotion: 38, feel: "Anxious — reaching out takes courage",
    story: "Okay — I'm reaching out. It's a little scary to make the call, but here goes.",
    client: ["Calls, texts, emails, or submits a form", "Walks the phone menu"],
    touch:  ["Phone tree", "Web forms", "SMS / email", "Live chat"],
    backstage: ["Every channel creates an Opportunity in All Inquiries", "Team notified instantly", "Tagged by source & call type"],
    tool: "Matching Tool (public search)"
  },
  {
    id: "response", name: "Response & Follow-up", icon: "⚡", emoji: "🙂",
    emotion: 55, feel: "Reassured — a real person responded",
    story: "Someone actually got back to me. I feel heard — we're talking through what I need.",
    client: ["Waits for a reply", "Answers questions about needs & insurance"],
    touch:  ["Call back", "Text", "Email"],
    backstage: ["Escalation timers 9h / 16h / 32h → URGENT", "RESPONDED automations reset on reply", "No inquiry goes stale"],
    tool: "CCC Console (coordinator co-pilot)"
  },
  {
    id: "matching", name: "Clinician Matching", icon: "🤝", emoji: "🌱",
    emotion: 66, feel: "Hopeful — this might actually work",
    story: "They're helping me find a therapist who actually fits me. This feels promising.",
    client: ["Shares preferences & concerns", "Gets matched to a good-fit clinician"],
    touch:  ["Matching form", "Coordinator call"],
    backstage: ["Matching form → opportunity", "Syncing Clinician Data keeps availability live", "Approved clinician–client match"],
    tool: "Matching Tool + CCC Console"
  },
  {
    id: "scheduling", name: "Scheduling", icon: "📅", emoji: "😅",
    emotion: 60, feel: "Relieved, a little nervous",
    story: "My first appointment is on the calendar. Relieved it's happening — and a little nervous.",
    client: ["Books the consult / first appointment"],
    touch:  ["Consult calendar", "Reminders"],
    backstage: ["Consult confirmation & reminder", "Consult event → pipeline stage", "Waitlist 7-day reminder"],
    tool: "GHL calendar + CCC Console"
  },
  {
    id: "paperwork", name: "Paperwork", icon: "📝", emoji: "😮‍💨",
    emotion: 40, feel: "Tedious — momentum dips here",
    story: "So many forms before I can start… I just want to get to the actual help.",
    client: ["Completes intake forms", "Puts a card on file"],
    touch:  ["Patient portal (SimplePractice)", "Intake forms"],
    backstage: ["PWK Pending stage", "Incomplete after 48h → URGENT", "Nudges keep it moving"],
    tool: "SimplePractice + GHL"
  },
  {
    id: "client", name: "Officially a Client", icon: "✅", emoji: "😊",
    emotion: 80, feel: "Relief — finally getting help",
    story: "I'm in my first session. Finally getting the support I came for.",
    client: ["Attends the first session"],
    touch:  ["First appointment"],
    backstage: ["Won Inquiry automation", "Moved to Completed — Current Clients", "Enters NEW CLIENTS pipeline"],
    tool: "GHL"
  },
  {
    id: "ongoing", name: "Ongoing Care", icon: "🔄", emoji: "🤗",
    emotion: 86, feel: "Cared for & supported",
    story: "I'm settled in now — regular sessions, and they check in on me. I feel cared for.",
    client: ["Attends sessions", "Gives feedback", "Re-engages if lapsed"],
    touch:  ["Sessions", "Surveys", "Review request"],
    backstage: ["Active Care Gaps tracks days since last appt", "Satisfaction survey → Google review", "Med-management requests"],
    tool: "Clinician Console + GHL"
  }
];
