/* ============================================================
   Kentlands Psychotherapy — Journey Blueprint data
   ------------------------------------------------------------
   The "service blueprint" view: the happy-path stages left→right,
   with what the CLIENT does & feels (frontstage) and what the
   SYSTEM does (backstage). Edit this file to change the map;
   blueprint.html redraws itself.

   Each stage:
     { id, name, icon,
       client:   ["what the person does"],
       touch:    ["channels/tools they touch"],
       emotion:  0-100,            // height of the emotion curve
       feel:     "one-line mood",
       backstage:["what GHL / staff do, unseen"],
       tool:     "which KP tool is active" }     // "" = none
   ============================================================ */
window.BLUEPRINT = [
  {
    id: "discovery", name: "Discovery", icon: "🔍",
    client: ["Searches for a therapist", "Gets a referral", "Sees an ad or social post"],
    touch:  ["Google", "Referral", "Website", "Social"],
    emotion: 45, feel: "Overwhelmed — where do I even start?",
    backstage: ["Not in the CRM yet", "SEO / ads / referral relationships do the work"],
    tool: ""
  },
  {
    id: "first-contact", name: "First Contact", icon: "📞",
    client: ["Calls, texts, emails, or submits a form", "Walks the phone menu"],
    touch:  ["Phone tree", "Web forms", "SMS / email", "Live chat"],
    emotion: 38, feel: "Anxious — reaching out takes courage",
    backstage: ["Every channel creates an Opportunity in All Inquiries", "Team notified instantly", "Tagged by source & call type"],
    tool: "Matching Tool (public search)"
  },
  {
    id: "response", name: "Response & Follow-up", icon: "⚡",
    client: ["Waits for a reply", "Answers questions about needs & insurance"],
    touch:  ["Call back", "Text", "Email"],
    emotion: 55, feel: "Reassured — a real person responded",
    backstage: ["Escalation timers 9h / 16h / 32h → URGENT", "RESPONDED automations reset on reply", "No inquiry goes stale"],
    tool: "CCC Console (coordinator co-pilot)"
  },
  {
    id: "matching", name: "Clinician Matching", icon: "🤝",
    client: ["Shares preferences & concerns", "Gets matched to a good-fit clinician"],
    touch:  ["Matching form", "Coordinator call"],
    emotion: 66, feel: "Hopeful — this might actually work",
    backstage: ["Matching form → opportunity", "Syncing Clinician Data keeps availability live", "Approved clinician–client match"],
    tool: "Matching Tool + CCC Console"
  },
  {
    id: "scheduling", name: "Scheduling", icon: "📅",
    client: ["Books the consult / first appointment"],
    touch:  ["Consult calendar", "Reminders"],
    emotion: 60, feel: "Relieved, a little nervous",
    backstage: ["Consult confirmation & reminder", "Consult event → pipeline stage", "Waitlist 7-day reminder"],
    tool: "GHL calendar + CCC Console"
  },
  {
    id: "paperwork", name: "Paperwork", icon: "📝",
    client: ["Completes intake forms", "Puts a card on file"],
    touch:  ["Patient portal (SimplePractice)", "Intake forms"],
    emotion: 40, feel: "Tedious — momentum dips here",
    backstage: ["PWK Pending stage", "Incomplete after 48h → URGENT", "Nudges keep it moving"],
    tool: "SimplePractice + GHL"
  },
  {
    id: "client", name: "Officially a Client", icon: "✅",
    client: ["Attends the first session"],
    touch:  ["First appointment"],
    emotion: 80, feel: "Relief — finally getting help",
    backstage: ["Won Inquiry automation", "Moved to Completed — Current Clients", "Enters NEW CLIENTS pipeline"],
    tool: "GHL"
  },
  {
    id: "ongoing", name: "Ongoing Care", icon: "🔄",
    client: ["Attends sessions", "Gives feedback", "Re-engages if lapsed"],
    touch:  ["Sessions", "Surveys", "Review request"],
    emotion: 86, feel: "Cared for & supported",
    backstage: ["Active Care Gaps tracks days since last appt", "Satisfaction survey → Google review", "Med-management requests"],
    tool: "Clinician Console + GHL"
  }
];
